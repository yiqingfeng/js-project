<template>
<div class="main">
	<div class="container">
		<div class="section-wraper">
			<section class="m-articles">
				<article-msg v-for="article in articles" :article="article" :index="$index"></article-msg>
			</section>
			<!-- <pagination></pagination> -->
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
// import pagination from './pagination'
// import Mock from 'mockjs'

// var data = Mock.mock({
//     'list|1-10': [{
//         'id|+1': 1
//     }]
// });

// console.log(JSON.stringify(data, null, 4))

export default {
	data() {
		return {
			message:'ahsdhajskjdlas;',
			articles: require('../../data/articles.json')
		}
	},
	components: {
        articleMsg
        // pagination
    }
}
</script>