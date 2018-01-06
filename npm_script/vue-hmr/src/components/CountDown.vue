<template>
  <div>
    <input v-model="num"/>
    <button @click="add">+</button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      num: 1
    }
  },
  methods: {
    add() {
      this.num++;
    }
  }
}  
</script>
<style>

</style>
