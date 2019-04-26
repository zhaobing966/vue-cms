// 入口文件
import Vue from 'vue'
// 1.1导入路由的包
import VueRouter from 'vue-router'
// 1.2安装路由
Vue.use(VueRouter)

// 2.1 导入 vue-resource
import VueResource from 'vue-resource'

// 2.2 安装 vue-resource
Vue.use(VueResource)

// 设置请求的根路径
Vue.http.options.root = 'http://yapi.demo.qunar.com/mock/64295'

// 导入MUI的样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'


// 按需导入 Mint-Ui 中的组件    
import { Header, Swipe, SwipeItem } from 'mint-ui'
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)


// 1.3导入自己的 router.js 路由模块
import router from './router.js'


// 导入 App 根组件
import app from './App.vue'
import { from } from 'array-flatten';

var vm = new Vue({
    el: '#app',
    render: c => c(app),
    router //挂载路由对象到 vm 实例上
})