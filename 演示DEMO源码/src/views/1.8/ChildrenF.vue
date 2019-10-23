<template>
  <div class="border2">
    <h3 :style="{ color: theme1.color }">F 结点</h3>
  </div>
</template>
<script>
export default {
  components: {},
  inject: {
    theme1: {
      // 通过from特性起一个别名theme1
      from: "theme",
      default: () => ({})
    }
  }
};
</script>
