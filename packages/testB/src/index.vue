<template>
    <div class="test">测试按需引入B</div>
</template>
<script>
export default {
    name:'testB',
    data(){
        return {

        }
    }
}
</script>
<style lang="less" scoped>
@import "./css/index.less";
</style>