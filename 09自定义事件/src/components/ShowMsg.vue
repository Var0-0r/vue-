    <!-- 组件的结构 -->
<template>
  <div class="demo">
    <h2>name:{{ name }}</h2>
    <h2>age:{{ age }}</h2>
    <button @click="sendName">点我</button>
  </div>
</template>
    
<script>
export default {
  name: "ShowMsg",
  data() {
    return {
      name: "rr",
      age: "12",
    };
  },
  props: ["getName"],
  methods: {
    sendName() {
      this.getName(this.name);
    },
  },
};
</script>

<style scoped>
/* 组件的样式 css */
/* scoped 局部的 这样该样式表仅作用于当前的template */
.demo {
  background-color: gray;
}
</style>