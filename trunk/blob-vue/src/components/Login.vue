
<template>
    <div class="login">
    <Row className="login-row">
    <Form ref="formInline" :model="formInline" :rules="ruleInline" >
        <FormItem prop="username">
            <Input type="text" v-model="formInline.username" placeholder="账号">
                <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
        </FormItem>
        <FormItem prop="password">
            <Input type="password" v-model="formInline.password" placeholder="密码">
                <Icon type="ios-lock-outline" slot="prepend"></Icon>
            </Input>
        </FormItem>
        <FormItem>
            <Button type="primary" @click="handleRegister('formInline')">注册</Button>
            <Button type="primary" @click="handleSubmit('formInline')">登录</Button>
        </FormItem>
    </Form>
    </Row>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                formInline: {
                    username: '',
                    password: '',
                    
                },
                ruleInline: {
                    username: [
                        { required: true, message: '请输入您的账号', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入您的密码', trigger: 'blur' },
                        { type: 'string', min: 6, message: '密码长度至少为6位', trigger: 'blur' }
                    ]
                },
                username:''
            }
        },
        methods: {
            handleSubmit(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$axios.login(this.formInline).then((res)=>{
                            if(res.data.code==200){
                                this.username=res.data.data.name;
                                this.$Message.info(res.data.msg);
                                this.$router.push({ path: '/main/personInfo' })
                                this.$store.dispatch("saveUserInfo",{...res.data.data.user,id:res.data.data.id})
                            }else{
                                this.$Message.info(res.data.msg);
                            }
                        }) 
                    }
                })
            },
            handleRegister(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$axios.regist(this.formInline).then((res)=>{
                            console.log("res==",res);
                            if(res.data.code==1){
                                this.username=res.data.data.name;
                                console.log("this,",this)
                            }
                        })
                        //this.$as.post("http://localhost:3000/user/register",{username:'武龙宽',password:"123456"})
                         
                    }
                })
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .login{
        width:100%;
        height:100vh;
        background:url("../assets/images/login-bg.jpg");
        background-size:100% 100%;
        background-repeat:no-repeat;
        overflow:hidden;
    }
    .login-row{
        width:242px;
        height:174px;
        margin:24% auto;
    }
</style>
