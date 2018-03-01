<template>
  <div class="forgetPwd">
    <el-col :span="24" class="forgetPwd">
      <div class="pwdForm lr">
        <p class="loginTitle">修改密码</p>
        <el-form :model="form" status-icon :rules="rules2" ref="form" class="demo-ruleForm">
          <el-form-item label="" prop="name">
            <el-input v-model="form.name" placeholder="请输入帐号..." auto-complete="off" prefix-icon="el-icon-phones"></el-input>
          </el-form-item>
          <el-form-item label="" prop="pass">
            <el-input type="password" v-model="form.pass" placeholder="请输新密码..." auto-complete="off" prefix-icon="el-icon-psd"></el-input>
          </el-form-item>
          <el-form-item label="" prop="checkPass">
            <el-input type="password" v-model="form.checkPass" placeholder="请再次输入新密码..." auto-complete="off" prefix-icon="el-icon-psd"></el-input>
          </el-form-item>
          <el-form-item label="" prop="age">
            <el-input v-model.number="form.age" style="width:60%;float: left; margin-left: 10px;"></el-input>
            <img :src="imgsrc" alt="${0}"  @click="resetImgCode" style="display:block; width: 110px; height: 40px;">
          </el-form-item>
          <el-form-item class="loginSub">
            <el-button type="primary" @click="">确 认</el-button>
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
          if (this.form.checkPass !== '') {
            this.$refs.form.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.form.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      }
      return{
        imgsrc: '',
        checked:false,
        form: {
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
      
      resetImgCode () {
        this.imgsrc = 'http://10.6.20.28:8670/pub/user/v_code?' + Math.random()
      }
    },
    created: function () {
      this.imgsrc = 'http://10.6.20.28:8670/pub/user/v_code?' + Math.random()
    }
  }
</script>

<style lang="scss">
  @import "../../style/mixin";
  .forgetPwd{
    .loginTitle{
      height: 40px;
      font-size: 18px;
      color:#333;
      font-weight: bold;
    }
    .loginTop{
      height: 60px;
      border-bottom: 3px solid $blue;
      div{
        height:100%;
        display: flex;
        align-items: center;
        padding: 0 20px;
      }
      div:first-child{
        justify-content: center;
        border-right:1px solid #ccc;
      }
    }
    .forgetPwd{
      padding: 20px;
      height:85%;
      display: flex;
      align-items: center;
      .pwdForm{
        @include wh(300px, 380px);
        @include ctp(0, 400px);
         margin-top: 100px;
        //  left: 90%;
        padding:25px 35px;
        border-radius: 5px;
        text-align: center;
        background-color: #fff;
        box-shadow: 1px 1px 7px 2px  #ddd;
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
    }
  }
</style>
