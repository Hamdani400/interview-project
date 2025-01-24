import axios from "axios";
import { useUserDataStore } from "~/store/userDataStore";

export default defineNuxtRouteMiddleware(async (to, from) => {
    const user_id = useCookie<string>('user_id');
    const user_data = useUserDataStore();
    const { setUserData, getUserData } = user_data;

    if (user_id.value && Object.keys(getUserData).length === 0) {
        const response = await axios.get<{ data: { id: number;[key: string]: any } }>(
            `http://localhost:3000/api/auth/${user_id.value}`
        );
        setUserData(response.data.data);
    }

    if (user_id.value && to.path === '/') {
        return navigateTo('/dashboard');
    }

    if (getUserData.id < 5 && to.path === '/dashboard/vip') {
        return navigateTo('/dashboard/not-vip');
    }
});
