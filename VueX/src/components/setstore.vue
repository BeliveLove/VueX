<template>
  <div>
    <button @click="setStore">setStore</button>
  </div>
</template>
<script>
export default {
  methods: {
    setStore () {
      console.log("setStore");
      /*此处改变state对象，由于VueX的设置，不能直接改变值，需要通过commit方法来修改
      commit的第一个参数必须在mutations中声明
      */
      this.$store.commit("changeCount");

    }
  },
}
</script>