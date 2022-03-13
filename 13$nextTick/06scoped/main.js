// 该文件是整个项目的入口文件
//引入Vue
import Vue from 'vue'
//引入App组件，他是所有组件的父组件
import App from './app.vue'
//关闭vue的生产提示
Vue.config.productionTip = false;
//应用（使用）插件
Vue.use(plugins);
//创建vue实例对象
new Vue({
  el: "#app",
  render: h => h(App),
})
// .$mount('#app')


//cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_mo…