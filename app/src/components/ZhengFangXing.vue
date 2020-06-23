<template>
    <div style="padding: 0 10px 10px 10px;">
        <div class="basic clearfix">
            <div class="box"><div class="content"><p>122</p></div></div>
            <div class="box"><div class="content"><p>122</p></div></div>
            <div class="box"><div class="content"><p>122</p></div></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ZhengFangXing"
    }
</script>

<style scoped>
    .clearfix:after {  content: ""; display: block; height: 0; clear: both; visibility: hidden;  }
    .clearfix {*zoom: 1;}   /* IE6、7 专有 */
    .basic {
        box-sizing: border-box;
        width: 100%;
        min-width: 280px;
        background-color: #fff;
        padding: 10px 10px 10px 0;
        margin-top: 10px;
        font-size: 16px;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-weight: normal;
    }
    .box{
        box-sizing: border-box;
        display:inline-block;
        position: relative;
        border: 1px solid #ccc;
        margin-left: 10px;
        min-width: 260px;
        width: 32%;
        overflow:hidden;
        background: #fff;
    }
    .box::after{
        display: block;
        margin-top:100%;
        content : '';
    }
    .content {
        position: absolute;
        left:0;
        right:0;
        top:0;
        bottom: 0;
    }
</style>
