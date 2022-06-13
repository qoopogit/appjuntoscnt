import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: '/intro/'
  },
  {
    path: '/folder/:id',
    component: () => import ('../views/FolderPage.vue')
  },
  {
    path: '/intro/',
    component: () => import ('../views/IntroPage.vue')
  },
  {
    path: '/inicio/',
    component: () => import ('../views/InicioPage.vue')
  },
  {
    path: '/acerca/',
    component: () => import ('../views/AcercaPage.vue')
  },
  {
    path: '/test/',
    component: () => import ('../views/TestPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
