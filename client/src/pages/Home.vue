<template lang="pug">
  .awesome-class
    button(@click="addSIO")
    h2 This is a test of the addon!
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
    addSIO() {
      this.bw.addSIO()
    }
  }
}
</script>
<style lang="scss" scoped>
  .awesome-class {
    background: red;
  }
  h2 {
    color: blue;
  }
</style>