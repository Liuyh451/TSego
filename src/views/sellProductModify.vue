<template>
  <div>
    <!-- 上传图片 -->
    <div>
             <el-upload
                    action="#"
                    :auto-upload='false'
                    :on-change="handleChange"
                    :show-file-list="false"
                    >
                    <el-avatar :size="150" :src="用户信息.userurl" @error="true" shape="square" >
                        <img src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"/>
                    </el-avatar>
                    </el-upload>
    </div>
    <!-- 商品表单 -->
    <el-form 
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
      style="width: 50%; text-align: center; margin: auto;margin-top:30px"
    >
      <el-form-item label="商品编号" prop="id" style="height: 50px">
        <el-input v-model="ruleForm.id"></el-input>
      </el-form-item>
      <el-form-item label="商品名称" prop="name" style="height: 50px">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="商品价格" prop="price" style="height: 50px">
        <el-input v-model="ruleForm.price"></el-input>
      </el-form-item>
      <el-form-item label="商品类别" prop="region">
        <el-select v-model="ruleForm.region" placeholder="请选择商品类别">
          <el-option label="服饰箱包" value="服饰箱包"></el-option>
          <el-option label="电子数码" value="电子数码"></el-option>
          <el-option label="护肤彩妆" value="护肤彩妆"></el-option>
          <el-option label="汇吃美食" value="汇吃美食"></el-option>
          <el-option label="百货市场" value="百货市场"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="修改时间" required>
        <el-col :span="11">
          <el-form-item prop="date1">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="ruleForm.date"
              style="width: 100%"
            ></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-form-item prop="date2">
            <el-time-picker
              placeholder="选择时间"
              v-model="ruleForm.date2"
              style="width: 100%"
            ></el-time-picker>
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >立即创建</el-button
        >
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
const axios = require('axios');
export default {
  data() {
    return {
      fileList:'',
      imgurl:'',
      用户信息: {
            },
      ruleForm: {
        id:this.$route.query.id,
        name: "",
        price: "",
        date: "",
        //date2: "",
      },
      rules: {
        id:[
          { required: true, message: "请输入商品编号", trigger: "blur" },
          { min: 1, max: 5, message: "长度在 1 到 5 个字符", trigger: "blur" },
         
        ],
        name: [
          { required: true, message: "请输入商品名称", trigger: "blur" },
          { min: 1, max: 10, message: "长度在 1 到 10 个字符", trigger: "blur" },
        ],
        price:[
          { required: true, message: "请输入商品价格", trigger: "blur" },
          { min: 1,  message: "不可为空", trigger: "blur" },

        ],
        date: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change",
          },
        ],
      },
    };
  },
  methods: {

    handleChange(file,fileList){
            this.fileList=fileList
            console.log(file.raw)
            this.用户信息.userurl=URL.createObjectURL(file.raw)
            //this.uploadimg();
        },
    
        submit(){
            let userdata={
                username:this.用户信息.username,
                gender:this.用户信息.gender,
                age:this.用户信息.age,
                signature:this.用户信息.signature,
                email:this.用户信息.email,
                phone:this.用户信息.phone,
                userurl:this.imgurl
            }
            axios.post('http://localhost:9090/user/information/modify',userdata).then(resp=>{
                // console.log(resp.data.code);
                if (resp.data.code==200){
                    this.$notify.success({
                        title: '个人信息修改成功',
                        message: '个人信息已更新',
                        offset: 70
                    });
                }
                else{
                    this.$notify.error({
                        title: '个人信息修改失败',
                        message: '请重新检查所填写项目',
                        offset: 70
                    });
                }
            })
        },
     
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },

  },
      created(){
        let name=JSON.parse(localStorage.currentuser).data.username
        axios.defaults.headers.common.Authorization = JSON.parse(localStorage.currentuser).token
        axios.post('http://localhost:9090/user/information',{username:"defaultpic"}).then(resp=>{
            console.log(resp);
            this.用户信息=resp.data.data;
        })
    }
};
</script>
<style>

</style>
