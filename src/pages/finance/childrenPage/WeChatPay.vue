<template>
  <div class="wechat-pay">
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
    <el-row style="margin-left: 480px;">
      <div class="" style="padding-top: 50px;">
        <el-radio v-model="radio" label="0">自定义金额<el-input style="margin-left: 20px;" v-model="form.amount"></el-input></el-radio>
      </div>
    </el-row>
    <el-row type="flex" justify="center">
      <div class="button-box" style="padding-top: 50px;">
        <el-button class="success" @click="onSubmit">立即充值</el-button>
        <el-button >取消</el-button>
      </div>
    </el-row>

    <el-row type="flex" justify="center">
      <el-col :span="15">
        <div class="text-info-box">
          <p>温馨提示</p>
          <p>1、不支持信用卡方式充值</p>
          <p>2、首次使用需要在手机端下载微信</p>
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
      radio: '50',
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
        if (res.status >= 200 && res.status < 300) {
          if (res.data.success) {
            console.log(res)
            me.$message({message: '提交充值审核任务成功', type: 'success'})
            return
          }
        }
        me.$message.error(res.data.errmsg)
      })
    }
  }
}
</script>

<style scoped lang='scss'>
.wechat-pay {
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
