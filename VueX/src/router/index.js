import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import getStore from "@/components/getstore";
import setStore from "@/components/setstore";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "HelloWorld",
      component: HelloWorld
    },
    {
      path: "/get",
      name: "getStore",
      component: getStore
    },
    {
      path: "/set",
      name: "setStore",
      component: setStore
    }
  ]
});
