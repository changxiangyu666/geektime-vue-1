<template>
    <div style="padding: 0 10px 10px 10px;margin-top: 60px;">
        <div class="nav">
            <button class="button">btn</button>
            <p>保单上传</p>
        </div>
        <div class="basic">
            <div class="header">
                <span>2020-05-06 14:26:52</span>
                <button>立即上传</button>
            </div>
            <div class="content">
                <span><i class="fa fa-star-o">☆</i>被保人姓名：吴思</span>
                <span><i class="fa fa-star-o">☆</i>产品：奶牛养殖险</span>
                <span><i class="fa fa-star-o">☆</i>上传状态：未上传</span>
            </div>
        </div>
        <div class="basic">
            <div class="header">
                <span>2020-05-06 14:26:52</span>
<!--                <button>已上传</button>-->
            </div>
            <div class="content">
                <span><i class="fa fa-star-o">☆</i>被保人姓名：吴思</span>
                <span><i class="fa fa-star-o">☆</i>产品：奶牛养殖险</span>
                <span><i class="fa fa-star-o">☆</i>上传状态：<span class="success">已上传</span></span>
            </div>
        </div>
        <div class="basic">
            <div class="header">
                <span>2020-05-06 14:26:52</span>
                <button>重新上传</button>
            </div>
            <div class="content">
                <span><i class="fa fa-star-o">☆</i>被保人姓名：吴思</span>
                <span><i class="fa fa-star-o">☆</i>产品：奶牛养殖险</span>
                <span><i class="fa fa-star-o">☆</i>上传状态：<span class="fail">上传失败</span></span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "BaoDanShangChuan"
    }
</script>

<style scoped>
    .nav {
        width: 100%;
        height: 50px;
        min-width: 280px;
        background-color: #4454FF;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 99;
    }

    .nav > button.button {
        padding: 10px;
        border: 0;
        background-color: #4454FF;
        color: #fff;
        cursor: pointer;
        width: 10%;
    }

    .nav > p {
        display: inline-block;
        color: #fff;
        width: 90%;
        text-align: center;
    }

    .basic {
        box-sizing: border-box;
        width: 100%;
        min-width: 280px;
        background-color: #fff;
        margin-top: 10px;
        position: relative;
    }

    .basic > .header {
        line-height: 43px;
        border-bottom: 1px solid #f5f5f5;
        padding-left: 10px;
    }

    .basic > .header > span {
        color: #dc522b;
    }

    .basic > .header > button {
        padding: 0 1em;
        border: 0;
        background-color: #fff;
        color: #666;
        line-height: 43px;
        cursor: pointer;
        float: right;
    }

    .basic > .header > button:active {
        color: #F38004;
    }

    .basic > .content {
        font-size: 13px;
        overflow: hidden;
        border-bottom: 1px solid #f5f5f5;
        padding: 10px
    }

    .basic > .content:after {
        clear: both
    }

    .basic > .content > span {
        float: left;
        line-height: 33px;
        margin-left: 10px
    }

    .basic > .content > span > .fa {
        font-style: normal;
        color: #dc522b;
        padding-right: 3px
    }
    .success{
        color: #4454FF;
    }
    .fail{
        color: #FF1301;
    }

</style>
