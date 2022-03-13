<template>
  <div>
    <!-- 组件标签 :age的写法能使“”里的内容成为表达式 在这里age成为了Number类型 -->
    <ShowMsg ref="showM" name="rr" :age="12"></ShowMsg>
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
