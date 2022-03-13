    <!-- 组件的结构 -->
<template>
  <div class="demo">
    <h2>name:{{ name }}</h2>
    <button @click="sendMsg">发送学校名称</button>
  </div>
</template>
    
<script>
import pubsub from "pubsub-js";
export default {
  name: "ShowSchoolMSg",
  data() {
    return {
      name: "Sias",
      //   age: "12",
    };
  },
  methods: {
    sendMsg() {
      pubsub.publish("hello", this.name);
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