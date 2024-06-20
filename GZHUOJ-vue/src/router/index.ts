import { createRouter, createWebHistory} from 'vue-router';
import type { RouteRecordRaw } from 'vue-router'; 
import HomePage from '../pages/home/HomePage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: HomePage,
    children:[
      {
        path:'/index',
        component:()=>import('../pages/home/components/Index.vue')
      }
    ]
  }

];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
