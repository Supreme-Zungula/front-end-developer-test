import { createRouter, createWebHistory } from "vue-router";
// import { useUserStore } from "../stores/user";clear

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Login",
      component: () => import("@/views/LoginView.vue"),
    },
    {
      path: "/register",
      name: "Register",
      component: () => import("@/views/RegisterView.vue"),
    },
    {
      path: "/todos",
      name: "TodoList",
      component: () => import("@/views/TodoList.vue"),
    },
    {
      path: "/settings",
      name: "Settings",
      component: () => import("@/views/SettingsView.vue"),
    },
  ],
});

export default router;
