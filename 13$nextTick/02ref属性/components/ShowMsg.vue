    <!-- 组件的结构 -->
<template>
  <div class="demo">
    <h2>name:{{ name }}</h2>
    <h2>age:{{ age }}</h2>
    <button @click="showName">showName</button>
  </div>
</template>
    
<script>
//组件的交互相关代码（数据、方法）
export default {
  name: "ShowMsg",
  data() {
    return {
      name: "rr",
      age: "12",
    };
  },
  methods: {
    showName() {
      alert(this.name);
    },
  },
};
</script>

<style>
/* 组件的样式 css */
.demo {
  background-color: gray;
}
</style>