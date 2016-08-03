<template>
<article class="m-article">
	<header>
		<span class="glyphicon glyphicon-time"></span>
		<span class="date">2015-05-12</span>
	</header>
	<div class="module">
		<a class="title" href="#">Javascript 总结</a>
		<p>超级长图，小心流量。</p>
		<a class="readmore" href="#">Read More</a>
		<footer>
			<a class="tag" href="javascript:;"><span class="glyphicon glyphicon-tag">&nbsp;</span><span class="tag-content">a123</span></a>
			<a class="tag" href="javascript:;"><span class="glyphicon glyphicon-tag">&nbsp;</span><span class="tag-content">a123</span></a>
		</footer>
	</div>
</article>
</template>

<style lang="less">
// 文章单个列表
@datebg: #666;
@gray: #999;
@font-size: 16px;
.m-article{
	padding: 6px 0px 8px 0px;
    margin-top: 3em;
	header{
	    letter-spacing: 2px;
	    margin-bottom: 1em;
	    margin-left: 5px;
	    line-height: 1em;
	    text-shadow: 0 1px #fff;

	    font-weight: bold;
	    font-size: @font-size;
	    color: @datebg;
	    .date{
	    	vertical-align: top;
	    }
	}
	.module{
	    width: 100%;
	    overflow: hidden;
	    padding: 25px;
	    border-bottom: 1px solid #b1b1b1;
	    background: #f8f8fd;
	    box-shadow: 0 1px 2px rgba(0,0,0,0.4),0 0 30px rgba(10,10,0,0.1) inset;
	    font-size: 16px;
	}
	.title{
		display: block;
		font-size: 1.6em;
	    font-weight: 500;
	    margin-bottom: 10px;
	    margin-left: -25px;
	    padding-left: 20px;
	    border-left: 5px solid #2ca6cb;
	}
	.readmore{
		display: inline-block;
	    // line-height: 1em;
	    padding: 6px 15px;
	    -webkit-border-radius: 15px;
	    border-radius: 15px;
	    background: #eee;
	    color: @gray;
	    text-shadow: 0 1px #fff;
	    text-decoration: none;
	    margin-top: 10px;
	    margin-bottom: 20px;
	}
	footer{
		font-size: .85em;
	    line-height: 1.6em;
	    border-top: 1px solid #ddd;
	    padding-top: 1.6em;
	    margin: 0;
	}
	.tag{
		margin-right: 15px;
		color: @gray;
		font-size: @font-size;
	}
	.tag-content{
		display: inline-block;
		height: 20px;
		line-height: 20px;
	}
}
</style>