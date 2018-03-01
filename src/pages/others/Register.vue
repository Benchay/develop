<template>
  <div class="ChangePassword">
    <el-container>
      <el-header>
        <div class="menu">
          <el-row type="flex">
            <div class="logoImg">
              <img :src="logo" alt="${0}" style="height: 60px; width: 250px; line-height: 60px;">
            </div>
            <!-- <div class="selectBox">
              <el-select v-model="form.type" placeholder="请选择">
                <el-option v-for="item in userType" :key="item.value" :label="item.label" :value="item.value"></el-option>
              </el-select>
            </div> -->
          </el-row>
        </div>
      </el-header>
      <el-main>
        <div class="body-content">
          <el-row type="flex" justify="center">
            <div class="center-area">
              <el-card class="box-card">
                <div class="clearfix">
                  <span>新用户注册</span>
                </div>
                <el-form :model="form" status-icon :rules="rules" ref="form" class="demo-ruleForm">
                  <!-- 手机号码 -->
                  <el-form-item prop="mobile">
                    <el-input prefix-icon="el-icon-location" placeholder="请输入手机号码" v-model="form.mobile" ></el-input>
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
                  <!-- 输入密码 -->
                  <el-form-item prop="password">
                    <el-input prefix-icon="el-icon-location" placeholder="请输入密码" v-model="form.password" type="password" auto-complete="off"></el-input>
                  </el-form-item>
                  <!-- 二次密码 -->
                  <el-form-item prop="rePassword">
                    <el-input prefix-icon="el-icon-location" placeholder="请输入确认密码" v-model="form.rePassword" type="password"></el-input>
                  </el-form-item>
                  <!-- 图片验证码 -->
                  <el-form-item>
                    <el-input v-model="form.verificationCode" placeholder="图片验证码" style="width: 248px; float: left; margin-right: 10px;">
                    </el-input>
                    <img :src="imgsrc" alt="${0}"  @click="resetImgCode" style="display:block; width: 110px; height: 40px;">
                  </el-form-item>
                  <!-- <p>验证码错误</p> -->
                  <el-form-item >
                    <el-checkbox v-model="checked">阅读并接受</el-checkbox>
                    <el-button @click="dialogVisible=true" type="text">《推手系统用户注册协议》</el-button>
                  </el-form-item>
                  <el-form-item >
                    <el-button v-if="checked === true" style="background: #205081; color: white; width: 370px;" @click="onSubmit">注册</el-button>
                    <el-button disabled v-else style="background: #F5F7FA; color: black; width: 370px;" type="primary" plain disabled>注册</el-button>
                  </el-form-item>
                </el-form>
                <div class="" style="text-align: center">
                  <p>已有账号<el-button type="text" style="margin-left: 10px;" @click="routerGo ('/Login')">马上登陆</el-button></p>
                </div>
              </el-card>
            </div>
          </el-row>
        </div>
      </el-main>
    </el-container>
  </div>
</template>
<script>
// import logo from '@/assets/logo.png'
// 导入封装好的接口访问方法（该方法对应的是json对象提交详情请查看  src/data/callApi.js）
// import {callJsonApi} from '@/data/callApi'
export default {
  name: 'ChangePassword',
  data () {
    // 密码校验
    var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.form.password !== '') {
            this.$refs.form.validateField('rePassword');
          }
          callback();
        }
      };
      // 确认密码校验
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.form.password) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      // 电话号码是否正确，是否可用
      var validateMobile = (rule, value, callback) => {
        let me = this
        var reg = /^1\d{10}$/
        if (reg.test(value)) {
          callJsonApi ('/pub/user/check_mobile', {mobile: value}, function (res) {
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
      // 用户名是否可用
      // var checkUserName = (rule, value, callback) => {
      //   if (value != '') {
      //     callJsonApi ('/pub/user/check_username', {username: value}, function (res) {
      //       if (res.status >= 200 && res.status < 300) {
      //         if (res.data.success) {
      //           callback()
      //         }else{
      //           callback(res.data.errmsg)
      //         }
      //       }
      //     })
      //   } else {
      //     callback('用户名不能为空')
      //   }
      // };
    return {
      //
      countDown: '获取验证码',
      // 是否可发送手机验证码
      sendMobile: false,
      // 图片验证码加载李静
      imgsrc: '',
      // 注册协议弹窗
      dialogVisible: false,
      // 页面logo
      logo: logo,
      // 是否已同意协议
      checked: true,
      // 提交的form表单，其中有一些数据需要更改
      form: {
        mobile: '',
        inviteCode:'',
        username: '',
        password: '',
        rePassword: '',
        mobileCode: '',         //手机验证码
        companyName: 'H',       // 公司名
        verificationCode: '',
        distributorId: 1        //分销商ID
      },
      // 作为表单校验规则
      rules: {
        // 密码
        password: [
          { validator: validatePass, trigger: 'blur' }
        ],
        // 确认密码
        rePassword: [
          { validator: validatePass2, trigger: 'blur' }
        ],
        // 手机号码
        mobile: [
          {validator: validateMobile, trigger: 'blur'}
        ],
        // 用户名是否可用校验
        // username: [
        //   {validator: checkUserName, trigger: 'blur'}
        // ]
      }
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
    // 更改图片验证码
    resetImgCode () {
      this.imgsrc = 'http://10.6.20.28:8670/pub/user/v_code?' + Math.random()
    },
    callApi (url, dataObj, fun) {
      axios({
        url: '/ums/' + url,
        method: 'POST',
        data: dataObj
      }).then(res =>{
        fun(res)
      })
    },
    // 本方法为路由跳转方法，传入参数为 url
    routerGo (value) {
      this.$router.push({path: value})
    }
  },
  created: function () {
    this.imgsrc = 'http://10.6.20.28:8670/pub/user/v_code?' + Math.random()
  }
}
</script>

<style scoped lang='scss'>
  .ChangePassword {
    .el-header {
      border-bottom: 3px solid #205081;
      padding-left: 0px;
      .selectBox {
        padding-top: 8px;
      }
    }
    .el-main {
      padding-top: 0px;
      .body-content {
        background: white;
        border: 1px solid white;
        padding-top: 125px;
        padding-bottom: 80px;
        .center-area {
          top: 100px;
          width: 450px;
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
