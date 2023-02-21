<script>
import { useUserStore } from "@/stores/user";
import { RouterView } from "vue-router";
import AppHeader from "./views/AppHeader.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    RouterView,
  },
  computed: {
    currentUser() {
      return useUserStore();
    },
  },
};
</script>

<template>
  <div>
    <h1 v-if="!currentUser.isLoggedIn" class="text-white text-3xl">
      Exigent Todo List
    </h1>
    <AppHeader v-if="currentUser.isLoggedIn" />
    <RouterView />
  </div>
</template>

<style></style>
