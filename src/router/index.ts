import { createWebHistory, createRouter } from "vue-router";

import Index from "../pages/Index.vue";
import Detail from "../pages/Detail.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Index },
    {
      path: "/detail/:idd",
      component: Detail,
    },
  ],
});

export default router;
