import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '../views/HomeView.vue';
import JobsView from '../views/JobsView.vue';

const routes = [
  { 
    path: '/', 
    name: 'home',
    component: HomeView 
  },
  { 
    path: '/jobs', 
    name: 'jobs',
    component: JobsView 
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // ✅ use WebHistory for browser
  routes,
});

export default router;
