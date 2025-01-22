<template>
    <div>
      <h1>Welcome to the dashboard Page</h1>
      <p>This is the main entry point of the application.</p>
      <p>{{ getUserData.name }}</p>
      <p>{{ user_id }}</p>
      <button @click="handleLogout">log out</button>
    </div>
  </template>
  
  <script setup>
  import { useUserDataStore } from "~/store/userDataStore";

 const user_data = useUserDataStore()
 const { getUserData } = user_data
 const user_id = useCookie('user_id')

 const handleLogout = () => {
  try {
    console.log('logout')
    user_id.value = null
    // window.location.reload()
  } catch (e) {
    console.log(e)
  }
 }
  </script>
  
  <style scoped>
  h1 {
    color: #3498db;
  }
  </style>