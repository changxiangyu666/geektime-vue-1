<template>
  <div id="app">
    {{count}}
    <br>
    <!-- this.$store.getters.xxx 取值 -->
    {{$store.getters.doubleCount}}
    <!-- this.$store.commit('xxx') 赋值 -->
    <button @click="$store.commit('increment')">count++</button>
    <!-- this.$store.dispatch('xxx') 赋值 -->
    <button @click="$store.dispatch('increment')">count++</button>
  </div>
</template>

<script>

export default {
  name: 'app',
  computed: {
    count() {
      // this.$store.state.xxx 取值
      return this.$store.state.count
    }
  }
}
</script>

<style>

</style>
