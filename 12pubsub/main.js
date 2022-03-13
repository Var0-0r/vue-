// 该文件是整个项目的入口文件
//引入Vue
import Vue from 'vue'
//引入App组件，他是所有组件的父组件
import App from './app.vue'
//关闭vue的生产提示
Vue.config.productionTip = false;
//应用（使用）插件
// Vue.use(plugins);
//创建vue实例对象


new Vue({
  el: "#app",
  render: h => h(App),
  beforeCreate() {
    // Vue.prototype.$bus = this;//安装全局事件总线
  }
})
// .$mount('#app')

