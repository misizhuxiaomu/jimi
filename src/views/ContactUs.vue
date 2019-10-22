<template>
    <div id="contactUs" data-automation="contactUs">
        <!-- <h1>联系我们</h1> -->
        <div class="contactUs-banner">
            <div class="cb-con">
                <h3>联系我们</h3>
                <p>让我们专业的客服代表为您答疑解惑</p>
            </div>
        </div>

        <div class="contactUs-consult">
            <div class="consult-title">
                <h3>咨询</h3>
            </div>
            <div class="consult-form">
                <Form ref="formContact" :model="formContact" :rules="ruleContact" label-position="top" class="formitem">
                    <FormItem label="请选择您想了解的产品:" prop="product">
                        <Row>
                            <Col span="6">
                                <Select v-model="formContact.product" placeholder="选择产品类目" size="large">
                                    <Option value="通用流量卡">通用流量卡</Option>
                                    <Option value="定向流量卡">定向流量卡</Option>
                                    <Option value="运营平台-CMP系统">运营平台-CMP系统</Option>
                                </Select>
                            </Col>
                        </Row>
                    </FormItem>
                    <FormItem label="请选择您想了解的项目：（可多选）" prop="interest" size="large" class="checkbox">
                        <CheckboxGroup v-model="formContact.interest">
                            <Checkbox label="与客服代表联系"></Checkbox>
                            <Checkbox label="需要产品试用"></Checkbox>
                            <Checkbox label="了解解决方案"></Checkbox>
                            <Checkbox label="了解价格"></Checkbox>
                            <Checkbox label="其他"></Checkbox>
                        </CheckboxGroup>
                    </FormItem>
                    <FormItem label="请在方框中输入您的详细需求：" prop="desc">
                        <Input v-model="formContact.desc" type="textarea" :autosize="{minRows: 8,maxRows: 13}" placeholder="请输入您的详细需求至少20字"></Input>
                    </FormItem>
                    <div class="show-btn" v-if="showbtn()">
                        <Button class="contact-btn" type="primary" @click="contactusSubmit('formContact')">立即提交</Button>
                    </div>
                </Form>
            </div>

            <div class="contactUs-show" v-if="!showbtn()">
                <div class="showlogin" v-show="showlogin">
                    <div class="showlogin-title">
                        <h3>登录</h3>
                    </div>

                    <div class="showlogin-logon">
                        <Form ref="formShowlogin" :model="formShowlogin" :rules="ruleShoelogin" label-position="top" class="formitem">
                            <FormItem prop="name" label="手机/邮箱/用户名">
                                <Input type="text" v-model="formShowlogin.name" size="large"></Input>
                            </FormItem>
                            <FormItem prop="password" label="密码：">
                                <Input type="password" v-model.trim="formShowlogin.password" size="large"></Input>
                            </FormItem>
                            <FormItem>
                                <Button  class="showlogin-btn" type="primary"  @click="showloginSubmit(formShowlogin)">登录</Button>
                                <div class="span">
                                    <span @click="changeShow">没有账号？</span>
                                </div>
                            </FormItem>
                        </Form>
                    </div>
                </div>

                <div class="showlogin" v-show="!showlogin">
                    <div class="showlogin-title">
                        <h3>注册</h3>
                    </div>

                    <div class="showlogin-logon">
                        <Form ref="formShowregister" :model="formShowregister" :rules="ruleShowregister" label-position="top" class="formitem">
                            <FormItem prop="name" label="姓名：">
                                <Input type="text"  v-model="formShowregister.name" placeholder="用户名" size="large"></Input>
                            </FormItem>
                            <FormItem prop="company" label="公司:">
                                <Input v-model="formShowregister.company" placeholder="企业" size="large"></Input>
                            </FormItem>
                            <FormItem prop="email" label="邮箱:">
                                <Input v-model="formShowregister.email" placeholder="邮箱" size="large"></Input>
                            </FormItem>
                            <FormItem prop="password" label="密码:">
                                <Input type="password" v-model="formShowregister.password" placeholder="密码" size="large"></Input>
                            </FormItem>
                            <FormItem prop="confirmPassword " label="确认密码:">
                                <Input type="password" v-model="formShowregister.confirmPassword " placeholder="确认密码" size="large"></Input>
                            </FormItem>
                            <FormItem prop="phone" label="手机号:">
                                <Input type="tel" v-model="formShowregister.phone" placeholder="手机号" size="large"></Input>
                            </FormItem>
                            <FormItem prop="validateCode" label="验证码:">
                                <Row>
                                    <Col span="8">
                                        <Input v-model="formShowregister.validateCode" placeholder="验证码" size="large"></Input>
                                    </Col>
                                    <Col span="8" style="text-align: center">
                                        <a href="javascript:;" @click="changeCodeImg()">
                                            <img :src="codeImg" alt="图片加载失败" title="看不清？点击更换图片" />
                                        </a>
                                    </Col>
                                </Row>
                            </FormItem>
                            <FormItem prop="gender">
                                <RadioGroup v-model="formShowregister.gender">
                                    <Radio label="a">我已阅读并接受以下条款</Radio>
                                    <a>《几米隐私权保护声明》</a>
                                </RadioGroup>
                            </FormItem>
                            <FormItem>
                                <Button class="show-btn" type="primary" @click="showregisterSubmit(formShowregister)">注册</Button>
                                <div class="registerspan">
                                    <!-- <p class="fl">
                                        <span>忘记密码</span>&nbsp;&nbsp;
                                        <span>没有账号？</span>
                                    </p>
                                    <p class="fr">
                                        <span>手机验证码登录</span>
                                    </p> -->
                                    <span>已有几米账号？</span>
                                    <a @click="changeShow">立即登录</a>
                                </div>
                            </FormItem>
                        </Form>
                    </div>
                </div>
            </div>
        </div>

        <Footer></Footer>
        <Sidebar></Sidebar>

    </div>
</template>

<script>
import axios from "axios";
import qs from "qs";

import Footer from "../components/Footer.vue"
import Sidebar from "../components/Sidebar.vue"
export default {
    name: "contactUs",
    components: {
        Footer,
        Sidebar
    },
    data() {
        const ShowregisterPhone = (rule, value, callback) => {
            if (!value) {
                return callback(new Error('手机号不能为空'));
            } else if (!/^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/.test(value)) {
                callback('手机号格式不正确');
            } else {
                callback();
            }   
        };
        const Showregisterpassword = (rule, value, callback) => {
            var reg = /^[a-zA-Z0-9]{6,10}$/;
            if (!value) {
                return callback(new Error('密码不能为空'));
            }else if (new RegExp(reg).test(value) == false) {
                callback('请输入6到10位密码包含字母或数字');
            } else {
                callback();
            }   
        };
        const ShowregisterconfirmPassword = (rule, value, callback) => {
            if (value === "") {
                return callback(new Error('确认密码不能为空'));
            }else if (value !== this.formValidate.password) {
                callback('两次密码不一致');
            } else {
                callback();
            }  
        }; 
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
            // showbtn: true,
            showlogin: true,
            formContact: {
                product: "",
                interest: [],
                desc: ""
            },
            ruleContact: {
                product: [
                    {  required: true, message: "请选择您想了解的产品", trigger: "change" }
                ],
                interest: [
                    {  required: true, type: "array", min: 1, message: "请选择您想了解的项目", trigger: "change" },
                    { type: "array", max: 5, message: "最多选5个", trigger: "change" }
                ],
                desc: [
                    {  message: "请在方框中输入您的详细需求", trigger: "blur" },
                    {  type: "string", trigger: "blur" }
                ]
            },
            formShowlogin: {
                name: "",
                password: ""
            },
            ruleShoelogin: {
                name:[ {  required:true, validator:kongge, trigger: "change" } ],
                password: [ { type: 'string', required:true, message:'密码不能是空', trigger: "change" } ]
            },
            codeImg: 'http://172.16.0.102:20086/official/validateCode',
            formShowregister: {
                name: '',
                company: '',
                email: '',
                password: '',
                gender: 'a',
                confirmPassword: '',
                phone: '',
                validateCode: ''    
            },
            ruleShowregister: {
                phone: [
                    { required: true, validator:ShowregisterPhone, trigger:'blur'}
                ],
                name:[ {  required:true, validator:kongge, trigger: "blur" } ],
                company: [
                    { required: true, message: '请输入您的企业名称', trigger: 'blur' }
                ],
                password: [
                    { required: true, validator:Showregisterpassword, trigger:'blur'}
                ],
                confirmPassword: [
                    { required: true, validator:ShowregisterconfirmPassword, trigger:'blur'}
                ],
                email: [
                    { required: true, message: '请输入邮箱', trigger: 'blur' },
                    { type: 'email', message: '邮箱格式不正确', trigger: 'blur' }
                ],
                gender: [
                    { required: true, message: '请阅读', trigger: 'change' }
                ],
                validateCode: [
                    { required: true, message: '请输入验证码', trigger: 'blur' }
                ]
            }
        };
    },
    mounted(){
        this.showbtn()
    },
    methods: {
        showbtn(){
            if(localStorage.getItem("userId")){
                return true
            }else{
                return false
            }
        },
        //显示隐藏登录注册
        changeShow (){
            this.showlogin = !this.showlogin
        },
        //表单提交
        async contactusSubmit (formContact) {
            await this.$refs[formContact].validate((valid) => {
                if (valid) {
                    const formDatas = {
                        'doType' : "1",
                        'productName': this.formContact.product,            
                        'projectName': this.formContact.interest.join(","),         
                        'demand': this.formContact.desc,           
                        'name': localStorage.getItem("userId")        
                    }
                    const options = {
                        method: 'POST',
                        headers: { 'content-type': 'application/x-www-form-urlencoded' },
                        data: qs.stringify(formDatas),
                        url: 'http://172.16.0.102:20086/official/insertOfficialContactUs'
                         // http://172.16.0.102:20086测试
                        //正式http://official.jimisim.com/official/
                        //http://172.16.0.30:20086本地
                    };
                    axios(options).then(res=>{
                        if(res.data.code == 1 && res.data.msg){
                            // alert(res.data.msg)
                            this.$Message.error(res.data.msg);
                        } else{
                            this.$Message.success(res.data.msg);
                            alert(res.data.msg)
                        }
                    }).catch(err => {
                        console.log(err)
                    })    
                }
            })
        },
        //登录
        async showloginSubmit(formShowlogin) {
            await this.$refs.formShowlogin.validate((valid) => {
                if (valid) {
                    const formDatas = {
                        name: this.formShowlogin.name,
                        password: this.formShowlogin.password
                    };
                    const options = {
                        method: "POST",
                        headers: {
                            "content-type": "application/x-www-form-urlencoded"
                        },
                        data: qs.stringify(formDatas),
                        url: "http://172.16.0.102:20086/official/login"
                        // http://sat.jimisim.com/official/login
                        
                    };
                    axios(options)
                        .then(res => {
                            if (res.data.code !== 0 && res.data.msg) {
                                alert(res.data.msg)
                            } else {
                                // this.$Message.success("正在登录");
                                localStorage.setItem("userId",res.data.data.name);
                                location.reload()
                                alert("登陆成功")
                            }
                        })
                        .catch(err => {
                            console.log(err);
                        });
                }
            })
        },
        //图形验证码
        changeCodeImg (){
            var num = Math.ceil(Math.random()*10);//生成一个随机数（防止缓存）
            this.codeImg = 'http://172.16.0.102:20086/official/validateCode?' + num
        },
        //注册
        async showregisterSubmit (formShowregister) {
            await this.$refs.formShowregister.validate((valid) => {
                if (valid) {
                    const formDatas = {
                        'name': this.formShowregister.name,            
                        'company': this.formShowregister.company,         
                        'email': this.formShowregister.email,           
                        'password': this.formShowregister.password,        
                        'confirmPassword': this.formShowregister.confirmPassword, 
                        'phone': this.formShowregister.phone,           
                        'validateCode': this.formShowregister.validateCode    
                    }
                    const options = {
                        method: 'POST',
                        headers: { 'content-type': 'application/x-www-form-urlencoded' },
                        data: qs.stringify(formDatas),
                        url: 'http://172.16.0.102:20086/official/register'
                    };
                axios(options).then(res=>{
                        if(res.data.code == 1 && res.data.msg){
                            alert(res.data.msg)
                        } else{
                            alert('注册成功请登录');
                            this.showlogin = !this.showlogin
                        }
                    }).catch(err => {
                        console.log(err)
                    })
                } 

            })    
        
        }
    }
};
</script>

<style scoped>
.contactUs-banner {
    width: 100%;
    height: 680px;
    background: url("../assets/img/banner/banner5.png") no-repeat center center;
    background-size: 100%;
    position: relative;
}
.cb-con {
    width: 50%;
    height: 135px;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.cb-con h3 {
    width: 100%;
    height: 80px;
    font-size: 50px;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
    line-height: 80px;
}
.cb-con p {
    width: 100%;
    height: 55px;
    font-size: 25px;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
    line-height: 55px;
}
.contactUs-consult {
    width: 1180px;
    margin: 0 auto;
}
.consult-title {
    width: 100%;
    height: 250px;
    text-align: center;
}
.consult-title h3 {
    width: 100%;
    height: 250px;
    font-size: 30px;
    font-weight: 500;
    color: rgba(51, 51, 51, 1);
    line-height: 250px;
}
.consult-form {
    width: 80%;
    margin: 0 auto;
}
.formitem {
    margin-bottom: 100px;
}
.formitem >>> .ivu-form-item-label {
    padding-bottom: 27px;
    font-size: 23px;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
}
.formitem >>> .ivu-form-item-label:before{
    content: '';
}
.formitem >>> .ivu-select-selection {
    border: 1px solid rgba(151, 151, 151, 1);
}
.formitem >>> textarea.ivu-input{
    font-size: 18px;
}
.checkbox {
    margin: 100px 0;
}
.checkbox label {
    margin-right: 60px;
    font-size: 20px;
    font-weight: 400;
    color: rgba(102, 102, 102, 1);
}
.checkbox label >>> .ivu-checkbox-inner {
    width: 19px;
    height: 19px;
    border-radius: 2px;
    border: 1px solid rgba(85, 125, 255, 1);
}
.checkbox label >>> .ivu-checkbox-checked .ivu-checkbox-inner:after {
    top: 4px;
    left: 6px;
}
.formitem >>> .ivu-input {
    color: rgba(51, 51, 51, 1);
    border: 1px solid rgba(151, 151, 151, 1);
}
.show-btn {
    width: 100%;
}
.contact-btn {
    display: block;
    width: 166px;
    height: 49px;
    margin: 0 auto;
    font-size: 20px;
    font-weight: 500;
    background: rgba(85, 125, 255, 1);
    border-radius: 25px;
}
.contactUs-show {
    width: 100%;
}
.showlogin {
    width: 58%;
    margin: 0 auto;
}
.showlogin-title {
    width: 100%;
    height: 250px;
    /* padding-top: 80px; */
}
.showlogin-title h3 {
    width: 100%;
    height: 250px;
    font-size: 30px;
    font-weight: 500;
    color: rgba(51, 51, 51, 1);
    line-height: 250px;
    text-align: center;
}
.showlogin-btn {
    width: 100%;
    height: 48px;
    font-size: 23px;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    background: rgba(85, 125, 255, 1);
    margin-top: 30px;
}
.span {
    width: 100%;
    height: 22px;
    margin-top: 20px;
    font-size: 23px;
    font-weight: 400;
    color: rgba(85, 125, 255, 1);
}
.span span{
    cursor: pointer;
}
.registerspan{
    width: 100%;
    height: 22px;
    margin-top: 40px;
    font-size: 23px;
    font-weight: 400;
    /* color: rgba(85, 125, 255, 1); */
    text-align: center;
}
</style>









