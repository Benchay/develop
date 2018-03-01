<template>
  <div class="SetPayPassword">
  <el-container>
    <el-header style="height: 50px;">
      <div class="menu">
        <span>修改密码</span>
      </div>
    </el-header>
    <el-main>
      <div class="body-content">
        <el-row type="flex" justify="center">
          <div class="center-area">
            <el-form ref="form" :model="form" label-width="80px">
              <el-form-item label="手机号码">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
              <el-form-item label="验证码">
                <el-input v-model="form.name">
                  <template slot="append" class="" ><el-button type="infor" style="cursor: point; background:#DA444F; color: white;">获取验证码 </el-button></template>
                </el-input>
              </el-form-item>
              <el-form-item label="支付密码">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
              <el-form-item label="确认密码">
                <el-input v-model="form.name"></el-input>
              </el-form-item>

              <el-form-item >
                <el-button style="background: #DA444F; color: white;" @click="onSubmit">保存</el-button>
                <el-button >取消</el-button>
              </el-form-item>
            </el-form>
          </div>
        </el-row>
      </div>
    </el-main>
  </el-container>
  </div>
</template>

<script>
import {callJsonApi} from '@/data/callApi'
export default {
  name: 'SetPayPassword',
  data () {
    return {
      form: {name: ''}
    }
  },
  methods: {
    onSubmit () {

    }
  },created: function () {
    // callJsonApi('')
  }
}
</script>

<style scoped lang="scss">
  .SetPayPassword {
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
    .el-main{
      padding-top: 0px;
      .body-content {
        background: white;
        border: 1px solid white;
        padding-top: 80px;
        padding-bottom: 80px;
        .center-area {
          top: 100px;
          width: 400px;
          height: 560px;
        }
      }
    }

  }
</style>
