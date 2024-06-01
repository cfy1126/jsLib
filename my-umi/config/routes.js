export default [
  {
    path: '/',
    component: '@/layouts/base-layouts',
    routes: [
      { path: '/login', component: '@/pages/login' },
      { path: '/register', component: '@/pages/register' },
      {
        path: '/goods',
        component: '@/layouts/aside-layouts',
        routes: [
          {
            wrappers: ['@/wrappers/auth'],
            path: '/goods',
            component: '@/pages/goods',
          },
          {
            path: '/goods/:id',
            component: '@/pages/goods/goods-detail',
          },
          {
            path: '/goods/:id/comment',
            component: '@/pages/goods/goods-comment',
          },
          {
            path: '/goods/:id/comment/:id',
            component: '@/pages/goods/comment-detail',
          },
        ],
      },
      { path: '/', redirect: '/login' },
      { component: '@/pages/404' },
    ],
  },
];
