<template>
    <div class="footer" data-automation="footer">
        <div class="footer-con">
            <div class="footer-sel">
                <div class="sel-item">
                    <img src="../assets/img/img/JIMI LOGO@2x.png" alt="">
                </div>
                <div class="sel-item">
                    <dl>
                        <dt>快捷入口</dt>
                        <router-link to="/home" tag="dd" name="1">首页</router-link>
                        <router-link to="/shutdown" tag="dd" >常见问题</router-link>
                        <router-link to="/apiWord" tag="dd" >API文档</router-link>
                        <router-link to="/notice" tag="dd" >公告</router-link>
                    </dl>
                </div>
                <div class="sel-item">
                    <dl>
                        <dt>产品</dt>
                        <router-link to="/flowcard" tag="dd" >通用流量卡</router-link>
                        <router-link to="/flowcard" tag="dd" >定向流量卡</router-link>
                        <router-link to="/platform" tag="dd" >运营平台</router-link>
                    </dl>
                </div>
                <div class="sel-item">
                    <dl>
                        <dt>解决方案</dt>
                        <a @click="run(foot.path2)"><dd>车联网</dd></a>
                        <a @click="run(foot.path2)"><dd>智慧民生</dd></a>
                        <a @click="run(foot.path2)"><dd>智慧城市</dd></a>
                        <a @click="run(foot.path3)"><dd>风控金融</dd></a>
                    </dl>
                </div>
                <div class="sel-item">
                    <dl>
                        <dt>帮助与支持</dt>
                        <router-link to="/helpCenter" tag="dd">帮助中心</router-link>
                        <router-link to="/devCenter" tag="dd" >开发者中心</router-link>
                        <router-link to="/devCenter" tag="dd" >支持</router-link>
                    </dl>
                </div>
                <div class="sel-item">
                    <dl>   
                    <a @click="run(foot.path1)"><dt>关于我们</dt></a>   
                    </dl>
                </div>
                
            </div>
            <div class="footer-bottom">
                Copyright@2019 深圳市几米物联有限公司 版权所有 粤ICP备15058697号-17
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            foot: {
                path1: 'https://www.jimigroup.com/about/',
                path2: 'https://www.jimigroup.com/solution',
                path3: 'https://www.jimigroup.com/solution/qcjr/'
               
            }
        }
    },
    methods: {
        run(e){
            window.open(e,'_blank')
        }
    }
};
</script>

<style scoped>
.footer{
    width:100%;
    height:586px;
    background:linear-gradient(180deg,rgba(0,19,154,1) 0%,rgba(15,15,51,1) 100%);
}
.footer-con{
    width: 1180px;
    height:466px;
    margin: 0 auto;
    padding-top: 120px;
}
.footer-sel{
    width: 100%;
    height: 326px;
    display: flex;
    justify-content:center;

}
.sel-item{
    width: 16%;
    height: 326px;
}
.sel-item>img{
    width: 100px;
    /* height: 68px; */
    display: block;
}
dt{
    height:25px;
    font-size:25px;
    font-weight:500;
    color:rgba(255,255,255,1);
    line-height:25px;
}
dd{
    cursor: pointer;
    height:20px;
    font-size:20px;
    font-weight:400;
    color:rgba(175,175,175,1);
    line-height:20px;
    margin-top: 35px;
}
dt>a {
    display: block;
    text-decoration:none;
    height:20px;
    font-size:20px;
    font-weight:400;
    color:rgba(175,175,175,1);
    line-height:20px;
    margin-top: 35px;
}
.footer-bottom{
    width: 100%;
    height: 140px;
    border-top: 1px solid rgba(175,175,175,1);
    margin: 0 auto;
    font-size: 20px;
    color:rgba(255,255,255,1);
    text-align: center;
    line-height: 140px;
}
</style>