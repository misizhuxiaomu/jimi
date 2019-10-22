<template>
    <div id="helpCenter" data-automation="helpCenter">
        <div class="helpCenter-banner">
            <div class="hb-con">
                <h3>帮助中心</h3>
                <p><Input search enter-button="搜索" placeholder="请输入关键词进行搜索,如“结算时间”" @on-enter="search()" @on-search="search()" v-model="hcInputvalue"/></p>
            </div>
        </div>

        <div class="guide">
            <div class="guide-title">
                <router-link to="/shutdown" tag="h3">新手指南</router-link>
            </div>
            <div class="guide-con">
                <div class="renewal">
                    <dl>
                        <dt><img src="../../assets/img/helpImg/renewal.png" alt="">停机续费</dt>
                        <dd>卡停机的触发条件</dd>
                        <dd>解除停机的条件</dd>
                        <dd>续费或购买叠加包</dd>
                    </dl>
                </div>
                <div class="settlement">
                    <dl>
                        <dt><img src="../../assets/img/helpImg/settlement.png" alt="">结算时间</dt>
                        <dd>移动</dd>
                        <dd>联通</dd>
                        <dd>定向流量</dd>
                    </dl>
                </div>
                <div class="rules">
                    <dl>
                        <dt><img src="../../assets/img/helpImg/rules.png" alt="">超流量结算规则</dt>
                    </dl>
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
        name: "helpCenter",
        components: {
            Contact,
            Footer,
            Sidebar
        },
        data() {
            return {
                hcInputvalue: '',
                hcSearchData: [],
                listSearch: []
            }
        },
        methods: {
            search(){
                let search = this.hcInputvalue;
                // console.log(search)
                this.hcSearchData = this.$store.state.searchData
                // console.log(this.hcSearchData)
                let listSearch = this.hcSearchData.filter( array => 
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
                    alert("抱歉，未找到"+ this.hcInputvalue + "相关信息")
                }
            },
            // enter(){
            //     this.search()
            // }
        }
    }
</script>

<style scoped>
.helpCenter-banner {
    width: 100%;
    height: 680px;
    background: url("../../assets/img/banner/banner6.png") no-repeat center center;
    background-size: 100%;
    position: relative;
}
.hb-con {
    width: 600px;
    height: 135px;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.hb-con h3 {
    width: 100%;
    height: 138px;
    font-size: 50px;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
    line-height: 138px;
}
.hb-con p {
    width: 100%;
    height: 50px;
    font-size: 25px;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
    line-height: 55px;
}
.hb-con p >>> .ivu-input{
    height: 50px;
    font-size: 20px;
}
.hb-con p >>> .ivu-input-search{
    padding: 0 70px!important;
}
.hb-con p >>> .ivu-input-group-append{
    font-size:20px;
    font-family:PingFangSC;
}
.guide{
    width: 1180px;
    height: 700px;
    margin: 0 auto;
}
.guide-title{
    width: 100%;
    height: 250px;
    /* padding-top: 53px; */
    text-align: center;
}
.guide-title h3{
    width: 100%;
    height: 250px;
    font-size:30px;
    font-weight:500;
    color:rgba(51,51,51,1);
    line-height: 250px;
    cursor: pointer;
}
.guide-con{
    width: 100%;
    height: 450px;
    display: flex;
    justify-content:center;
}
.renewal,.settlement,.rules{
    width: 30%;
}  
.renewal,.settlement{
    margin-right: 13%;
}
.guide-con img{
    width: 30px;
    margin-right: 10px;
    vertical-align: text-top;
}
.guide-con dt{
    width: 100%;
    height: 114px;
    font-size:23px;
    font-weight:400;
    color:rgba(51,51,51,1);
    line-height: 114px;
}
.guide-con dd{
    width: 100%;
    height: 50px;
    margin-bottom: 18px;
    border-bottom: 1px solid rgba(223,223,223,1);
    font-size:20px;
    font-weight:400;
    color:rgba(102,102,102,1);
    line-height: 50px;
}
</style>