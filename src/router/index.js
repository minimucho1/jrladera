import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from '../components/HomePage/HomePage.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/AboutPage/AboutPage.vue'),
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import(/* webpackChunkName: "about" */ '../components/BlogPage/BlogPage.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
