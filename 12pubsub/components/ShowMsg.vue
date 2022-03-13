    <!-- 组件的结构 -->
<template>
  <div class="demo">
    <h2>name:{{ name }}</h2>
    <h2>age:{{ age }}</h2>
    <!-- <button @click="sendName">点我</button> -->
    <!-- <button @click="sendToBro">把数据发送给兄弟</button> -->
  </div>
</template>
    
<script>
import pubsub from "pubsub-js";
export default {
  name: "ShowMsg",
  data() {
    return {
      name: "rr",
      age: "12",
    };
  },
  mounted() {
    //pubsub.subscribe 传递两个参数 1.消息名 2.回调函数
    this.pubid = pubsub.subscribe("hello", (msgName, data) => {
      console.log("@@hello@@", msgName, data);
    });
  },
  beforeDestroy() {
    pubsub.unsubcribe(this.pubid);
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