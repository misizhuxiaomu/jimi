<template>
    <div id="devCenter" data-automation="devCenter">
        <div class="devCenter-banner">
            <div class="db-con">
                <h3>开发者中心</h3>
                <p><Input type="text" search enter-button="搜索" placeholder="请输入关键词进行搜索,如“发送短信”" @on-enter="search()" @on-search="search()" v-model="devInputvalue"/></p>
            </div>
        </div>

        <div class="api">
            <div class="api-title">
                <router-link to="/apiWord" tag="h3">API文档</router-link>
            </div>
            <div class="api-con">
                <div class="description">
                    <dl>
                        <dt><img src="../../assets/img/helpImg/description.png" alt="">通用说明</dt>
                        <dd>公共约定</dd>
                        <dd>结果说明</dd>
                        <dd>错误码</dd>
                        <dd>API列表</dd>
                        <dd>通用参数</dd>
                        <dd>加密过程</dd>
                        <dd>平台参数</dd>
                        <dd>白名单</dd>
                    </dl>
                </div>
                <div class="details">
                    <dl>
                        <dt><img src="../../assets/img/helpImg/details.png" alt="">API详情</dt>
                        <dd>获取tokon</dd>
                        <dd>获取单张卡信息</dd>
                        <dd>获取批量卡数据</dd>
                        <dd>获取卡套餐和叠加包信息</dd>
                        <dd>批量发送短信</dd>
                        <dd>单卡发送短信</dd>
                        <dd>短信发送之后状态报告推送</dd>
                        <dd>单卡查询回复短信</dd>
                    </dl>
                    <div class="more"><router-link to="/apiWord"><img src="../../assets/img/helpImg/xiala.png" alt=""><span>更多</span></router-link></div>
                </div>
                
            </div>
        </div>

        <Contact></Contact>
        <Footer></Footer>
        <Sidebar></Sidebar>

    </div>
</template>

<script>
import Contact from "../../components/Contact.vue"
import Footer from "../../components/Footer.vue"
import Sidebar from "../../components/Sidebar.vue"
    export default {
        name: "devCenter",
        components: {
            Contact,
            Footer,
            Sidebar
        },
        data() {
            return {
                devInputvalue: '',
                devSearchData: [],
                listSearch: []
            }
        },
        methods: {
            search(){
                let search = this.devInputvalue;
                // console.log(search)
                this.devSearchData = this.$store.state.searchData
                // console.log(this.devSearchData)
                let listSearch = this.devSearchData.filter( array => 
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
                    alert("抱歉，未找到"+ this.devInputvalue + "相关信息")
                }
            }
        }
    }
</script>

<style scoped>
.devCenter-banner {
    width: 100%;
    height: 680px;
    background: url("../../assets/img/banner/banner7.png") no-repeat center center;
    background-size: 100%;
    position: relative;
}
.db-con {
    width: 600px;
    height: 135px;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.db-con h3 {
    width: 100%;
    height: 138px;
    font-size: 50px;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
    line-height: 138px;
}
.db-con p {
    width: 100%;
    height: 50px;
    font-size: 25px;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
    line-height: 55px;
}
.db-con p >>> .ivu-input{
    height: 50px;
    font-size: 20px;
}
.db-con p >>> .ivu-input-search{
    padding: 0 60px!important;
}
.db-con p >>> .ivu-input-group-append{
    font-size:20px;
    font-family:PingFangSC;
}
.api{
    width: 100%;
    height: 1100px;
}
.api-title{
    width: 100%;
    height: 250px;
    padding-top: 53px;
    text-align: center;
}
.api-title h3{
    width: 100%;
    height: 250px;
    font-size:30px;
    font-weight:500;
    color:rgba(51,51,51,1);
    line-height: 250px;
    cursor: pointer;
}
.api-con{
    width: 100%;
    height: 489px;
    display: flex;
    justify-content:center;
}
.description,.details{
    width: 13.66%;
}  
.description{
    margin-right: 13%;
}
.api-con img{
    width: 30px;
    margin-right: 10px;
    vertical-align: text-top;
}
.api-con dt{
    width: 100%;
    height: 114px;
    font-size:23px;
    font-weight:400;
    color:rgba(51,51,51,1);
    line-height: 114px;
}
.api-con dd{
    width: 100%;
    height: 50px;
    margin-bottom: 18px;
    border-bottom: 1px solid rgba(223,223,223,1);
    font-size:20px;
    font-weight:400;
    color:rgba(102,102,102,1);
    line-height: 50px;
}
.more{
    font-size:20px;
    font-weight:400;
    color:rgba(85,125,255,1);
}
.more img{
    width: 20px;
    height: 20px;
}
</style>