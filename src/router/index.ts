import { createWebHistory, createRouter } from "vue-router";

import Index from "../pages/Index.vue";
import Detail from "../pages/Detail.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Index },
    {
      name: "detail",
      path: "/detail/:name",
      component: Detail,
    },
  ],
});

export default router;
