<template>
  <div class="border2">
    <h3>F 结点</h3>
    <button @click="getARef">获取A Ref</button>
    <button @click="getHRef">获取H Ref</button>
  </div>
</template>
<script>
export default {
  components: {},
  inject: {
    getParentRef: {
      from: "getRef",
      default: () => {}
    },
    getParentChildrenRef: {
      from: "getChildrenRef",
      default: () => {}
    }
  },
  methods: {
    getARef() {
      //获取根组件实例
      console.log(this.getParentRef());
    },
    getHRef() {
      //获取指定名称组件实例
      console.log(this.getParentChildrenRef("childrenH"));
    }
  }
};
</script>
