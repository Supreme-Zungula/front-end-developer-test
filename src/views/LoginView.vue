<template>
  <div class="container text-white bg-gray-900 p-10 rounded-lg w-full">
    <h1 class="text-2xl mb-5 font-bold">Login</h1>
    <form class="login-form grid grid-rows-2">
      <div class="mb-6">
        <label class="block mb-2 text-md dark:text-white font-bold">
          Username
        </label>
        <input
          type="text"
          name="username"
          class="border border-gray-400 text-sm rounded-lg block w-full p-2.5 focus:border-cyan-400 dark:bg-gray-900"
          v-model="username"
          @change="watchInput"
        />
      </div>
      <div class="mb-6">
        <label class="block mb-2 text-md dark:text-white font-bold">
          Password
        </label>
        <input
          type="password"
          name="password"
          class="border border-gray-400 text-sm rounded-lg block w-full p-2.5 focus:border-cyan-400 dark:bg-gray-900"
          v-model="password"
          @change="watchInput"
        />
      </div>
    </form>
    <div class="py-5 px-5 mx-0 min-w-full flex flex-col items-center">
      <button
        @click="handleLogin"
        :disabled="!isFilledIn.details"
        class="bg-emerald-400 p-2 rounded-md w-[45%] text-lg"
      >
        Login
      </button>
    </div>
    <div class="py-5 px-5 mx-0 min-w-full flex flex-col items-center">
      <RouterLink to="/register">More options...</RouterLink>
    </div>
  </div>
</template>

<script>
import { useUserStore } from "@/stores/user";

export default {
  name: "LoginView",
  data() {
    return {
      userStore: useUserStore(),
      username: "",
      password: "",
      isFilledIn: {
        username: false,
        password: false,
        details: false,
      },
    };
  },
  methods: {
    async handleLogin() {
      if (localStorage.getItem(this.username)) {
        let storedData = localStorage.getItem(this.username);
        const userData = await JSON.parse(storedData);

        if (this.password === userData.password) {
          this.userStore.login(userData);
          console.log(this.userStore);
          this.$router.push({ name: "TodoList" });
        }
        console.log(userData);
      } else {
        alert("Incorrect details, try again or click More options.");
      }
    },
    watchInput(event) {
      if (event.target.name === "username") {
        this.isFilledIn.username = true;
      }
      if (event.target.name === "password") {
        this.isFilledIn.password = true;
      }

      if (this.isFilledIn.username && this.isFilledIn.password) {
        this.isFilledIn.details = true;
      }
    },
  },
};
</script>
<style scoped></style>
