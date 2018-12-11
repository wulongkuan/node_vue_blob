<style scoped>
.layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
    height:100vh;
}
.layout_inner{
    height:100%;
}
.layout-logo{
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
}
.layout-nav{
    margin-right: 20px;
    float:right;
}
</style>
<template>
    <div class="layout">
        <Layout class="layout_inner">
            <Header>
                <Menu mode="horizontal" theme="dark" active-name="1">
                    <div class="layout-logo"></div>
                    <div class="layout-nav">
                            <Icon type="ios-text" color="#0f0" size="20" style="margin-right:10px;"/>
                            <Avatar :src="url" />
                    </div>
                </Menu>
            </Header>
            <Layout>
                <Sider hide-trigger :style="{background: '#fff'}">
                    <Menu active-name="1-2" theme="light" width="auto" :open-names="['1']">
                        <Submenu name="1">
                            <template slot="title">
                                <Icon type="ios-navigate"></Icon>
                               个人首页
                            </template>
                            <MenuItem name="1-1">首页</MenuItem>
                        </Submenu>
                        <Submenu name="2">
                            <template slot="title">
                                <Icon type="ios-keypad"></Icon>
                                博文管理
                            </template>
                            <MenuItem name="2-1">博文</MenuItem>
                        </Submenu>
                        <Submenu name="3">
                            <template slot="title">
                                <Icon type="ios-analytics"></Icon>
                                好友管理
                            </template>
                            <MenuItem name="3-1">我的好友</MenuItem>
                        </Submenu>
                        <Submenu name="4">
                            <template slot="title">
                                <Icon type="ios-analytics"></Icon>
                                个人中心
                            </template>
                            <MenuItem name="3-1"> <router-link to="/main/personinfo">个人信息</router-link></MenuItem>
                        </Submenu>
                    </Menu>
                </Sider>
                <Layout :style="{padding: '0 24px 24px'}">
                    <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
                        <router-view></router-view>
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    </div>
</template>
<script>
import DOMAIN_NAME from '../assets/config';
    export default {
        data(){
            return{
                url:DOMAIN_NAME.URL_EASYMOCK+"/upload/upload_02fc0d4e9581cce0417dcd4e781871f8.jpg"
            }
        }
    }
</script>
