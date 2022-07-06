<template>
    <div class="页面">
        <div class="头部">
            <Navbar ref="nav_ins"></Navbar>
        </div>
        <div class="正文" style="zoom: 90%">
            <div id="展示区" >
                <div id="走马灯展示区">
                    <div id="左侧分类栏" >
                        <div id="分类栏头">全部商品分类</div>
                        <div id="分类栏表" >
                            <ul>
                                <li id="li1">
                                    <img src="../assets/img/分类小图标/cloth.png" width="30px" height="30px">
                                    <a href="#" style="color:black">服饰箱包</a><i>></i>
                                    <div id="右侧拉出栏1">
                                        <div id="右拉菜单">
                                            <div id="小抬头"><a  href="/goodslist?productname=潮流女装">潮流女装 ></a></div>
                 
                                        </div>
                                        <div id="右拉菜单">
                                            <div id="小抬头"><a id="小抬头" href="/goodslist?productname=时尚男装">时尚男装 ></a></div>
                            
                                        </div>
                                        <div id="右拉菜单">
                                            <div id="小抬头"><a id="小抬头" href="/goodslist?productname=时尚女包">时尚女包 ></a></div>
                                      
                                        </div>
                                    </div>
                                </li>
                                <li id="li2">
                                    <img src="../assets/img/分类小图标/digtial.png" width="30px" height="30px">
                                    <a href="#" style="color:black">电子数码</a><i>></i>
                                    <div id="右侧拉出栏2">
                                        <div id="右拉菜单">
                                            <div id="小抬头"><a  href="/goodslist?productname=手机">手机 ></a></div>
                                     
                                        </div>
                                        <div id="右拉菜单">
                                            <div id="小抬头"><a id="小抬头" href="/goodslist?productname=电脑">电脑 ></a></div>
                                        
                                        </div>
                                        <div id="右拉菜单">
                                            <div id="小抬头"><a id="小抬头" href="/goodslist?productname=平板"> 平板 ></a></div>
                                          
                                        </div>
                                        <div id="右拉菜单">
                                            <div id="小抬头"><a id="小抬头" href="/goodslist?productname=相机"> 相机 ></a></div>
                                            
                                        </div>
                                    </div>
                                </li>
                                <li id="li3">
                                    <img src="../assets/img/分类小图标/Cosmetics.png" width="30px" height="30px">
                                    <a href="#" style="color:black">护肤彩妆</a><i>></i>
                                    <div id="右侧拉出栏3">
                                        <div id="右拉菜单">
                                            <div id="小抬头"><a  href="/goodslist?productname=美容护肤">美容护肤 ></a></div>
                                            
                                        </div>
                                        <div id="右拉菜单">
                                            <div id="小抬头"><a id="小抬头" href="/goodslist?productname=香氛精油">香氛精油 ></a></div>
                                           
                                        </div>
                                        <div id="右拉菜单">
                                            <div id="小抬头"><a id="小抬头" href="/goodslist?productname=眼部彩妆">眼部彩妆 ></a></div>
                                          
                                        </div>
                                        <div id="右拉菜单">
                                            <div id="小抬头"><a id="小抬头" href="/goodslist?productname=美发造型">美发造型 ></a></div>
                                      
                                        </div>
                                        <div id="右拉菜单">
                                            <div id="小抬头"><a id="小抬头" href="/goodslist?productname=换季保养">换季保养 ></a></div>
                                         
                                        </div>
                                    </div>
                                </li>
                                <li id="li4">
                                    <img src="../assets/img/分类小图标/Goods.png" width="30px" height="30px">
                                    <a href="#" style="color:black">百货市场</a><i>></i>
                                    <div id="右侧拉出栏4">
                                        <div id="右拉菜单">
                                            <div id="小抬头"><a  href="/goodslist?productname=居家日用">居家日用 ></a></div>
                                         
                                        </div>
                                        <div id="右拉菜单">
                                            <div id="小抬头"><a id="小抬头" href="/goodslist?productname=应季百货">应季百货 ></a></div>
                                          
                                        </div>
                                        <div id="右拉菜单">
                                            <div id="小抬头"><a id="小抬头" href="/goodslist?productname=厨房工具"> 厨房工具 ></a></div>
                                           
                                        </div>
                                        <div id="右拉菜单">
                                            <div id="小抬头"><a id="小抬头" href="/goodslist?productname=清洁工具"> 清洁工具 ></a></div>
                                            
                                        </div>
                                    </div>
                                </li>
                                <li id="li5">
                                    <img src="../assets/img/分类小图标/food.png" width="30px" height="30px">
                                    <a href="#" style="color:black">汇吃美食</a><i>></i>
                                    <div id="右侧拉出栏5">
                                        <div id="右拉菜单">
                                            <div id="小抬头"><a  href="/goodslist?productname=休闲零食">休闲零食 ></a></div>
                                           
                                        </div>
                                        <div id="右拉菜单">
                                            <div id="小抬头"><a id="小抬头" href="/goodslist?productname=生鲜果蔬"> 生鲜果蔬></a></div>
                                           
                                        </div>
                                        <div id="右拉菜单">
                                            <div id="小抬头"><a id="小抬头" href="/goodslist?productname=牛奶饮料"> 牛奶饮料 ></a></div>
                                          
                                        </div>
                                        <div id="右拉菜单">
                                            <div id="小抬头"><a id="小抬头" href="/goodslist?productname=水产鲜肉"> 水产鲜肉 ></a></div>
                                         
                                        </div>
                                        <div id="右拉菜单">
                                            <div id="小抬头"><a id="小抬头" href="/goodslist?productname=美酒佳酿">美酒佳酿 ></a></div>
                                            
                                        </div>
                                        <div id="右拉菜单">
                                            <div id="小抬头"><a id="小抬头" href="/goodslist?productname=滋补养生">滋补养生 ></a></div>
                                         
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        
                    </div>
                    <div id="中部走马灯">
                            <el-carousel height="350px">
                            <el-carousel-item v-for="item in pictures" :key="item">
                                <h3 class="small"><img :src=item></h3>
                            </el-carousel-item>
                            </el-carousel>
                    </div>
                    <div id="右侧头条广告" style="height:345px">
                        <div id="右侧头条">
                            <div id="头条标题"><h3 align="center">—天生头条—</h3></div>
                            <div id="头条内容">
                                <p align="center"><a href="https://top100.jd.com/">精挑细选100分营养美味</a></p>
                                <p align="center"><a href="https://top100.jd.com/">0元试吃 全新上线 抓紧尝鲜</a></p>
                                <p align="center"><a href="https://top100.jd.com/">挡不住的美味</a></p>
                            </div>
                        </div>
                        <div id="右侧广告">
                            <img src="../assets/img/roll/16.jpg" width="200px" height="210px">
                        </div>
                    </div>
                </div>
                <div id="展示区下侧">
                    <div id="下侧展示块">
                        <div id="展示块图片"><img src="../assets/img/white/leafs-transparent.png" width="90px"></div>
                        <div id="展示块文字"><p id="展示块文字上">天生精选</p><p id="展示块文字下">Everything Can Do Sometimes</p></div>
                    </div>
                    <div id="下侧展示块">
                        <div id="展示块图片"><img src="../assets/img/white/leafs-transparent.png" width="90px"></div>
                        <div id="展示块文字"><p id="展示块文字上">天生精选</p><p id="展示块文字下">Everything Can Do Sometimes</p></div>
                    </div>
                    <div id="下侧展示块">
                        <div id="展示块图片"><img src="../assets/img/white/leafs-transparent.png" width="90px"></div>
                        <div id="展示块文字"><p id="展示块文字上">天生精选</p><p id="展示块文字下">Everything Can Do Sometimes</p></div>
                    </div>
                    <div id="下侧展示块">
                        <div id="展示块图片"><img src="../assets/img/white/leafs-transparent.png" width="90px"></div>
                        <div id="展示块文字"><p id="展示块文字上">天生精选</p><p id="展示块文字下">Everything Can Do Sometimes</p></div>
                    </div>
                </div>
            </div>
            <div id="秒杀区">
                <div id="标题栏">
                    <p style="font-size:30px"> 天 / 生 / 秒 / 杀 </p>
                    <p>FLASH SALE</p>
                </div>
                <div id="秒杀区商品容器">
                    <div id="秒杀单个商品" v-for="o, index in discountproduct" :key="index">
                        <div id="秒杀单个商品图片">
                            <a href="javascript:void(0);" @click="toshop(discountproduct[index].id)">
                                <img :src="discountproduct[index].pictureUrl" width="200px">
                            </a>
                        </div>
                        <div id="秒杀单个商品名称">
                            <a href="javascript:void(0);" @click="toshop(discountproduct[index].id)">
                                <p>{{discountproduct[index].name}}</p>
                            </a>
                        </div>
                        <div id="秒杀单个商品价格区">
                            <div id="秒杀单个商品价格">
                                <div id="秒杀最低价">
                                    <a href="javascript:void(0);" @click="toshop(discountproduct[index].id)">
                                        <p>近{{discountproduct[index].originPrice.toFixed(0)}}天最低价</p>
                                    </a>
                                </div>
                                <div id="秒杀现价">
                                    <a href="javascript:void(0);" @click="toshop(discountproduct[index].id)">
                                        <p>￥{{discountproduct[index].currentPrice.toFixed(2)}}</p>
                                    </a>
                                </div>
                                <div id="秒杀余量">
                                    <p>已售</p>
                                    <div id="秒杀进度">
                                        <el-progress :text-inside="true" :stroke-width="30" :percentage="discountproduct[index].percentage" status="warning"></el-progress>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="推荐区">
                <div id="标题栏">
                    <p style="font-size:30px"> 精 / 品 / 推 / 荐 </p>
                    <p>INSPIRATION FRESH</p>
                </div>
                <div id="推荐区导航">
                    <el-tabs id="推荐区导航栏" v-model="activeName" @tab-click="handleClick">
                        <el-tab-pane id ="推荐区块" label="精选数码" name="first">
                            <div id="推荐区文字">
                                <p style="font-size:25px">精选数码</p>
                            </div>
                            <div id="推荐商品区块">
                                <div id="推荐商品区">
                                    <div id="单个商品块" v-for="o, index in products2" :key="index">
                                        <div id="单个商品图片">
                                            <a href="javascript:void(0);" @click="toshop(products2[index].id)">
                                                <img :src="products2[index].pictureurl"  width="150px" height="150px">
                                            </a>
                                        </div>
                                        <div id="单个商品名称">
                                            <a href="javascript:void(0);" @click="toshop(products2[index].id)"><p>{{products2[index].name}}</p></a>
                                        </div>
                                        <div id="单个商品价格">
                                            <a href="javascript:void(0);" @click="toshop(products2[index].id)">
                                                <p>
                                                ￥{{products2[index].price}}
                                                </p>
                                            </a>
                                            <div id="销量">
                                                <p >销量 :{{products2[index].sales_amount}}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <img id ="插图2" src="../assets/img/roll/r1.png" alt=''>
                        </el-tab-pane>
                        <el-tab-pane id ="推荐区块" label="潮流腕表" name="second">
                            <div id="推荐区文字">
                                <p style="font-size:25px">潮流腕表</p>
                            </div>
                            <div id="推荐商品区块">
                                <div id="推荐商品区" >
                                    <div id="单个商品块" v-for="o, index in products1" :key="index">
                                        <div id="单个商品图片">
                                            <a href="javascript:void(0);" @click="toshop(products1[index].id)">
                                                <img :src="products1[index].pictureurl"  width="150px" height="150px">
                                            </a>
                                        </div>
                                        <div id="单个商品名称">
                                            <a href="javascript:void(0);" @click="toshop(products1[index].id)">
                                                <p>{{products1[index].name}}</p>
                                            </a>
                                        </div>
                                        <div id="单个商品价格">
                                            <a href="javascript:void(0);" @click="toshop(products1[index].id)">
                                                <p>
                                                    ￥{{products1[index].price}}
                                                </p>
                                            </a>
                                            <div id="销量">
                                            <p >销量 :{{products1[index].sales_amount}}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <img id ="插图2" src="../assets/img/roll/r2.png" alt=''>
                        </el-tab-pane>
                        <el-tab-pane id ="推荐区块" label="时尚美妆" name="third">
                            <div id="推荐区文字">
                                <p style="font-size:25px">时尚美妆</p>
                                
                            </div>
                            <div id="推荐商品区块">
                                <div id="推荐商品区">
                                    <div id="单个商品块" v-for="o, index in products3" :key="index">
                                        <div id="单个商品图片">
                                            <a href="javascript:void(0);" @click="toshop(products3[index].id)">
                                                <img :src="products3[index].pictureurl"  width="150px" height="150px">
                                            </a>
                                        </div>
                                        <div id="单个商品名称">
                                            <a href="javascript:void(0);" @click="toshop(products3[index].id)">
                                                <p>{{products3[index].name}}</p>
                                            </a>
                                        </div>
                                        <div id="单个商品价格">
                                            <a href="javascript:void(0);" @click="toshop(products3[index].id)">
                                                <p>
                                                    ￥{{products3[index].price}}
                                                </p>
                                            </a>
                                            <div id="销量">
                                                <p >销量 :{{products3[index].sales_amount}}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <img id ="插图2" src="../assets/img/roll/r3.png" alt=''>
                        </el-tab-pane>
                        <el-tab-pane id ="推荐区块" label="精品服饰" name="fourth">
                            <div id="推荐区文字">
                                <p style="font-size:25px">精品服饰</p>
                            </div>
                            <div id="推荐商品区块">
                                <div id="推荐商品区">
                                    <div id="单个商品块" v-for="o, index in products4" :key="index">
                                        <div id="单个商品图片">
                                            <a href="javascript:void(0);" @click="toshop(products4[index].id)">
                                                <img :src="products4[index].pictureurl"  width="150px" height="150px">
                                            </a>
                                        </div>
                                        <div id="单个商品名称">
                                            <a href="javascript:void(0);" @click="toshop(products4[index].id)">
                                                <p>{{products4[index].name}}</p>
                                            </a>
                                        </div>
                                        <div id="单个商品价格">
                                            <a href="javascript:void(0);" @click="toshop(products3[index].id)">
                                                <p>
                                                    ￥{{products4[index].price}}
                                                </p>
                                            </a>
                                            <div id="销量">
                                                <p >销量 :{{products4[index].sales_amount}}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <img id ="插图2" src="../assets/img/roll/r4.png" alt=''>
                        </el-tab-pane>
                    </el-tabs>
                </div>
                <div id="推荐展示区"></div>
            </div>
            <div id="分类展示区">
                <div id="标题栏">
                    <p style="font-size:30px"> 天 / 生 / 易 / 购 </p>
                    <p>Intrinsic Shopping
</p>
                </div>
                <div id="新鲜水果展区">
                    <div id="展示模块">
                        <div id="展示模块上部">
                            <div id="展示模块上部块1">
                                <div id="标题"><h4 style="color:white; margin-block-end: 8px">服饰箱包</h4></div>
                                <div id="简述">时尚易逝，风格永存</div>
                                <div id="选项">
                                    <div id="装字盒"><a href="#"> 女装 </a></div>
                                    <div id="装字盒"><a href="#"> 男装 </a></div>
                                    <div id="装字盒"><a href="#"> 童装 </a></div>
                                    <div id="装字盒"><a href="#"> 箱包 </a></div>
                                    <div id="装字盒"><a href="#"> 内衣 </a></div>
                              
                                </div>
                                <div id="更多">
                                    <div id="装字盒"><a href="#"> 更多服饰  &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  > </a></div>
                                </div>
                            </div>
                            <div id="展示模块上部块2"></div>
                            <div id="展示模块上部块3"></div>
                        </div>
                        <div id="展示模块下部">
                            <div id="展示模块下部块">
                                    <div id="单个商品块" v-for="o, index in 6" :key="index">
                                        <div id="单个商品图片">
                                            <a href="javascript:void(0);" @click="toshop(products5[index].id)">
                                                <img :src="products5[index].pictureurl"  width="150px" height="150px">
                                            </a>
                                        </div>
                                        <div id="单个商品名称">
                                            <a href="javascript:void(0);" @click="toshop(products5[index].id)">
                                                <p>{{products5[index].name}}</p>
                                            </a>
                                        </div>
                                        <div id="单个商品价格">
                                            <a href="javascript:void(0);" @click="toshop(products5[index].id)">
                                                <p>
                                                    ￥{{products5[index].price}}
                                                </p>
                                            </a>
                                            <div id="销量">
                                                <p >销量 :{{products5[index].sales_amount}}</p>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="海鲜水产展区">
                    <div id="展示模块">
                        <div id="展示模块上部">
                            <div id="展示模块上部块1">
                                <div id="标题"><h4 style="color:white; margin-block-end: 8px">电子数码</h4></div>
                                <div id="简述">超越自我，非同凡响</div>
                                <div id="选项">
                                    <div id="装字盒"><a href="#"> 笔记本 </a></div>
                                    <div id="装字盒"><a href="#"> 手机 </a></div>
                                    <div id="装字盒"><a href="#"> 平板 </a></div>
                                    <div id="装字盒"><a href="#"> 显示器 </a></div>
                                    <div id="装字盒"><a href="#"> 相机 </a></div>
                                    <div id="装字盒"><a href="#"> 键鼠 </a></div>
                                </div>
                                <div id="更多">
                                    <div id="装字盒"><a href="#"> 更多数码  &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  > </a></div>
                                </div>
                            </div>
                            <div id="展示模块上部块2"></div>
                            <div id="展示模块上部块3"></div>
                        </div>
                        <div id="展示模块下部">
                            <div id="展示模块下部块">
                                <div id="单个商品块" v-for="o, index in products6" :key="index">
                                        <div id="单个商品图片">
                                            <a href="javascript:void(0);" @click="toshop(products6[index].id)">
                                                <img :src="products6[index].pictureurl"  width="150px" height="150px">
                                            </a>
                                        </div>
                                        <div id="单个商品名称">
                                            <a href="javascript:void(0);" @click="toshop(products6[index].id)">
                                                <p>{{products6[index].name}}</p>
                                            </a>
                                        </div>
                                        <div id="单个商品价格">
                                            <a href="javascript:void(0);" @click="toshop(products6[index].id)">
                                                <p>
                                                    ￥{{products6[index].price}}
                                                </p>
                                            </a>
                                            <div id="销量">
                                                <p >销量 :{{products6[index].sales_amount}}</p>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="精选肉类展区">
                    <div id="展示模块">
                        <div id="展示模块上部">
                            <div id="展示模块上部块1">
                                <div id="标题"><h4 style="color:white; margin-block-end: 8px">护肤彩妆</h4></div>
                                <div id="简述">至纯至净，御美有方</div>
                                <div id="选项">
                                    <div id="装字盒"><a href="#"> 唇膏 </a></div>
                                    <div id="装字盒"><a href="#"> 口红 </a></div>
                                    <div id="装字盒"><a href="#"> 香水 </a></div>
                                    <div id="装字盒"><a href="#"> 面膜 </a></div>
                                    <div id="装字盒"><a href="#"> 底妆 </a></div>
                                    <div id="装字盒"><a href="#"> 眉眼 </a></div>
                                </div>
                                <div id="更多">
                                    <div id="装字盒"><a href="#"> 更多美妆  &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  > </a></div>
                                </div>
                            </div>
                            <div id="展示模块上部块2"></div>
                            <div id="展示模块上部块3"></div>
                        </div>
                        <div id="展示模块下部">
                            <div id="展示模块下部块">
                                <div id="单个商品块" v-for="o, index in products7" :key="index">
                                        <div id="单个商品图片">
                                            <a href="javascript:void(0);" @click="toshop(products7[index].id)">
                                                <img :src="products7[index].pictureurl"  width="150px" height="150px">
                                            </a>
                                        </div>
                                        <div id="单个商品名称">
                                            <a href="javascript:void(0);" @click="toshop(products7[index].id)">
                                                <p>{{products7[index].name}}</p>
                                            </a>
                                        </div>
                                        <div id="单个商品价格">
                                            <a href="javascript:void(0);" @click="toshop(products7[index].id)">
                                                <p>
                                                    ￥{{products7[index].price}}
                                                </p>
                                            </a>
                                            <div id="销量">
                                                <p >销量 :{{products7[index].sales_amount}}</p>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="饮品和蔬菜">
                    <div id="冷冻饮品展区">
                        <div id="展示模块2">
                            <div id="展示模块2上部">
                                <div id="展示模块2上部块1">
                                    <div id="标题"><h4 style="color:white; margin-block-end: 8px">汇吃美食</h4></div>
                                    <div id="简述">乐享美味，乐享生活</div>
                                    <div id="选项">
                                        <div id="装字盒"><a href="#"> 牛奶 </a></div>
                                        <div id="装字盒"><a href="#"> 巧克力</a></div>
                                        <div id="装字盒"><a href="#"> 酸奶 </a></div>
                                        <div id="装字盒"><a href="#"> 蛋糕 </a></div>
                                        <div id="装字盒"><a href="#"> 冰淇淋 </a></div>
                                        <div id="装字盒"><a href="#"> 坚果 </a></div>
                                    </div>
                                    <div id="更多">
                                        <div id="装字盒"><a href="#"> 更多美食   > </a></div>
                                    </div>
                                </div>
                                <div id="展示模块2上部块2"></div>
                            </div>
                            <div id="展示模块2下部">
                                <div id="展示模块2下部块">
                                    <div id="单个商品块" v-for="o, index in products8" :key="index">
                                        <div id="单个商品图片">
                                            <a href="javascript:void(0);" @click="toshop(products8[index].id)">
                                                <img :src="products8[index].pictureurl"  width="150px" height="150px">
                                            </a>
                                        </div>
                                        <div id="单个商品名称">
                                            <a href="javascript:void(0);" @click="toshop(products8[index].id)">
                                                <p>{{products8[index].name}}</p>
                                            </a>
                                        </div>
                                        <div id="单个商品价格">
                                            <a href="javascript:void(0);" @click="toshop(products8[index].id)">
                                                <p>
                                                    ￥{{products8[index].price}}
                                                </p>
                                            </a>
                                            <div id="销量">
                                            <p >销量 :{{products8[index].sales_amount}}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="新鲜蔬菜展区">
                        <div id="展示模块2">
                            <div id="展示模块2上部">
                                <div id="展示模块2上部块1">
                                    <div id="标题"><h4 style="color:white; margin-block-end: 8px">百货市场</h4></div>
                                    <div id="简述">舒适在身，优雅在心</div>
                                    <div id="选项">
                                        <div id="装字盒"><a href="#"> 沙发 </a></div>
                                        <div id="装字盒"><a href="#"> 茶几 </a></div>
                                        <div id="装字盒"><a href="#"> 书桌 </a></div>
                                        <div id="装字盒"><a href="#"> 炒锅 </a></div>
                                        <div id="装字盒"><a href="#"> 刀具 </a></div>
                                        <div id="装字盒"><a href="#"> 杯具</a></div>
                                    </div>
                                    <div id="更多">
                                        <div id="装字盒"><a href="#"> 更多百货   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  > </a></div>
                                    </div>
                                </div>
                                <div id="展示模块2上部块2"></div>
                            </div>
                            <div id="展示模块2下部">
                                <div id="展示模块2下部块">
                                    <div id="单个商品块" v-for="o, index in products9" :key="index">
                                        <div id="单个商品图片">
                                            <a href="javascript:void(0);" @click="toshop(products9[index].id)">
                                                <img :src="products9[index].pictureurl"  width="150px" height="150px">
                                            </a>
                                        </div>
                                        <div id="单个商品名称">
                                            <a href="javascript:void(0);" @click="toshop(products9[index].id)">
                                                <p>{{products9[index].name}}</p>
                                            </a>
                                        </div>
                                        <div id="单个商品价格">
                                            <a href="javascript:void(0);" @click="toshop(products9[index].id)">
                                                <p>
                                                    ￥{{products9[index].price}}
                                                </p>
                                            </a>
                                            <div id="销量">
                                                <p >销量 :{{products9[index].sales_amount}}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        <el-dialog v-if="discountdialogVisible" title="降价提醒" :visible.sync="discountdialogVisible" width="30%">
            <div id="降价提醒弹窗">
                <p>{{this.messages.message}}</p>
                <img :src="this.messages.productPicture" width="200px" >
                <div id="降价商品名称"><p>{{this.messages.productname}}</p></div>
                <div id="降价提醒价格区">
                    <span id="现价">￥{{this.messages.currentPrice}}</span>
                    <s id="原价">￥{{this.messages.oldPrice}}</s>
                    <span id="折扣"><i class="el-icon-bottom"></i>{{this.messages.percentage}}%</span>
                </div>
                <div id="降价立即购买">
                <el-button type="success" round @click="toshop2()">立即购买</el-button>
                </div>
            </div>
        </el-dialog>
            </div>
            <Bottom ref="bottom_ins"></Bottom>
            <el-backtop>
                <div>
                    <i class="el-icon-top"></i>
                </div>
            </el-backtop>
        </div>
    </div>
</template>

<script>
const axios = require('axios');
/*  import App from '../App.vue'  */
import Navbar from './Navbar.vue'
import Header from './Header.vue'
import Bottom from './Bottom.vue'
import api from "../api"
export default {
    
  components: {
    Navbar,
    Header,
    Bottom
  },
  
  created () {
    /* 这个是用来获取用户通知的 */
      /* if (localStorage.hasOwnProperty('currentuser')){
            axios.defaults.headers.common.Authorization = JSON.parse(localStorage.currentuser).token
            axios.post('http://localhost:9090/user/product/search', {
            }).then(res => {
                console.log(res.data)
            if (res.data.code === 200) {
                console.log(res.data.data)
                this.messages.messageId = res.data.data.messageId
                this.messages.productId = res.data.data.productId
                this.messages.oldPrice = res.data.data.oldPrice
                this.messages.percentage = res.data.data.percentage
                this.messages.productPicture = res.data.data.productPicture
                this.messages.currentPrice = res.data.data.currentPrice
                this.messages.message = res.data.data.message
                console.log(res.data.data.productName)
                this.messages.productname = res.data.data.productName
                this.messages.id = res.data.data.productId
                this.messages.days = res.data.data.days
                this.messages.percentage = res.data.data.percentage
                this.discountdialogVisible = true
            }
        })
      } */
/*     axios.post('http://localhost:9090/user/product/search', {
    }).then(res => {
      this.discountproduct = res.data.data
    }) */
    axios.post('http://localhost:9090/product/search', {
      categoryFirst: '潮流腕表'
    }).then(res => {
      this.products1 = res.data.data
      console.log(this.products1)
    })
   axios.post('http://localhost:9090/product/search', {
      categoryFirst: '电子数码'
    }).then(res => {
      this.products2 = res.data.data
      console.log(this.products2)
    })
    axios.post('http://localhost:9090/product/search', {
      
      categoryFirst: '时尚美妆'
    }).then(res => {
      this.products3 = res.data.data
    })
    axios.post('http://localhost:9090/product/search', {
      categoryFirst: '精品服饰'
    }).then(res => {
      this.products4 = res.data.data
    })
    axios.post('http://localhost:9090/product/search', {
      categoryFirst: '服饰箱包'
    }).then(res => {
      this.products5 = res.data.data
    })
    axios.post('http://localhost:9090/product/search', {
      categoryFirst: '电子数码'
    }).then(res => {
      this.products6 = res.data.data
      console.log(this.products6)
    })
    axios.post('http://localhost:9090/product/search', {
      categoryFirst: '护肤彩妆'
    }).then(res => {
      this.products7 = res.data.data
    })
    axios.post('http://localhost:9090/product/search', {
      categoryFirst: '汇吃美食'
    }).then(res => {
      this.products8 = res.data.data
      this.products8.length=this.products8.length-3
    })
    axios.post('http://localhost:9090/product/search', {
      categoryFirst: '百货市场'
    }).then(res => {
      this.products9 = res.data.data
      this.products9.length=this.products9.length-3
    })

  },
  data () {
    return {
        messages: {
        messageId: ' ',
        productId: ' ',
        oldPrice: ' ',
        percentage: ' ',
        productPicture: ' ',
        currentPrice: ' ',
        message: ' ',
        productname: ' ',
        id: ' '
      },
      discountdialogVisible: false,
        discountproduct: [],
        notifyPromise:Promise.resolve(),
        messages:[],
      input: '',
      img_url1: 'https://img10.360buyimg.com/cms/jfs/t13846/115/2346218030/176079/dfd8ece7/5a4094d3Nc8168196.png',
      activeName: 'second',
      pictures: ['https://image2.suning.cn/uimg/cms/img/164793059763145875.jpg',
        'https://image5.suning.cn/uimg/cms/img/165571600935855163.jpg',
        // 'https://m.360buyimg.com/babel/jfs/t1/196359/2/12777/133729/60ec0f3cE49b3aa40/28b3a539daad2631.jpg',
        'https://oss.suning.com/adpp/creative_kit/material/picture/20210706-3f7d954e7b59420ba820f5e0c025e6475c55bb4af86040a7.jpg',
        'https://oss.suning.com/adpp/creative_kit/material/picture/20220321-d34cb9bcf1e84e0dab4a24d27297bc36f37dc8ff951445eb.jpg'],
      products1: [],
      products2: [],
      products3: [],
      products4: [],
      products5: [],
      products6: [],
      products7: [],
      products8: [],
      products9: []
    }
  },
  function: {
    change (myid, mode) {
      document.getElementById(myid).style.display = mode
      if (mode === 'block') { // 显示下拉菜单
        // 设置下拉菜单所在的div边框
        document.getElementById(myid).style.border = '1px solid #eee'
        document.getElementById(myid).style.borderTop = 'none'
        // 设置鼠标划过的li的边框以及背景颜色
        document.getElementById(myid).parentNode.style.backgroundColor = '#fff'
        document.getElementById(myid).parentNode.style.border = '1px solid #eee'
        document.getElementById(myid).parentNode.style.borderBottom = 'none'
      } else {
        // 当不显示下拉列表的时候 鼠标划过的li的边框以及背景颜色
        document.getElementById(myid).parentNode.style.backgroundColor = ''
        document.getElementById(myid).parentNode.style.border = ''
      }
    }
  },
  methods: {
    toshop2 (id) {
      this.$router.push({ path: '/singleproduct', query: { id: this.messages.id } })
    },
    notify(msg) {
        this.notifyPromise = this.notifyPromise.then(this.$nextTick).then(()=>{
        this.$notify({
            title: "提示",
            message: msg,
            dangerouslyUseHTMLString: true,
            duration: 0,
            offset:50
        });
        })
    },
    handleClick (tab, event) {
      console.log(tab, event)
    },
    toshop (id) {
      this.$router.push({ path: '/singleproduct', query: { id: id } })
    }
  },
}
</script>

<style scoped>
/* ======================秒杀区================================ */
  #秒杀区 #标题栏{
      background: url('https://static.360buyimg.com/mtd/pc/fresh_v3/1.0.0/home/images/fresh_mod_head_bg.png');
      height:200px;
      width :1200px;
      background-repeat: no-repeat;
      background-position:50% 50% ;
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      color: rgb(0, 0, 0);
      z-index: 2;
  }
  #秒杀区{
      background: url('../assets/img/roll/back5.jpg');
      background-repeat: no-repeat;
      display: flex;
      flex-direction: column;
      align-items: center;

  }
  #秒杀区商品容器{
      background: url('../assets/img/roll/back2.jpg');
      width: 1200px;
      height: 400px;
      display: flex;
      flex-direction: row;
  }
  #秒杀单个商品{
      width: 250px;
      margin: 25px;
      height: 400px;
      display: flex;
      flex-direction: column;
      align-items: center;
  }
  #秒杀单个商品名称{
    height: 60px;
    overflow: hidden;
    width: 200px;
  }
  #秒杀现价{
      font-size: 25px;
      color: orange;
  }
  #秒杀现价 p{
      color: orange;
      margin: 0px;
  }
  #秒杀最低价 p{
      font-size: 15px;
      color: gray;
      margin: 0px;
  }
  #秒杀单个商品价格区{
      display: flex;
      flex-direction: row;
  }
  #秒杀单个商品价格{
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-right: 10px;
  }
  #秒杀余量{
      width: 250px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
  }

  #秒杀进度{
      width: 200px;
  }
  /* =========================================== */
a:link{
    color: black;
}

.头部 {
    width: 100%;
    margin: auto;
}

#展示区
{
    background: url('../assets/img/roll/6.jpg') ;
    background-color: #f0f0f7;
    height: 600px;
    background-position:center center;
    display: flex;
    flex-direction: column;
    align-items: center;
}
#走马灯展示区{
    width: 1200px;
    height: 400px;
    display: flex;
    flex-direction: row;
}
ul{
    list-style: none;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    margin:0px;
    padding: 0px;
}
a{
    text-decoration:none
}
#左侧分类栏{
    width: 200px;
    height:350px;
    background-color: rgb(247, 245, 242);
    position: relative;
}
#li1, #li2, #li3, #li4, #li5{
    height: 60px;
    line-height: 50px;
    width: 92.5%;
   /*  text-align: center; */
    list-style: none;
    margin: 0 auto;
    padding-right: 15px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    border-color: white;
    border-bottom-color: rgb(121, 124, 123) ;
    border-width: 1px;
    border-style: solid;
}
 #li1:hover, #li2:hover, #li3:hover, #li4:hover{
    background-color: rgb(255, 255, 255);
}
#li5:hover{
    background-color: rgb(255, 255, 255);
}
#li1:hover #右侧拉出栏1{
    z-index: 50;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
}
#li2:hover #右侧拉出栏2{
    z-index: 50;
}
#li3:hover #右侧拉出栏3{
    z-index: 50;
}

#li4:hover #右侧拉出栏4{
    z-index: 50;
}
#li5:hover #右侧拉出栏5{
    z-index: 50;
}
#分类栏头{
    height:40px;
    width: 100%;
    text-align: center;
    background-color: black;
    color:white;
    font-size: 18px;
    line-height: 40px;
}
#分类栏表{
    text-align: center;

}
#分类栏表 i{
    float: right;
    font-size: 20px;
    color: black;
}
#右侧拉出栏1{
    width: 150px;
    height: auto;
    position: absolute;
    left: 190px;
    top: 40px;
    background-color: white;
    z-index: -1;
    opacity: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
#右侧拉出栏2{
    width: 150px;
    height: auto;
    position: absolute;
    left: 190px;
    top: 97px;
    background-color: white;
    z-index: -1;
    opacity: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
#右侧拉出栏3{
    width: 150px;
    height: auto;
    position: absolute;
    left: 190px;
    top: 154px;
    background-color: white;
    z-index: -1;
    opacity: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
#右侧拉出栏4{
    width: 150px;
    height: auto;
    position: absolute;
    left: 190px;
    top: 211px;
    background-color: white;
    z-index: -1;
    opacity: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
#右侧拉出栏5{
    width: 150px;
    height: auto;
    position: absolute;
    left: 190px;
    top: 268px;
    background-color: white;
    z-index: -1;
    opacity: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.el-carousel__item h3 {
    font-size: 14px;
    opacity: 1;
    line-height: 150px;
    margin: 0;
  }
  .el-carousel__indicators {
      display: flex;
      flex-direction: row;
      justify-content: center;
  }
  #中部走马灯{
      width:800px;
  }
  #右侧头条广告
  {
      width: 200px;
      height: 396px;
      background-color: white;
      border-color: white;
      border-top-color: #000000 ;
      border-top-width: 3px;
      border-style: solid;
  }
  #头条内容 p{
      font-size:10px;
      color: black;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
  #头条内容 a{
      color: black;
  }
  #右侧广告{
      position: relative;
      top:-4px;
  }

  /* ---------------------------------插图 */
  #插图1{
      position: absolute;
      left:-150px;
      top:300px;
  }
  #插图2{
    position: absolute;
    left:0px;
    top:250px;
    z-index: 99;
  }
#插图3{
    position: absolute;
    left:-500px;
    top:-1000px;
}
#插图7{
    position: absolute;
    left:-500px;
    top:-2000px;
}
#插图5{
    position: absolute;
    left:800px;
    top:-2500px;
}
#插图4{
    position: absolute;
    left:100px;
    top:4500px;
}
#插图6{
    position: absolute;
    left:800px;
    top:-500px;
}
#插图8{
    position: absolute;
    left:-600px;
    top:-2300px;
}
/* ----------------------------------------插图 */

  #展示块文字上{
      color: #5e5f61;
      font-size: 25px;
      padding-bottom: 5px;
      margin-bottom: 0px;
  }
  #展示块文字下{
    color: #232323;
    font-size: 15px;
    margin-top: 0px;
  }
  #下侧展示块{
      display: flex;
      flex-direction: row;
      margin-right: 20px;
  }
  #展示区下侧
  {
      margin-top: 30px;
      display: flex;
      flex-direction: row;
  }
  #展示块图片
  {
      margin-right: 10px;
  }

  /*推荐区样式*/
  #推荐区{
      background: url('../assets/img/roll/plat.jpg') ;
      height: 800px;
      background-repeat: no-repeat;
      background-size: 2000px, 325px;
      background-position:50% 57% ;
  }
  #推荐区 #标题栏{
      background: url('https://static.360buyimg.com/mtd/pc/fresh_v3/1.0.0/home/images/fresh_mod_head_bg.png');
      height:200px;
      background-repeat: no-repeat;
      background-position:50% 50% ;
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
  }
  #标题栏 p{
      margin-bottom: 0px;
  }
  #推荐区导航栏
{
    border-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.el-tabs__nav-wrap::after{
    height: 0px!important;
}
.el-tabs__nav-scroll{
    display: flex;
    justify-content: center;
}
.el-tabs__item{
    font-size: 20px!important;
}
#推荐区文字{
    height: 400px;
    color: white;
    width: 350px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
}
#推荐区块{
    width: 1400px;
    height: 500px;
    display: flex;
    flex-direction: row;
    justify-content: center;
}
#推荐商品区块{
    width: 850px;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
#推荐商品区
{
    width: 800px;
    height: 286px;
    background-color: white;
    border-bottom-right-radius: 50px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}
#分类展示区 #标题栏{
    background: url('https://static.360buyimg.com/mtd/pc/fresh_v3/1.0.0/home/images/fresh_mod_head_bg.png');
      height:200px;
      background-repeat: no-repeat;
      background-position:50% 50% ;
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
}
#分类展示区{
    background-color: #f0f0f7;
}
#展示模块{
    height: 580px;
    width: 1190px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
}
#展示模块上部{
    height: 300px;
    width: 1190px;
    display: flex;
    flex-direction: row;
}
#展示模块上部块1{
    height: 300px;
    width: 160px;
    padding-left: 20px;
    padding-right: 20px;
}
#展示模块上部块2{
    height: 300px;
    width: 600px;
    padding: 0px;
    margin: 0px;
}
#展示模块上部块3{
    height: 300px;
    width: 400px;
}
#展示模块下部{
    width: 1200px;
    height: 280px;
}
#展示模块2下部块{
    display: flex;
    flex-direction: row;
}
#展示模块下部块{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}
#展示模块 #标题{
    font-size: 26px;
    margin-bottom: 5px;
}
#展示模块 #装字盒, #展示模块2 #装字盒{
    font-size: 14px;
    border-style: solid;
    border-radius: 15px;
    border-color: white;
    color: white;
    width: auto;
    border-width: 1px;
    height: 25px;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 9px;
    margin-right: 9px;
    flex-wrap: wrap;
}
#更多 #装字盒{
    font-size: 14px;
    border-style: solid;
    border-radius: 15px;
    border-color: white;
    color: white;
    width: auto;
    border-width: 1px;
    height: 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 9px;
    margin-right: 9px;
    flex-wrap: wrap;
    background-color: white;
}
#新鲜水果展区 #更多 a{
    color: rgb(67, 231, 67);
    font-size: 16px;
}
#海鲜水产展区 #更多 a{
    color: rgb(26, 140, 247);
    font-size: 16px;
}
#精选肉类展区 #更多 a{
    color: rgb(253, 137, 43);
    font-size: 16px;
}
#冷冻饮品展区 #更多 a{
    color: rgb(141, 27, 248);
    font-size: 16px;
}
#新鲜蔬菜展区 #更多 a{
    color: rgb(235, 201, 8);
    font-size: 16px;
}
#装字盒 a{
    color:white;
    padding-left: 13px;
    padding-right: 13px;
}
#选项{
    width: 160px;
    height: 117px;
}
#展示模块 #简述, #展示模块2 #简述{
    font-size: 16px;
    color: white;
    margin-bottom: 20px;
    padding-bottom: 10px;
}
#展示模块 #简述::after, #展示模块2 #简述::after{
    content: "";
    width: 59px;
    height: 4px;
    background: #fff;
}
#展示模块 #选项, #展示模块2 #选项{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}
#新鲜水果展区 #展示模块上部块1{
    background: url('https://img11.360buyimg.com/cms/jfs/t6868/56/1584301821/12315/9fe217a6/5982d8c6N279ff1cf.png');
}
#新鲜水果展区 #展示模块上部块2{
    background: url('../assets/img/roll/8.png');
}
#新鲜水果展区 #展示模块上部块3{
    background: url('../assets/img/roll/9.jpg');
}
#新鲜水果展区, #海鲜水产展区, #精选肉类展区, #冷冻饮品展区, #新鲜蔬菜展区, #饮品和蔬菜{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 50px;
    position: relative;
}
#冷冻饮品展区, #新鲜蔬菜展区{
    width: 600px;
}
#海鲜水产展区 #展示模块上部块1{
    background: url('https://img11.360buyimg.com/cms/jfs/t6811/139/2080819948/8091/eca88413/59886313N1622b0f9.png');
}
#海鲜水产展区 #展示模块上部块2{
    background: url('../assets/img/roll/11.png');
}
#海鲜水产展区 #展示模块上部块3{
    background: url('../assets/img/roll/12.png');
}
#精选肉类展区 #展示模块上部块1{
    background: url('https://img11.360buyimg.com/cms/jfs/t7129/338/1166404786/8830/81357242/59886595Nc9fc959b.png');
}
#精选肉类展区 #展示模块上部块2{
    background: url('../assets/img/roll/13.png');
}
#精选肉类展区 #展示模块上部块3{
    background: url('../assets/img/roll/14.png');
}
#冷冻饮品展区 #展示模块2上部块1
{
    background: url('https://img11.360buyimg.com/cms/jfs/t7180/223/664802511/8778/640240c3/5982e076N2f456b3e.png');
}
#冷冻饮品展区 #展示模块2上部块2
{
    background: url('https://m.360buyimg.com/babel/jfs/t1/173398/21/17753/96303/60dd9ebfEdf814698/d45d78ffe1a92469.png');
}
#新鲜蔬菜展区 #展示模块2上部块1
{
    background: url('https://img11.360buyimg.com/cms/jfs/t6043/48/7591568612/5203/8ac000f0/5982e190Ncd9d504d.png');
}
#新鲜蔬菜展区 #展示模块2上部块2
{
    background: url('../assets/img/roll/15.jpg');
}
#展示模块2{
    height: 580px;
    width: 590px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
}
#展示模块2上部{
    height: 300px;
    width: 590px;
    display: flex;
    flex-direction: row;
}
#展示模块2上部块1{
    height: 300px;
    width: 160px;
    padding-left: 20px;
    padding-right: 20px;
}
#展示模块2上部块2{
    height: 300px;
    width: 390px;
}
#饮品和蔬菜{
    display: flex;
    flex-direction: row;
    height: 580px;
    justify-content: center;
}
/* 电梯导航栏 -----------------------------------*/
#电梯导航栏{
    width: 40px;
    height: 214px;
    position: fixed;
    top: 150px;
    right: 50%;
    margin-right: -685px;
}
#电梯导航栏块{
    width: 40px;
    height: 50px;
    background-color: rgba(128, 128, 128, 0.5);
    margin-bottom: 5px;
    text-align: center;
    display:flex;
    align-items:center;/*所有子元素都垂直居中了*/
    justify-content: center;
    cursor: pointer;
}
#电梯导航栏上{
    font-size: 14px;
    color: white;
}
#电梯导航栏下{
    font-size: 25px;
    color: white;
}

#右拉菜单 a{
    color: rgb(99, 99, 99);
}

#小抬头 a{
    color: black;
    font-size: 20px;
}
#右拉菜单{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-left: 20px;
    justify-content: flex-start;
}
/* ----------单个商品展示块------------------
                                    <div id="单个商品块">
                                        <div id="单个商品图片">
                                            <img>
                                        </div>
                                        <div id="单个商品名称">
                                            <p></p>
                                        </div>
                                        <div id="单个商品价格">
                                            <p></p>
                                        </div>
                                    </div> */
#单个商品块{
    width: 200px;
    height: 280px;
    display: flex;
    flex-direction: column;
}
#单个商品图片{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 12px;
}
#单个商品名称 p{
    padding-left: 20px;
    padding-right: 20px;
    height: 50px;
    overflow: hidden;
    line-height: 25px;
    font-size: 15px;
    margin-bottom: 0px;
}
#单个商品价格 p{
    font-size: 20px;
    color: orange;
    padding-left: 20px;
    padding-right: 20px;
}
#单个商品价格{
    display: flex;
    flex-direction: row;
    align-items: center;
}
#销量 p{
    color: #5e5f61!important;
    font-size: 13px;
}
</style>
