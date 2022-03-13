<template>
  <div>
    <h2>{{ name }}</h2>
    <!-- 组件标签 :age的写法能使“”里的内容成为表达式 在这里age成为了Number类型 -->
    <!-- 通过父组件给组件传递函数类型的props实现，子给父传递数据 -->
    <ShowMsg :getName="getName"></ShowMsg>

    <!-- 通过父组件给组件绑定一个自定义事件实现，子给父传递数据 -->
    <!-- <ShowSchoolMSg v-on:showName="getSchoolName"></ShowSchoolMSg> -->
    <!-- <ShowSchoolMSg @showName="getSchoolName"></ShowSchoolMSg> -->

    <!-- 通过父组件给组件绑定一个自定义事件实现，子给父传递数据 第二种 -->
    <ShowSchoolMSg ref="showScMsg"></ShowSchoolMSg>
  </div>
</template>

<script>
//引入组件
import ShowMsg from "./components/ShowMsg.vue";
import ShowSchoolMSg from "./components/ShowSchoolMSg.vue";
export default {
  name: "App",
  components: {
    ShowMsg: ShowMsg,
    ShowSchoolMSg,
  },
  data() {
    return {
      name: "",
    };
  },
  methods: {
    getName(name) {
      console.log("app组件收到了name是", name);
    },
    getSchoolName(name) {
      console.log("@@@", name);
      this.name = name;
    },
  },
  mounted() {
    this.$refs.showScMsg.$on("showName", this.getSchoolName);
  },
};
</script>

<style>
</style>
