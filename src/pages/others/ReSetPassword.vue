<template>
  <div class="ChangePassword">
    <el-container>
      <el-header>
        <div class="menu">
          <img :src="logo" alt="${0}" style="height: 60px;width: 250px;">
        </div>
      </el-header>
      <el-main>
        <div class="body-content">
          <el-row type="flex" justify="center">
            <div class="center-area">
              <el-card class="box-card">
                <div class="clearfix">
                  <span>忘记密码</span>
                </div>
                <el-form ref="form" status-icon :model="form" :rules="rules">
                  <el-form-item prop="mobile" >
                    <el-input prefix-icon="el-icon-location" placeholder="请输入手机号码" v-model="form.mobile"></el-input>
                  </el-form-item>
                  <el-form-item>
                    <el-input prefix-icon="el-icon-location" placeholder="请输入新密码" v-model="form.newPassword"></el-input>
                  </el-form-item>
                  <el-form-item>
                    <el-input prefix-icon="el-icon-location" placeholder="请输入确认密码" v-model="form.reInPassword"></el-input>
                  </el-form-item>

                  <!-- 手机验证码 -->
                  <el-form-item>
                    <el-input v-model="form.mobileCode" placeholder="请输入手机验证码">
                      <template slot="append" class="" >
                        <el-button v-if="sendMobile" type="infor" class="codeBtn" @click="sendMobileCode">获取验证码</el-button>
                        <el-button disabled v-else type="primary" style="backgroudn-color: red; width: 110px;">{{countDown}}</el-button>
                      </template>
                    </el-input>
                  </el-form-item>

                  <el-form-item >
                    <el-button style="background: #205081; color: white;width: 320px;" @click="onSubmit">确认</el-button>
                  </el-form-item>
                </el-form>
                <!-- <div class="" style="text-align: center;">
                  已有账号？ <a href="${1}">马上登陆</a>
                </div> -->
              </el-card>
            </div>
          </el-row>
        </div>
      </el-main>
    </el-container>
  </div>
</template>
<script>
import logo from '@/assets/logo.png'
import {callJsonApi} from '@/data/callApi'
export default {
  name: 'ChangePassword',

  data () {
    var validateMobile = (rule, value, callback) => {
      let me = this
      var reg = /^1\d{10}$/
      if (reg.test(value)) {
        // callJsonApi ('/pub/user/check_mobile', {mobile: value}, function (res) {
        //
        // })
        callback()
        //   if (res.status >= 200 && res.status < 300) {
        //     if (res.data.success) {
        //       me.countDown = 60
        //       me.sendMobile = true
        //       callback()
        //     } else {
        //       callback(res.data.errmsg);
        //     }
        //
        //   }
        // })
      } else {
        this.countDown = '获取验证码'
        this.sendMobile = false
        callback(new Error('手机号码有误，请重新输入'));
      }
    };
    return {
      countDown: 60,
      sendMobile: true,
      logo: logo,
      form: {
        mobile: '',
        newPassword: '',
        reInPassword: '',
        distributorId: 1,
        mobileCode: ''
      },
      rules: {
        mobile: [
          {validator: validateMobile, trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    onSubmit () {

    },
    // 手机发送验证码
    sendMobileCode () {
      var reg = /^1\d{10}$/
      if (this.sendMobile && reg.test(this.form.mobile)) {
        // 异步发送手机验证码
        callJsonApi('/pub/user/send_mobile_message', {mobile: this.form.mobile, distributorId: 1}, function (res) {
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
  }
}
</script>

<style scoped lang='less'>
  .ChangePassword {
    .el-header {
      border-bottom: 3px solid #205081;
    }
    .el-main {
      padding-top: 0px;
      .body-content {
        background: white;
        border: 1px solid white;
        padding-top: 160px;
        padding-bottom: 80px;
        .center-area {
          top: 100px;
          width: 400px;
          height: 560px;
          .box-card {
            padding-left: 20px;
            padding-right: 20px;
            box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.52);
            .clearfix {
              height: 50px;
              text-align: center;
              font-size: 25px;
              font-weight: bold;
            }
          }
          .codeBtn {
            cursor: point;
            background:#205081;
            color: white;
          }
        }
      }
    }

  }
</style>
