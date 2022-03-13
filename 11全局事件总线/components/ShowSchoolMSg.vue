    <!-- 组件的结构 -->
<template>
  <div class="demo">
    <h2>name:{{ name }}</h2>
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
    say(val) {
      console.log("我收到了数据", val);
    },
  },
  mounted() {
    this.$bus.$on("hello", this.say);
  },
  beforeDestroy() {
    this.$bus.$off("hello");
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