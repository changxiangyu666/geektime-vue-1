<template>
  <div class="border">
    <h1>A 结点</h1>
    <button @click="getEH3Ref">获取E h3 Ref</button>
    <ChildrenB />
    <ChildrenC />
    <ChildrenD />
  </div>
</template>
<script>
import ChildrenB from "./ChildrenB";
import ChildrenC from "./ChildrenC";
import ChildrenD from "./ChildrenD";
export default {
  components: {
    ChildrenB,
    ChildrenC,
    ChildrenD
  },
  // 通过provide在根组件提供了主动通知还有几个主动获取的钩子函数
  provide() {
    return {
      //主动通知 将组件实例绑定在根组件上
      setChildrenRef: (name, ref) => {
        this[name] = ref;
      },
      //主动获取 获取绑定的组件
      getChildrenRef: name => {
        return this[name];
      },
      // 获取根组件
      getRef: () => {
        return this;
      }
    };
  },
  data() {
    return {
      color: "blue"
    };
  },
  methods: {
    getEH3Ref() {
      console.log(this.childrenE);
    }
  }
};
</script>
