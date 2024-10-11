import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "./components/Login/LoginPage.vue";
import RegisterPage from "./components/Register/RegisterPage.vue";
import MainPage from "./components/Main/MainPage.vue";

const routes = [
  {
    path: "/",
    name: "Main",
    component: MainPage,
  },
  {
    path: "/login",
    name: "Login",
    component: LoginPage,
  },
  {
    path: "/register",
    name: "Register",
    component: RegisterPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
