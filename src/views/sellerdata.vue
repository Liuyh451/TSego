<template>
    <div class="右侧页面">
        <el-card class="页面内容">
            <div class="头像和用户名">
                <div class="头像">
                    <el-avatar :size="100" :src="用户信息.userurl" @error="true">
                        <img src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"/>
                </el-avatar>
                </div>
                <div class="用户名">{{用户信息.username}}</div>
            </div>
            <div class="sb">
                今天是我来天生的第 {{天数}} 天
            </div>
            <div class="sb">
                在天生，我获得 {{(this.总金额.已支付).toFixed(2)}} 元的收益
            </div>
        </el-card>
        <el-card class="页面内容">
            <div class="内容标题">用户商品偏好</div>
            <div class="图表">
                <el-card class="图">
                    <ve-radar :data="类别1" :settings="radarSet" :extend="radarChartDataExtend"></ve-radar>
                    用户偏好的类别
                </el-card>
                <el-card class="图">
                    <ve-pie :data="类别2" :settings="pieSet"></ve-pie>
                    用户偏好的商品种类
                </el-card>
            </div>
        </el-card>
        <el-card class="页面内容">
            <div class="内容标题">用户的购买偏好时间段</div>
            <div class="图表">
                <el-card class="图2">
                    <ve-line :data="时间分布" :settings="polylineSet"></ve-line>
                    用户的购买偏好
                </el-card>
            </div>
        </el-card>
    </div>
</template>

<script>
const axios = require('axios');
export default {
    methods:{
        editinformation(){
            this.$router.push('/mymodifyinformation')
        }
    },
    data(){
        return{
            天数: 0,
            总金额:{
                "已支付":"",

            },
            商品种类:{},
            时间段:{},
            时间分布:{},
            类别1:{},
            类别2:{},
            用户信息: {
            },
            pieSet: {
                roseType: "radius",
                labelMap: {
                number: "数字",
                authentication: "认证",
                },
            },
            pieData: {
                columns: ["number", "authentication"],
                rows: [
                { number: "22", authentication: 1393 },
                { number: "32", authentication: 3530 },
                { number: "31", authentication: 2923 },
                { number: "14", authentication: 1723 },
                { number: "15", authentication: 3792 },
                { number: "16", authentication: 4593 },
                ],
            },
            //
            radarSet: {
                labelMap: {
                    服饰箱包: "服饰箱包",
                    电子数码: "电子数码",
                    百货市场: "百货市场",
                    汇吃美食: "汇吃美食",
                    护肤彩妆: "护肤彩妆",
                    精品珠宝: "精品珠宝"
                },
                areaStyle: {
                opacity: 0.8,
                },
            },
            
            radarChartDataExtend: {
                radar:{indicator: [
                { name: '服饰箱包', max: 20},
                { name: '电子数码', max: 20}, 
                { name: '百货市场', max: 20},
                { name: '汇吃美食', max: 20},
                { name: '护肤彩妆', max: 20},
                { name: '精品珠宝', max: 20} 
                ]} 
            },
            //

            polylineSet: {
                area: true,
            },


        } 
    },
    created(){
        
        axios.defaults.headers.common.Authorization = JSON.parse(localStorage.currentuser).token
        if (localStorage.getItem('userAvatar')!==null){
        this.用户信息.userurl=JSON.parse(localStorage.getItem('userAvatar')).userurl
        this.用户信息.username=JSON.parse(localStorage.getItem('userAvatar')).username
    }

            let date={"createTime": "2022-06-19 12:05:24"}
            var objDate=new Date(date.createTime);
            var currentTime = Date.now();
            this.天数=((currentTime-objDate)/ (1000 * 60 * 60 * 24)).toFixed(0);
             axios.post('http://localhost:9090/order/allsum',{}).then(res2=>{
                this.总金额.已支付=res2.data.data;
                console.log(res2.data.data)
            }) 
            axios.post('http://localhost:9090/order/selectcount').then(res3=>{

                this.商品种类=res3.data.data;
                 var 类2={}
                类2.columns=["number", "authentication"],
                类2.rows=[]
                let categorySecond={"categorySecond": {"手机": 154,"平板": 33,"潮流女装": 122,"腕表": 4,"眼部彩妆": 20,"香氛精油": 12,"电脑": 29,"男装": 72,"时尚女包": 83,"居家日用": 31,"童装": 77,"休闲零食": 199,"精美饮品": 57,"鸡肉": 0}}
                var c2=categorySecond.categorySecond
                var namearray=Object.keys(c2);
                //.log(namearray);
                var valarray=namearray.map(function(i){return c2[i]})
                //console.log(valarray);
                var p=-1;
                for (var i=0;i<namearray.length;i++){
                    // if (i>=3) continue;
                    if (valarray[i]===0) continue;
                    p++;
                    类2.rows[p]={};
                    类2.rows[p].number=namearray[i];
                    类2.rows[p].authentication=valarray[i];
                }
               this.类别2=类2;


                var 类1={}
                类1.columns=['我的偏好','a','b','c','d','e','f']
                类1.rows=[]
                
                类1.rows[0]=this.商品种类;
                类1.rows[0].我的偏好='我的偏好'
                this.类别1=类1;
            })
            let time1={"time": {"01": 288,"02": 212,"03": 119,"04": 112,"05": 881,"06": 771,"07": 390,}}
                this.时间段=time1.time;
                var obj=this.时间段;
                var namearray=Object.keys(obj);
                //console.log(namearray)
                var valarray=namearray.map(function(i){return obj[i]})
                //console.log(valarray)
                var timetable={}
                timetable.columns=['时间段','我的下单数']
                timetable.rows=[]
                var datearray=['01', '02', '03', '04', '05', '06', '07']
                for (var i=0;i<namearray.length;i++){
                    timetable.rows[i]={};
                    timetable.rows[i].时间段=datearray[i];
                    timetable.rows[i].我的下单数=obj[datearray[i]];
                }
                this.时间分布=timetable;

            
      
        // alert('fuck');
        
    }
}
</script>

<style scoped>
.图{
    width: 500px;
    text-align: center;
    margin-left: 2%;
    margin-right: 2%;
}
.图2{
    width: 1000px;
    text-align: center;
    margin-left: 2%;
    margin-right: 2%;
}
.图表{
    display: flex;
}
.sb{
    margin-left: 50px;
    margin-bottom: 10px;
    font-size: 30px;
    font-weight: bold;
}
*{
    text-align: left;
}
.标题对应内容{
    font-size: 20px;
    margin-bottom: 10px;
    margin-left: 10px;
}
.内容标题{
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
}
.页面内容{
    border-radius: 30px;
    padding:5px;
    margin-bottom:20px
}
.头像和用户名{
    margin-left: 20px;
    margin-top: 10px;
    margin-bottom: 30px;
    height: 100px;
    display: flex;
}
.头像{
    width: 100px;
    height: 100px;
}
.用户名{
    margin-left: 30px;
    font-size: 40px;
    font-weight:bold;
    height: 100px;
    line-height: 100px;
}

</style>