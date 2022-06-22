/* eslint-disable */
import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
Vue.use(VueRouter);
const routes: Array<RouteConfig> = [
  {
    path: "/",
    redirect: "/goods",
  },
  {
    path: "/goods",
    component: () => import('@/views/goods/Goods.vue'),
  },
  {
    path: "/appraise",
    component: () => import('@/views/appraise/AppAppraise.vue'),
  },
  {
    path: "/shops",
    component: () => import('@/views/shops/Shops.vue'),
  }
];
const router = new VueRouter({
  routes,
});

export default router;
