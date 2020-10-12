<template>
  <button @click="getstore">getstore</button>
</template>
<script>
export default {
  methods: {
    getstore () {
      console.log(this);
      console.log(this.$store.state.count);
    }
  },
}
</script>