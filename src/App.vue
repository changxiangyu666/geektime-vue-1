<template>
  <div id="app">
    {{message}}
    <div>
      <input type="text" v-model="info" />
      <button @click="handleClick">添加</button>
    </div>
    <ul>
      <todo-item v-for="item in list" :key="item">
        <!-- 作用域插槽 -->
        <template v-slot:item="itemProps">
          <span :style="{fontSize: '20px',color: itemProps.checked?'blue':'red' }">{{item}}</span>
        </template>
      </todo-item>
    </ul>
  </div>
</template>

<script>
import TodoItem from "./components/todo-item.vue";
export default {
  name: "app",
  data() {
    return {
      message: "hello geektime",
      info: "",
      list: []
    };
  },
  methods: {
    handleClick() {
      this.list.push(this.info), (this.info = "");
    }
  },
  components: {
    TodoItem
  }
};
</script>
  