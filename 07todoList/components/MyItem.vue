<template>
  <li>
    <label>
      <!-- :checked 动态绑定根据todo的done属性 -->
      <input
        type="checkbox"
        :checked="todo.done"
        @change="handleCheck(todo.id)"
      />
      <!-- 如下代码也能实现功能但是不太推荐，因为违反原则，修改了props -->
      <!-- <input type="checkbox" v-model="todo.done"> -->
      <span>{{ todo.title }}</span>
    </label>
    <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
  </li>
</template>

<script>
export default {
  name: "MyItem",
  props: ["todo", "checkTodo", "deleteTodo"],
  methods: {
    //勾选或取消勾选
    handleCheck(id) {
      //通知App组件对应
      this.checkTodo(id);
    },
    handleDelete(id) {
      if (confirm("确定删除吗")) {
        this.deleteTodo(id);
      }
    },
  },
};
</script>

<style>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
li:hover {
  background-color: #ddd;
}
li:hover button {
  display: block;
}
</style>