<template lang="pug">
  .awesome-class
    h1 Hello World!
</template>
<script>
import BackEndWrapper from '../services/BackEndWrapper';
export default {
  name: 'Home',
  data() {
  	return ({
  		bw:new BackEndWrapper(),
  		numbers:[]
  	});
  },
  mounted() {
  },
  methods: {

  }
}
</script>
<style lang="scss" scoped>
  .awesome-class {
    background: red;
  }
</style>