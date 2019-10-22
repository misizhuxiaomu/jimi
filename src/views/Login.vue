<template>
    <div id="login" data-automation="login">
        <div class="wrap">
            <div class="inner">
                <h1>
                    <img src="../assets/img/img/logo-login.png" alt />
                </h1>
                <Form ref="form" :model="form" :rules="ruleLogin" class="formlogin">
                    <FormItem prop="name">
                        <Input type="text" v-model="form.name" size="large" placeholder="手机/邮箱/用户名">
                        </Input>
                    </FormItem>
                    <FormItem prop="password">
                        <Input type="password" v-model="form.password" size="large" placeholder="密码">
                        </Input>
                    </FormItem>
                    <FormItem>
                        <Button class="btn" type="primary" @click="doSubmit(form)">登&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;录</Button>
                        <router-link to="register" class="goregister">立即注册</router-link>
                    </FormItem>
                </Form>
                <!-- <span>短信快捷登录</span> -->
            </div>
            <!-- <div class="bottom">
                <span>&#169 2019 Jimi 使用几米前必读</span>&nbsp;&nbsp;&nbsp;&nbsp;
                <span>增值电信业务经营许可证：××.××-××××××××</span>&nbsp;&nbsp;&nbsp;&nbsp;
                <span>粤ICP证××××××号</span>&nbsp;&nbsp;&nbsp;&nbsp;
                <span>隐私政策</span>
            </div> -->
        </div>

        <div class="gohome">
            <router-link to="home" tag="p">返回首页</router-link>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import qs from "qs";
export default {
    name: "login",
    data() {

        // /^[\u4E00-\u9FA5\uF900-\uFA2D|\w]{1,5}$/
        const kongge =  (rule, value, callback) => {
            var reg =  /^[^\s]+$/;
            var reg1 = /^[\u4E00-\u9FA5\uF900-\uFA2D|\w]{1,10}$/;
            if(value == ""){
                return callback("账号不能为空");
            }else if(new RegExp(reg).test(value) == false){
                return callback('不能输入空格');
            }else if(new RegExp(reg1).test(value) == false){
                return callback('请输入不超过10位的汉字、字母、数字及下划线');
            }else{
                callback();
            }
        }; 
        return {
            form: {
                name: "",
                password: ""
            },
            ruleLogin: {
                name:[ {  required:true,  validator:kongge, trigger:'blur' } ],
                password: [ { type: 'string', required:true, message:'密码不能是空', trigger:'change' } ]
            }
        };
    },
    methods: {
        async doSubmit(form) {
            await this.$refs.form.validate((valid) => {
                if (valid) {
                const formDatas = {
                    name: this.form.name,
                    password: this.form.password
                };
                const options = {
                    method: "POST",
                    headers: {
                        "content-type": "application/x-www-form-urlencoded"
                    },
                    data: qs.stringify(formDatas),
                    url: "http://172.16.0.102:20086/official/login"
                    // http://172.16.0.102:20086测试
                    //正式http://official.jimisim.com/official/
                    //http://172.16.0.30:20086本地
                };
                axios(options)
                    .then(res => {
                        if (res.data.code !== 0 && res.data.msg) {
                            this.$Message.error(res.data.msg);
                            // this.$Message.info({
                            //     content: res.data.msg,
                            //     duration: 5
                            // });
                        } else {
                            this.$Message.success("登陆成功即将跳转到首页!");
                            localStorage.setItem("userId",res.data.data.name); //以“key”为名称存储一个值“value”
                            setTimeout(() => {
                                this.$router.push({ name: "home" });
                            }, 500);
                        }
                    })
                    .catch(err => {
                        console.log(err);
                    });
                }
            })
        }
    }
};
</script>
<style scoped>
h1 {
    text-align: center;
    margin-bottom: 60px;
}
.wrap {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url("../assets/img/img/denglu.png") no-repeat center center;
    /* background-size: 100%; */
    /* background: linear-gradient(180deg, rgba(0, 12, 135, 1) 0%, rgba(4, 6, 29, 1) 100%);
    opacity: 0.45799999999999996; */
}
.inner {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 500px;
    height: 350px;
    border-radius: 10px;
    transform: translate(-60%, -50%);
    padding: 10px;
    /* background: #fff; */
}
/* input {
    height: 60px;
} */


.formlogin >>> .ivu-input::-webkit-input-placeholder{
    color:rgba(255,255,255,1);
}
.formlogin >>> .ivu-input{
    color: #fff;
    background-color: rgba(162,178,212,0.60361);
    border: 1px solid  rgba(162,178,212,1);
    /* opacity:0.6036;*/
} 
.btn {
    width: 480px;
    height: 36px;
    margin: 10px auto;
    display: block;
    font-size: 18px;
    text-align: center;
}
.goregister{
    font-size: 14px;
}
.gohome {
    width: 162px;
    height: 69px;
    background: rgba(85, 125, 255, 0.55);
    border-radius: 5px;
    /* // opacity:0.5538000000000001; */
    font-size: 30px;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
    line-height: 69px;
    text-align: center;
    position: fixed;
    top: 40px;
    right: 40px;
}
span {
    font-size: 14px;
    font-weight: 400;
    color: #ffffff;
}
.bottom {
    width: 790px;
    position: absolute;
    left: 50%;
    bottom: 20px;
    transform: translateX(-48%);
}
</style>
