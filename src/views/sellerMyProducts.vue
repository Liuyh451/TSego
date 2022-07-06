<template>
<div>
<div class="search">
                <div style="">
                    <el-autocomplete v-model="searchName" :fetch-suggestions="querySearchAsync" placeholder="请输入内容" @select="handleSelect">
                        <el-button slot="append" icon="el-icon-search" type="success" @click="searchitem"></el-button>
                    </el-autocomplete>
                </div>
            </div>
             <el-table
    :data="tableData"
    border
    style="width: 80% margin-top:400px">
    <el-table-column
      prop="id"
      label="商品编号"
      width="150">
    </el-table-column>
    <el-table-column
      prop="name"
      label="商品名"
      width="400">
    </el-table-column>
    <el-table-column
      prop="categoryFirst"
      label="商品类别"
      width="120"
      align="center">
    </el-table-column>
    <el-table-column
      prop="price"
      label="价格"
      width="120"
      align="center">
    </el-table-column>
        <el-table-column
      prop="stock"
      label="库存"
      width="120">
    </el-table-column>
    <el-table-column
     header-align=center align="center" width="100px"
      prop="pictureurl"
      label="商品图片"
      >
      <template slot-scope="scope">
      <img :src="scope.row.pictureurl||'空'" style="width: 100px;height: 50px;" />
      </template>
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      align="center"
      >
      <template slot-scope="scope">
        <el-button @click="check(scope.row)" type="text" size="small">查看</el-button>
        <el-button @click="modify(scope.row)" type="text" size="small">编辑</el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-button type="primary" @click="searchitem">上一页</el-button>
  <el-button type="primary" @click="searchitem">下一页</el-button>
</div>
</template>

<script>
const axios = require('axios');
  export default {
    methods: {
      searchitem(){ 
          axios.post("http://localhost:9090/product/search1",{name: this.searchName})
            .then(res1=>{
              if (res1.data.code==200){
                   this.tableData=res1.data.data
                    console.log(this.tableData);
                }
                else{
                    this.$notify.error({
                        title: '商品查询失败',
                        message: '请刷新页面',
                        offset: 70
                    });
                }

            })
        },
      check(row) {
        this.$router.push({ path: '/singleproduct', query: {id:row.id} })
      },
      modify(row){
        this.$router.push({path:'/sellProductModify',query: {id:row.id}})

      },
      
    },
     data: function (){
      return {
          searchName: '',
          tableData: []
      }
  },
    created(){
            axios.get('http://localhost:9090/product').then(resp=>{
                // console.log(resp.data.code);
                if (resp.data.code==200){
                   this.tableData=resp.data.data
                    console.log(this.tableData);
                }
                else{
                    this.$notify.error({
                        title: '商品查询失败',
                        message: '请刷新页面',
                        offset: 70
                    });
                }
            })
        
    },
    /* data() {
      return {
        tableData: []
      }
    } */
  }
</script>
<style scoped>

</style>