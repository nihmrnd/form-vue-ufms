import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'formulario',
      component: () => import('../components/Formulario.vue')
    },
    {
      path: '/relatorio',
      name: 'relatorio',
      component: () => import('../components/Relatorio.vue')
    }
  ]
})

export default router
