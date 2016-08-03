// 引入bootstrap css库
require('bootstrap/less/bootstrap.less');
require('./assets/css/all.less');

import Vue from 'vue'
import $ from 'jquery'
// import App from './App'
// 避免提前加载组件样式
var App = require('./App');

new Vue({
	el: 'body',
	components: { App }
})
