<template>
  <div class="Onlinebank">
    <el-row class="to-examine">
      *需要人工审核，审核时间为每天9:00~18:00
    </el-row>
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
      <el-col :span="24">
        <div class="input-listbox">
          <p><span>收款账号</span></p>
          <p><span>付款账号</span><el-input size="small"></el-input></p>
          <p><span>交易流水</span><el-input size="small"></el-input></p>
          <p><span>交易凭证</span></p>
        </div>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="24">
        <div class="user-prompt-info">
          重要提示：请填写真是有效的充值信息，连续超过3次错误将被定义为恶意充值，账号将被冻结
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <div class="button-box">
          <el-button type="primary">确认充值</el-button>
          <router-link :to="{path: '/finance'}"><el-button>返回上级</el-button></router-link>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Onlinebank',
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
  .Onlinebank {
    .to-examine {
      font-size: 10px;
      color: red;
    }

    .title-info {
      padding-top:: 20px;
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
    .input-listbox {
      p {
        margin-top: 20px;
        .el-input {
          margin-left: 20px;
          width: 200px;
        }
      }
    }
    .user-prompt-info {
      font-size: 10px;
      padding-top: 20px;
    }
    .button-box {
      padding-top: 20px;
      .el-button {
        margin-right: 100px;
      }
    }
  }
</style>
