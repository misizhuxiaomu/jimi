<template>
    <div class="sidebar" data-automation="sidebar">
        <div class="popup">
                <div><img src="../assets/img/img/微信.png" alt=""></div>
                <div><img src="../assets/img/img/QQ.png" alt=""></div>
                <div><img src="../assets/img/img/电话.png" alt=""></div>
                <div class="erweicode"><img src="../assets/img/img/erweicode.jpg" alt="" ></div>
            </div>
        <BackTop :height="400" :bottom="100" :right="20">
            <div class="top"><img src="../assets/img/img/顶上.png" alt=""></div>
        </BackTop>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.sidebar{
    width: 36px;
    height: 159px;
    position: fixed;
    top: 60%;
    right: 20px;
}
.popup{
    width: 36px;
    height: 123px;
    position: relative;
}
.erweicode{
    width: 256px;
    height: 256px;
    position: absolute;
    left: -280px;
    top: -18px;
    display: none;
}
.popup:hover .erweicode{
    display: block;
}
.popup div{
    width: 36px;
    height: 36px;
    margin-bottom: 5px;
}
.top{
    width: 36px;
    height: 36px;
    background: rgba(255, 255, 255, .7);
    border-radius: 2px;
}
</style>