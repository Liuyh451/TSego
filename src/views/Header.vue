<template>
    <div>
        <div class="空菜单栏"></div>
        <div class="顶部菜单栏">
            <el-menu mode="horizontal" background-color="#f5f5f5" router
            :default-active="this.$route.path">
                <el-menu-item index="/finalhome">商城首页</el-menu-item>
                <!-- <el-menu-item index="/goodslist">商品列表页</el-menu-item> -->
                <el-menu-item index="/myordercenter">订单中心</el-menu-item>
                <el-menu-item index="/myinformation">个人中心</el-menu-item>
                <el-menu-item index="/myhippo">我的天生画像</el-menu-item>
                <el-menu-item index="/hippoforum">天生论坛</el-menu-item>
                <el-menu-item index="/sellerback1">卖家管理</el-menu-item>
                <el-submenu index="4" class="用户头像">
                    <template #title>
                        <el-avatar size="medium" :src="用户信息.userurl" @error="true">
                        <img src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"/>
                    </el-avatar>
                    </template>
                    <el-menu-item index="/mymodifyinformation" class="展开菜单 头像展开菜单">个人信息管理</el-menu-item>
                    <el-menu-item index="/login" class="展开菜单 头像展开菜单" @click.native="logout">退出登陆</el-menu-item>
                </el-submenu>
            </el-menu>
        </div>
    </div>
</template>

<script>
const axios = require('axios');
export default {
    data()
    {
        return{
            用户信息: {
                "id": '',
                "username": " ",
                "email": "",
                 "phone": "",
                 "userurl": "", 
                 "gender": "",
                 "age": '',
                 /* "foodPreference": "", */
                 "signature": "",
                 /* "hometown": "", */
                 /* "residentArea": "", */
                 /* "label": "", */
                 "createtime": ""
            } 
        }
    },
    methods:{
        
        logout(){
            localStorage.removeItem('currentuser');
            localStorage.removeItem('userAvatar');
            this.$notify.success({
                title: '退出登陆成功',
                message: "请重新登陆",
                offset:50
            })
        }
    },
    created(){
        
        if (localStorage.getItem('userAvatar')!==null){
        this.用户信息.userurl=JSON.parse(localStorage.getItem('userAvatar')).userurl
    }
    }
}
</script>

<style scoped>
    .展开菜单{
        text-align: center;
        z-index: 50000;
    }
    .用户头像{
        position:absolute;
        right: 10px;
        z-index: 50000;
    }
    .顶部菜单栏 {
        width: 100%;
        margin-left: 10px;
        z-index: 50000;
        position: fixed;
        height: 80px;
        top: 0;
    }
    .空菜单栏 {
        height: 65px;
        top: 0;
    }
</style>