import axios from 'axios'

export default defineEventHandler(async (event) => {
    try {
        const { user_id } = event.context.params as { user_id: string };
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${user_id}`);
        return {
            statusCode: 200,
            data: response.data
        };
    } catch (e: any) {
        throw {
            statusCode: e.response?.status || 500,
            message: e.message || 'Internal Server Error'
        };
    }
});