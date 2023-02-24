import { createRouter, createWebHistory } from "vue-router";

import add from "../components/add.vue";
import log from "../components/log.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "log",
      component: log,
    },
    
    {
      path: "/add",
      name: "add",
      component: add,
    },


    
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

export default router;
