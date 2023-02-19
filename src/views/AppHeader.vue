<template>
  <div class="grid gap-2 grid-rows-2">
    <h1 class="text-xl font-bold text-center">Welcome, {{ currentUser.username }}</h1>
    <div class="">
      <button @click="logout" class="col-span-1 bg-white text-red-400 rounded-md mx-[25%]">
        Logout
      </button>
      <button class="col-span-1 bg-white text-cyan-300 rounded-md m">
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
      const userStore = useUserStore();
      return userStore;
    },
  },
  methods: {
    logout() {
      this.currentUser.logout();
      this.$router.push({ name: "Login" });
    },
  },
};
</script>
<style></style>
