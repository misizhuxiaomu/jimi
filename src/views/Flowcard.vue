<template>
    <div id="flowcard" data-automation="flowcard">
        <!-- <h1>流量卡</h1> -->
        <div class="flowcard-banner">
            <div class="flow-top">
                <h3>通用流量卡</h3>
                <p>全部直接采购于运营商，确保质量的可靠和 稳定</p>
            </div>
            <div class="flow-bto">
                <h3>定向流量卡</h3>
                <p>提供车联网、智慧民生、智慧城市和金融风控 等多个领域的解决方案</p>
            </div>
        </div>

        <div class="card-type">
            <div class="type-title">
                <h3>卡片类型</h3>
            </div>
            <div class="card-items">
                <div class="card-plug">
                    <div class="plug-img">
                        <img src="../assets/img/flowcardImg/huangka.png" alt="">
                    </div>
                    <div class="items-con">
                        <h4>几米物联提供常见的插拔式物联网卡</h4>
                        <ul>
                            <li>卡片尺寸：标准式、Micro、Nano</li>
                            <li>适用场景：一般日常环境</li>
                            <li>优点：兼容常见的大多数设备，安装方便</li>
                            <li>缺点：不适用于震动和腐蚀等特殊场景，安全性较差</li>
                        </ul>
                    </div>
                    
                </div>
                <div class="card-directional">
                    <div class="items-con">
                        <h4>以及贴片式物联网卡</h4>
                        <ul>
                            <li>卡片尺寸：5 * 6、2 * 2</li>
                            <li>适用场景：震动和腐蚀等较为恶劣的环境</li>
                            <li>优点：不易拆除，安全性好，比较稳定 </li>
                            <li>缺点：可选尺寸少，安装需焊接，卡片出现问题不易更换</li>
                        </ul>
                    </div>
                    <div class="directional-img">
                        <img src="../assets/img/flowcardImg/baika.png" alt="">
                    </div>
                </div>
                <div class="card-nb">
                    <div class="nb-img">
                        <img src="../assets/img/flowcardImg/heika.png" alt="">
                    </div>
                    <div class="items-con">
                        <h4>同时几米物联也提供NB-IoT卡</h4>
                        <ul>
                            <li>卡片尺寸：标准式、Micro、Nano、5 * 6、2 * 2</li>
                            <li>适用场景：流量小、对时延不敏感</li>
                            <li>优点：低功耗，广覆盖，多连接</li>
                            <li>缺点：成本偏高，不具有在低功耗状态下快速建立双向通信的能力</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div class="process">
            <div class="process-title">
                <h3>合作流程</h3>
            </div>
            <div class="process-items">
                <div class="process-list">
                    <img src="../assets/img/flowcardImg/1.png" alt="">
                    <p>需求洽谈</p>
                </div>
                <div class="process-list">
                    <img src="../assets/img/flowcardImg/2.png" alt="">
                    <p>产品试用</p>
                </div>
                <div class="process-list">
                    <img src="../assets/img/flowcardImg/3.png" alt="">
                    <p>合同签订</p>
                </div>
                <div class="process-list">
                    <img src="../assets/img/flowcardImg/4.png" alt="">
                    <p>产品出库</p>
                </div>
                <div class="process-list-last">
                    <img src="../assets/img/flowcardImg/5.png" alt="">
                    <p>收货使用</p>
                </div>
            </div>
        </div>

        <Contact></Contact>
        <Footer></Footer>
        <Sidebar></Sidebar>

    </div>
</template>

<script>

import Contact from "../components/Contact.vue"
import Footer from "../components/Footer.vue"
import Sidebar from "../components/Sidebar.vue"
    export default {
        name: "flowcard",
        components:{
            Contact,
            Footer,
            Sidebar
        }
        
    }
</script>

<style scoped>
.flowcard-banner{
    width: 100%;
    height: 750px;
    background: url('../assets/img/banner/banner3.png') no-repeat center center;
    background-size: 100%;
    position: relative;
}
.flowcard-banner h3{
    margin-bottom: 30px;
    font-size:50px;
    font-weight:500;
    color:rgba(255,255,255,1);
    position: relative;
}
.flowcard-banner h3::before{
    content:"";
    width:15px;
    height:15px;
    background:rgba(255,255,255,1);
    position: absolute;
    left: -30px;
    top: 30px;
}
.flowcard-banner p{
    font-size:25px;
    font-weight:500;
    color:rgba(255,255,255,1);
}
.flow-top{
    width: 475px;
    position: absolute;
    top: 228px;
    left: 62%;
}
.flow-bto{
    width: 500px;
    position: absolute;
    top: 480px;
    left: 58%;
}
.card-type{
    width: 1180px;
    height: 1410px;
    margin: 0 auto;
}
.type-title{
    width: 100%;
    height: 250px;
}
.type-title h3{
    width: 100%;
    height: 250px;
    margin-top: 30px;
    font-size:30px;
    font-weight:500;
    color:rgba(51,51,51,1);
    text-align: center;
    line-height: 250px;
}
.card-items{
    width: 100%;
    /* height: 1010px; */
    display: flex;
    flex-direction: column;
    align-items: center;
}
.card-plug,.card-directional,.card-nb{
    width: 100%;
    height: 280px;
    display: flex;
    justify-content: space-between;
}
.card-directional{
    margin: 106px 0;
}
.items-con h4{
    height: 90px;
    font-size:24px;
    font-weight:500;
    color:rgba(51,51,51,1);
    line-height: 90px;
}
.items-con ul{
    list-style: square inside url('../assets/img/flowcardImg/youjiantou.png')
}
.items-con ul>li{
    height: 45px;
    font-size:20px;
    font-weight:400;
    color:rgba(51,51,51,1);
    line-height: 45px;
}
.process{
    width: 100%;
    height:588px;
    /* padding-top: 86px; */
    background:linear-gradient(90deg,rgba(0,20,153,1) 0%,rgba(61,61,216,1) 100%);
}
.process-title{
    width: 100%;
    height: 208px;
    /* padding-top: 86px; */
} 
.process-title h3{
    width: 100%;
    height: 208px;
    font-size:30px;
    font-weight:500;
    color:rgba(255,255,255,1);
    line-height: 208px;
    text-align: center;
}
.process-items{
    width: 100%;
    height: 290px;
    display: flex;
    justify-content: center;
}
.process-items p{
    height: 96px;
    font-size:24px;
    font-weight:400;
    color:rgba(255,255,255,1);
    line-height: 96px;
    text-align: center;
}
.process-list{
    margin-right: 100px;
    position: relative
}
.process-list img,.process-list-last img{
    width: 154px;
}
.process-list::after{
    content: " ";
    display: block;
    height: 42px;
    width: 42px;
    background: url("../assets/img/flowcardImg/zhixiangjiantou.png") no-repeat;
    background-size: 100%;
    position: absolute;
    top: 55px;
    left: 180px;
}
</style>