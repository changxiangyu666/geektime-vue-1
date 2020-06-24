import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/JuanSheYiLan",
      name: "圈舍一览",
      component: () => import("./components/JuanSheYiLan")
    },
    {
      path: "/ZhengFangXing",
      name: "正方形",
      component: () => import("./components/ZhengFangXing")
    },
    {
      path: "/BaoDanChaXun",
      name: "保单查询",
      component: () => import("./components/BaoDanChaXun")
    },
    {
      path: "/BaoDanShangChuan",
      name: "保单上传",
      component: () => import("./components/BaoDanShangChuan")
    },
  ]
});
