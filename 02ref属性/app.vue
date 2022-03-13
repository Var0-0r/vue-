<template>
  <div>
    <!-- 组件标签 -->
    <ShowMsg ref="showM"></ShowMsg>
    <img src="./assets/logo.png" alt="" />
    <h1 v-text="showMsg" ref="title"></h1>
    <button @click="showRefMsg">showRefMsg</button>
  </div>
</template>

<script>
//引入组件
import ShowMsg from "./components/ShowMsg.vue";
export default {
  name: "App",
  components: {
    ShowMsg: ShowMsg,
  },
  data() {
    return {
      showMsg: "Welcome Ref",
    };
  },
  methods: {
    showRefMsg() {
      console.log(this.$refs.title); //真实Dom元素
      console.log(this.$refs.showM); //ShowMsg组件的实例对象（vc）
    },
  },
};
</script>

<style>
</style>
