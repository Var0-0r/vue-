    <!-- 组件的结构 -->
<template>
  <div class="demo">
    <h2 @click="showName">name:{{ name }}</h2>
    <h2>age:{{ myAge }}</h2>
  </div>
</template>
    
<script>
//组件的交互相关代码（数据、方法）
import { mixin } from "../mixin"; //引入mixin（混合）
export default {
  name: "ShowMsg",
  data() {
    return {
      name: "rr",
      age: "12",
      // myAge: this.age,
    };
  },
  mixins: [mixin],
};
</script>

<style>
/* 组件的样式 css */
.demo {
  background-color: gray;
}
</style>