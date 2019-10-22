<template>
    <div id="search" data-automation="search">
        <div class="search-con">
            <div class="search-layout">
                <div class="search-sider">
                    <div>
                    <div class="bigtitle">搜索分类</div>
                    <div class="titles"><b>全部（{{listSearch.length}}）</b></div> 
                    <div class="titles"><b>网站（{{listWeb.length}}）</b></div>
                    <div class="titles"><b>产品文档（{{listWord.length}}）</b></div>
                    </div>
                </div>
                <div class="search-list">
                    <!-- :style="{marginLeft: '315px'}" -->
                    <Content :style="{padding: '0 16px 16px'}">
                        <Card>
                            <div class="search-items">
                                <ul>
                                    <li v-for="(item,index) in listSearch" :key="index" class="items">
                                        <p class="items-title" @click="gopath(item.name,item.ids)">{{item.title}}</p>
                                        <p class="items-con">{{item.con}}</p>
                                    </li>

                                </ul>
                            </div>
                        </Card>
                    </Content>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
    export default {
        name: "search",
        data(){
            return {
                listSearch: "",//查询到的数据
                listWeb: "",//从查询到的数据中匹配网站类
                listWord: ""//从查询到到的数据中匹配文档类
            };
        },
        created(){
            this.getSearchdata()
            this.getlistWeb()
            this.getlistWord()
        },
        // beforeRouteUpdate(to, from, next) {
        //     this.listSearch = to.params.pushSearch
        //     this.getSearchdata() 
        //     next()
        // },

        methods:{
            getSearchdata(){
            //    this.listSearch = this.$store.state.listSearch
            //    console.log(this.listSearch)
                let list = JSON.parse(sessionStorage.getItem("search"))
                this.listSearch = list
                // console.log(this.listSearch)
            },
            getlistWeb(){
                let listWeb = this.listSearch.filter( array => 
                    array.doType == 1 
                )
                this.listWeb = listWeb
                // console.log(this.listWeb)
            },
            getlistWord(){
                let listWord = this.listSearch.filter( array => 
                    array.doType == 2
                )
                this.listWord = listWord
                // console.log(this.listWord)
            },
            gopath(p,ids){
                sessionStorage.setItem("ids",ids); //以“key”为名称存储一个值“value”
                this.$router.push({ name: p});
                // console.log(p)
                // this.$bus.emit("busScroll", ids)
                // console.log(ids)
            }
        },
        watch: {
        // 监测路由变化,只要变化了就调用获取路由参数方法将数据存储本组件即可
            '$route': 'getSearchdata'
        }
    }
</script>

<style scoped>
.search-con{
    width: 100%;
    margin-top: 88px;
}
.search-layout{
    width: 1180px;
    margin: 0 auto;
    display: flex;
    flex-wrap:nowrap;
}
.search-sider{
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
    background: url('../assets/img/helpImg/youxiang.png') no-repeat;
    background-size: 100%; 
}
.titles b{
    margin-left: 70px;
    font-size:20px;
    font-weight:400;
    color:rgba(0,0,0,1);
}
.search-list{
    width: 74%;
    padding-top: 20px
}
/* .search-list >>> .ivu-card-body{
    height: 300Px;
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
.search-items{
    width: 100%;
    /* height: 50px; */
    padding: 10px; 
}
.items{
    height: 70px;
}
.items-title{
    font-size:18px;
    font-weight:500;
    color:rgba(51,51,51,1);
    cursor: pointer;
}
.items-con{
    font-size:14px;
    font-weight:500;
    color:rgba(51,51,51,1);
}
</style>