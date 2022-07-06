import Vue from "vue";
import VueRouter from "vue-router";
import Ordercheck from "../views/Ordercheck.vue";
import Ordersend from "../views/Ordersend.vue";
import Cart from "../views/Cart.vue";
import Login from "../views/login.vue";
import Regist from "../views/regist.vue";
import GoodsList from "../views/GoodsList.vue";
import MyOrderCenter from "../views/MyOrderCenter.vue";

import HippoForum from "../views/HippoForum.vue";
import ForumHome from "../views/ForumHome.vue";
import PostForum from "../views/PostForum.vue";
import ForumContent from "../views/ForumContent.vue";

import PersonalCenter from "../views/PersonalCenter.vue";
import FinalHome from "../views/FinalHome.vue";
import SingleProcuct from "../views/SingleProduct.vue";
import sellerback1 from "../views/sellerback1.vue";
import sellerProductUp from "../views/sellerProductUp.vue";
import sellProductModify from"../views/sellProductModify.vue";
import sellerOrder from'../views/sellerOrder';
import sellerMyProducts from '../views/sellerMyProducts';
import sellerdata from '../views/sellerdata';
/* import { component } from "vue/types/umd"; */
Vue.use(VueRouter);

/*↓↓↓↓↓↓↓↓↓↓ 这个部分可以，如果router报错↓↓↓↓↓↓↓↓↓↓↓ 2022年6月24日21点39分*/

const originalPush = VueRouter.prototype.push;
const originalReplace = VueRouter.prototype.replace;

// push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject)
    return originalPush.call(this, location, onResolve, onReject);
  return originalPush.call(this, location).catch(err => err);
};

//replace
VueRouter.prototype.replace = function push(location, onResolve, onReject) {
  if (onResolve || onReject)
    return originalReplace.call(this, location, onResolve, onReject);
  return originalReplace.call(this, location).catch(err => err);
};
/*↑↑↑↑↑↑↑↑↑↑ 这个部分可以，如果router报错↑↑↑↑↑↑↑↑↑↑ */

const routes = [
  {
    path: "/sellerback1",
    name: "sback",
    component: sellerback1,
    meta: {
      token_require: true,
      admin_require: true,
    },
    children: [
        {
         path: "/sellerProductUp" ,
         name:"sellerProductUp",
         component:sellerProductUp
        },
        {
        path:"/sellProductModify",
        name:"sellProductModify",
        component:sellProductModify
        },
  /*       {
            path:'/sellerOrder',
            name:"sellOrder",
            component:sellerOrder
        } */
        {
          path:'/sellerMyProducts',
          name:"sellerMyProducts",
          component:sellerMyProducts
        },
        {
          path:'/sellerOrder',
          name:"sellOrder",
          component:sellerOrder
      
        },
        {
          path:'/sellerdata',
          name:"sellerdata",
          component:sellerdata
      
        }


],
  },

  {
    path: "/hippoforum",
    name: "HippoForum",
    component: HippoForum,
    meta: {
      title: "天生广场",
      token_require: true,
      admin_require: false,
    },
    children: [
      {
        path: "/forumcontent",
        name: "ForumContent",
        component: ForumContent,
        meta: {
          title: "帖子内容",
          token_require: false,
        },
      },
      {
        path: "/forumhome",
        name: "ForumHome",
        component: ForumHome,
        meta: {
          title: "论坛首页",
          token_require: false,
        },
      },
      {
        path: "/recommendforum",
        name: "RecommendForum",
        component: ForumHome,
        meta: {
          title: "每日好贴推荐",
          token_require: false,
        },
      },
      {
        path: "/goodsforum",
        name: "GoodsForum",
        component: ForumHome,
        meta: {
          title: "每日好物推荐",
          token_require: false,
        },
      },
      {
        path: "/postforum",
        name: "PostForum",
        component: PostForum,
        meta: {
          title: "晒出我的天生生活～",
          token_require: true,
        },
      },
    ],
  },
  {
    path: "/singleproduct",
    name: "SingleProduct",
    component: SingleProcuct,
    meta: {
      title: "商品详情",
      token_require: false,
      admin_require: false,
    },
  },
  {
    path: "/personalcenter",
    name: "PersonalCenter",
    component: PersonalCenter,
    meta: {
      title: "我的个人中心",
      token_require: true,
      admin_require: false,
    },
    children: [
      {
        path: "/myaddress",
        name: "MyAddress",
        component: () => import("../views/My_Address.vue"),
        
      },
      {
        path: "/myinformation",
        name: "MyInformation",
        component: () => import("../views/My_Information.vue"),
        meta: {
          title: "我的个人中心",
          token_require: true,
          admin_require: false,
        }
      },
      {
        path: "/mymodifyaccount",
        name: "MyModifyAccount",
        component: () => import("../views/My_ModifyAccount.vue"),
       
      },
      {
        path: "/mymodifyinformation",
        name: "MyModifyInformation",
        component: () => import("../views/My_ModifyInformation.vue"),
        meta: {
          title: "修改个人资料",
          token_require: true,
          admin_require: false,
        }
      },
      {
        path: "/mymodifypassword",
        name: "MyModifyPassWord",
        component: () => import("../views/My_ModifyPassword.vue"),
      },
      {
        path: "/myhippo",
        name: "MyHippo",
        component: () => import("../views/My_Hippo.vue"),
        meta: {
          title: "我的个人中心",
          token_require: true,
          admin_require: false,
        }
      },
    ],
  },

  {
    path: "/",
    name: "Home",
    component: FinalHome,
    meta: {
      title: "商场首页",
      token_require: false,
      admin_require: false,
    },
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
    meta: {
      title: "关于我们",
      admin_require: false,
    },
  },
  {
    path: "/ordercheck",
    name: "Ordercheck",
    component: Ordercheck,
    meta: {
      title: "订单结算",
      token_require: true,
      admin_require: false,
    },
  },
  {
    path: "/ordersend",
    name: "Ordersend",
    component: Ordersend,
    meta: {
      title: "订单结算",
      token_require: true,
      admin_require: false,
    },
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
    meta: {
      title: "我的购物车",
      token_require: true,
      admin_require: false,
    },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      title: "登陆",
      token_require: false,
      admin_require: false,
    },
  },
  {
    path: "/regist",
    name: "Regist",
    component: Regist,
    meta: {
      title: "账户注册",
      token_require: false,
      admin_require: false,
    },
  },
  {
    path: "/finalhome",
    name: "FinalHome",
    component: FinalHome,
    meta: {
      title: "首页",
      token_require: false,
      admin_require: false,
    },
  },
  {
    path: "/goodslist",
    name: "GoodsList",
    component: GoodsList,
    meta: {
      title: "商品搜索结果",
      token_require: false,
      admin_require: false,
    },
  },
  {
    path: "/myordercenter",
    name: "MyOrderCenter",
    component: MyOrderCenter,
    meta: {
      title: "我的订单中心",
      token_require: true,
      admin_require: false,
    },
    children: [
      {
        path: "/myorder",
        name: "MyOrder",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/MY_Order.vue"),
        meta: {
          title: "我的订单",
        },
      },
      {
        path: "/mycomment",
        name: "MyComment",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/MY_Comment.vue"),
        meta: {
          title: "我的评论",
        },
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
});

export default router;
