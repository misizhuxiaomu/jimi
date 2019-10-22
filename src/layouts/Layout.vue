<template>
    <div id="layout" data-automation="layout">
        <Layout>
            <Header class="nav">
                <!-- opacity:0.46149999999999997; -->
                <div class="logo" style="width:15%">
                    <router-link to="/home"><img src="../assets/img/img/JIMI LOGO.png" alt=""></router-link>
                </div>

                <div style="width:60%" class="menus">
                    <!-- class="menus" -->
                    <!-- <ul class="nav-tab">
                        <router-link to="/home" tag="li">
                            <p>首页<span></span></p>
                        </router-link>
                        <li>
                            <div class="nav-menu">
                                <p>产品<span></span></p>
                                <div class="menu-sel">
                                    <dl>
                                        <dd><router-link to='/flowcard'>通用流量卡</router-link></dd>
                                        <dd><router-link to='/flowcard'>定向流量卡</router-link></dd>
                                        <dd><router-link to='/platform'>运营平台-CMP系统</router-link></dd>
                                    </dl>
                                </div>
                            </div>	
						</li>
                        <router-link to="/plan" tag="li"><p>解决方案 <span></span></p></router-link>
                        <router-link to="/contactUs" tag="li"><p>联系我们<span></span></p></router-link>
                        <li><a @click="run(nav.path1)"><p>关于我们<span></span></p></a></li>
                        <li>
                            <div class="nav-menu">
                                <p>帮助与支持<span></span></p>
                                <div class="menu-sel">
                                    <dl>
                                        <dd><router-link to='/helpCenter'>帮助中心</router-link></dd>
                                        <dd><router-link to='/devCenter'>开发者中心</router-link></dd>
                                        <dd><router-link to='/shutdown'>停机</router-link></dd>
                                        <dd><router-link to='/apiWord'>API文档</router-link></dd>
                                        <dd><router-link to='/notice'>公告</router-link></dd>
                                    </dl>
                                </div>
                            </div>	
						</li>
                    </ul> -->
                    <Menu mode="horizontal" :theme="theme1" :active-name="activemenu">
                        <MenuItem name="1">
                            <router-link to="/home" tag="dd" name="1">首页</router-link>
                        </MenuItem>
                        <Submenu name="2">
                            <template slot="title">
                                产品
                            </template>
                            <MenuGroup>
                                <MenuItem to="/flowcard" name="2-1">通用流量卡</MenuItem>
                                <MenuItem to="/flowcard" name="2-2">定向流量卡</MenuItem>
                                <MenuItem to='/platform' name="2-3">运营平台-CMP系统</MenuItem>
                            </MenuGroup>
                        </Submenu>
                        <MenuItem to="/plan" name="3" >
                            解决方案
                        </MenuItem>
                        <MenuItem name="4">
                             <router-link to="/contactUs" tag="dd">联系我们</router-link>
                        </MenuItem>
                        
                        <a @click="run(nav.path1)" class="ivu-menu-item">关于我们</a>
                        
                        <Submenu name="6">
                            <template slot="title">
                                帮助与支持
                            </template>
                            <MenuGroup>
                                <div class="buju">
                                    <div>
                                        <MenuItem to='/helpCenter' name="6-1">帮助中心</MenuItem>
                                        <MenuItem to='/devCenter' name="6-2">开发者中心</MenuItem>
                                    </div>
                                    <div>
                                        <MenuItem to='/shutdown' name="6-3">常见问题</MenuItem>
                                        <MenuItem to='/apiWord' name="6-4">API文档</MenuItem>
                                    </div>
                                    <div>
                                        <MenuItem to='/notice' name="6-5">公告</MenuItem>
                                    </div>
                                </div>    
                            </MenuGroup>
                        </Submenu>
                    </Menu>
                </div>
                <div style="width:25%">
                    <ul class="nav-login">
                        <li class="input"><Input type="text" icon="ios-search" placeholder="搜索" size="small" style="width:136px" v-model="navInputvalue"  @on-enter="search()" @on-click="search()"/></li>
                        <!-- <Input prefix="ios-search" placeholder="搜索" size="small" style="width:136px"/> -->
                        <router-link to="/login" tag="li" v-show="!isLogin()" class="you">登录</router-link>
                        <!-- <router-link to="/login" tag="li" v-show="isLogin">{{currentUser}}</router-link> -->
                        <li v-show="isLogin()" class="usrId">{{currentUser}}</li>
                        <!-- <router-link to="/login" tag="li" v-show="isLogin" @click="out()">退出</router-link> -->
                        <li v-show="isLogin()" @click="out()">退出</li>
                        <router-link to="/Register" tag="li" v-show="!isLogin()">注册</router-link>
                    </ul>
                </div>
            </Header>

            <Content>
                <router-view />
            </Content>

        </Layout>
    </div>
</template>
<script>
export default {
    name: "layout",
    data (){
        return {
            theme1: 'light',
            activemenu:1,
            nav: {
                path1: 'https://www.jimigroup.com/about/',
            },
            navInputvalue: '',
            navSearchData: [],
            listSearch: [] 
        }
    },
    computed: {
        currentUser() {
            // return this.$store.state.currentUser;
            if(localStorage.getItem("userId")){
                return localStorage.getItem("userId")
            }
        }
        
    },
    mounted(){
        this.isLogin()
    },
    methods: {
        menuList(){  
            let path = this.$route.matched[1].path 
             
             if(path.indexOf('/') != -1){
                  this.activemenu = 1 
                  } 
                   
                  },

        isLogin() {
            // return this.$store.state.isLogin;
            if(localStorage.getItem("userId")){
                return true
            }else{
                return false
            }
        },
        out(){
            // localStorage.removeItem("userId"); //删除名称为“key”的信息。
            localStorage.clear(),
            this.isLogin(),
            this.$router.push({ name: "login" })
        },
        run(e){
            window.open(e,'_blank')
        },
        search(){
            let search = this.navInputvalue;
            // console.log(search)
            this.navSearchData = this.$store.state.searchData
            // console.log(this.navSearchData)
            let listSearch = this.navSearchData.filter( array => 
               array.title.match(search) 
            )
            this.listSearch = listSearch
            // console.log(listSearch)
            if(listSearch.length>0){
                // this.$store.dispatch( "changeSearchdata", {listSearch})
                sessionStorage.setItem("search",JSON.stringify(listSearch)); //以“key”为名称存储一个值“value”
                this.$router.push({ name: "search"});
                // , params: { pushSearch: listSearch } 
                // alert("1")
                location.reload()
                // console.log(params.pushSearch)
            }else {
                alert("抱歉，未找到"+ this.navInputvalue + "相关信息")
            }
        }
    },
    mounted(){  // 组件初始化后执行
          this.menuList()
       }
    
}
</script>

<style scoped>
/* lang="stylus" */
.nav{
    width: 100%;;
    height: 88px;
    background:rgba(255,255,255,1);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99999999;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.logo{
    /* width: 100%; */
    height: 40px;
}
.logo img{
    display: block;
    margin-left: 100px;
}
.nav-tab>li{
    width: 16%;
    font-size:18px;
    font-weight:500;
    color:#454A5B;
    text-align: center;
    line-height: 88px;
    cursor:pointer;
    position: relative;
}
.nav-tab>li p span {
    content: " ";
    width:30px;
    height:4px;
    background:rgba(85,125,255,1);
    position: absolute;
    left: 45px;
    bottom: 15px;
    display: none;
}
.nav-tab>li p:hover span{
    display: block;
}
/* .active span{
    display: block;
} */
.nav-tab>li>a{
    text-decoration:none;
    color:#454A5B;
}

.nav-tab{
    width: 70%;
    height: 88px;
    display: flex;
    justify-content: space-between;  
}
.nav-menu>p{
    height: 88px;
    font-size:18px;
    font-weight:500;
    /* color:rgba(154,168,195,1); */
    color:#454A5B;
    text-align: center;
    line-height: 88px;
    cursor:pointer;
}
.menu-sel{
    height: 170px;
    background:rgba(255,255,255,1);
    /* opacity:0.85; */
    display: none;
}
.menu-sel>dl>dd{
    height: 36px;
    font-size:14px;
    font-weight:400;
    color:rgba(0,42,179,1);
    line-height: 36px;
}
.nav-menu:hover .menu-sel{
    display: block
}
.nav-login{
    /* width: 350px; */
    height: 88px;
    display:flex;
    justify-content: center;
    align-items: center;
}
/* .nav-login .you{
    margin-left: 30px;
} */
.nav-login>li{
    width: 136px;
    font-size:18px;
    font-weight:500;
    color:#454A5B;
    text-align: center;
    line-height: 88px;
    cursor:pointer;
}
.usrId,.you{
    position: relative;
    
}
.usrId::after,.you::after{
    content: "";
    width:1px;
    height:18px;
    background:rgba(154,168,195,1);
    position: absolute;
    left: 100%;
    top: 50%;
    transform: translatey(-50%);
}
.menus >>> .ivu-menu-horizontal{
    width: 100%;
    height: 75px;
    line-height: 75px;
    font-size:18px;
    font-family:PingFangSC-Medium,PingFangSC;
    font-weight:500;
    color:rgba(154,168,195,1); 
 }
.menus >>>.ivu-menu{
    margin: 0 20px;
}
.menus >>> .ivu-menu-item{
    font-size:18px;
}
.menus >>> .ivu-menu-horizontal.ivu-menu-light:after{
    height: 4px;
    background: #ffffff;
}
.menus >>> .ivu-menu-submenu-title{
    text-align: center;
}
.menus >>> .ivu-icon{
    display: none;
}
.menus >>> .ivu-icon-ios-arrow-down:before{
    content: "";
}
.menus >>> .ivu-menu-item-group>ul>div{
    display: flex;
}
.buju div{
    width: 33%;
    text-align: center;
}


</style>