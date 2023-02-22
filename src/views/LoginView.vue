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
          v-model="userDetails.username"
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
          v-model="userDetails.password"
          @change="watchInput"
        />
      </div>
    </form>
    <div class="py-5 px-5 mx-0 min-w-full flex flex-col items-center">
      <button
        @click="fetchUsers"
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
import { getUserList } from "@/api/users";
import UserDetails from "@/classes/UserDetails";
import { useUserStore } from "@/stores/user";

export default {
  name: "LoginView",
  data() {
    return {
      userStore: useUserStore(),
      userDetails: new UserDetails(),
      isFilledIn: {
        username: false,
        password: false,
        details: false,
      },
    };
  },
  methods: {
    fetchUsers() {
      getUserList()
        .then((res) => {
          this.handleLogin(res);
        })
        .catch((err) => console.error(err));
    },
    handleLogin(res) {
      debugger;
      localStorage.clear();
      const user = res.data.users.find(
        (user) => user.username === this.userDetails.username
      );
      if (user) {
        this.userDetails = new UserDetails(user);
        this.userDetails.isLoggedIn = true;
        this.$router.push({ name: "TodoList" });
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
