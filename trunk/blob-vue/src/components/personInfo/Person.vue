<template>
    <Form ref="formInline" :model="formInline" :rules="ruleInline" >
        <FormItem prop="username">
            <Input type="text" v-model="formInline.username" placeholder="Username" label="用户名">
                <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
        </FormItem>
        <FormItem prop="email" label="邮箱">
            <Input type="email" v-model="formInline.email" placeholder="Password">
                <Icon type="ios-lock-outline" slot="prepend"></Icon>
            </Input>
        </FormItem>
         <Upload action="//localhost:3000/file/uploadfile">
            <Button icon="ios-cloud-upload-outline">上传图片</Button>
        </Upload>
        <FormItem>
            <Button type="primary" @click="handleSubmit('formInline')">修改</Button>
        </FormItem>
    </Form>
</template>
<script>
    import {mapGetters, mapMutations, mapActions} from 'vuex';
    export default {
        data () {
            return {
                formInline: {
                    username: "",
                    email: "",
                    id:"",
                },
                ruleInline: {
                    username: [
                        { required: true, message: 'Please fill in the user name', trigger: 'blur' }
                    ],
                    email: [
                        { required: true, message: 'Please fill in the password.', trigger: 'blur' },
                        { type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur' }
                    ]
                }
            }
        },
        computed:{
            ...mapGetters([
                "userInfo",
            ]),
        },

        methods: {
            handleSubmit(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        console.log("this.formInline==",this.formInline);
                        this.$axios.updateUser(this.formInline).then((res)=>{
                            if(res.data.code=="200"){
                                this.$Message.info(res.data.msg);
                            }
                        });
                    }
                })
            }
        },
        mounted() {
            console.log("this.userInfo=",this.userInfo);
          this.formInline={
                username: this.userInfo.username,
                email: this.userInfo.email,
                id:this.userInfo.id,

          }

        },
    }
</script>
