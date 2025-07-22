import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'Home', component: () => import('@/views/Home.vue') },
  { path: '/about', name: 'About', component: () => import('@/views/About.vue') },
  {
    path: '/user/:id',
    name: 'user',
    component: () => import('@/views/User.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(), //自由切换 createWebHistory() 或 createWebHashHistory()
  routes
})

export default router // ✅ 默认导出
