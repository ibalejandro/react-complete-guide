import React, { useEffect } from "react";
import Button from "../Button/Button"

const OrderSummary = (props) => {

    useEffect(() => {
        console.log("[OrderSummary] WillUpdate!")
    });

    const ingredientSummary = Object.keys(props.ingredients)
        .map((ingredientKey, index) => {
           return (
             <li key={index}>
                 <span style={{textTransform: "capitalize"}}>{ingredientKey}:</span> {props.ingredients[ingredientKey]}
             </li>
           );
        });
    return (
        <div>
            <h3>Your order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <Button btnType="Danger" clicked={props.purchaseCanceled}>CANCEL</Button>
            <Button btnType="Success" clicked={props.purchaseContinue}>CONTINUE</Button>
        </div>
    );
};

export default OrderSummary;