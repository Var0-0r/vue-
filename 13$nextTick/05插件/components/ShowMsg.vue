    <!-- 组件的结构 -->
<template>
  <div class="demo">
    <h2 @click="showName">name:{{ name }}</h2>
    <h2>age:{{ myAge }}</h2>
  </div>
</template>
    
<script>
export default {
  name: "ShowMsg",
  data() {
    return {
      name: "rr",
      age: "12",
      // myAge: this.age,
    };
  },
};
</script>

<style>
/* 组件的样式 css */
.demo {
  background-color: gray;
}
</style>