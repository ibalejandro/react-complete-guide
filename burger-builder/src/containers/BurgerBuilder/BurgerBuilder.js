import React, {useState, useEffect } from "react";
import Burger from '../../components/Burger/Burger';
import BuildControls from "../../components/BuildControls/BuildControls";
import Modal from "../../components/Modal/Modal";
import OrderSummary from "../../components/OrderSummary/OrderSummary";
import OrdersApi from "../../services/OrdersAPI";
import Spinner from "../../components/Spinner/Spinner";

const INGREDIENT_PRICES = {
    salad: 0.5,
    bacon: 0.7,
    cheese: 0.4,
    meat: 1.3
};

const BurgerBuilder = (props) => {
    const [ingredientsState, setIngredientsState] = useState({
        ingredients: null
    });

    const [totalPriceState, setTotalPriceState] = useState({
        totalPrice: 4
    });

    const [purchaseable, setPurchaseableState] = useState(false);

    const [purchasing, setPurchasingState] = useState(false);

    const [loading, setLoadingState] = useState(false);

    const [postOrderError, setPostOrderError] = useState(null);

    useEffect(() => {
        const loadIngredients = async () => {
            const response = await OrdersApi.getIngredients();
            setIngredientsState({
                ingredients: response
            });
        };
        loadIngredients();
    }, []);

    const addIngredientHandler = (type) => {
        let ingredients = {...ingredientsState.ingredients};
        let totalPrice = totalPriceState.totalPrice;
        const priceAddition = INGREDIENT_PRICES[type];
        ingredients[type] += 1;
        totalPrice += priceAddition;
        setIngredientsState({
            ingredients: ingredients
        });
        setTotalPriceState({
            totalPrice: totalPrice
        });
        updatePurchaseState(ingredients);
    };

    const removeIngredientHandler = (type) => {
        let ingredients = {...ingredientsState.ingredients};
        let totalPrice = totalPriceState.totalPrice;
        const priceDeduction = INGREDIENT_PRICES[type];
        ingredients[type] = Math.max(ingredients[type] - 1, 0);
        totalPrice = Math.max(totalPrice - priceDeduction, 4);
        setIngredientsState({
            ingredients: ingredients
        });
        setTotalPriceState({
            totalPrice: totalPrice
        });
        updatePurchaseState(ingredients);
    };

    const updatePurchaseState = (newIngredients) => {
        const ingredientsSum = Object.values(newIngredients).reduce((a, b) => a + b, 0);
        const newPurchaseable = ingredientsSum > 0;
        setPurchaseableState(newPurchaseable);
    };

    const purchaseHandler = () => {
        setPurchasingState(true);
        setPostOrderError(null);
    };

    const purchaseCancelHandler = () => {
        setPurchasingState(false);
    };

    const purchaseContinueHandler = async () => {
        // alert("You continue!")
        setLoadingState(true);
        const order = {
            ingredients: ingredientsState.ingredients,
            price: totalPriceState.totalPrice,
            customer: {
                "name": "Alejandro Sánchez",
                "address": {
                    "street": "Teststreet 1",
                    "zipCode": "41351",
                    "country": "Colombia"
                },
                "email": "test@test.com"
            },
            "deliveryMethod": "fastest"
        };
        const response = await OrdersApi.postOrder(order);
        console.log(response);
        if ("errorMessage" in response) {
            setPostOrderError(response["errorMessage"]);
        } else {
            setPostOrderError(null);
            setPurchasingState(false);
        }
        setLoadingState(false);
    };

    const disabledInfo = {...ingredientsState.ingredients};
    for (let key in disabledInfo) {
        disabledInfo[key] = disabledInfo[key] === 0;
    }

    let burger = <Spinner />;
    let orderSummary = null;

    if (ingredientsState.ingredients !== null) {
        burger = (
            <div>
                <Burger ingredients={ingredientsState.ingredients}/>
                <BuildControls
                    ingredientAdded={addIngredientHandler}
                    ingredientRemoved={removeIngredientHandler}
                    disabledInfo={disabledInfo}
                    totalPrice={totalPriceState.totalPrice.toFixed(2)}
                    purchaseable={purchaseable}
                    purchaseHandler={purchaseHandler}/>
            </div>
        );
        orderSummary = <OrderSummary ingredients={ingredientsState.ingredients}
            price={totalPriceState.totalPrice}
            purchaseCanceled={purchaseCancelHandler}
            purchaseContinue={purchaseContinueHandler}/>;
    }

    if (loading) {
        orderSummary = <Spinner />;
    }

    if (postOrderError !== null) {
        orderSummary = postOrderError;
    }

    return (
        <div>
            <Modal show={purchasing} modalClosed={purchaseCancelHandler}>
                {orderSummary}
            </Modal>
            {burger}
        </div>
    );
}

export default BurgerBuilder;