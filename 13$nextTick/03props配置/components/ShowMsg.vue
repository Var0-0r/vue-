    <!-- 组件的结构 -->
<template>
  <div class="demo">
    <h2>name:{{ name }}</h2>
    <h2>age:{{ myAge }}</h2>
    <button @click="showName">showName</button>
    <button @click="myAge++">age++</button>
  </div>
</template>
    
<script>
//组件的交互相关代码（数据、方法）
export default {
  name: "ShowMsg",
  data() {
    return {
      // name: "rr",
      // age: "12",
      myAge: this.age,
    };
  },
  // props: ["name", "age"],//简单声明接收
  // props: { //接收的同时对数据进行类型限制
  //   name: String,
  //   age: Number,
  // },
  //接收的同时对数据：进行类型限制+默认值的指定+必要性的限制
  //这里面的数据优先级很高 高于data
  props: {
    name: {
      type: String, //类型限制 必须是字符串
      required: true, //传入限制 必须传入
    },
    age: {
      type: Number,
      default: 99, //默认值 如果不传入默认是99
    },
  },
  methods: {
    showName() {
      alert(this.name);
    },
  },
};
</script>

<style>
/* 组件的样式 css */
.demo {
  background-color: gray;
}
</style>