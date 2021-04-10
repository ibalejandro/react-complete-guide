import React, {useState} from "react";
import Burger from '../../components/Burger/Burger';
import BuildControls from "../../components/BuildControls/BuildControls";
import Modal from "../../components/Modal/Modal";
import OrderSummary from "../../components/OrderSummary/OrderSummary";

const INGREDIENT_PRICES = {
    salad: 0.5,
    bacon: 0.7,
    cheese: 0.4,
    meat: 1.3
};

const BurgerBuilder = (props) => {
    const [ingredientsState, setIngredientsState] = useState({
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        }
    });

    const [totalPriceState, setTotalPriceState] = useState({
        totalPrice: 4
    });

    const [purchaseable, setPurchaseableState] = useState(false);

    const [purchasing, setPurchasingState] = useState(false);

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
    };

    const purchaseCancelHandler = () => {
        setPurchasingState(false);
    };

    const purchaseContinueHandler = () => {
        alert("You continue!")
    };

    const disabledInfo = {...ingredientsState.ingredients};
    for (let key in disabledInfo) {
        disabledInfo[key] = disabledInfo[key] === 0;
    }

    return (
        <div>
            <Modal show={purchasing} modalClosed={purchaseCancelHandler}>
                <OrderSummary ingredients={ingredientsState.ingredients}
                              price={totalPriceState.totalPrice}
                              purchaseCanceled={purchaseCancelHandler}
                              purchaseContinue={purchaseContinueHandler}/>
            </Modal>
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
}

export default BurgerBuilder;