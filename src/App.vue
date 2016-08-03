<template>
    <!-- 该标签与PageHd和pageHd相对应 -->
    <page-hd></page-hd>
    <router-view></router-view>
    <page-ft></page-ft>
</template>

<script>
import pageHd from './components/pageHd'
import pageFt from './components/pageFt'

export default {
    components: {
        pageHd,
        pageFt
    }
}
</script>
