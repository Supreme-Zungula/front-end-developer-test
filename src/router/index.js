import { createRouter, createWebHistory } from "vue-router";
import { useUserStore } from "../stores/user";

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
      beforeEnter: (to, from) => {
        const currentUser = useUserStore();
        if (!currentUser.isLoggedIn) {
          router.push({ name: "Login" });
        }
      },
    },
  ],
});

export default router;
