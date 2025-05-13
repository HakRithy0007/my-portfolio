import { createRouter, createWebHistory } from 'vue-router';
import MainLayout from '../layout/MainLayout.vue';
import AboutPage from '../pages/AboutPage.vue';
import PortfolioPage from '../pages/PortfolioPage.vue';
import ContactPage from '../pages/ContactPage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: MainLayout,
      meta: { requiresAuth: true },
      children: [
        {
          path: '',
          name: 'about',
          component: AboutPage,
        },
        {
          path: 'portfolio',
          name: 'portfolio',
          component: PortfolioPage,
        },
        {
          path: 'contact',
          name: 'contact',
          component: ContactPage,
        },
      ],
    },
  ],
});

export default router;
