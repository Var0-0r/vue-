<template>
  <div>
    <ShowMsg></ShowMsg>
    <img src="./assets/logo.png" alt="" />
    <h1 v-text="msg" ref="title"></h1>
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
  methods: {
    showRefMsg() {
      console.log(this.$refs.title);
    },
  },
};
</script>

<style>
</style>
