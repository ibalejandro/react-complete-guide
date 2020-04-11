import axios from 'axios';

class Api {
    static async getPosts() {
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
            return response.data;
        } catch (error) {
            console.error(error);
            return [];
        }
    }

    static async getSpecificPost(id) {
        if (id) {
            try {
                const response = await axios.get("https://jsonplaceholder.typicode.com/posts/" + id);
                return response.data;
            } catch (error) {
                console.error(error);
                return {};
            }
        } else {
            return null;
        }
    }

    static async postData(data) {
        try {
            const response = await axios.post("https://jsonplaceholder.typicode.com/posts", data);
            return response.data;
        } catch (error) {
            console.error(error);
            return {};
        }
    }

    static async deletePost(id) {
        try {
            const response = await axios.delete("https://jsonplaceholder.typicode.com/posts/" + id);
            return response;
        } catch (error) {
            console.error(error);
            return {};
        }
    }
}

export default Api;