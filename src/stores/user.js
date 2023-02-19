import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore("user", {
  state: () => {
    return {
      username: ref(null),
      email: ref(null),
      password: ref(null),
      isLoggedIn: ref(false),
    };
  },
  actions: {
    login(user) {
      this.username.value = user.username;
      this.email.value = user.username;
      this.password.value = user.password;
      this.isLoggedIn.value = true;
    },

    logout() {
      this.username.value = null;
      this.email.value = null;
      this.password.value = null;
      this.isLoggedIn.value = false;
    },
  },
});
