import { createRouter, createWebHistory } from 'vue-router';
import Geracao1 from '../views/Geracao1.vue';
import Geracao2 from '../views/Geracao2.vue';
import Geracao3 from '../views/Geracao3.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'geracao1',
      component: Geracao1
    },
    {
      path: '/geracao2',
      name: 'geracao2',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Geracao2
    },
    {
      path: '/geracao3',
      name: 'geracao3',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Geracao3
    }
  ]
})

export default router
