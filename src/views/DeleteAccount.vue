<template>
  <div
    class="grid grid-rows-2 content-center bg-white text-black backdrop-blur-sm p-4 w-full"
  >
    <div class="text-center p-4">
      <h1>YOU'R ABOUT TO DELETE YOUR ACCOUNT</h1>
      <p>This action cannot be undone</p>
    </div>
    <div class="grid gap-2 grid-cols-2 text-white m-4">
      <button class="bg-red-500 rounded-lg p-2">Delete</button>
      <button @click="handleCancel" class="bg-cyan-500 rounded-lg p-2">
        Cancel
      </button>
    </div>
  </div>
</template>
<script>
import { useUserStore } from "@/stores/user";

export default {
  name: "DeleteAccount",
  beforeCreate() {
    const userStore = useUserStore();
    if (!userStore.isLoggedIn) {
      this.$router.push({ name: "Login" });
    }
  },
  methods: {
    handleCancel() {
      this.$router.go(-1);
    },
  },
};
</script>
<style lang=""></style>
