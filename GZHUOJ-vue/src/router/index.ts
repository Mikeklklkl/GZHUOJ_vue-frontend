import { createRouter, createWebHistory} from 'vue-router';
import type { RouteRecordRaw } from 'vue-router'; 
import HomePage from '../pages/home/HomePage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name:'HomePage',
    component: HomePage,   
  },
  {
    path:'/question',
    name:'qusetion',
    component:()=>import('../pages/question/Question.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component:()=>import('../pages/404/404.vue')
  }

];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
