<template>
  <div class="onlinebank-pay">
    <el-row type="flex" justify="center">
      <div class="package-box" style="padding-top: 20px;">
        充值金额:
        <span style="margin-left: 30px;">
          <el-radio v-model="form.amount" label="50">50元</el-radio>
          <el-radio v-model="form.amount" label="100">100元</el-radio>
          <el-radio v-model="form.amount" label="200">200元</el-radio>
          <el-radio v-model="form.amount" label="500">500元</el-radio>
          <el-radio v-model="form.amount" label="1000">1000元</el-radio>
        </span>
      </div>
    </el-row>
    <el-row type="flex">
      <div class="" style="padding-top: 50px; padding-left: 480px;">
        <el-radio v-model="form.amount" label="0">自定义金额<el-input style="margin-left: 20px;" v-model="radio"></el-input></el-radio>
      </div>
    </el-row>

    <el-row >
      <!-- 改为使用下拉框 -->

      <p style="padding-top: 20px;padding-left: 510px;">
        <span>付款帐号：</span>
        <el-input placeholder="请输入内容" style="width: 200px;" v-model="form.payerAccount"></el-input>
      </p>

      <p style="padding-top: 20px;padding-left: 510px;">
        <span>收款账户：</span>
        <el-input placeholder="请输入内容" style="width: 200px;" v-model="form.payeeAccount"></el-input>
      </p>

      <p style="padding-top: 20px;padding-left: 510px;">
        <span>交易流水：</span>
        <el-input placeholder="请输入内容" style="width: 200px;" v-model="form.transactionNumber"></el-input>
      </p>
    </el-row>

    <el-row type="flex" justify="center">
      <div class="button-box" style="padding-top: 50px;">
        <el-button style="background-color: #205081; color: white;" @click="onSubmit">提交</el-button>
        <el-button >取消</el-button>
      </div>
    </el-row>

    <el-row type="flex" justify="center">
      <el-col :span="15">
        <div class="text-info-box" style="padding-top: 50px;">
          <p >温馨提示</p>
          <p >请填写真实有效的充值信息，连续超过3次错误，将被定义为恶意充值，并冻结账号</p>
        </div>
      </el-col>

    </el-row>
  </div>
</template>

<script>
import {callApiForMbs} from '@/data/callApi'
export default {
  data () {
    return {
      radio: '',
      form: {
        payerAccount: '',
        payeeAccount: '',
        amount: '50',
        financeItemCode:'2',
        tradingType: 3,
        transactionNumber: '',
        notes: ''
      }
    }
  },
  methods: {
    onSubmit () {
      let me = this
      callApiForMbs('/finance/recharge_amount', this.form, function (res) {
        console.log(res)
        if (res.status >= 200 && res.status < 300) {
          if (res.data.success) {
            console.log('financeItemCode')
            me.$message({message: res.data.content.content.msg, type: 'success'})
            return
          }
        }
        me.$message.error(res.data.errmsg)
      })
    }
  }
}
</script>

<style scoped lang="scss">
.onlinebank-pay {
  .text-info-box {
    padding-top: 20px;
    font-size: 10px;
  }
  .el-button {
    height: 38px;
  }
  .success {
    background-color: #205081;
    color: white;
  }
}
</style>
