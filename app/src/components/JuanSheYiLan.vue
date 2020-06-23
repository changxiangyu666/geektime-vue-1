<template>
    <div style="padding: 0 10px 10px 10px;margin-top: 60px;">
        <div class="nav">
            <button class="button">btn</button>
            <p>圈舍一览</p>
        </div>
        <div class="basic">
            <span>基本信息</span>
            <table class="responsive">
                <tr>
                    <td class="title">圈舍名</td>
                    <td class="center" colspan="2">东区一号圈舍1111111111111111111111111111</td>
                </tr>
                <tr>
                    <td class="title">责任人</td>
                    <td class="center" colspan="2">刘晓林</td>
                </tr>
                <tr>
                    <td class="title">牲畜数量</td>
                    <td class="center">20头</td>
                    <td class="right right-btn right-width">
                        <button class="btn">1</button>
                    </td>
                </tr>
                <tr>
                    <td class="title" rowspan="2">牲畜批次</td>
                    <td class="center">西门塔尔-001批</td>
                    <td class="right right-btn right-width">
                        <button class="btn">2</button>
                    </td>
                </tr>
                <tr>
                    <td class="center">安格斯牛-001批</td>
                    <td class="right right-btn right-width">
                        <button class="btn">3</button>
                    </td>
                </tr>
            </table>
        </div>

        <div class="basic">
            <span>实时监控</span>
            <table class="responsive">
                <tr>
                    <td class="left left-btn">
                        <button class="btn">1号摄像头</button>
                    </td>
                    <td class="middle middle-btn">
                        <button class="btn">2号摄像头</button>
                    </td>
                    <td class="right right-btn">
                        <button class="btn">3号摄像头</button>
                    </td>
                </tr>
                <tr>
                    <td class="left left-btn">
                        <button class="btn">4号摄像头</button>
                    </td>
                    <td class="middle middle-btn">
                        <button class="btn"></button>
                    </td>
                    <td class="right right-btn">
                        <button class="btn"></button>
                    </td>
                </tr>
            </table>
        </div>

        <div class="basic">
            <span>生产动态骄傲</span>
            <div>
                <button class="btn">btn</button>
            </div>
            <table class="responsive">
                <tr>
                    <td class="left">2020-04-26 15:38:45ooooooooooooooooooooooooooooooo</td>
                    <td class="middle">刘晓宇</td>
                    <td class="right">投料</td>
                </tr>
                <tr>
                    <td class="left">2020-04-26 15:20:45</td>
                    <td class="middle">李万龙</td>
                    <td class="right">巡查</td>
                </tr>
                <tr>
                    <td class="left">2020-04-26 09:20:45</td>
                    <td class="middle">王淑芳</td>
                    <td class="right">清洁</td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        name: "index"
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
        padding: 0px 10px 10px 10px;
        margin-top: 10px;
        font-size: 16px;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-weight: normal;
        position: relative;
    }

    .basic > span {
        display: inline-block;
        padding: 15px;
        width: 100px;
    }

    .basic > div {
        display: inline-block;
        width: 55%;
        position: absolute;
        top: 0;
        right: 0;
    }

    .basic > table.responsive {
        width: 100%;
        margin: 0 auto;
        border: 1px solid #ccc;
        border-collapse: collapse;
        /*border-collapse:collapse合并内外边距(去除表格单元格默认的2个像素内外边距*/
    }

    /* 设置表格单元格边框 */
    table.responsive td {
        border: 1px solid #ccc;
        padding: .5em 1em;
    }

    .basic > table.responsive .left-btn, .basic > table.responsive .middle-btn, .basic > table.responsive .right-btn {
        padding: 0;
    }

    button.btn {
        padding: .5em 1em;
        border: 0;
        background-color: #fff;
        color: #DC522B;
        cursor: pointer;
        width: 100%;
        height: 100%;
    }

    .left-btn > button.btn:active, .middle-btn > button.btn:active, .right-btn > button.btn:active {
        padding: 8px 10px 5px 15px;
    }

    .basic > div button.btn {
        border: 0;
        background-color: #fff;
        color: #DC522B;
        cursor: pointer;
        width: 100%;
        height: 100%;
        padding: 15px;
        text-align: right;
    }

    .title {
        text-align: right;
        width: 90px;
    }

    .right-width {
        width: 40px;
    }

    .left, .middle, .right {
        text-align: center;
    }

    .left, .middle, .right, .center {
        max-width: 60px;
        overflow: hidden;
        /*white-space: nowrap; !*文本不换行*!*/
        text-overflow: ellipsis;
    }
</style>
