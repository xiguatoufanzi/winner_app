import Vue from "vue";
import VueRouter from "vue-router";

import routes from "./routes";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history", // 不带#的模式
  routes, // 配置所有路由
  /* scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }  // 在跳转路由时, 滚动条自动滚动到x轴和y轴的起始位置
  } */
});

export default router;
