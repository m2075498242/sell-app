/* eslint-disable */
import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import {Meta} from '../tyeps/index'
Vue.use(VueRouter);
let meta:Meta = { title: '标题',}
const routes: Array<RouteConfig> = [
  {
    path: "/",
    redirect: "/goods",
    meta:{
      name:123
    }
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
    meta
  }
];
const router = new VueRouter({
  routes,
});

export default router;
