import { uiActions } from "./ui";
import { cartActions } from  "./cart"

export const fetchCartData = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch("https://react-http-b6a78-default-rtdb.firebaseio.com/cart.json")

            if (!response.ok) {
                throw Error("Could not fetch cart data!");
            }

            const data = await response.json();

            return data;
        };

        try {
            const cartData = await fetchData();
            dispatch(cartActions.replaceCart(cartData));
        } catch (error) {
            dispatch(
                uiActions.showNotification({
                  status: "error",
                  title: "Error!",
                  message: "Fetching cart data failed!"
                })
            );
        }
    };
};

// Making this an Action Creator that can perform side-effects (supported pattern by Redux).
export const sendCartData = (cart) => {
    return async (dispatch) => {
        dispatch(
            uiActions.showNotification({
              status: "pending",
              title: "Sending...",
              message: "Sending cart data!"
            })
        );

        const sendRequest = async() => {
            const response = await fetch("https://react-http-b6a78-default-rtdb.firebaseio.com/cart.json",
            {
                method: "PUT",
                body: JSON.stringify({
                    items: cart.items,
                    totalQuantity: cart.totalQuantity
                })
            });

            if (!response.ok) {
                throw new Error("Sending cart data failed.");
            }
        };
        
        try {
            await sendRequest();
            dispatch(
                uiActions.showNotification({
                  status: "success",
                  title: "Success!",
                  message: "Sent cart data successfully!"
                })
            );
        } catch (error) {
            dispatch(
                uiActions.showNotification({
                  status: "error",
                  title: "Error!",
                  message: "Sending cart data failed!"
                })
            );
        }
    };
};