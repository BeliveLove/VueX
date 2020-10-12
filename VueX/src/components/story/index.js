import Vue from "vue";
import VueX from "vuex";
Vue.use(VueX);
//新建Vuex实例
const store = new VueX.Store({
  state: {
    count: "car"
  },
  /*mutations：里面一般写改变state状态的方法,此处的方法名,在commit中使用 */
  mutations: {
    changeCount(state) {
      state.count = "bus";
      state.addcount="plane"
    }
  }
});
export default store