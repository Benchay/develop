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
                  <span>修改密码</span>
                </div>
                <el-form ref="form" :model="form" label-width="80px">
                  <el-form-item label="旧密码">
                    <el-input v-model="form.oldPassword"></el-input>
                  </el-form-item>
                  <el-form-item label="新密码">
                    <el-input v-model="form.newPassword"></el-input>
                  </el-form-item>
                  <el-form-item label="确认密码">
                    <el-input v-model="form.password"></el-input>
                  </el-form-item>
                  <el-form-item label="手机号码">
                    <el-label>{{form.mobilePhone}}</el-label>
                  </el-form-item>
                  <el-form-item label="验证码">
                    <el-input v-model="form.code">
                      <template slot="append" class="" >
                        <el-button type="infor" class="codeBtn" @click="sendCode">获取验证码 </el-button>
                      </template>
                    </el-input>
                  </el-form-item>
                  <el-form-item >
                    <el-button style="background: #205081; color: white;" @click="onSubmit">保存</el-button>
                    <el-button >取消</el-button>
                  </el-form-item>
                </el-form>
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
    return {
      logo: logo,
      form: {
        mobilePhone: '19212345612',
        oldPassword: '',
        newPassword: '',
        password: '',
        code: ''
      }
    }
  },
  methods: {
    onSubmit () {
      callJsonApi('/user/change_user_password')
    },
    sendCode () {

    }
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
          width: 450px;
          height: 560px;
          .box-card {
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
