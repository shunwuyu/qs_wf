<template>
  <div>
    <count-down></count-down>
    <count-footer></count-footer>
  </div>
</template>
<script>
  import CountDown from './components/CountDown.vue';
  import CountFooter from './components/CountFooter.vue';
  
  export default {
    components: {
      CountDown,
      CountFooter
    }
  }
</script>
<style>

</style>
