    <!-- 组件的结构 -->
<template>
  <div class="demo">
    <h2>name:{{ name }}</h2>
    <button @click="sendSchoolName">点我</button>
    <button @click="unbind">解绑事件</button>
    <button @click="died">销毁子组件</button>
  </div>
</template>
    
<script>
export default {
  name: "ShowSchoolMSg",
  data() {
    return {
      name: "Sias",
      //   age: "12",
    };
  },
  methods: {
    sendSchoolName() {
      //   console.log("@@");
      this.$emit("showName", this.name);
    },
    unbind() {
      this.$off("showName"); //只适用于解绑一个事件
      //解绑多个用数组传递需要解绑的事件
      //   this.$off();//解绑所有事件
    },
    died() {
      this.$destroy(); //销毁当前组件，销毁后所有该实例的自定义事件将全不奏效
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