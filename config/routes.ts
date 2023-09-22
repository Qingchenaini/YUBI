export default [
  { path: '/user', name: 'user', layout: false, routes: [{ path: '/user/login', component: './User/Login' }] },
  { path: '/welcome', name: '欢迎', icon: 'smile', component: './Welcome' },
  {
    path: '/admin',
    icon: 'crown',
    access: 'canAdmin',
    routes: [
      { path: '/admin', name: 's1', redirect: '/admin/sub-page' },
      { path: '/admin/sub-page', name: 's2', component: './Admin' },
    ],
  },
  { icon: 'table', path: '/list', component: './TableList' },
  { path: '/',  name:'根目录跳转到welcome',redirect: '/welcome' },
  { path: '*',  layout: false, component: './404' },
];
