<template>
  <button @click="getstore">getstore</button>
</template>
<script>
export default {
  methods: {
    getstore () {
      console.log("getStore");
      console.log(this.$store.state);
    }
  },
}
</script>