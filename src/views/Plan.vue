<template>
    <div id="plan" data-automation="plan">

        <div class="plan-banner">
            <div class="pb-con">
                <h3>云+端+运营</h3>
                <h3>提供一站式IoT解决方案</h3>
                <p>沉淀几米20年、2000W+客户的业务场景积累</p>
                <p>提供车联网、智慧民生、智慧城市和金融风控 等多个领域的解决方案</p>
            </div>    
        </div>

        <div class="scheme">
				<div class="scheme-title">
					<h3>方案架构</h3>
				</div>
				<div class="scheme-img">
					<img src="../assets/img/img/keshihua.png">
				</div>
		</div>

        <div class="solution">
            <div class="solution-title">
                <h3>行业解决方案</h3>
                <p>与几米并肩而行，将几米成熟且完善的解决方案赋能您的发展目标，共创物联网美好生态</p>
            </div>
            <ul class="solution-sel">
                <li v-for="(item,index) in planSolu" :key="index">
                    <div class="solution-capsule" :style="item.iconurl">
                        <div class="solution-cs">
                            <div class="solution-capsule-cnt">
                                <img :src="item.icon">
                                <p class="solution-icon-vehicles"> {{ item.iconTitle }} </p>
                                <div class="solution-icon-cnt">
                                    <p>{{ item.iconContent }}</p>
                                    <div class="solution-list">
                                        <!-- <router-link tag="div" class="jump-text" :to="item.path1"><span>{{ item.router1 }}</span></router-link> -->
                                        <div class="jump-text"><span><a @click="run(item.path1)">{{ item.router1 }}</a></span></div>
                                        <div class="jump-text"><span><a @click="run(item.path2)">{{ item.router2 }}</a></span></div>
                                        <div class="jump-text"><span><a @click="run(item.path3)">{{ item.router3 }}</a></span></div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </li>
            </ul>
        </div>

        <div class="partner">
            <div class="partner-title">
                <h3>合作伙伴</h3>
            </div>
            <div class="partner-con">
                <ul>
                    <li><img src="../assets/img/planImg/baidu.png" alt=""></li>
                    <li><img src="../assets/img/planImg/tengxun.png" alt=""></li>
                    <li><img src="../assets/img/planImg/ali.png" alt=""></li>
                    <li><img src="../assets/img/planImg/gaode.png" alt=""></li>
                    <li><img src="../assets/img/planImg/kailide.png" alt=""></li>
                    <li><img src="../assets/img/planImg/yadi.png" alt=""></li>
                    <li><img src="../assets/img/planImg/didi.png" alt=""></li>
                    <li><img src="../assets/img/planImg/shunfeng.png" alt=""></li>
                </ul>
            </div>
            
        </div>

        <Contact></Contact>
        <Footer></Footer>
        <Sidebar></Sidebar>
    </div>
</template>

<script>
// import Layout from "../components/Layout.vue"
import Contact from "../components/Contact.vue"
import Footer from "../components/Footer.vue"
import Sidebar from "../components/Sidebar.vue"
export default {
    name: "plan",
    components: {
        // Layout,
        Contact,
        Footer,
        Sidebar
    },
    data (){
        return {
            planSolu:[
                {        
                    iconurl: {
                        backgroundImage:
                        "url(" + require("../assets/img/planImg/1.png") + ")",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cotain"
                    },
                    icon: require("../assets/img/planImg/chelianwang.png"),
                    iconTitle: "车联网",
                    iconContent: "实现出行工具的物联化管理、控制与信息化服务",
                    path1: 'https://www.jimigroup.com/solution/qsycl/',
                    path2: 'https://www.jimigroup.com/solution/zhwl/',
                    path3: 'https://www.jimigroup.com/solution/ycgl/',
                    router1: "公车管理",
                    router2: "物流车辆管理",
                    router3: "快递配送车辆管理"

                },
                {
                    iconurl:{
                        backgroundImage:
                        "url(" + require("../assets/img/planImg/2.png") + ")",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cotain"
                    },
                    icon: require("../assets/img/planImg/zhihuichengshi.png"),
                    iconTitle: "智慧民生",
                    iconContent: "将“人”与“公共服务”通过数字化的方式全面连接并综合性管理",
                    path1: 'https://www.jimigroup.com/solution/zhmc/',
                    path2: 'https://www.jimigroup.com/solution/zhxy/',
                    path3: 'https://www.jimigroup.com/solution/zhjh/',
                    router1: "智慧牧场",
                    router2: "智慧校园",
                    router3: "智慧监护"
                },
                {        
                    iconurl: {
                        backgroundImage:
                        "url(" + require("../assets/img/planImg/3.png") + ")",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cotain"
                    },
                    icon: require("../assets/img/planImg/zhihiuxiaoyuan.png"),
                    iconTitle: "智慧城市",
                    iconContent: "利用几米物联先进技术，实现城市智慧式管理和运行",
                    path1: 'https://www.jimigroup.com/solution/zhzw/',
                    path2: 'https://www.jimigroup.com/solution/zhcx/',
                    path3: 'https://www.jimigroup.com/solution/gxcx/',
                    router1: "智慧政务",
                    router2: "智慧出行",
                    router3: "共享设备"
                },
                {        
                    iconurl: {
                        backgroundImage:
                        "url(" + require("../assets/img/planImg/4.png") + ")",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cotain"
                    },
                    icon: require("../assets/img/planImg/fengkong.png"),
                    iconTitle: "金融风控",
                    iconContent: "为新金融行业提供量身定制的云计算服务",
                    path1: 'https://www.jimigroup.com/solution/qcjr/',
                    router1: "汽车金融风控管理"
                },
            ]
        }
    },
    methods: {
        run(e){
            window.open(e,'_blank')
        }
    }
        
}
</script>

<style scoped>
.plan-banner{
    width: 100%;
    height: 750px;
    background: url('../assets/img/banner/banner2.png') no-repeat center center;
    background-size: 100%;
    position: relative;
}
.pb-con{
    width: 567px;
    position: absolute;
    top: 20%;
    left: 20%;
}
.pb-con h3{
    width: 100%;
    height: 124px;
    font-size:50px;
    font-weight:500;
    color:rgba(255,255,255,1);
    line-height: 124px;
}
.pb-con p{
    width: 100%;
    /* margin-right: 63px; */
    padding: 20px 0 20px 63px;
    font-size:25px;
    font-weight:500;
    color:rgba(255,255,255,1);
    position: relative;
}
.pb-con p::before{
    content:"";
    width:15px;
    height:15px;
    background:rgba(255,255,255,1);
    position: absolute;
    left: 18px;
    top: 30px;
}
.scheme{
    width: 100%;
    height: 860px;
    background-color: #fff;
    display: flex;
    flex-direction:column;
}
.scheme-title{
    width: 100%;
}
.scheme-title h3{
    width: 100%;
    height: 250px;
    /* margin-top: 90px; */
    text-align: center;
    line-height: 250px;
    font-size:30px;
    font-weight:500;
    color:rgba(51,51,51,1);
}
.scheme-img{
    width: 100%;
}
.scheme-img>img{
    width: 1037px;
    height: 558px;
    display: block;
    margin: auto;
}

.solution{
    width: 1180px;
    height: 980px;
    margin: 0 auto;
    background:rgba(246,247,252,1);
}
.solution-title{
    width: 100%;
    height: 330px;
    text-align: center;
    display: flex;
    flex-direction:column;
}
.solution-title h3{
    height: 68px;
    margin-top: 80px;
    font-size:30px;
    font-weight:500;
    color:rgba(51,51,51,1);
    line-height: 68px;
}
.solution-title p{
    height: 62px;
    font-size:24px;
    font-weight:400;
    color:rgba(102,102,102,1);
    line-height: 62px;
}
.solution-sel{
    width: 100%;
    height: 630px;
    display: flex;
    justify-content:center;

}
.solution-sel li{
    width: 25%;
    height: 500px;
    margin-right: 10px;
    transition: all 0.7s;
}
.solution-capsule{
    width: 100%;
    height: 100%;
    color: #fff;
    text-align: center;
    background-color: rgba(0, 210, 255, 0.85);
}
.solution-cs{
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .5);
    /* transform: translateY(170px) */
}
.solution-capsule-cnt{
    transform: translateY(170px)
}
.solution-capsule-cnt img{
    width: 50px;
}
.solution-icon-vehicles{
    font-size: 24px;
}
.solution-icon-cnt{
    display: none;
    padding: 0 15px;
    font-size: 14px;
    line-height: 20px;
    position: relative;
    /* color: rgba(255, 255, 255, 1); */
}
.solution-icon-cnt p::after{
    content: "";
    position: absolute;
    top: 47px;
    left: 46%;
    width: 20px;
    height: 5px;
    background: #fff;
}
.solution-list{
    margin-top: 20px;
}
.jump-text {
    padding-top: 32px;
    font-size: 18px;
}
.jump-text a{
    text-decoration:none;
    color: #9DD3FA;
}
.jump-text a:hover{
    opacity: 0.66;
}
.solution-sel li:hover{
    /* cursor: pointer; */
    transform: scale(1.1, 1.1);
}
.solution-sel li:hover .solution-cs{
    transition: all 0.7s;
    background:linear-gradient(180deg,rgba(5,73,255,0.7261) 0%,rgba(6,13,52,0.7261) 100%);
    /* box-shadow: 0 2 38 18 #4662FF; */
}
.solution-sel li:hover .solution-capsule-cnt{
    transition: all 0.7s;
    transform: translateY(80px);
}
.solution-sel li:hover .solution-icon-cnt{
    display: block;
}
.partner{
    width: 100%;
    height: 530px;
    background:rgba(32,32,139,1);
}
.partner-title{
    width: 100%;
    height: 197px;
    /* padding-top: 120px; */
    text-align: center;
}
.partner-title h3{
    height: 197px;
    font-size:30px;
    font-weight:500;
    color:rgba(255,255,255);
    line-height: 197px;
    text-align: center;
}
.partner-con{
    width: 100%;
    height: 300px;
}
.partner-con ul{
    width: 1059px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
.partner-con ul li{
    width: 217px;
    height: 109px;
    margin-bottom: 9px;
}
</style>