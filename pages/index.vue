<template>
  <div class="w-screen h-screen flex items-center justify-center">
    <div class="m-auto w-1/5">
      <div>The User Id: {{ user_id }}</div>
      <form @submit.prevent="handleLogin">
        <u-input
          ref="uinput"
          v-model="user_id"
          type="number"
          placeholder="UserID"
        />
        <button
          :disabled="!isEnabledBtn"
          type="submit"
          class="w-full mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 focus:ring focus:ring-blue-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          Login
        </button>
        <p class="text-red-500">{{ errorText }}</p>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import UInput from "~/components/UInput.vue";
import { ref, computed } from "vue";
import axios from "axios";
import { useUserDataStore } from "~/store/userDataStore";

const userDataStore = useUserDataStore()
const { setUserData } = userDataStore

const user_id = ref<string | null>(null);
const errorText = ref<string | null>(null);

const uinput = ref<{ errorMessage?: string } | null>(null);

const isEnabledBtn = computed(() => !uinput.value?.errorMessage);

const handleLogin = async () => {
  try {
    if (uinput.value?.errorMessage) return;
    if (!user_id.value) {
      errorText.value = "Input your user_id";
    } else {
      errorText.value = null;
    }
    const response = await axios.get(
      `http://localhost:3000/api/auth/${user_id.value}`
    );
    setUserData(response.data.data)
    navigateTo('/dashboard')
} catch (error: any) {
    if (error.status === 404) {
      errorText.value = "User not found";
    } else {
      errorText.value = error.message;
    }
  }
};
</script>

<style scoped>
h1 {
  color: #3498db;
}
</style>