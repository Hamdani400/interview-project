import axios from 'axios'

export default defineEventHandler(async (event) => {
    try {
        const { user_id } = event.context.params as { user_id: string };
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${user_id}`);
        setCookie(event, 'user_id', response.data.id, {
            maxAge: 60 * 60 * 24,
            // httpOnly: true,
            // secure: true,
            // sameSite: 'strict',
            // path: '/',
        })
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