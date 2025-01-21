import { defineStore } from 'pinia';

export const useUserDataStore = defineStore('user_data', {
    state: () => ({
        user_data: {}
    }),
    getters: {
        getUserData: (state) => state.user_data
    },
    actions: {
        setUserData(value: Object) {
            console.log(value)
            this.user_data = value;
        }
    }
})