import axios from "axios";

const ORDERS_API_URL = "https://react-my-burger-c353e-default-rtdb.firebaseio.com/";

class OrdersApi {
    static async postOrder(order) {
        try {
            const response = await axios.post(ORDERS_API_URL + "/orders.json", order);
            return response.data;
        } catch (error) {
            console.error(error);
            return {"errorMessage": error.message};
        }
    }

    static async getIngredients() {
        try {
            const response = await axios.get(ORDERS_API_URL + "/ingredients.json");
            return response.data;
        } catch (error) {
            console.error(error);
            return {"errorMessage": error.message};
        }
    }
}

export default OrdersApi;