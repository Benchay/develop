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
            <div class="" style="width: 700px;margin-right: 80px;">
              <img :src="imgx" alt="${0}">
            </div>
            <div class="center-area">
              <el-card class="box-card">
                <div class="clearfix">
                  <span>登录</span>
                </div>
                <el-form :model="form" status-icon :rules="rules" ref="form">
                  <!--  -->
                  <el-form-item prop="username">
                    <el-input v-model="form.username" placeholder="手机号码/用户名"></el-input>
                  </el-form-item>
                  <el-form-item prop="password">
                    <el-input v-model="form.password" type="password" placeholder="请输入密码"></el-input>
                  </el-form-item>
                  <el-form-item>
                    <el-input v-model="form.verificationCode" style="width: 198px; float: left;" placeholder="请输入验证码"></el-input>
                    <el-tooltip class="item" effect="dark" content="点击切换图片" placement="top-start">
                      <img :src="codeImgSrc" alt="${0}" style="height: 40px; width: 90px; margin-left: 10px;" @click="resetCodeImg">
                    </el-tooltip>
                  </el-form-item>
                  <el-form-item >
                    <el-checkbox v-model="checked">记住密码</el-checkbox>
                  </el-form-item>
                  <!--  -->
                  <el-form-item >
                    <el-button style="background: #205081; color: white; width: 300px;" @click="onSubmit">登录</el-button>
                  </el-form-item>
                </el-form>
                <div style="text-align: center">
                  <!-- 没有账号 <el-button type="text" @click="routerGo('/Register')">马上注册</el-button> -->
                  <el-button type="text" @click="routerGo('/ReSetPassword')">忘记密码</el-button>
                  <el-button type="text" @click="routerGo('/Register')">立即注册</el-button>
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
// import imgx from '@/assets/imgx.png'
// import {callJsonApi} from '@/data/callApi'
// import {callFormApi} from '@/data/callApi'
export default {
  name: 'ChangePassword',
  data () {
    // 校验用户名是否为空
      var usernametest = (rule, value, callback) => {
        if (value != ''){
          callback();
        } else {
          callback(new Error('请输入用户名或手机号码'));
        }
      };
      // 校验密码是否为空
      var passwordtest = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          callback ();
        }
      };
    return {
      checked: '',
      logo: logo,
      imgx:imgx,
      codeImgSrc: '',
      form: {
        username: '',
    		password: '',
    		verificationCode: '',
    		dsitributorId: 1,
    		type: 1,
      },
      rules: {
        // 用户名不为空校验
        username: [{validator: usernametest, trigger: 'blur'}],
        // 密码不为空校验
        password: [{validator: passwordtest, trigger: 'blur'}]
      },
      rulesFun: {
        username :usernametest
      },
      // 等路系统类型
      userType:[
        {label: '商户系统', value: 1},
        {label: '推手系统', value: 2}
        // {label: '分销管理系统', value: 3},
        // {label: '运营管理系统', value: 4}
      ]
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
                  // me.$router.push({path: '/'})
                  window.location.href='http://proxy.tintop.cn:26082/mbs/index.html'
                  localStorage.setItem('username', res.data.content.username)
                  // console.log(res)
                }else{
                  switch (me.form.type) {
                    case 1:
                      me.$message('您当前登录的是: 推手系统 ' + res.data.errmsg)
                    break
                    case 2:
                      me.$message('您当前登录的是: 推手系统 ' + res.data.errmsg)
                      break
                  }
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
    routerGo (url) {
      this.$router.push({path: url})
    }
  },
  // 自动加载图片验证码
  created: function () {
    this.codeImgSrc = 'http://10.6.20.28:8670/pub/user/v_code?' + Math.random()
  }
}
</script>

<style scoped lang='scss'>
  .ChangePassword {
    .el-header {
      border-bottom: 3px solid #205081;
      padding: 0px;
      .selectBox {
        padding-top: 8px;
      }
    }
    .el-main {
      padding-top: 0px;
      .body-content {
        background: white;
        border: 1px solid white;
        padding-top: 200px;
        padding-bottom: 80px;
        .center-area {
          top: 100px;
          width: 380px;
          height: 560px;
          .box-card {
            box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.52);
            padding-left: 20px;
            padding-right: 20px;
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
