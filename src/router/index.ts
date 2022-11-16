import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { scrollBehaviorFn } from "./scrollBehavior";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "./index",
  },
  {
    path: "/index",
    name: "index",
    component: () => import("view/index/index.vue"),
    meta: {
      title: "This is a demo",
      description: "This is a demo",
      keywords: "This is a demo",
      top: 0,
      keepAlive: false
    },
  },
];

const router = createRouter({
  history: createWebHistory("/"),
  routes,
  scrollBehavior: scrollBehaviorFn
});

export default router;
