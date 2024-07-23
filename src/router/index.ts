import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import HomePage from '../pages/home/HomePage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
  },
  {
    path: '/question',
    name: 'qusetion',
    component: () => import('../pages/question/Question.vue'),
  },
  {
    path: '/auth',
    name: 'auth',
    component: () => import('../pages/auth/auth.vue'),
    children: [
      {
        path: 'Login',
        name: 'Login',
        component: () => import('../pages/auth/login/Login.vue'),
      }
    ]
  },
  {
    path: '/manage',
    name: 'manage',
    component: () => import('../pages/manage/Manage.vue'),
    children:[
      {
        path:'userlist',
        name:'userlist',
        component:()=>import("../pages/manage/userlist/UserList.vue")
      },
      {
        path:'articlelist',
        name:'articlelist',
        component:()=>import("../pages/manage/articlelist/ArticleList.vue")
      }
    ]
  },

  {
    /*404页面放在最后面*/
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../pages/404/404.vue')
  }

];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
