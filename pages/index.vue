<template>
    <div class="w-screen h-screen flex items-center justify-center">
        <div class="m-auto w-1/5">
            <div>The User Id: {{ user_id }}</div>
            <u-input v-model="user_id" type="text" placeholder="UserID" />
        </div>
    </div>
</template>

<script setup lang="ts">
import UInput from "~/components/UInput.vue";
import { ref } from "vue";

const user_id = ref<string | null>(null);
</script>

<style scoped>
h1 {
    color: #3498db;
}
</style>