import Vue from "vue";
import VueX from "vuex";
Vue.use(VueX);
//新建Vuex实例
const store = new VueX.Store({
  state: {
    count: "car"
  },
  mutations: {
    increment(state) {
      state.count = "bus";
    }
  }
});
export default store