import { createRouter, createWebHistory } from 'vue-router';

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('@/views/MainMonitor.vue'),
    },
    {
      path: '/monitor/exception',
      component: () => import('@/views/ExceptionMonitor.vue'),
    },
    {
      path: '/monitor/performance',
      component: () => import('@/views/PerformanceMonitor.vue'),
    },
    {
      path: '/monitor/behavior',
      component: () => import('@/views/BehaviorMonitor.vue'),
    },
    {
      path: '/monitor/request',
      component: () => import('@/views/RequestMonitor.vue'),
    },
  ],
});
