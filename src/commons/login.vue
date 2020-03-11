<template>
<!-- 登录界面 -->
  <div class="login">
    <div class="login-down">
      <div @click="home" class="login_left">
        <p>唯品会</p>
        <p>品牌特卖</p>
      </div>
      <div class="right_img"></div>
    </div>
    <div class="login-up">
      <div class="login-round">
        <div class="login_main">
           <div class="login_title">
             <span :class="{ }">扫码登录</span>
             <span>|</span>
             <span>账户登录</span>
           </div>
           <!-- 输入框 -->
           <div class="login_input">
             <div class="account">
               <span>
                 <i class="el-icon-user"></i>
               </span>
               <input v-model="account" @blur="zhang" type="text">
               <span>
                 <i v-show="one" class="el-icon-circle-close"></i>
               </span>
             </div>
             <div class="mark">
               <span v-if="one">请输入账号</span>
             </div>
             <div class="pass">
               <span>
                 <i class="el-icon-lock"></i>
               </span>
               <input v-model="pass" @blur="mi" type="text">
               <span>
                 <i class="el-icon-circle-close"></i>
               </span>
             </div>
             <div class="mark">
               <span v-if="two">请输入密码</span>
             </div>
           </div>
           <!-- 验证 -->
           <div class="yan">
             <span>短信验证登录</span>
             <span>忘记密码</span>
           </div>
           <!-- 按钮 -->
           <div class="btn">
             <button>登录</button>
           </div>
           <!-- 微信 -->
           <div class="xin">
             <span></span>
           </div>
           <div class="list">
             <div class="list_ul">
               <span>新浪微博</span>
               <span>|</span>
               <span>QQ</span>
               <span>|</span>
               <span>支付宝</span>
               <span @click="btnChange">{{change}}</span>
               <span>免费注册</span>
             </div>
           </div>
        </div>
      </div>
    </div>
    <div class="login_foot">
      <p>Copyright 2008-2020 vip.com，All Rights Reserved ICP证：粤 B2-20080329</p>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      account:null,
      pass:null,
      one:false,
      two:false,
      change:"更多"
    }
  },
  methods:{
    home(){
      this.$router.push('/')
    },
    zhang(){
      if(this.account){
        this.one = false
      }
      else{
        this.one = true
      }
    },
    mi(){
      if(this.pass){
        this.two = false
      }
      else{
        this.two = true
      }
    },
    btnChange(){
      if(this.change = "更多"){
        this.change = "收起"
      }
      else{
        this.change = '更多'
      }
    }
  }
};
</script>

<style>
.login {
  width: 100%;
}
.login-down {
  width: 100%;
  height: 100px;
  /* border: 1px solid black; */
  display: flex;
  justify-content: space-between;
}
.login_left {
  margin-left: 40px;
  /* border: 1px solid black; */
  font-size: 22px;
  text-align: center;
  cursor: pointer;
}
.login_left p:nth-child(1) {
  font-size: 39px;
  color: rgb(218, 16, 117);
}
.right_img {
  background-image: url("../assets/sprites-hash-c9975078.png");
  width: 304px;
  height: 100%;
  /* top: 30px;
  position: relative; */
}
.login-up {
  width: 100%;
  height: 700px;
  /* border: 1px solid black; */
  background-image: url("../assets/15487540172274.jpg");
}
.login_foot {
  width: 100%;
  height: 100px;
  line-height: 100px;
  text-align: center;
  font-size: 14px;
  /* display: flex;
  justify-content: center;
  align-items: center; */
  /* border: 1px solid black; */
}
.login_input{
  margin-top: 40px;
}
.login-round{
  /* border: 1px solid black; */
  margin-right: auto;
  margin-left: auto;
  width: 1000px;
  min-height: 550px;
  padding: 50px 20px;
}
.login_main {
  width: 360px;
  height: 478px;
  border: 1px solid black;
  float:right;
  background: #ffffff;
}
.login_title{
  width: 100%;
  height: 50px;
  border-bottom: 1px solid gray;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  color: rgb(85, 85, 85);
  
}
.login_title span{
  cursor: pointer;
}
.login_title span:nth-child(2){
  font-size: 14px;
  font-weight: normal;
  margin: 0 -50px;
  color: rgb(163, 163, 163);
  cursor: none;
}
.account,.pass{
  width: 85%;
  height: 48px;
  border: 1px solid gray;
  margin: 5px auto;
  border-radius: 2px;
  /* line-height: 48px;/ */
  font-size: 25px;
}
input{
  width: 69%;
  height: 60%;
  top: -5px;
  position: relative;
  border: 0;
  outline: none;
}
i{
  margin: 10px;
}
.el-icon-user,.el-icon-lock{
  color: gray;
}
.mark{
  margin-left: 30px;
  font-size: 14px;
  color: rgb(245, 37, 37);
  height: 20px;
}
.yan,.btn{
  width: 85%;
  margin: 5px auto;
  display: flex;
  justify-content: space-between;
  /* border: 1px solid black; */
  height: 40px;
  font-size: 15px;
}
.btn>button{
  width: 100%;
  height: 100%;
  color: #ffffff;
  background: rgb(218, 54, 54);
  outline: none;
  font-size: 18px;
  cursor: pointer;
  outline: none;
}
.yan span:hover{
  cursor: pointer;
  color: red;
}
.yan span:nth-child(2){
  font-size: 12px;
}
.xin{
  width: 85%;
  border-bottom: 1px solid gray;
  margin: 40px auto;
  
}
.xin span{
  background-image: url("../assets/sprites-hash-c9975078.png");
  width: 40px;
  height: 40px;
}
.list{
  width: 85%;
  margin: 0 auto;
}
.list_ul{
  display: flex;
  justify-content: space-between;
  font-size: 14px;
}
.list_ul span{
  cursor: pointer;
}
</style>