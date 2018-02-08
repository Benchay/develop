<template>
  <div class="register">
    <el-col :span="24" class="register3">
      <div class="pwdForm lr">
        <p class="loginTitle">新用户注册</p>
        <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" class="demo-ruleForm">
          <el-form-item label="" prop="name">
            <el-input v-model="ruleForm2.name" placeholder="请输入用户名..." auto-complete="off" prefix-icon="el-icon-user"></el-input>
          </el-form-item>
          <el-form-item label="" prop="name">
            <el-input v-model="ruleForm2.name" placeholder="请输入手机号..." auto-complete="off" prefix-icon="el-icon-phones"></el-input>
          </el-form-item>
          <el-form-item label="" prop="pass">
            <el-input type="password" v-model="ruleForm2.pass" placeholder="请输新密码..." auto-complete="off" prefix-icon="el-icon-psd"></el-input>
          </el-form-item>
          <el-form-item label="" prop="checkPass">
            <el-input type="password" v-model="ruleForm2.checkPass" placeholder="请再次输入新密码..." auto-complete="off" prefix-icon="el-icon-psd"></el-input>
          </el-form-item>
          <el-form-item label="" prop="age">
            <el-input v-model.number="ruleForm2.age" style="width:60%;float: left;"></el-input>
          </el-form-item>
          <el-form-item  class="protocol">
            <el-checkbox v-model="radio"><span style="font-size: 12px">阅读并接受</span></el-checkbox><a href="http://cws.nabei.net:8106/agreement.html" target="view_window" class="protocolColor">《推手系统用户注册协议》</a>
          </el-form-item>
          <el-form-item class="loginSub">
            <el-button type="primary" @click="">立即注册</el-button>
          </el-form-item>
          <el-form-item class="pwdRegister">
            <router-link  :to='{path:"/signin"}' class="findpwd">已有账号？<span>马上登录</span></router-link>
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
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      }
      return{
        checked:false,
        ruleForm2: {
          name: '',
          pass:'',
          checkPass: '',
        },
        rules2: {
          name: [
            { validator: validatePass, trigger: 'blur' }
          ],
          pass: [
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
  .register{
    .loginTitle{
      height: 40px;
      font-size: 18px;
      color:#333;
      font-weight: bold;
    }
    .register3{
      padding: 20px;
      height:85%;
      display: flex;
      align-items: center;
      position: relative;
      .pwdForm{
         @include wh(300px, 480px);
         @include ctp(0, 450px);
         margin-top: 50px;
        //  left: 90%;
        padding:25px 35px;
        border-radius: 5px;
        text-align: center;
        background-color: #fff;
        box-shadow: 1px 1px 7px 2px  #ddd;
        .el-icon-user{
          background: url("./user.png") no-repeat center;
          background-size: 90%;
        }
        .el-icon-phones{
          background: url("./phone.png") no-repeat center;
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
        .pwdRegister{
          a{
            font-size: 12px;
            color:#666;
            padding: 0 10px;
          }
          span{
            color:$blue;
          }
        }
      }
      .protocol{
        height: 20px;
        font-size: 12px;
        .protocolColor{
          color:$blue;
        }
      }
    }
  }
</style>
