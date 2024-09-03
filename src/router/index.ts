import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [

  // 1 重定向 规则定义 
  {
    path: '/',
    redirect: '/home'
  },
  // 2 权限校验
  {
    path: '/auth',
    name: 'auth',
    component: () => import('../pages/auth/Auth.vue'),
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import('../pages/auth/Login.vue'),
      }
    ]
  },
  // 3 homepage
  {
    path: '/home',
    name: 'HomePage',
    component: () => import('../pages/home/HomePage.vue')
  },
  // 4. problem
  {
    path: '/problem',
    name: 'problems',
    component: () => import('../pages/problems/ProblemSet.vue'),
  },
  // 5 contest
  // 5.1
  {
    path: '/contest',
    name: 'contests',
    component: () => import('../pages/contests/ContestView.vue'),
  },
  // 5.2.1 进入特定比赛查看比赛题目
  {
    path: '/contest/:contestNum',
    name: 'contest-problem-set',
    component: () => import('../pages/contests/problem/ProblemSet.vue'),
  },
  // 5.2.2 进入某一道题目
  {
    path: '/contest/:contestNum/problem/:problemLetterInContest',
    name: 'contest-problem',
    component: () => import('../pages/contests/problem/Problem.vue')
  },
  // 5.2.2.1 查看评测列表
  {
    path: '/contest/:contestNum/submission',
    name: 'contest-submission-detail',
    component: () => import('../pages/contests/judge/Submissions.vue'),
  },
   // 5.2.3 查看特定提交的详情
  {
    path: '/contest/:contestNum/submission/:submissionId',
    name: 'submissionDetail',
    component: () => import('../pages/contests/judge/Detail.vue')
  },
  // 5.2.4 提交栏
  {
    path: '/contest/:contestNum/submit',
    name: 'submit',
    component: () => import('../pages/contests/judge/Submit.vue')
  },
  // 5.2.5 榜单
  {
    path: '/contest/:contestNum/board',
    name: 'rank-board',
    component: () => import('../pages/contests/RankBoard.vue')
  },

  // manage模块
  {
    path: '/manage',
    name: 'manage',
    component: () => import('../pages/manage/Manage.vue'),
    children: [
      {
        path: 'userlist',
        name: 'userlist',
        component: () => import("../pages/manage/user/UserList.vue")
      },
      {
        path: 'articlelist',
        name: 'articlelist',
        component: () => import("../pages/manage/article/ArticleList.vue")
      },
      {
        path:'articleadd',
        name:'articleadd',
        component:()=>import("../pages/manage/article/ArticleAdd.vue")

      },
      {
        path: 'usergenerator',
        name: 'usergenerator',
        component: () => import("../pages/manage/user/UserGenerator.vue")
      },
      {
        path: 'problemadd',
        name: 'problemadd',
        component: () => import("../pages/manage/problem/ProblemAdd.vue")
      },

      {
        path: 'problemlist',
        name: 'problemlist',
        component: () => import("../pages/manage/problem/ProblemList.vue")
      },
      {
        path: 'contestadd',
        name: 'contestadd',
        component: () => import("../pages/manage/contest/ContestAdd.vue")
      }
    ]
  },
  // 404 页面
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
