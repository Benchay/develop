<template>
  <div class="signin">
    <el-col :span="24" class="loginContent">
      <el-col :span="14" class="flex2" style="margin-top: 80px"><img src="./bj.png" alt=""></el-col>
      <div class="loginForm">
        <p class="loginTitle">商务系统</p>
        <el-form :model="form" status-icon :rules="rules2" ref="form" class="demo-ruleForm">
          <el-form-item label="" prop="username">
            <el-input v-model="form.username" placeholder="请输入帐号..." auto-complete="off" prefix-icon="el-icon-user"></el-input>
          </el-form-item>
          <el-form-item label="" prop="password">
            <el-input type="password" v-model="form.password" placeholder="请输入密码..." auto-complete="off" prefix-icon="el-icon-psd"></el-input>
          </el-form-item>
          <el-form-item label="" prop="verificationCode">
            <el-input v-model="form.verificationCode" style="width:60%;float: left;"></el-input>
            <el-tooltip class="item" effect="dark" content="点击切换图片" placement="top-start">
              <img :src="codeImgSrc" alt="${0}" style="height: 40px; width: 90px; margin-left: 10px;" @click="resetCodeImg">
            </el-tooltip>
          </el-form-item>
          <el-form-item>
            <div class="loginPwd">
              <el-checkbox v-model="checked" >记住密码</el-checkbox>
            </div>
          </el-form-item>
          <el-form-item class="loginSub">
            <el-button type="primary" style="height: 40px;" @click="onSubmit">登 录</el-button>
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
import {callJsonApi} from '@/data/callApi'
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
        codeImgSrc: '',
        checked:true,
        form: {
          username: '',
          password: '',
          verificationCode: '',
          dsitributorId: 1,
      		type: 1
        },
        rules2: {
          username: [
            { validator: validatePass, trigger: 'blur' }
          ],
          password: [
            { validator: validatePass2, trigger: 'blur' }
          ],
        },
        showLogin:false,
      }
    },
    methods: {
      // 提交登录数据进行登录
      onSubmit () {
        if (this.form.username) {
          if (this.form.password) {
            if (this.form.verificationCode) {
              let me = this

              // 进行等路
              callJsonApi('/pub/user/login', this.form, function (res) {
                if (res.status >= 200 && res.status < 300) {
                  // 登录成功
                  if (res.data.success) {
                    // 装在用户ID以及用户所在公司ID
                    console.log(res.data.content)
                    localStorage.setItem('userId', res.data.content.userId)
                    localStorage.setItem('companyId', res.data.content.companyId)
                    localStorage.setItem('usertype', me.form.type)
                    localStorage.setItem('access_token', res.data.content.access_token)
                    me.$router.push({path: '/'})
                    // window.location.href='http://proxy.tintop.cn:26082/mbs/index.html'
                    localStorage.setItem('username', res.data.content.username)
                  } else {
                    me.$message.error('账号或密码错误，请确认后重新登录')
                  }
                }
              })
            } else {
              this.$message('请输入验证码')
            }
          } else {
            this.$message('请输入密码')
          }
        } else {
          this.$message('请输入手机号码或用户名')
        }
      },
      // 更新验证码
      resetCodeImg () {
        this.codeImgSrc = 'http://10.6.20.28:8670/pub/user/v_code?' + Math.random()
      },
    },
    // 自动加载图片验证码
    created: function () {
      this.codeImgSrc = 'http://10.6.20.28:8670/pub/user/v_code?' + Math.random()
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
        margin-left: -150px;
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
