<template>
    <div id="platform" data-automation="platform">
        <!-- <h1>运营平台</h1> -->
        <div class="platform-banner">
            <div class="platban-con">
                <h3>几米物联网CMP系统</h3>
                <p>帮助您完成物联网卡从出入库管理、套餐管理、充值续费、报 表统计到财务管理等的全流程管理和运营工作</p>
            </div>
        </div>

        <div class="platform-adv">
            <div class="platadv-title">
                <h3>产品优势</h3>
            </div>
            <div class="platadv-items">
                <div class="items-left">
                    <h4>通用平台</h4>
                    <p>涵盖物联网卡管理的所有基础功能</p>
                    <ul>
                        <li>出入库管理</li>
                        <li>套餐管理</li>
                        <li>充值续费</li>
                        <li>子账户管理</li>
                        <li>报表统计 财务管理 <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;……</li>
                    </ul>
                </div>
                <div class="items-center">
                    <h4>通用平台</h4>
                    <h4 class="jia">+</h4>
                    <h4>定制平台</h4>
                    <p>满足您不同阶段的发展需求</p>
                </div>
                <div class="items-right">
                    <h4>定制平台</h4>
                    <p>除基础功能外，可增加针对公司特殊管 理运营需求的功能和服务</p>
                    <ul>
                        <li>设备管理系统数据互通</li>
                        <li>定制充值价格体系</li>
                        <li>定制统计报表</li>
                        <li>定制功能组件</li>
                        <li>定制系统UI 选配增值服务 <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;……</li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="platform-cases">
            <div class="cases-title">
                <h3>应用案例</h3>
            </div>
            <ul class="cases-sel">
                <li v-for="(item,index) in platformCases" :key="index">
                    <div class="cases-cap" :style="item.iconurl">
                        <div class="cases-cs">
                            <div class="cases-cap-cnt">
                                <img :src="item.icon" />
                                <p class="cases-icon-vehicles">{{ item.iconTitle }}</p>
                                <div class="cases-icon-cnt">
                                    <p>{{ item.iconContent }}</p>
                                    <p>{{ item.iconContents }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
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
    name: "platform",
    components:{
        Contact,
        Footer,
        Sidebar
    },
    data() {
        return {
            platformCases: [
                {
                    iconurl: {
                        backgroundImage:
                            "url(" +
                            require("../assets/img/platformImg/1.png") +
                            ")",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cotain"
                    },
                    icon: require("../assets/img/platformImg/dailishang.png"),
                    iconTitle: "物联网卡经销商",
                    iconContent:
                        "通过CMP系统，经销商对外可以完成对下级经销商和客户的管理目标，实现调整下级的代理价格、了解物联网卡的使用数据、进行财务账单的管理及获取分润等。对内则可以新增多个子账户并设置不同的权限身份，以方便公司内部其他人员的使用。"
                },
                {
                    iconurl: {
                        backgroundImage:
                            "url(" +
                            require("../assets/img/platformImg/2.png") +
                            ")",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cotain"
                    },
                    icon: require("../assets/img/platformImg/dianzi.png"),
                    iconTitle: "设备制造商",
                    iconContent:
                        "几米物联可以向客户提供1~6个月的无任何 收费的处于沉默期的物联网卡，制造商可 以通过CMP系统实时管控物联网卡的激活 等状况，并且可以和自己的设备出货系统 在出货时实现数据互通，若设备在出货时 搭配的物联网卡沉默期不足，可自动延长 并同步数据更新等。"
                },
                {
                    iconurl: {
                        backgroundImage:
                            "url(" +
                            require("../assets/img/platformImg/3.png") +
                            ")",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cotain"
                    },
                    icon: require("../assets/img/platformImg/jianguan.png"),
                    iconTitle: "需要监管物联网设备的企业",
                    iconContent:
                        "企业可以利用CMP系统实现设备使用流量的监控、充值续费和停开机管理，也可以实现短信的发送和监控管理等。",
                    iconContents:
                        "除此之外还可以和几米物联的途强等产品搭配使用，实现设备的实时定位和电子围栏管控等。"
                }
            ]
        };
    }
};
</script>

<style scoped>
.platform-banner {
    width: 100%;
    height: 750px;
    background: url("../assets/img/banner/banner4.png") no-repeat center center;
    background-size: 100%;
    position: relative;
}
.platban-con {
    width: 35.5%;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
    position: absolute;
    left: 20%;
    top: 30%;
}
.platban-con h3 {
    height: 80px;
    font-size: 50px;
    line-height: 80px;
}
.platban-con p {
    font-size: 25px;
}
.platform-adv {
    width: 1180px;
    height: 780px;
    margin: 0 auto;
    text-align: center;
}
.platadv-title {
    width: 100%;
    height: 250px;
    /* padding-top: 40px; */
}
.platadv-title h3 {
    height: 250px;
    font-size: 30px;
    font-weight: 500;
    color: rgba(51, 51, 51, 1);
    line-height: 250px;
}
.platadv-items {
    width: 100%;
    height: 530px;
    display: flex;
    justify-content: center;
}
.platadv-items > div {
    width: 33%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.platadv-items>.items-left>ul>li{
    text-align: left;
    margin-left: 100px;
}
.platadv-items>.items-right>ul>li{
    text-align: left;
    margin-left: 70px;
}
.items-left,
.items-right {
    border: 1px solid rgba(85, 125, 255, 1);
}
.items-center {
    border-top: 1px solid rgba(85, 125, 255, 1);
    border-bottom: 1px solid rgba(85, 125, 255, 1);
}
.platadv-items h4 {
    font-size: 24px;
    font-weight: 500;
    color: rgba(85, 125, 255, 1);
}
.items-center .jia{
    margin: 50px auto;
}
.platadv-items p {
    width: 340px;
    margin: 25px auto;
    font-size: 20px;

    font-weight: 400;
    color: rgba(102, 102, 102, 1);
}
.platadv-items ul {
    margin-top: 25px;
    list-style: square inside url("../assets/img/flowcardImg/youjiantou.png");
    font-size: 23px;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
}
.platform-cases {
    width: 1180px;
    height: 960px;
    margin: 0 auto;
    background: rgba(246, 247, 252, 1);
}
.cases-title {
    width: 100%;
    height: 300px;
    font-size: 30px;;
    font-weight: 500;
    color: rgba(51, 51, 51, 1);
    line-height: 300px;
    text-align: center;
}

.cases-sel {
    width: 100%;
    height: 730px;
    display: flex;
    justify-content: center;
}
.cases-sel li {
    width: 360px;
    height: 530px;
    margin-right: 30px;
    transition: all 0.7s;
}
.cases-cap {
    width: 100%;
    height: 100%;
    color: #fff;
    text-align: center;
    background-color: rgba(0, 210, 255, 0.85);
}
.cases-cs {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
}
.cases-cap-cnt {
    transform: translateY(160px);
    position: relative;
}
.cases-cap-cnt img {
    width: 50px;
}
.cases-icon-vehicles::after {
    content: "";
    position: absolute;
    top: 100px;
    left: 170px;
    width: 20px;
    height: 5px;
    background: #fff;
}
.cases-icon-vehicles {
    font-size: 24px;
}
.cases-icon-cnt {
    display: none;
    padding: 0 15px;
    margin-top: 30px;
    font-size: 14px;
    line-height: 20px;
}
.cases-icon-cnt p {
    width: 300px;
    text-align: left;
    margin: auto;
}
.cases-sel li:hover {
    /* cursor: pointer; */
    transform: scale(1.1, 1.1);
}
.cases-sel li:hover .cases-cs {
    transition: all 0.7s;
    /* transform: translateY(80px); */
    background:linear-gradient(180deg,rgba(5,73,255,0.7261) 0%,rgba(6,13,52,0.7261) 100%);
/* opacity:0.7261; */
}
.cases-sel li:hover .cases-cap-cnt {
    transition: all 0.7s;
    transform: translateY(80px);
}
.cases-sel li:hover .cases-icon-cnt {
    display: block;
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