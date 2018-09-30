// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import Home from './components/home/home.vue';
import Cases from './components/cases/cases.vue';
// import Construction from './components/construction/construction.vue';
import Contact from './components/contact/contact.vue';
import News from './components/news/news.vue';
import Products from './components/products/products.vue';
import Service from './components/service/service.vue';
import CaseDetail from './components/cases/casedetail.vue';
import ConstructDetail from './components/construction/constructdetail.vue';
import ProductDetail from './components/products/productdetail.vue';
import NewsDetail from './components/news/newsdetail.vue';
import VueResource from 'vue-resource';

/* eslint-disable no-new */
Vue.use(VueRouter);
Vue.use(VueResource);
const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: Home },
  { path: '/cases', component: Cases },
  {
    path: '/construction',
    component: () =>
      import('./components/construction/construction.vue')
  },
  { path: '/contact', component: Contact },
  { path: '/news', component: News },
  { path: '/products', component: Products },
  { path: '/service', component: Service },
  { path: '/cases/:id', component: CaseDetail },
  { path: '/construct/:id', component: ConstructDetail },
  { path: '/product/:id', component: ProductDetail },
  { path: '/newsdetail/:id', component: NewsDetail }
];
const router = new VueRouter({
  base: '/',
  routes: routes,
  linkActiveClass: 'active'
});
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
