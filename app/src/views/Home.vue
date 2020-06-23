<template>
    <div id="nav">
        <div><router-link :to="`/JuanSheYiLan`">圈舍一览</router-link></div>
        <div><router-link :to="`/ZhengFangXing`">正方形</router-link></div>
    </div>
</template>

<script>
    export default {
        name: "Home"
    };
</script>

<style scoped>
    #nav a {
        display: inline-block;
        text-decoration: none;
        color: darkslategray;
        margin: 0 100px;
    }
</style>
