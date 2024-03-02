/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/pages/HomeView.vue";

const routes = [
  {
    name: "home",
    path: "/",
    component: HomeView,
  },
  {
    name: "about",
    path: "/about",
    component: () => import("@/pages/AboutView.vue"),
  },
  {
    name: "user",
    path: "/user",
    component: () => import("@admin/pages/UserView.vue"),
  },
  {
    name: "user_create",
    path: "/user/create",
    component: () => import("@/pages/base/CreatePage.vue"),
  },
  {
    // Catch all route which not exist in app
    path: "/:catchAll(.*)*",
    redirect: {
      name: "home",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: routes,
});

export default router;
