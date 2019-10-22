<template>
    <div id="notic" data-automation="notic">
        <!-- <h1>公告</h1> -->
        <div class="notic-banner">
            <div class="ntb-con">
                <h3>公告</h3>
                <!-- <p><Input search enter-button="搜索" placeholder="请输入关键词进行搜索,如“更新””" /></p> -->
            </div>
        </div>

        <div class="layout">
            

            
            <!-- <Sider :style="{position: 'fixed', height: '100vh', left: 0, overflow: 'auto'}" style="width: 315px; min-width: 315px; max-width: 325px; background: rgba(39,43,90,1);" class="sel">
                <div class="bigtitle">公告分类</div>
                <Menu theme="dark" width="auto" :open-names="['1']" class="sel">
                    <Submenu name="1">
                        <template slot="title">
                            全部
                        </template>
                    </Submenu>
                </Menu>
            </Sider> -->
            
            <div class="sider">
                <div>
                   <div class="bigtitle">公告分类</div>
                   <div class="titles" @click="changeDotype(0)"><b>全部</b></div> 
                   <div class="titles" @click="changeDotype(1)"><b>升级</b></div>
                   <div class="titles" @click="changeDotype(2)"><b>续费</b></div>
                   <div class="titles" @click="changeDotype(3)"><b>其他</b></div>
                </div>
            </div>
            <div class="notice-layout">
                <!-- :style="{marginLeft: '315px'}" -->
                <Content :style="{padding: '0 16px 16px'}">
                    <Card>
                        <div class="notice-items">
                            <ul>
                                <li>
                                    <div class="items" v-for="(item,index) in results" :key="index">
                                        <h4>【{{item.creationDate.substring(0,10)}}】{{item.title}}</h4>
                                        <div class="items-list" v-html="item.content"></div>
                                        <div class="bottom">
                                            <p>几米物联网卡</p>
                                            <p>{{item.creationDate.substring(0,10)}}</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <div class="page">
                                <Page :total="totalCount" show-total :current="page" :page-size="pagesize" @on-change="changePage" />
                            </div>
                        </div>

                            
                             
                    </Card>
                </Content>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import qs from 'qs';
    export default {
        name: "notic",
        data () {
            return {
                totalCount: 0,//总条数
                page: 1, //默认页码
                pagesize: 5,  //默认每页显示数量
                doType: 0,//公告类型
                results: []
            };
        },
        created() {
            this.getdata()
        },
        methods: {
            async getdata(){
                const queryObj = {
                    currentPage : this.page,
                    limit : this.pagesize,
                    doType : this.doType
                };
                const notices = {
                    method: 'POST',
                    headers: { 'content-type': 'application/x-www-form-urlencoded' },
                    url: 'http://172.16.0.102:20086/OfficialNotice/noticeList?' + qs.stringify(queryObj)
                    //http://172.16.0.30:20086本地
                }; 
                axios(notices).then(res=>{
                    console.log(res)
                    if(res.data.code == 0 && res.data.data){
                        // this.$Message.error(res.data.msg);
                        this.results = res.data.data
                        this.totalCount = res.data.totalCount
                        // console.log(this.results)
                        // console.log(this.totalCount)
                    } else{
                            
                    }
                }).catch(err => {
                    console.log(err)
                })  
            },
            changePage(index){
                this.page = index;
                this.getdata()
            },
            changeDotype(index){
                this.doType = index;
                this.getdata()
            }
        }
    

    }
</script>

<style scoped>
.layout{
    width: 1180px;
    margin: 0 auto;
    display: flex;
    flex-wrap:nowrap;
}
.sider{
    width: 315px;
    min-width: 315px;
    height: 60vh;
    /* background:rgba(39,43,90,1); */
    /* overflow: hidden; */
}
.titles{
    width: 100%;
    height: 59px;
    line-height: 59px;
    position: relative;
    cursor: pointer;
}
.titles::before{
    content: "";
    display: block;
    width:20px;
    height:20px;
    /* color:rgba(255,255,255,1); */
    position: absolute;
    left:240px;
    top: 20px;
    background: url('../../assets/img/helpImg/youxiang.png') no-repeat;
    background-size: 100%; 
}
.titles b{
    margin-left: 70px;
    font-size:20px;
    font-weight:400;
    color:rgba(0,0,0,1);
}
.notice-layout{
    width: 74%;
}
.notic-banner {
    width: 100%;
    height: 673px;
    background: url("../../assets/img/banner/banner8.png") no-repeat center center;
    /* background-size: 100%; */
    /* position: fixed;
    z-index: 999;
    left: 0;
    top: 0; */
    position: relative;
}
.ntb-con {
    width: 600px;
    height: 135px;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.ntb-con h3 {
    width: 100%;
    height: 138px;
    font-size: 50px;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
    line-height: 138px;
    left: 0;
    top: 673px;
}
.ntb-con p {
    width: 100%;
    height: 50px;
    font-size: 25px;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
    line-height: 55px;
}
.ntb-con p >>> .ivu-input{
    height: 50px;
    font-size: 20px;
}
.ntb-con p >>> .ivu-input-search{
    padding: 0 70px!important;
}
.ntb-con p >>> .ivu-input-group-append{
    font-size:20px;
    font-family:PingFangSC;
}
/* .layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
} */
/* .sel{
    position: absolute;
    left: 0; 
    top: 300px;
} */
.bigtitle{
    width: 100%;
    height:77px;
    /* background:rgba(14,15,53,1); */
    font-size:23px;
    font-weight:400;
    color:rgba(0,0,0,1);
    text-align: center;
    line-height: 77px;
}
.notice-items{
    width: 100%;
    margin: 88px auto;
}   
.items{
    border-bottom: 1px solid rgba(175,175,175,1);
}
.notice-items h4{
    margin-top: 108px;
    font-size:20px;
    font-weight:500;
    margin-left: 100px;
    color:rgba(51,51,51,1);
    position: relative;
}
.notice-items h4::before{
    content: "公告";
    display: block;
    width:56px;
    height:36px;
    background:rgba(85,125,255,1);
    border-radius:5px;
    font-size:20px;
    font-weight:400;
    color:rgba(255,255,255,1);
    line-height:36px;
    text-align: center;
    position: absolute;
    left:-70px;
    top: 0;
    /* background: url(img/CSU001.jpg) no-repeat;
    background-size: 100%;*/
} 
.notice-items p{
    font-size:16px;
    font-weight:400;
    color:rgba(51,51,51,1);
}
/* .items p{
    margin-top: 30px;
    margin-left: 197px;
} */
.items-list{
    margin-top: 30px;
    margin-left: 130px;
    font-size:16px;
    font-weight:400;
    color:rgba(51,51,51,1);
}
.items-list p{
    padding: 15px 0;
}
.bottom{
    width: 120px;
    height: 82px;
    margin-top: 100px;
    margin-left: 70%;
    margin-bottom: 70px;
}
.bottom>p{
    text-align: center;
    margin: 0 0;
    padding: 10px 0;
}
.page{
    margin-top: 50px;
    text-align: center
}
</style>