<template>
  <div class="onlineAlipay">
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
        <div class="other-input-area">
          <span>其他金额:</span>
          <span>
            <el-input size="small"></el-input>
            　=　
            <el-input size="small"></el-input>
          </span>
        </div>
        <div class="other-input-area">
          <span class="finance-info">
            (美元兑换人民币汇率:　6.37)
          </span>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'onlineAlipay',
  data () {
    return {
      form: {
        amount: '',
      }
    }
  }
}
</script>

<style lang="scss">
  .onlineAlipay {
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
    .other-input-area {
      padding-top: 20px;
      padding-left: 115px;
      span {
        .el-input {
          width: 150px;
        }
      }
    }
  }
</style>
