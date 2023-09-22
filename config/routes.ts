export default [
  { path: '/user', name: 'user', layout: false, routes: [{ path: '/user/login', component: './User/Login' }] },
  { path: '/', redirect: '/add_chart' },
  { path: '/add_chart', name: '智能分析', icon: 'barChart', component: './AddChart' },
  {
    path: '/admin',
    icon: 'crown',
    access: 'canAdmin',
    routes: [
      { path: '/admin', name: 's1', redirect: '/admin/sub-page' },
      { path: '/admin/sub-page', name: 's2', component: './Admin' },
    ],
  },
  { path: '/', redirect: '/Welcome' },
  { path: '*', layout: false, component: './404' },
];
