<template>
    <div class="test">测试按需引入A</div>
</template>
<script>
export default {
    name:'testA',
    data(){
        return {

        }
    }
}
</script>
<style lang="less" scoped>
@import "./css/index.less";
</style>