<template>
    <div id="register" data-automation="register">
        <div class="wrap">
            <div class="inner">
                <h1>欢迎注册几米物联网卡账号</h1>
                <p>准备开启您的连接未来之旅</p>
                <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" class="formregister">
                    <FormItem prop="name">
                        <Input type="text" v-model="formValidate.name" placeholder="用户名"></Input>
                    </FormItem>
                    <FormItem prop="company">
                        <Input v-model.trim="formValidate.company" placeholder="企业"></Input>
                    </FormItem>
                    <FormItem prop="email">
                        <Input v-model="formValidate.email" placeholder="邮箱"></Input>
                    </FormItem>
                    <FormItem prop="password">
                        <Input type="password" v-model="formValidate.password" placeholder="密码"></Input>
                    </FormItem>
                    <FormItem prop="confirmPassword ">
                        <Input type="password" v-model="formValidate.confirmPassword " placeholder="确认密码" @on-blur="yanzheng"></Input>
                    </FormItem>
                    <FormItem prop="phone">
                        <Input type="tel" v-model="formValidate.phone" placeholder="手机号"></Input>
                    </FormItem>
                    <FormItem prop="validateCode">
                        <Row>
                            <Col span="8">
                                <Input v-model="formValidate.validateCode" placeholder="验证码"></Input>
                            </Col>
                            <Col span="8" style="text-align: center">
                                <a href="javascript:;" @click="changeCodeImg()">
                                    <img :src="codeImg" alt="图片加载失败" title="看不清？点击更换图片"/>
                                </a>
                            </Col>
                        </Row>
                    </FormItem>
                    <!-- <a href="javascript:;" @click="changeCodeImg()"><img :src="codeImg" alt="图片加载失败" title="看不清？点击更换图片"/></a> -->
                    <FormItem prop="gender">
                        <RadioGroup v-model="formValidate.gender">
                            <Radio label="a">我已阅读并接受以下条款</Radio><a>《几米隐私权保护声明》</a>
                        </RadioGroup>
                    </FormItem>
                    <FormItem>
                        <Button class="btn" type="primary" @click="handleSubmit('formValidate')">注册</Button>
                        <span>已有账号?</span>&nbsp;&nbsp;<router-link to="/login">立即登录</router-link>
                    </FormItem>
                </Form>
            </div>
            <!-- <div class="bottom">
                <span>&#169 2019 Jimi 使用几米前必读</span>&nbsp;&nbsp;&nbsp;&nbsp;
                <span>增值电信业务经营许可证：××.××-××××××××</span>&nbsp;&nbsp;&nbsp;&nbsp;
                <span>粤ICP证××××××号</span>&nbsp;&nbsp;&nbsp;&nbsp;
                <span>隐私政策</span>
            </div> -->
        </div>

        <div class="gohome">
            <router-link to="/home" tag="p">返回首页</router-link>
        </div>

    </div>
</template>

<script>
import axios from "axios";
import qs from 'qs';
    export default {
        name: "register",
        data () {

            // const validatepassword = (rule, value, callback) => {
            //     this.$refs.formValidate.validateField('confirmPassword');
            //     callback();
            // };
            // const validateconfirmPassword = (rule, value, callback) => {
            //     if (this.formValidate.password != '' && value == '') {
            //         callback(new Error('确认密码不能为空'));
            //     } else if (this.formValidate.password != value) {
            //         callback(new Error('新密码和确认密码应相同'));
            //     } else {
            //         callback();
            //     }
            // };

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

            const validatePhone = (rule, value, callback) => {
                if (!value) {
                    callback(new Error('手机号不能为空'));
                } else if (!/^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/.test(value)) {
                    callback('手机号格式不正确');
                } else {
                    callback();
                }   
            };
            const validatepassword = (rule, value, callback) => {
                var reg = /^[a-zA-Z0-9]{6,10}$/;
                if (!value) {
                    callback(new Error('密码不能为空'));
                }else if (new RegExp(reg).test(value) == false) {
                    callback('请输入6到10位密码包含字母或数字');
                } else {
                    callback();
                }   
            };
            const validate = (rule, value, callback) => {
                alert(1)
                if (value === "") {
                    alert(2)
                    callback(new Error('确认密码不能为空'));
                }else if (value != this.formValidate.password) {
                    callback('两次密码不一致');
                    alert(3)
                } else {
                    callback();
                    alert(4)
                } 
                 alert(5) 
            }; 
                
            return {
                codeImg: 'http://172.16.0.102:20086/official/validateCode',
                formValidate: {
                    name: '',
                    company: '',
                    email: '',
                    password: '',
                    gender: 'a',
                    confirmPassword: '',
                    phone: '',
                    validateCode: ''
                    
                },
                 ruleValidate: {
                    name:[ {  required:true,  validator:kongge, trigger:'blur' } ],
                    phone: [
                        { required: true, validator:validatePhone, trigger:'blur'}
                    ],
                    company: [
                        { type: 'string', required: true, message: '请输入您的企业名称', trigger: 'blur' }
                    ],
                    password: [
                        { required: false,  validator:validatepassword, trigger:'blur'}
                    ],
                    confirmPassword: [
                        { required: false,  validator:validate, trigger:'blur'}
                    ],
                    email: [
                        { required: true, message: '请输入邮箱', trigger: 'blur' },
                        { type: 'email', message: '邮箱格式不正确', trigger: 'blur' }
                    ],
                    gender: [
                        { required: true, message: 'Please select gender', trigger: 'change' }
                    ],
                    validateCode: [
                        { required: true, message: '请输入验证码', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            changeCodeImg (){
                var num = Math.ceil(Math.random()*10);//生成一个随机数（防止缓存）
                this.codeImg = 'http://172.16.0.102:20086/official/validateCode?' + num
            },
            async handleSubmit (formValidate) {
                await this.$refs[formValidate].validate((valid) => {
                    if (valid) {
                        const formDatas = {
                            'name': this.formValidate.name,            
                            'company': this.formValidate.company,         
                            'email': this.formValidate.email,           
                            'password': this.formValidate.password,        
                            'confirmPassword': this.formValidate.confirmPassword, 
                            'phone': this.formValidate.phone,           
                            'validateCode': this.formValidate.validateCode    
                        }
                        const options = {
                            method: 'POST',
                            headers: { 'content-type': 'application/x-www-form-urlencoded' },
                            data: qs.stringify(formDatas),
                            url: 'http://172.16.0.102:20086/official/register'
                            // http://172.16.0.102:20086测试
                            //正式http://official.jimisim.com/official/
                            //http://172.16.0.30:20086本地
                        };
                        axios(options).then(res=>{
                            if(res.data.code == 1 && res.data.msg){
                                this.$Message.error(res.data.msg);
                            } else{
                                this.$Message.success('注册成功即将跳转到登录页面!');
                                setTimeout(() => {
                                    this.$router.push({ name: "login" });
                                }, 500);
                            }
                        }).catch(err => {
                            console.log(err)
                        })    
                    } 
                })
            } ,
            yanzheng() {
                if(this.formValidate.confirmPassword != this.formValidate.password){
                    // alert(1)
                    // this.validate()
                    this.$Message.error('两次密码不一致')
                }
            }    
        }
    }
</script>

<style scoped>
h1 {
    text-align: center;
    margin: 10px;
    font-size:36px;
    font-weight:500;
    color:rgba(255,255,255,1);
}
p{
    margin-bottom: 20px;
    font-size:20px;
    font-weight:500;
    color:rgba(255,255,255,1);
    text-align: center;
}
.wrap {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url("../assets/img/img/denglu.png") no-repeat center center;
    /* background-size: 100%; */
    /* background: linear-gradient(180deg, rgba(0, 12, 135, 1) 0%, rgba(4, 6, 29, 1) 100%); */
    /* opacity: 0.45799999999999996;*/  
} 
.inner {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 500px;
    height: 650px;
    border-radius: 10px;
    transform: translate(-60%, -50%);
    padding: 10px;
    /* background: #fff; */
}

.formregister >>> .ivu-input::-webkit-input-placeholder{
    color:rgba(255,255,255,1);
}
.formregister >>> .ivu-input{
    color: #fff;
    background-color: rgba(162,178,212,0.60361);
    border: 1px solid  rgba(162,178,212,1);
    /* opacity:0.6036;*/
} 

.btn{
    width:480px;
    margin: auto;
    display: block;
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
span{
    font-size:14px;
    font-weight:400;
    color: #ffffff;
}
.bottom{
    width: 790px;
    position: absolute;
    left: 50%;
    bottom: 20px;
    transform: translateX(-48%);
}
</style>