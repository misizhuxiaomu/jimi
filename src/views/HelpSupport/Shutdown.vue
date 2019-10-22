<template>
    <div id="shutDown" data-automation="shutDown">
        <!-- <h1>停机</h1> -->
        <div class="layout">
            <Sider :style="{position: 'fixed', height: '100vh', left: 200, overflow: 'auto'}" style="width: 315px; min-width: 315px; max-width: 325px;">
                 <!-- background: rgba(39,43,90,1); -->
                <div class="bigtitle">常见问题</div>
                <Menu theme="light" width="auto" :open-names="['1']" class="sel">
                    <Submenu name="1">
                        <template slot="title">
                            <a href="javascript:void(0)" @click="scroll('#B1')">停机续费</a>
                        </template>
                        <MenuItem name="1-1"><a href="javascript:void(0)" @click="scroll('#B2')">卡停机的触发条件</a></MenuItem>
                        <MenuItem name="1-2"><a href="javascript:void(0)" @click="scroll('#B3')">解除停机的条件</a></MenuItem>
                        <MenuItem name="1-3"><a href="javascript:void(0)" @click="scroll('#B4')">续费或购买叠加包</a></MenuItem>
                    </Submenu>
                    <Submenu name="2">
                        <template slot="title">
                            <a href="javascript:void(0)" @click="scroll('#B5')">结算时间</a>
                        </template>
                        <MenuItem name="2-1"><a href="javascript:void(0)" @click="scroll('#B6')">移动</a></MenuItem>
                        <MenuItem name="2-2"><a href="javascript:void(0)" @click="scroll('#B7')">联通</a></MenuItem>
                    </Submenu>
                    <Submenu name="3">
                        <template slot="title">
                            <a href="javascript:void(0)" @click="scroll('#B8')">超流量续费规则</a>
                        </template>
                    </Submenu>
                </Menu>
            </Sider>
            <Layout :style="{marginLeft: '315px'}">
                <Content :style="{padding: '0 16px 16px'}">
                    <Breadcrumb>
                        <BreadcrumbItem><router-link to="/index">首页</router-link></BreadcrumbItem>
                        <BreadcrumbItem><router-link to="/helpCenter">帮助中心</router-link></BreadcrumbItem>
                        <BreadcrumbItem>常见问题</BreadcrumbItem>
                    </Breadcrumb>
                    <Card>
                        <div style="padding: 80px 0 0 89px;">
                            <div class="shutdown-con">
                                <h3>帮助中心</h3>

                                <div>
                                    <h4><a id="B1">1、停机续费</a></a></h4>
                                    <div>
                                        <h5><a id="B2">1.1卡停机的触发条件</a></h5>
                                        <p>卡的有效期过期或流量用超，都会被自动停机。您可以通过公众号查询有效期或剩余流量，点击公众号菜单“流量查询”，输入卡号，查询即可。</p>
                                    </div>
                                    
                                    <div>
                                        <h5><a id="B3">1.2解除停机的条件</a></h5>
                                        <p>有效期过期，需通过续费才能继续使用。举个例子：卡的有效期为2018年8月20日，到了21日，卡会被停机；通过续费一年，有效期延长至2019年8月20日，则可恢复使用。</p>
                                        <p>流量用超，需等待下个结算周期，或者通过购买叠加包才能继续使用。举个例子：卡的套餐为10M/月，您使用了12M流量，卡会被停机；如需继续使用，您可以购买叠加包，比如购买10M，有效期1个月的叠加包，则您当月总流量为20M，剩余流量为 20 - 12 = 8M，卡会自动恢复使用；或者等到下一个结算周期（一般为下一个月），一样可以自动恢复使用。</p> 
                                    </div>
                                    
                                    <div>
                                        <h5><a id="B4">1.3续费或购买叠加包</a></h5>
                                        <p>您可以通过公众号菜单“流量查询”，输入卡号，查询卡信息，点击卡信息中的“充值”按钮，即可进行续费或叠加包购买。</p>
                                        <p>如下图示意：</p>
                                        <img src="../../assets/img/helpImg/tingjixufei.png" alt="">
                                        <p>或者您也可以联系上级经销商或出售给您的商户帮您处理。</p>
                                        <p>另外，等到停机后，再续费或购买叠加包，会有一定的延时。为了不影响您的正常使用请在停机前，及时续费或购买叠加包。</p>
                                    </div>
                                </div>
                                
                                <div>
                                    <h4><a id="B5">2、结算时间</a></h4>
                                    <div>
                                        <h5><a id="B6">2.1移动</a></h5>
                                        <p>如何识别自己的卡类型呢？您可以通过公众号菜单 - 流量查询进入查询页面，在查询页面的输入框中，输入您的卡号并点击查询，根据查询结果，即可识别您的卡类型。</p>
                                        <p>查询结果和卡类型如下图示意：</p>
                                        <img src="../../assets/img/helpImg/jiesuanshijian.png" alt="">
                                        <p>卡类型为“移动”结算时间为每月25号~月底之间</p>
                                    </div>
                                    
                                    <div>
                                        <h5><a id="B7">2.2联通</a></h5>
                                        <p>如何识别自己的卡类型呢？您可以通过公众号菜单 - 流量查询，进入查询页面，在查询页面的输入框中，输入您的卡号并点击查询，根据查询结果，即可识别您的卡类型。</p>
                                        <p>查询结果和卡类型如下图示意：</p>
                                        <img src="../../assets/img/helpImg/jiesuanshijian.png" alt="">
                                        <p>卡类型为“联通”结算时间为每月27号</p>
                                    </div>
                                </div>
                                
                                <div>
                                    <h4><a id="B8">3、超流量续费规则</a></h4>
                                    <div>
                                        <p>流量在使用过程中，用超流量会按停机处理。但在流量监控和停机处理过程中，有一定概率存在一些延时，导致流量用超。例如：剩余流量30M，可能使用了35M，卡才停机。这种情况下，您的剩余流量会显示“-5M”，表示用超了5M。</p>
                                        <p>如下图所示意：</p>
                                        <img src="../../assets/img/helpImg/chaoliuliang.png" alt="">
                                        <p>对于用超的流量，如果当月（当前周期）购买流量叠加包，用超的流量将从新购买的叠加包中抵扣。例如：停机后，剩余流量显示“-5M”。购买了30M的叠加包，则剩余流量为“25M”。如果不购买叠加包，到了下一个结算周期，即次月，剩余流量自动重置为套餐对应的流量。例如：30M/月的包年套餐，停机后，剩余流量显示“-5M”，不购买叠加包。过了结算日，则剩余流量重置为“30M”。</p>
                                    </div>
                                </div>
                                
                                
                            </div>
                        </div>
                    </Card>
                </Content>
            </Layout>
        </div>
    </div>
</template>

<script>
    export default {
        created(){
            this.$nextTick(()=>{this.goScroll()})
        },
        mounted() {
            let that = this
            that.$nextTick(function(){
                window.addEventListener("scroll", that.handleScroll)
            })
            // this.goScroll()
        },
        methods: {
            scroll(selector) {
                var anchor = this.$el.querySelector(selector) // 参数为要跳转到的元素id
                document.body.scrollTop = anchor.offsetTop; // chrome
                document.documentElement.scrollTop = anchor.offsetTop; // firefox  
            },
            goScroll(){
                let selector = sessionStorage.getItem("ids")
                var anchor = this.$el.querySelector(selector) // 参数为要跳转到的元素id
                // console.log(selector)
                if(selector){
                    // toElement.scrollIntoView()
                    document.body.scrollTop = anchor.offsetTop; // chrome
                    document.documentElement.scrollTop = anchor.offsetTop; // firefox  
                    // sessionStorage.removeItem("ids")//删除指定key本地存储的值。
                } 
            }
        },
        destroyed(){
            sessionStorage.setItem("ids","");
        }
    }
</script>

<style scoped>
.layout{
    width: 1180px;
    margin: 0 auto;
    /* margin-top: 88px; */
    padding-top: 88px
}
.bigtitle{
    width: 100%;
    height:77px;
    /* background:rgba(14,15,53,1); */
    font-size:23px;
    font-weight:400;
    /* color:rgba(255,255,255,1); */
    text-align: center;
    line-height: 77px;
}
.layout >>> .ivu-menu{
    font-size:20px;
    font-weight:400;
    /* color:rgba(255,255,255,1); */
}
/* .layout >>> .ivu-menu-dark{
    background: rgba(39,43,90,1);
} */
.layout >>> .ivu-layout-sider{
    background: #fff;
}
.layout >>> .ivu-breadcrumb{
    margin: 20px 30px;
    font-size:20px;
    font-weight:400;
    color:rgba(51,51,51,1);
}
.layout >>> .ivu-menu-item{
    font-size:18px;
    font-weight:400;
}
.shutdown-con h3{
    width: 100%;
    height: 30px;
    margin-bottom: 127px;
    font-size:30px;
    font-weight:500;
    color:rgba(51,51,51,1);
    line-height: 30px;
}
.shutdown-con>div{
    margin-bottom: 150px;
}
.shutdown-con>div>div{
    margin-bottom: 120px;
}
.shutdown-con h4{
    margin-bottom: 100px;
    font-size:20px;
    font-weight:500;
    color:rgba(51,51,51,1);
}
.shutdown-con h5{
    margin-bottom: 30px;
    font-size:18px;
    font-weight:500;
    color:rgba(51,51,51,1);
}
.shutdown-con p{
    margin: 15px auto;
    font-size:16px;
    font-weight:500;
    color:rgba(51,51,51,1);
}
.shutdown-con img{
    width: 300px;
}
.sel a {
    text-decoration:none;
    color: #000;
}
.shutdown-con a{
    text-decoration:none;
    color:rgba(51,51,51,1);
}
</style>