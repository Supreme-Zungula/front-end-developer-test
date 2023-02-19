import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => {
    return {
      username: null,
      email: null,
      password: null,
      loggedIn: false,
    };
  },
  actions: {
    login(user) {
      this.username = user.username;
      this.email = user.email;
      this.password = user.password;
      this.loggedIn = true;
    },

    logout() {
      this.username = null;
      this.email = null;
      this.password = null;
      this.loggedIn = false;
    },
  },

  getters: {
    isLoggedIn() {
      return this.loggedIn;
    },
  },
});
