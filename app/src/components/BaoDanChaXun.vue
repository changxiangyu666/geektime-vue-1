<template>
    <div style="padding: 0 10px 10px 10px;margin-top: 60px;">
        <div class="nav">
            <button class="button">btn</button>
            <p>保单查询</p>
        </div>
        <div class="basic">
            <div class="line">
                <div class="title">身份证号</div>
                <div class="center">111111111111111111111111111111111111111</div>
                <div class="right">读二代证</div>
            </div>
            <div class="line">
                <div class="title">被保人姓名</div>
                <div class="center"></div>
            </div>
            <div class="line">
                <div class="title">保单号</div>
                <div class="center"></div>
            </div>
            <div class="line">
                <div class="title">手机号码</div>
                <div class="center"></div>
                <div class="right">发送验证码</div>
            </div>
            <div class="line">
                <div class="title">验证码</div>
                <div class="center"></div>
            </div>
        </div>
        <button class="btn">提交</button>
    </div>
</template>

<script>
    export default {
        name: "BaoDanChaXun"
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

    .basic > .line {
        width: 100%;
        display: -webkit-flex;
        display: flex;
        justify-content: flex-start;
        line-height: 43px;
    }

    .basic > .line:not(:last-child) {
        border-bottom: 1px solid #f5f5f5;
    }

    .basic > .line > div {
        padding: 0 5px
    }

    .basic > .line > div:not(:last-child) {
        border-right: 1px solid #f5f5f5
    }

    button.btn {
        padding: .5em 1em;
        border: 0;
        background-color: #4454FF;
        color: #fff;
        cursor: pointer;
        width: 100%;
        margin-inline-start: 0;
        margin-inline-end: 0;
        --box-shadow: none;
        height: 40px;
        margin-top: 10px;
    }

    .line > .title {
        text-align: right;
        flex: 90px 0 0;
    }

    .line > .title:before {
        content: '*';
        color: #ff1301
    }

    .line > .center {
        text-align: left;
        flex: auto 1 0;
    }

    .line > .right {
        color: #DC522B;
        font-size: 12px;
        flex: 80px 0 0;
    }

    .left, .middle, .right {
        text-align: center;
    }

    .left, .middle, .right, .center {
        width: 60px;
        overflow: hidden;
        /*white-space: nowrap; !*文本不换行*!*/
        text-overflow: ellipsis;
    }
</style>
