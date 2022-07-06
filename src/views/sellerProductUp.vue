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
                        <img src="https://img.icons8.com/color/2x/upload-to-cloud.png"/>
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
        <el-select v-model="ruleForm.categoryFirst" placeholder="请选择商品类别">
          <el-option label="服饰箱包" value="服饰箱包"></el-option>
          <el-option label="电子数码" value="电子数码"></el-option>
          <el-option label="护肤彩妆" value="护肤彩妆"></el-option>
          <el-option label="汇吃美食" value="汇吃美食"></el-option>
          <el-option label="百货市场" value="百货市场"></el-option>
        </el-select>
      </el-form-item>
     <!--  <el-form-item label="修改时间" required>
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
      </el-form-item> -->
      <el-form-item>
        <el-button type="primary" @click="submit('ruleForm')"
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
        username:JSON.parse(localStorage.currentuser).data.username,
        pictureurl:this.imgurl,
        id:this.$route.query.id,
        name: "",
        price: "",
        //date: "",
        categoryFirst:"",
        //date2: "",
      },
      rules: {
        id:[
          { required: true, message: "请输入商品编号", trigger: "blur" },
          { min: 1, max: 15, message: "长度在 1 到 5 个字符", trigger: "blur" },
         
        ],
        name: [
          { required: true, message: "请输入商品名称", trigger: "blur" },
          { min: 1, max: 20, message: "长度在 1 到 10 个字符", trigger: "blur" },
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
            console.log("文件:",file.raw)
            this.用户信息.userurl=URL.createObjectURL(file.raw)
            this.uploadimg();
        },
        uploadimg(){
        this.ruleForm.pictureurl="https://i.ibb.co/74cvfDQ/defaultpic.png"
         let payload = new FormData()
        payload.append('image', this.fileList[this.fileList.length-1].raw)
axios.post('/proxy/upload?expiration=259200&key=c4d92394fcd3b259a463721f068c762e', payload)
    .then((response) => {
        if (response.data.status==200){
                    this.$notify.success({
                        title: '图片上传成功',
                        message: '图片上传成功',
                        offset: 70
                    });
                }

        console.log('response', response)
        this.imgurl=response.data.data.image.url
        console.log('this.imgurl', this.imgurl)
        console.log('success')
        this.ruleForm.pictureurl=this.imgurl
    })
    .catch((error) => {
        console.log('error', error)
        alert('try agian')
    })  
        },
        submit(){
            
            this.ruleForm.pictureurl=this.imgurl
            JSON.stringify(this.ruleForm),
            axios.post('http://localhost:9090/product/addone',this.ruleForm).then(resp=>{
                // console.log(resp.data.code);
                if (resp.data.code==200){
                    console.log(resp)
                    this.$notify.success({
                        title: '商品上架成功',
                        message: '商品已上架',
                        offset: 70
                    });
                }
                else{
                    this.$notify.error({
                        title: '商品上架失败',
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
        /* 这个部分是用来获取一张图片，我不知道为什么，只有获取了一张图片，onchange才有反应
        获得的是一张空白图片 */
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
