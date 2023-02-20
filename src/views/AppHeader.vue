<template>
  <div class="grid gap-2 grid-rows-2 my-4 p-4 bg-gray-900 text-white">
    <h1 class="text-xl font-bold text-center">
      Welcome, {{ currentUser.username }}
    </h1>
    <div class="grid grid-cols-2 gap-4">
      <button
        class="bg-white text-red-500 rounded-md p-1 w-[40%] justify-self-start"
        @click="logout"
      >
        Logout
      </button>
      <button
        class="bg-white text-cyan-500 rounded-md p-1 w-[40%] justify-self-end"
        @click="goToSettings"
      >
        Settings
      </button>
    </div>
  </div>
</template>
<script>
import { useUserStore } from "@/stores/user";

export default {
  name: "AppHeader",
  data() {
    return {};
  },
  computed: {
    currentUser() {
      // const userStore = useUserStore();
      return useUserStore();
    },
  },
  methods: {
    logout() {
      this.currentUser.logout();
      this.$router.push({ name: "Login" });
    },
    goToSettings() {
      console.log("Go to settings");
    },
  },
};
</script>
<style></style>
