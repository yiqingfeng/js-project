<template>
<div class="main">
	<div class="container">
		<div class="section-wraper">
			<section class="m-articles">
				<article-msg></article-msg>
				<article-msg></article-msg>
			</section>
			<pagination></pagination>
		</div>
	</div>
</div>
</template>

<style lang="less">
.section-wraper{
	width: 80%;
	margin: 0 auto;
}
.m-articles{
	margin-bottom: 50px;
	// background: #fff;
}

</style>

<script>
import articleMsg from './articleMsg'
import pagination from './pagination'

export default {
	components: {
        articleMsg,
        pagination
    }
}
</script>