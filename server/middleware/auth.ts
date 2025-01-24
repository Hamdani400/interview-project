import axios from "axios";

export default defineEventHandler(async (event: H3Event) => {
    try {
        const user_id = getCookie(event, 'user_id');
        if (user_id) {
            await axios.get(`https://jsonplaceholder.typicode.com/users/${user_id}`);
        } else {
            throw new Error('User ID not found');
        }
    } catch (error) {
        const currentPath = event.req.url || '';
        if (['/dashboard', '/dashboard/vip', '/dashboard/not-vip'].includes(currentPath)) {
            return sendRedirect(event, '/');
        }
    }
});