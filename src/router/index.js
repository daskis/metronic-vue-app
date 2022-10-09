import { createRouter, createWebHistory } from 'vue-router'
import AppAuth from "@/pages/AppAuth";
import AppMain from "@/pages/AppMain";

const routes = [
  {
    path: '/auth',
    name: "auth",
    component: AppAuth
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  },
  {
    path: "/main",
    name: "main",
    component: AppMain
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
