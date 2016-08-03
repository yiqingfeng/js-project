// 引入bootstrap css库
require('bootstrap/less/bootstrap.less');
require('./assets/css/all.less');

import Vue from 'vue'
import VueRouter from 'vue-router'
// 安装路由模块
Vue.use(VueRouter);

import articleList from './components/articleList/main'

// import $ from 'jquery'
// import App from './App'

// 避免提前加载组件样式
var App = require('./App');

// 定义组件
var Bar = Vue.extend({
    template: '<p>This is bar!</p>'
})

// 创建一个路由器实例
var router = new VueRouter();
router.map({
    '/': {
        component: articleList
    },
    '/article/:id': {
    	name: 'article',
        component: Bar
    }
});

// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
router.start(App, 'app');

// new Vue({
// 	el: 'body',
// 	components: { App }
// });
