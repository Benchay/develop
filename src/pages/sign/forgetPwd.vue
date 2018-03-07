<template>
  <div class="forgetPwd" @keyup.enter="onSubmit">
    <el-col :span="24" class="forgetPwd">
      <div class="pwdForm lr">
        <p class="loginTitle">忘记密码</p>
        <el-form :model="form" status-icon :rules="rules2" ref="form" class="demo-ruleForm">
          <el-form-item label="" prop="mobile">
            <el-input v-model="form.mobile" placeholder="请输入手机号..." auto-complete="off" prefix-icon="el-icon-phones"></el-input>
          </el-form-item>
          <el-form-item label="" prop="newPassword">
            <el-input type="password" v-model="form.newPassword" placeholder="请输新密码..." auto-complete="off" prefix-icon="el-icon-psd"></el-input>
          </el-form-item>
          <el-form-item label="" prop="reNewPassword">
            <el-input type="password" v-model="form.reNewPassword" placeholder="请再次输入新密码..." auto-complete="off" prefix-icon="el-icon-psd"></el-input>
          </el-form-item>

          <!-- 手机验证码 -->
          <el-form-item>
            <el-input v-model="form.mobileCode" placeholder="请输入手机验证码">
              <template slot="append" class="" >
                <el-button v-if="sendMobile" type="infor" class="codeBtn" style="background-color: #205081; color:white; height: 38px;" @click="sendMobileCode">获取验证码</el-button>
                <el-button disabled v-else type="primary" style="backgroudn-color: red; width: 110px; height: 38px;">{{countDown}}</el-button>
              </template>
            </el-input>
          </el-form-item>

          <el-form-item class="loginSub">
            <el-button type="primary" style="height: 38px;" @click="onSubmit">确 认</el-button>
          </el-form-item>
          <el-form-item class="pwdRegister">
            记得密码<router-link  :to='{path:"/signin", query: queryData}' class="findpwd"><span>马上登录</span></router-link>
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
        console.log(value)
        let me = this
        var reg = /^1\d{10}$/
        if (reg.test(value)) {
          callJsonApi ('/pub/user/check_mobile', {mobile: value}, function (res) {
            console.log(res)
            me.form.username = me.form.mobile
            if (res.status >= 200 && res.status < 300) {
              if (res.data.success) {
                callback('账号不存在')
              } else {
                if (res.data.errmsg==='手机号已注册') {
                  me.countDown = 60
                  me.sendMobile = true
                  callback()
                }
              }
            }
          })
        }
      };
      var validatePass = (rule, value, callback) => {
        var reg = /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*?\.]).*$/
        if (reg.test(value)) {
          callback();
        } else {
          callback(new Error('注册密码应为6-20位包含英文大小写、特殊字符、数字'));
        }
      };
      var validatePass2 = (rule, value, callback) => {
        console.log(value)
        if (value === '') {
          callback(new Error('请再次输入密码'))
        } else if (value !== this.form.newPassword) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      }
      return{
        checked:true,
        sendMobile: false,
        countDown: '获取验证码',
        queryData: {},
        form: {
          mobile: '',
          newPassword:'',
          reNewPassword: '',
          mobileCode: '',
          distributorId: 1
        },
        rules2: {
          // 手机号
          mobile: [
            { validator: mobile, trigger: 'blur' }
          ],
          // 新密码
          newPassword: [
            { validator: validatePass, trigger: 'blur' }
          ],
          //
          reNewPassword: [
            { validator: validatePass2, trigger: 'blur' }
          ],
        },
        showLogin: false,
      }
    },
    methods: {
      // 手机发送验证码
      sendMobileCode () {
        let me = this
        var reg = /^1\d{10}$/
        if (this.sendMobile && reg.test(this.form.mobile)) {

          // 异步发送手机验证码
          callJsonApi('/pub/user/send_mobile_message', {mobile: this.form.mobile, distributorId: 1, type: 1}, function (res) {
            console.log(res)
            if (res.status >= 200 && res.status < 300) {
              if (res.data.success) {
                me.$message({message: res.data.content, type: 'success'})
                return
              }
            }

            me.$message.error('短信发送失败')
            // console.log('发送短信')
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
      // 提交注册信息
      onSubmit () {
        var reg = /^1\d{10}$/
        let me = this
        if (reg.test(this.form.mobile)) {
            if (this.form.newPassword != '') {
              if (this.form.newPassword == this.form.reNewPassword) {
                console.log(this.form)
                callJsonApi('/pub/user/reset_user_password', this.form, function (res) {
                  if (res.status >= 200 && res.status < 300) {
                    console.log(res)
                    if (res.data.success) {
                      me.$message('密码修改成功，5秒后自动条转入登录页面')
                      setTimeout(function () {
                        me.$router.push({path: '/Login'})
                        return
                      },5000)
                    }
                  }
                  me.$message.error(res.data.errmsg)
                })
              }else{
                this.$message('您输入的两次密码不一致，请重新输入')
              }
            }else{
              this.$message('请输入密码，确保您的账号安全')
            }
        } else {
          this.$message('请输入手机号')
        }
      },
    },
    created: function () {
      console.log(123)
    },
    mounted(){
      this.queryData = this.$route.query
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
