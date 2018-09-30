/**
 * Created by Administrator on 2018/9/30.
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/home/home.vue';
import Contact from '../components/contact/contact.vue';
import News from '../components/news/news.vue';
import Service from '../components/service/service.vue';
import ConstructDetail from '../components/construction/construct-detail.vue';
import NewsDetail from '../components/news/newsdetail.vue';

Vue.use(VueRouter);
const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: Home },
  {
    path: '/construction/constructs',
    component: () => import('../components/construction/construction.vue'),
    meta: { requiresAuth: false },
    children: [
      {
        path: '/',
        component: () => import('../components/construction/construct-content.vue')
      },
      {
        path: 'id/:id',
        component: ConstructDetail
      }
    ]
  },
  { path: '/contact', component: Contact },
  { path: '/news', component: News },
  { path: '/service', component: Service },
  {
    path: '/cases/case',
    component: () => import('../components/cases/cases.vue'),
    meta: { requiresAuth: false },
    children: [
      {
        path: '/',
        component: () => import('../components/cases/cases-content.vue')
      },
      {
        path: 'id/:id',
        component: () => import('../components/cases/case-detail.vue')
      }
    ]
  },
  {
    path: '/products/product',
    component: () => import('../components/products/products.vue'),
    meta: {requiresAuth: false},
    children: [
      {
        path: '/',
        component: () => import('../components/products/product-content.vue')
      },
      {
        path: 'id/:id',
        component: () => import('../components/products/product-detail.vue')
      }
    ]
  },
  { path: '/newsdetail/:id', component: NewsDetail }
];
const router = new VueRouter({
  base: '/',
  routes: routes,
  linkActiveClass: 'active'
});
router.beforeEach((to, from, next) => {
  if (to.matched.some(function (item) { return item.meta.requiresAuth; })) {
    next('/');// 路由元，是否需要验证--true-跳转登录页面
  } else {
    next();
  }
});
export default router;
