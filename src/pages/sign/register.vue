<template>
  <div class="register">
    <el-col :span="24" class="register3">
      <div class="pwdForm lr">
        <p class="loginTitle">新用户注册</p>
        <el-form :model="form" status-icon :rules="rules2" ref="form" class="demo-ruleForm">

          <!-- <el-form-item label="" prop="name">
            <el-input v-model="form.name" placeholder="请输入用户名..." auto-complete="off" prefix-icon="el-icon-user"></el-input>
          </el-form-item> -->

          <el-form-item label="" prop="mobile">
            <el-input v-model="form.mobile" placeholder="请输入手机号..." auto-complete="off" prefix-icon="el-icon-phones"></el-input>
          </el-form-item>

          <!-- 手机验证码 -->
          <el-form-item>
            <el-input v-model="form.mobileCode" placeholder="请输入手机验证码">
              <template slot="append" class="" >
                <el-button v-if="sendMobile" type="infor" class="codeBtn" style="background-color: #205081; color:white; height: 38px;" @click="sendMobileCode">获取验证码</el-button>
                <el-button disabled v-else type="primary" style="backgroudn-color: red; width: 110px;">{{countDown}}</el-button>
              </template>
            </el-input>
          </el-form-item>

          <el-form-item label="" prop="password">
            <el-input type="password" v-model="form.password" placeholder="请输新密码..." auto-complete="off" prefix-icon="el-icon-psd"></el-input>
          </el-form-item>
          <el-form-item label="" prop="rePassword">
            <el-input type="password" v-model="form.rePassword" placeholder="请再次输入新密码..." auto-complete="off" prefix-icon="el-icon-psd"></el-input>
          </el-form-item>
          <el-form-item label="" prop="verificationCode">
            <el-input v-model="form.verificationCode" style="width:60%;float: left; margin-right: 10px;"></el-input>
            <img :src="imgsrc" alt="${0}"  @click="resetImgCode" style="display:block; width: 110px; height: 40px;">
          </el-form-item>
          <el-form-item  class="protocol">
            <el-checkbox v-model="checked"><span style="font-size: 12px">阅读并接受</span></el-checkbox><a href="http://cws.nabei.net:8106/agreement.html" target="view_window" class="protocolColor">《推手系统用户注册协议》</a>
          </el-form-item>
          <el-form-item class="loginSub">
            <el-button type="primary" @click="onSubmit">立即注册</el-button>
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
import {callJsonApi} from '@/data/callApi'
  export default {
    components: {
    },
    data(){
      var mobile = (rule, value, callback) => {
        let me = this
        var reg = /^1\d{10}$/
        if (reg.test(value)) {
          callJsonApi ('/pub/user/check_mobile', {mobile: value}, function (res) {
            console.log(res)
            me.form.username = me.form.mobile
            if (res.status >= 200 && res.status < 300) {
              if (res.data.success) {
                me.countDown = 60
                me.sendMobile = true
                callback()
              } else {
                callback(res.data.errmsg);
              }
            }
          })
        } else {
          this.countDown = '获取验证码'
          this.sendMobile = false
          callback(new Error('手机号码有误，请重新输入'));
        }
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.form.rePassword !== '') {
            this.$refs.form.validateField('rePassword');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.form.password) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      }
      return{
        imgsrc: '',
        sendMobile: false,
        countDown: '',
        checked:false,
        form: {
          password:'',
          rePassword: '',
          mobile:'',
          inviteCode:'',
          username: '',
          mobileCode: '',         //手机验证码
          companyName: 'H',       // 公司名
          verificationCode: '',
          distributorId: 1        //分销商ID
        },
        rules2: {
          mobile: [
            { validator: mobile, trigger: 'blur' }
          ],
          password: [
            { validator: validatePass, trigger: 'blur' }
          ],
          rePassword: [
            { validator: validatePass2, trigger: 'blur' }
          ],
        },
        showLogin:false,
      }
    },
    methods: {
      // 提交注册信息
      onSubmit () {
        var reg = /^1\d{10}$/
        let me = this

        if (reg.test(this.form.mobile)) {
          if (this.form.mobileCode != '') {
            if (this.form.password != '') {
              if (this.form.verificationCode) {
                callJsonApi('/pub/user/register_merchant', this.form, function (res) {
                  if (res.status >= 200 && res.status < 300) {
                    console.log(res)
                    if (res.data.success) {
                      me.$message('注册成功，5秒后自动条转入登录页面')
                      setTimeout(function () {
                        me.$router.push({path: '/Login'})
                      },5000)
                    }
                  }
                })
              }else{
                this.$message('请输入验证码')
              }
            }else{
              this.$message('请输入密码，确保您的账号安全')
            }
          }else {
            this.$message('请输入手机验证码')
          }
        } else {
          this.$message('请输入注册信息')
        }
      },

      // 手机发送验证码
      sendMobileCode () {
        var reg = /^1\d{10}$/
        if (this.sendMobile && reg.test(this.form.mobile)) {
          // 异步发送手机验证码
          callJsonApi('/pub/user/send_mobile_message', {mobile: this.form.mobile, distributorId: 1, type: 1}, function (res) {
            console.log(res)
            // 等待有所需求添加方法
          })
          // 禁用按钮
          this.sendMobile = false
          let me = this
          // 使用定时器循环设置时间跳动
          var time = setInterval(function () {
            if (me.countDown-- > 0) {
            }else {
              clearInterval(time)
              me.countDown = 60
              me.sendMobile = true
            }
          }, 1000)
        } else {
          console.log('手机号有误')
        }
      },
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
