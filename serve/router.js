const express = require("express");
const router=express.Router();
const sqlClient=require("./config")
const jwt=require("jsonwebtoken")
router.post("/register",(req,res)=>{
    const{username,password}=req.body;
    const sql="insert into userlist values(?,?)";
    const arr=[username,password]
    sqlClient(sql,arr,result=>{
        if(result.affectedRows>0){
            res.send({
                status:200,
                msg:"success"
            })
        }
        else{
            res.send({
                status:401,
                msg:"error"
            })
        }
    })
})
router.post("/login",(req,res)=>{
    const{username,password}=req.body;
    const sql="select * from  userlist where username=?and password=?";
    const arr=[username,password];
    sqlClient(sql,arr,result=>{
        console.log(result);
        if(result.length>0){
            let token=jwt.sign({
                username
            },'somekeys')
            res.send({
                status:200,
                token,
                username
            })
        }else{
            res.send({
                status:401,
                msg:"error"
            })
        }
    })
})
router.post("/products",(req,res)=>{
    const {category}=req.body;
    console.log("111",req.body)
    const sql="select * from  products where category=?";
    const arr=[category];
    console.log(req.arr)
    sqlClient(sql,arr,result=>{
        if(result.length>0){
            res.send({
                status:200,
                result
            })
        }else{
            res.send({
                status:401,
                msg:"error"
            })
        }
    })
})
module.exports=router;