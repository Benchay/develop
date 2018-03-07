<template>
  <div class="Alipay">
    <el-row>
      <el-col :span="24">
        <div class="title-info">
          <span class="user-info">
            <span>充值账号:</span>
            <span>test</span>
          </span>
          <span class="finance-info">
            <span >当前余额:</span>
            <span class="show-finance-data">123123</span>
          </span>
        </div>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="24">
        <div class="finance-radio-box">
          <span>充值金额：</span>
          <span class="radio-area">
            <el-radio v-model="form.amount" label="50">$50</el-radio>
            <el-radio v-model="form.amount" label="100">$100</el-radio>
            <el-radio v-model="form.amount" label="200">$200</el-radio>
            <el-radio v-model="form.amount" label="500">$500</el-radio>
          </span>
        </div>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="24">
        <div class="other-box">
          <div class="other-input-area">
            <span>其他金额:</span>
            <span>
              <el-input size="small"></el-input>
              　=　
              <el-input size="small"></el-input>
            </span>
          </div>
          <div class="other-input-area">
            <span class="finance-prompt-info">
              (美元兑换人民币汇率:　6.37)
            </span>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <div class="button-box">
          <el-button type="primary" @click="onSubmit">确认充值</el-button>
          <router-link :to="{path: '/finance'}"><el-button>返回上级</el-button></router-link>
        </div>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="24">
        <div class="user-prompt-info">
          <p>支付宝扫码说明：</p>
          <p>1、您必须拥有支付宝账户；</p>
          <p>2、首次使用需要在手机端下载支付宝钱包；</p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Alipay',
  data () {
    return {
      form: {
        amount: '',
      }
    }
  },
  methods: {
    onSubmit () {
      let me = this
      me.$message({message: '支付成功，请等待审核', type: 'success'})
    }
  },
  created: function () {

  }
}
</script>

<style lang="scss">
  .Alipay {
    .title-info {
      .user-info {

      }
      .finance-info {
        margin-left: 30px;
        .show-finance-data {
          color: #ff9800;
        }
      }
    }
    .finance-radio-box {
      padding-top: 20px;
      .radio-area {
        margin-left: 30px;
        .el-radio {
          margin-right: 10px;
        }
      }
    }
    .other-box {
      padding-top:20px;
      .other-input-area {
        padding-top: 0px;
        padding-left: 115px;
        span {
          .el-input {
            width: 150px;
          }
        }
        .finance-prompt-info {
          padding-left: 73px;
          color: red;
          font-size: 10px;
        }
      }
    }
    .button-box {
      padding-top: 40px;
      .el-button {
        margin-right: 100px;
      }
    }
    .user-prompt-info {
      font-size: 10px;
      padding-top: 20px;
      p {
        margin-top: 8px;
      }
    }
  }
</style>
