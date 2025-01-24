<template>
  <div>
    <header class="bg-[#3b82f6] px-4 py-5 flex justify-between">
      <h1 @click="navigateTo('/dashboard')" class="text-white font-bold text-xl">FrontEnd Test</h1>
      <nav>
        <ul class="text-white flex">
          <li @click="navigateTo('/dashboard/vip')" class="px-4 hover:bg-[#60a5fa] cursor-pointer py-1 mx-3">
            Open VIP
          </li>
          <li @click="handleLogout" class="px-4 hover:bg-[#60a5fa] cursor-pointer py-1 mx-3">
            Logout
          </li>
        </ul>
      </nav>
    </header>
    <slot />
  </div>
</template>

<script setup lang="ts">
const user_id = useCookie('user_id') as Ref<string | null | undefined>

const handleLogout = () => {
    user_id.value = null;
    window.location.reload();
};
</script>
