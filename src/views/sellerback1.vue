<template>
<div class="主页">
        <div class="导航栏">
            <el-menu
            :default-active="this.$route.path"  
            router>
                <el-submenu index="1" >
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>商品管理</span>
                    </template>
                    <el-menu-item index="/sellerProductUp">上架商品</el-menu-item>
                    <el-menu-item index="/sellerMyProducts">查询商品</el-menu-item>
                </el-submenu>
                <el-submenu index="2">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>订单管理</span>
                    </template>
                    <el-menu-item index="/sellerOrder">订单查询</el-menu-item>
                    <el-menu-item index="">订单修改</el-menu-item>
                    <el-menu-item index="">联系买家</el-menu-item>
                </el-submenu>
                <el-submenu index="3">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>数据中心</span>
                    </template>
                    <el-menu-item index="/sellerdata">卖家数据</el-menu-item>
                    <el-menu-item index="">商品数据</el-menu-item>
                </el-submenu>
                <el-menu-item index="">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>库存管理</span>
                    </template>
                </el-menu-item>
            </el-menu>
        </div>  
        <router-view class='menu-right'  />
    </div>

</template>
<style scoped>
    .主页{
        width: 95%;
        margin: auto;
    }
    .导航栏{
        width: 20%;
        float: left;
        display:inline;
    }
    .menu-right{
        margin-left:300px;
    }
    .左侧菜单{
        /* float:left; */
        width: 15%;
        display:inline;
    }
</style>


