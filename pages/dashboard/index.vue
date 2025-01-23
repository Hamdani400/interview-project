<template>
    <div class="w-screen h-[93vh] align-middle justify-center flex bg-[#e2e8f0]">
      <div class="w-1/2 mt-[10vh] mb-auto h-fit px-3 bg-white overflow-hidden">
        <recursive-row :level="0" :data="getUserData"/>
      </div>
    </div>
  </template>
  
  <script setup>
  import RecursiveRow from "~/components/RecursiveRow.vue";

  definePageMeta({
  layout: 'dashboard-skeleton',
});
  import { useUserDataStore } from "~/store/userDataStore";

 const user_data = useUserDataStore()
 const { getUserData } = user_data
  </script>