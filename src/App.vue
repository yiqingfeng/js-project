<template>
    <!-- 该标签与PageHd和pageHd相对应 -->
    <page-hd></page-hd>
    <article-list></article-list>
    <page-ft></page-ft>
</template>

<script>
import pageHd from './components/pageHd'
import articleList from './components/articleList/main'
import pageFt from './components/pageFt'

export default {
    components: {
        pageHd,
        articleList,
        pageFt
    }
}
</script>
