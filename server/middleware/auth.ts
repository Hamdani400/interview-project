import axios from "axios";
import { getCookie } from 'h3'
import { sendRedirect } from 'h3'

export default defineEventHandler(async (event) => {
    try {
        const user_id = getCookie(event, 'user_id')
        await axios.get(`https://jsonplaceholder.typicode.com/users/${user_id}`);
    } catch (error) {
        const currentPath = event.req.url || ''
        if (['/dashboard', '/dashboard/vip', '/dashboard/not-vip'].includes(currentPath)) {
            return sendRedirect(event, '/')
        }
    }
})