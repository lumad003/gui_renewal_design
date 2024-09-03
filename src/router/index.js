import { createWebHistory, createRouter } from "vue-router";
import TestHome from "@/views/TestHome.vue";
import TestOne from "@/views/TestOne.vue";
import TestTwo from "@/views/TestTwo.vue";

const routes = [
  { path: '/', component: TestHome },
  { path: '/one', component: TestOne },
  { path: '/two', component: TestTwo },
  { path: '/one/:test', component: TestOne },
  { path: '/two/:test', component: TestTwo }
]
const router = createRouter({
    history: createWebHistory(),
    routes,
  });

export default router;