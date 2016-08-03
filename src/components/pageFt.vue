<template>
	<footer class="app-ft">
        <div class="container">
                <a class="foot-item" title="邮件" href="mailto:fudaimengxuan@163.com" target="_blank"><span class="mail"></span></a>
                <a class="foot-item" title="github" href="https://github.com/WakelessDragon" target="_blank"><span class="github"></span></a>
                &nbsp;
                <a href="javascript:;"><span>&copy; Nimo</span></a>
        </div>
    </footer>
</template>

<style lang="less">
@ftbg: #333;
@white: #fff;
.app-ft{
	min-height: 50px;
	line-height: 50px;
	background-color: @ftbg;
    border-color: #2ca6cb;
    box-shadow: 2px -4px 5px rgba(3,-3,3,0.2);
    text-align: center;
    .foot-item{
    	display: inline-block;
    	width: 28px;
    	height: 28px;
    	border-radius: 3px;
    	background-color: fade(@white, 10%);
    	vertical-align: middle;
    }
    a{
    	font-size: 16px;
    	color: @white;
    }
}
</style>