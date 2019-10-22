<template>
    <div id="home" data-automation="home">
        <div class="banner">
            <Carousel v-model="value2" loop :autoplay="setting.autoplay" :dots="setting.dots" :arrow="setting.arrow" class="lunbo">
                <!-- :arrow="setting.arrow" -->
                <CarouselItem>
                    <div class="demo-carousel" @mouseenter="isAuto" @mouseleave="isAutoa">
                        <div class="pos">
                            <img src="../assets/img/banner/banner1.png" alt />
                            <div class="pos-con">
                                <h3>几米物联网卡</h3>
                                <h3>物联网卡运营解决方案提供商</h3>
                            </div>
                        </div>
                    </div>
                </CarouselItem>
                <CarouselItem>
                    <div class="demo-carousel" @mouseenter="isAuto" @mouseleave="isAutoa">
                        <img src="../assets/img/banner/shouyebanner2.png" alt />
                        <div class="banner2">
                            <h3>企业客户免费试用</h3>
                            <!-- <button></button> -->
                            <router-link to="contactUs" tag="button" style="border:0;">立即申请</router-link>
                        </div>
                    </div>
                </CarouselItem>
                <CarouselItem>
                    <div class="demo-carousel" @mouseenter="isAuto" @mouseleave="isAutoa">
                        <div>
                            <img src="../assets/img/banner/shouyebanner3.png" alt />
                            <div class="banner3">
                                <h3>智享未来</h3>
                                <h3>连接万物</h3>
                                <router-link to="contactUs" tag="button" style="border:0;">立即咨询</router-link>
                            </div>
                        </div>
                        
                    </div>
                </CarouselItem>
            </Carousel>
        </div>

        <div class="advantages">
            <div class="adv-title">
                <h3>平台亮点</h3>
                <p>让物联网卡运营成本更低、效率更高</p>
            </div>
            <ul class="adv-items">
                <li>
                    <div class="items-img">
                        <img src="../assets/img/homImg/icon_simcard.png" alt />
                    </div>
                    <div class="items-con">
                        <h4>支持多家SIM卡</h4>
                        <p>与中国移动、中国联通等运营商深度合作直接拿卡 提供各种类型的通用流量和定向流量物联网卡</p>
                    </div>
                </li>
                <li>
                    <div class="items-img">
                        <img src="../assets/img/homImg/icon_report.png" alt />
                    </div>
                    <div class="items-con">
                        <h4>自动监控并告警</h4>
                        <p>系统预设+用户自设预警规则自动监控物联网卡流量、套 餐有效期和停开机等信息并及时告警或处理</p>
                    </div>
                </li>
                <li>
                    <div class="items-img">
                        <img src="../assets/img/homImg/icon_terminal.png" alt />
                    </div>
                    <div class="items-con">
                        <h4>多终端可操作</h4>
                        <p>PC端、移动端和微信公众号等多种终端皆可操作 满足物联网卡便捷充值、节假日便利值班等需求</p>
                    </div>
                </li>
            </ul>
        </div>

        <div class="solution">
            <div class="solution-title">业务场景及方案优势</div>
            <ul class="solution-sel">
                <li v-for="(item,index) in solution" :key="index">
                    <div class="solution-tx" :style="item.bgi">
                        <div class="solution-cs">
                            <div class="tx-box">
                                <div class="box-icon">
                                    <img :src="item.iconurl"/>
                                    <h3>{{ item.iconTitle }}</h3>
                                </div>
                                <div class="box-con">
                                    <p>{{ item.iconContent }}</p>
                                </div>
                            </div>   
                        </div> 
                    </div>
                </li>
            </ul>
        </div>

        <div class="littleBanner">
            <Carousel v-model="value3" :autoplay="setting1.autoplay" :dots="setting1.dots"  :arrow="setting1.arrow" :autoplay-speed="setting1.autoplaySpeed" class="littlelunbo">
                <CarouselItem>
                    <div class="demo-carousel" @mouseenter="isAuto" @mouseleave="isAutoa">
                            <img src="../assets/img/banner/littlebanner1.png" alt />
                            <div class="lb-fl">
                                <p>1000W+</p>
                                <p>600+</p>
                                <p>200+</p>
                            </div>
                            <div class="lb-fr">
                                <p>每年研发资金</p>
                                <p>研发人员</p>
                                <p>知识产权专利</p>
                            </div>
                            <div class="lb-fb">
                                <p>几米物联</p>
                                <p>给您强大的技术支持</p>
                            </div>                 
                    </div>
                </CarouselItem>
                <CarouselItem>
                    <div class="demo-carousel" @mouseenter="isAuto" @mouseleave="isAutoa">
                            <img src="../assets/img/banner/littlebanner2.png" alt />
                            <div class="lb-fl">
                                <p>400W+</p>
                                <p>6000+</p>
                            </div>
                            <div class="lb-fr">
                                <p>物联网卡运营平台</p>
                                <p>用户的信任</p>
                            </div>
                            <div class="lb-fb">
                                <p>几米物联网卡 </p>
                                <p>祝您连接未来</p>
                            </div>                 
                    </div>
                </CarouselItem>
                
            </Carousel> 
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
    name: "home",
    components: {
        // Layout,
        Contact,
        Footer,
        Sidebar
    },
    data() {
        return {
            value2: 0,
            value3: 0,
            setting: {
                autoplay: true,
                dots: 'inside',
                arrow: 'always'
            },
            setting1: {
                autoplay: true,
                dots: 'inside',
                arrow: 'never',
                autoplaySpeed: 4000
            },
            solution: [
                {
                    bgi: {
                        backgroundImage:
                        "url(" + require("../assets/img/homImg/pic1.png") + ")",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cotain",
                        backgroundPosition:"center center"
                    },
                    iconurl: require("../assets/img/homImg/meiyuan.png"),
                    iconTitle: "代理商渠道分润",
                    iconContent:
                        "支持代理商自主设定价格，多层级渠道管理与实时分销返利"
                },
                {
                    bgi: {
                        backgroundImage:
                        "url(" + require("../assets/img/homImg/pic2.png") + ")",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cotain",
                        backgroundPosition:"center center"
                    },
                    iconurl: require("../assets/img/homImg/fangxiang.png"),
                    iconTitle: "特定场景定向流量",
                    iconContent:
                        "当设备只会访问特定的网址或APP时，使用定向流量卡将会更加便于管理，成本也更低"
                },
                {
                   bgi: {
                        backgroundImage:
                        "url(" + require("../assets/img/homImg/pic3.png") + ")",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cotain",
                        backgroundPosition:"center center"
                    },
                    iconurl: require("../assets/img/homImg/lianjie.png"),
                    iconTitle: "二次开发API接口",
                    iconContent:
                        "微信充值等多个API接口，方便用户进行二次开发"
                },
                {
                   bgi: {
                        backgroundImage:
                        "url(" + require("../assets/img/homImg/pic4.png") + ")",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cotain",
                        backgroundPosition:"center center"
                    },
                    iconurl: require("../assets/img/homImg/yanjing.png"),
                    iconTitle: "保障安心预警中心",
                    iconContent:
                        "系统、邮件和短信提醒，及时将SIM卡告警消息通知给用户"
                }
            ],

        }
    },
    methods: {
        isAuto() {
            this.setting.autoplay = false;
        },
        isAutoa() {
            this.setting.autoplay = true;
        },
    }
};
</script>

<style scoped>
/* lang="stylus" */

.banner {
    width: 100%;
    height: 680px;
}
.lunbo img{
    width: 100%;
    transform: translateY(-10%);
}
.lunbo{
    width: 100%;
    height: 100%;
    overflow: hidden;
}
.lunbo .pos,.demo-carousel{
    position: relative;
}
.pos .pos-con{
    width: 50%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -90%);
}
.pos-con h3{
    padding: 37px;
    font-size:50px;
    font-weight:500;
    color:rgba(255,255,255,1);
    text-align: center;
}
.banner2,.banner3{
    width: 50%;
    position: absolute;
    left: 20%;
    top: 250px;
}
.banner3 h3,.banner2 h3{
    font-size:50px;
    margin-bottom: 63px;
    font-weight:500;
    color:rgba(255,255,255,1);
}
.banner3 h3{
    padding-left: 45px;
    position: relative;
}
.banner3 h3::before{
    content:"";
    width:15px;
    height:15px;
    background:rgba(255,255,255,1);
    position: absolute;
    left: 0px;
    top: 30px;
}
.banner3 button,.banner2 button{
    width:250px;
    height:85px;
    background:rgba(85,125,255,1);
    border-radius:48px;
    font-size:40px;
    font-weight:500;
    color:rgba(255,255,255,1);
    text-align: center;
    line-height: 85px;
    margin: 0;
    padding: 0;
    border: 1px solid transparent; 
    outline: none;
    cursor: pointer; 
}
.lunbo >>> .ivu-carousel-dots-inside{
    bottom: 55px;
}
.lunbo >>> .ivu-carousel-dots li{
    padding: 0;
}
.lunbo >>> .ivu-carousel-dots li button{
    width: 8px;
    height: 10px;
    background:rgba(147,147,147,1);
    margin-left: 10px;
}
.lunbo >>> .ivu-carousel-dots li.ivu-carousel-active>button{
    width: 47px;
    background:rgba(255,255,255,1);
}
.lunbo >>> .ivu-carousel-arrow{
    width:60px;
    height:60px;
    opacity:0.5502; 
    border-radius: 0;
    font-size: 4em;
}
.advantages {
    width: 1180px;
    height: 800px;
    margin: 0 auto;
    /* background:rgba(255,255,255,1); */
}
.adv-title {
    width: 100%;
    height: 225px;
    display: flex;
    flex-direction: column;
}
.adv-title h3 {
    width: 100%;
    height: 30px;
    margin-top: 100px;
    font-size: 30px;
    font-weight: 500;
    color:rgba(51,51,51,1);
    text-align: center;
}
.adv-title p {
    width: 100%;
    font-size: 24px;
    margin-top: 35px;
    font-weight: 400;
    color:rgba(102,102,102,1);
    text-align: center;
}
.adv-items {
    width: 100%;
    height: 555px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.adv-items li {
    width: 20%;
    height: 474px;
    display: flex;
    flex-direction: column;
}
.items-img {
    width: 161px;
    height: 161px;
    margin: 0 auto;
}
.items-img img{
    width: 100%;
    display: block;
}
.items-con {
    width: 100%;
    text-align: center;
}
.items-con h4 {
    height: 64px;
    margin: 20px 0;
    font-size: 24px;;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
    line-height: 64px;
}
.items-con p {
    padding: 5px 0;
    font-size: 20px;
    font-weight: 400;
    color: rgba(102, 102, 102, 1);
}

.solution {
    width: 1180px;
    height: 700px;
    margin: 0 auto;
    background:rgba(246,247,252,1);
}
.solution-title {
    width: 100%;
    height: 200px;
    font-size: 30px;
    font-weight: 500;
    color:rgba(51,51,51,1);
    line-height: 200px;
    text-align: center;
}
.solution-sel {
    width: 100%;
    height: 500px;
    display: flex;
    justify-content: center;
}
.solution-sel li {
    width: 360px;
    height: 480px;
    margin-right: 10px;
}
.solution-sel li:hover .solution-cs{
    transition: all 0.7s;
    background:linear-gradient(180deg,rgba(62,73,103,0.7261) 0%,rgba(6,13,52,0.7261) 100%);
}
.solution-sel li:hover .tx-box .box-icon{
    transform: translateY(-83px)
}
.solution-sel li:hover .box-icon img{
    transform: scale(.7);
}
.solution-sel li:hover .box-con p{
    cursor: pointer;
    opacity: 1;
    transform: translateY(-102px);
}
.solution-tx{
    width: 100%;
    height: 100%;
    text-align: center;
    position: relative;
}
.solution-cs{
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .5);
}
.solution-sel li .tx-box{
    color: #fff;
    text-align: center;
    transform: translateY(180px)
}
.solution-sel li .tx-box .box-icon{
    transition: transform .8s .02s
}
.box-icon img{
    height: 32px;
    margin: 0 auto;
    transform-origin: bottom;
    transition: transform .6s
}
.box-icon h3{
    font-size: 18px;
    margin: 10px 0 52px 0;
    line-height: 36px;
    position: relative
}
.box-icon h3::after{
    content: "";
    height: 2px;
    width: 20px;
    background-color: #fff;
    display: block;
    margin-top: 10px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%)
}
.box-con{
    width: 100%;
    margin-top: 30px;
}
.box-con p{
    width: 176px;
    margin: 0 auto;
    text-align: left;
    opacity: 0;
    line-height: 26px;
    font-size: 12px;
    transition: opacity .8s .2s, transform .8s .04s
}
.littleBanner{
    width: 100%;
    height: 700px;
    background:rgba(255,255,255,1);
    overflow: hidden;
}
CarouselItem{
    width: 100%;
    height: 100%;
} 
 .littlelunbo{
    width: 100%;
    height: 100%;
}
.littlelunbo img{
    width: 540px;
    /* height: 589px; */
    display: block;
    margin: 181px 0 180px 320px;
}
.lb-fl{
    width: 151px;
    position: absolute;
    top: 70px;
    left: 50%;
}
.lb-fl p{
    padding: 40px auto;
    font-size:30px;
    font-weight:500;
    text-align: right;
    color:rgba(70,152,255,1);
}
.lb-fr{
    width: 320px;
    position: absolute;
    top: 70px;
    right: 300px;
}
.lb-fr p{
    padding: 40px auto;
    text-align: left;
    font-size:30px;
    font-weight:500;
    color:rgba(51,51,51,1);
}
.lb-fb{
    width: 360px;
    position: absolute;
    bottom: 50px;
    right: 350px;
}
.lb-fb p{
    padding: 40px auto;
    text-align: right;
    font-size:30px;
    font-weight:500;
    color:rgba(51,51,51,1);
}
.littlelunbo >>> .ivu-carousel-dots li button{
    width:15px;
    height:8px;
    background:rgba(50,120,255,1);
}
.littlelunbo >>> .ivu-carousel-dots li.ivu-carousel-active>button{
    width:47px;
    height:8px;
    background:rgba(70,152,255,1);
}
.littlelunbo >>> .ivu-carousel-dots-inside{
    bottom: 55px;
}
.littlelunbo >>> .ivu-carousel-item{
    width: 100%;
}
/* style="border:0;" */
</style>