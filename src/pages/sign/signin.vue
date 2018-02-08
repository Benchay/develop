<template>
  <div class="signin">
    <el-col :span="24" class="loginContent">
      <el-col :span="14" class="flex2" style="margin-top: 80px"><img src="./bj.png" alt=""></el-col>
      <div class="loginForm">
        <p class="loginTitle">商务系统</p>
        <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" class="demo-ruleForm">
          <el-form-item label="" prop="name">
            <el-input v-model="ruleForm2.name" placeholder="请输入帐号..." auto-complete="off" prefix-icon="el-icon-user"></el-input>
          </el-form-item>
          <el-form-item label="" prop="checkPass">
            <el-input type="password" v-model="ruleForm2.checkPass" placeholder="请输入密码..." auto-complete="off" prefix-icon="el-icon-psd"></el-input>
          </el-form-item>
          <el-form-item label="" prop="age">
            <el-input v-model.number="ruleForm2.age" style="width:60%;float: left;"></el-input>
          </el-form-item>
          <el-form-item>
            <div class="loginPwd">
              <el-checkbox v-model="checked" >记住密码</el-checkbox>
            </div>
          </el-form-item>
          <el-form-item class="loginSub">
            <el-button type="primary" @click="">登 录</el-button>
          </el-form-item>
          <el-form-item class="loginRegister">
            <router-link  :to='{path:"/register"}' class="findpwd">立即注册</router-link>
            <router-link  :to='{path:"/forgetPwd"}' class="findpwd">忘记密码？</router-link>
          </el-form-item>
        </el-form>
      </div>
    </el-col>
  </div>
</template>

<script>
  export default {
    components: {
    },
    data(){
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入账户名称'));
        } else {
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        }else {
          callback();
        }
      }
      return{
        checked:false,
        ruleForm2: {
          name: '',
          checkPass: '',
        },
        rules2: {
          name: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
        },
        showLogin:false,
      }
    },
    methods: {

    }
  }
</script>

<style lang="scss">
 @import '../../style/mixin';
  .signin{
    .loginTitle{
      height: 40px;
      font-size: 18px;
      color:#333;
      font-weight: bold;
    }
    .loginContent{
      padding: 20px;
      height:85%;
      display: flex;
      align-items: center;
      position: relative;
      .loginForm{
        width: 300px;
        height: 400px;
        position: absolute;
        top: 50%;
        left: 80%;
        margin-top: -200px;
        margin-left: -50px;
        padding: 25px 35px;
        border-radius: 5px;
        text-align: center;
        background-color: #fff;
        box-shadow: 1px 1px 7px 2px #ddd;
        .el-icon-user{
          background: url("./user.png") no-repeat center;
          background-size: 90%;
        }
        .el-icon-psd{
          background: url("./lock.png") no-repeat center;
          background-size: 90%;
        }
        .el-input__inner{
          padding:0 0 0 40px;
        }
        .loginSub{
          button{
            width:100%;
            background: $blue;
          }
        }
        .loginPwd{
          text-align: left;
          .findpwd{
            margin-left: 30px;
            color:$blue;
          }
        }
        .loginRegister{
          float: right;
          a{
            border-right: 1px solid #333;
            font-size: 12px;
            color:$blue;
            padding: 0 10px;
          }
          a:last-child{
            border-right: none;
          }
        }
      }
    }
  }
</style>
