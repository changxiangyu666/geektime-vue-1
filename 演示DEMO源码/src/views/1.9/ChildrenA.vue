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
  // 通过provide提供了主动通知还有几个主动获取的钩子函数
  provide() {
    return {
      setChildrenRef: (name, ref) => {
        this[name] = ref;
      },
      getChildrenRef: name => {
        return this[name];
      },
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
