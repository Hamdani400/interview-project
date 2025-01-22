import axios from "axios";
import { getCookie } from 'h3'
import { sendRedirect } from 'h3'

export default defineEventHandler(async (event) => {
    try {
        const user_id = getCookie(event, 'user_id')
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${user_id}`);
        const isAuthenticated = !!response.data.id
        console.log(isAuthenticated)
    } catch (error) {
        const currentPath = event.req.url || ''
        if (['/dashboard', '/dashboard/vip', '/dashboard/not-vip'].includes(currentPath)) {
            return sendRedirect(event, '/')
        }
    }
})