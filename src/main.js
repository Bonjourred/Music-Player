import Vue from "vue";
import App from "./App.vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.config.productionTip = false;
//导入
import VueRouter from "vue-router";
//use
Vue.use(VueRouter);
Vue.use(ElementUI);
//导入 需要通过路由管理的组件
import discovery from "./components/03.discovery.vue";
import tuijian from "./components/04.tuijian";
import newest from "./components/05.newest";
import mvs from "./components/06.mvs";
import results from "./components/07.results";
//创建路由
let router = new VueRouter({
  routes: [
    {
      path: "/",
      component: discovery,
    },
    {
      path: "/tuijian",
      component: tuijian,
    },
    {
      path: "/newest",
      component: newest,
    },
    {
      path: "/mvs",
      component: mvs,
    },
    {
      path: "/results",
      component: results,
    },
  ],
});
new Vue({
  //挂载到Vue实例上
  render: (h) => h(App),
  router,
}).$mount("#app");
