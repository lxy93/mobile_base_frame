<template>
    <div class="loading">
        <img src="@/assets/loading.gif">
    </div>

</template>

<script>
export default {

}
</script>

<style lang="less">
.loading{
    width: 100%;
    height: 100%;
    position: fixed;
    left: 50%;
    top:40%;
    margin-left:-30px;
    margin-right: -30px;
    img{
        width: 60px;
        height: 60px;
    }
}
</style>
