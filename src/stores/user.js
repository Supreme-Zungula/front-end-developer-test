import { useLocalStorage } from "@vueuse/core";
import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useUserStore = defineStore("user", () => {
  const user = ref(
    useLocalStorage("userDetails", {
      id: null,
      username: null,
      email: null,
      password: null,
      loggedIn: false,
    })
  );

  const login = (userDetails) => {
    user.value.id = userDetails.id;
    user.value.username = userDetails.username;
    user.value.email = userDetails.email;
    user.value.password = userDetails.password;
    user.value.loggedIn = userDetails.isLoggedIn;
  };
  const update = (userDetails) => {
    user.value.username = userDetails.username;
    user.value.email = userDetails.email;
    user.value.password = userDetails.password;
  };

  const logout = () => {
    user.value.id = null;
    user.value.username = null;
    user.value.email = null;
    user.value.password = null;
    user.value.loggedIn = false;
  };

  const isLoggedIn = computed(() => {
    return user.value.loggedIn;
  });

  return { user, login, update, logout, isLoggedIn };
});
