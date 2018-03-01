<template>
  <div class="BindMobile">
    <el-container>
      <el-header style="height: 50px;">
        <div class="menu">
          <span>修改密码</span>
        </div>
      </el-header>
      <el-main>
        <el-row class="row-bg" justify="center" type="flex">
          <div class="step-box">
            <el-steps :active="stepIndex" simple>
              <el-step title="输入新手机号"></el-step>
              <el-step title="验证信号码"></el-step>
              <el-step title="完成"></el-step>
            </el-steps>
          </div>
        </el-row>
        <el-row class="row-bg" justify="center" type="flex">
          <div class="content-box">
            <el-form ref="form" label-width="80px">
              <el-form-item v-if="stepIndex==0" label="手机号码">
                <el-input v-model="params"></el-input>
              </el-form-item>
              <el-form-item v-if="stepIndex==1" label="验证码">
                <el-input v-model="params">
                  <template slot="append" class="" ><el-button type="infor" style="cursor: point; background:#DA444F; color: white;">获取验证码 </el-button></template>
                </el-input>
              </el-form-item>
              <p v-if="stepIndex==2">您已成功绑定新的手机号码：{{params}}</p>
            </el-form>
          </div>
        </el-row>
        <el-row class="row-bg" type="flex" justify="center">
          <div class="button-box">
            <el-button type="primary">下一步</el-button>
          </div>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'BindMobile',
  data () {
    return {
      stepIndex: 2,
      params: '13678945612'
    }
  }
}
</script>

<style scoped lang='scss'>
  .BindMobile {
    .menu {
      height: 50px;
      width: 139px;
      background-color: white;
      border-top: 1px solid #DA444F;
      border-left: 1px solid #DA444F;
      border-right: 1px solid #DA444F;
      text-align: center;
      float: left;
      line-height: 50px;
    }
    .el-main {
      padding-top: 0px;
      .row-bg {
        background: white;
        .step-box {
          margin-top: 20px;
          width: 650px;
          .el-steps {
            background-color: #f4f4f4;
          }
        }
        .content-box {
          padding-top: 100px;
        }
        .button-box {
          padding-top: 100px;
          padding-bottom: 100px;
        }
      }
    }
  }
</style>
