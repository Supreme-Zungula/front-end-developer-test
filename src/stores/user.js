import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => {
    return {
      username: null,
      email: null,
      password: null,
      isLoggedIn: false,
    };
  },
  actions: {
    login(user) {
      this.username = user.username;
      this.email = user.email;
      this.password = user.password;
      this.isLoggedIn = true;
    },

    logout() {
      this.username = null;
      this.email = null;
      this.password = null;
      this.isLoggedIn = false;
    },
  },
});
