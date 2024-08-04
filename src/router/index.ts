import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import HomePage from '../pages/home/HomePage.vue';
import component from 'element-plus/es/components/tree-select/src/tree-select-option.mjs';

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
    path: '/competition',
    name: 'competition',
    component: () => import('../pages/competition/Competition.vue'),

  },
  {
    path:'/competition/detail',
    name:'competition_detail',
    component:()=>import('../pages/competitiondetail/CompetitionDetail.vue')
  },
  {
    path: '/commit',
    name: 'commit',
    component: () => import('../pages/commit/Commit.vue'),

  },
  {
    path:'/detail',
    name:'detail',
    component:()=>import('../pages/detail/Detail.vue'),
  },
  {
    path: '/manage',
    name: 'manage',
    component: () => import('../pages/manage/Manage.vue'),
    children: [
      {
        path: 'userlist',
        name: 'userlist',
        component: () => import("../pages/manage/user/userlist/UserList.vue")
      },
      {
        path: 'articlelist',
        name: 'articlelist',
        component: () => import("../pages/manage/article/articlelist/ArticleList.vue")
      },
      {
        path: 'usergenerator',
        name: 'usergenerator',
        component: () => import("../pages/manage/user/usergenerator/UserGenerator.vue")
      },
      {
        path: 'problemadd',
        name: 'problemadd',
        component: () => import("../pages/manage/problem/problemadd/ProblemAdd.vue")
      },

      {
        path: 'problemlist',
        name: 'problemlist',
        component: () => import("../pages/manage/problem/problemlist/ProblemList.vue")
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
