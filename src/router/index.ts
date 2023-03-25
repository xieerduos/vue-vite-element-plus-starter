// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {createRouter, createWebHistory, createWebHashHistory} from 'vue-router';
import HomeView from '../views/HomeView.vue';

// import AboutView from '../views/AboutView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
      // component: AboutView
    },
    {
      path: '/log/:logId',
      name: 'log',
      component: () => import('../views/LogView.vue')
    }
  ]
});

export default router;
