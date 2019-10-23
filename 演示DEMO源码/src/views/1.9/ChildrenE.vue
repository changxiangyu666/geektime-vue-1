<template>
  <div class="border2">
    <!-- 通过v-ant-ref指令注册DOM元素变成回调的形式 -->
    <h3 v-ant-ref="c => setChildrenRef('childrenE', c)">
      E 结点
    </h3>
  </div>
</template>
<script>
export default {
  components: {},
  // 使用`inject` 在子组件中注入数据
  inject: {
    setChildrenRef: {
      default: () => {}
    }
  }
};
</script>
