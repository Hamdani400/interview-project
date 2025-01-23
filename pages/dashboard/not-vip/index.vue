<template>
  <div class="flex flex-col justify-center items-center mt-[30vh] min-w-screen">
    <div
      class="w-10 h-10 bg-rose-500"
      :style="{
        clipPath:
          'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
      }"
    />
    <h1 class="text-5xl text-red-500 font-bold">FORBIDDEN YOU ARE NOT VIP!</h1>
    <h1 class="text-4xl text-red-500 font-bold">
      ONLY USERS WITH ID NUMBER 5 AND ABOVE CAN ENTER!
    </h1>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "dashboard-skeleton",
});
</script>