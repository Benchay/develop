<template>
  <div class="resetPwd" @keyup.enter="onSubmit">
    <el-col :span="24" class="resetPwd">
      <div class="pwdForm lr">
        <p class="loginTitle">修改密码</p>
        <el-form :model="form" status-icon :rules="rules2" ref="form" class="demo-ruleForm">
          <el-form-item label="" prop="oldPassword">
            <el-input type="password" v-model="form.oldPassword" placeholder="请输入旧密码..." auto-complete="off" prefix-icon="el-icon-psd"></el-input>
          </el-form-item>
          <el-form-item label="" prop="newPassword">
            <el-input type="password" v-model="form.newPassword" placeholder="请输新密码..." auto-complete="off" prefix-icon="el-icon-psd"></el-input>
          </el-form-item>
          <el-form-item label="" prop="reNewPassword">
            <el-input type="password" v-model="form.reNewPassword" placeholder="请再次输入新密码..." auto-complete="off" prefix-icon="el-icon-psd"></el-input>
          </el-form-item>

          <!-- <el-form-item label="" prop="age">
            <el-input v-model.number="form.age" style="width:60%;float: left; margin-left: 10px;"></el-input>
            <img :src="imgsrc" alt="${0}"  @click="resetImgCode" style="display:block; width: 110px; height: 40px;">
          </el-form-item> -->

          <el-form-item class="loginSub">
            <el-button type="primary" @click="onSubmit">确 认</el-button>
          </el-form-item>
          <el-form-item class="pwdRegister">
            <!-- <router-link  :to='{path:"/signin"}' class="findpwd">已有账号？<span>马上登录</span></router-link> -->
          </el-form-item>
        </el-form>
      </div>
    </el-col>
  </div>
</template>

<script>
import {callApiToken} from '@/data/callApi'
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
      var validatePass1 = (rule, value, callback) => {
        var reg = /^.*(?=.{6,})(?=.*\d)(?=.*[A-Za-z])(?=.*[!@#$%^&*?,<>{}\[\]\.\\/\'\"`~\:;+=-\_\|\\\(\)]).*$/
        if (reg.test(value)) {
          callback(new Error('注册密码应为6-20位包含英文大小写、特殊字符、数字'));
        } else {
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.form.newPassword) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      }
      return{
        imgsrc: '',
        checked:false,
        form: {
          oldPassword: '',
          newPassword:'',
          reNewPassword: '',
        },
        queryData: {},
        rules2: {
          oldPassword: [
            { validator: validatePass, trigger: 'blur' }
          ],
          newPassword: [
            { validator: validatePass1, trigger: 'blur' }
          ],
          reNewPassword: [
            { validator: validatePass2, trigger: 'blur' }
          ],
        },
        showLogin:false,
      }
    },
    methods: {
      onSubmit () {
        let me = this
        var reg = /^.*(?=.{6,})(?=.*\d)(?=.*[A-Za-z])(?=.*[!@#$%^&*?,<>{}\[\]\.\\/\'\"`~\:;+=-\_\|\\\(\)]).*$/
        if (res.test(me.form.newPassword)){
          if (me.form.newPassword == me.form.reNewPassword) {
            if (me.form.newPassword != me.form.oldPassword) {
              callApiToken('/user/change_user_password', this.form, function (res) {
                console.log(res)
                if (res.status >= 200 && res.status < 300) {
                  if (res.data.success) {
                    me.$message({message: '密码修改成功, 请重新登录', type: 'success'})
                    localStorage.removeItem('access_token')
                    setTimeout(function() {
                      window.location.href='http://proxy.tintop.cn:26082/mbs/index.html'
                    }, 1000)
                  } else {
                    me.$message.error(res.data.errmsg)
                  }
                }
              })
            } else {
              me.$message.error('您输入的新密码与旧密码一致，请重新输入')
            }
          } else {
            me.$message.error('您输入的两次新密码不一致，请重新确认！')
          }
        } else {
          me.$message.error('为了您的账号安全，请遵循密码规则')
        }

      },
      resetImgCode () {
        this.imgsrc = 'http://proxy.tintop.cn:26081/ums/pub/user/v_code?' + Math.random()
      }
    },
    created: function () {
      this.imgsrc = 'http://proxy.tintop.cn:26081/ums/pub/user/v_code?' + Math.random()
    },
    mounted () {
      this.queryData = this.$route.query
    }
  }
</script>

<style lang="scss">
  @import "../../style/mixin";
  .resetPwd{
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
    .resetPwd{
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
