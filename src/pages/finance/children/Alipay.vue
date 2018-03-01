<template>
  <div class="alipay-pay">
    <el-row type="flex" justify="center">
      <div class="package-box" style="padding-top: 20px;">
        充值金额:
        <span style="margin-left: 30px;">
          <el-radio v-model="radio" label="50">50元</el-radio>
          <el-radio v-model="radio" label="100">100元</el-radio>
          <el-radio v-model="radio" label="200">200元</el-radio>
          <el-radio v-model="radio" label="500">500元</el-radio>
          <el-radio v-model="radio" label="1000">1000元</el-radio>
        </span>
      </div>
    </el-row>
    <el-row type="flex">
      <div class="" style="padding-top: 50px; padding-left:480px;">
        <el-radio v-model="radio" label="0">自定义金额<el-input style="margin-left:20px;" v-model="radio"></el-input></el-radio>
      </div>
    </el-row>
    <el-row type="flex" justify="center">
      <div class="button-box" style="padding-top: 50px;">
        <el-button style="background-color: #205081; color: white;" @click="onSubmit">立即充值</el-button>
        <el-button >取消</el-button>
      </div>
    </el-row>

    <el-row>
      <div class="text-box" style="padding-top: 50px;padding-left: 130px;">
        <p>温馨提示</p>
        <p>1、不支持信用卡方式充值</p>
        <p>2、首次使用需要在手机端下载支付宝钱包</p>
      </div>
    </el-row>
  </div>
</template>

<script>
import {callApiForMbs} from '@/data/callApi'
export default {
  data () {
    return {
      radio: '50',
    }
  },
  methods: {
    onSubmit () {
      let me = this
      console.log(this.radio)
      callApiForMbs('/finance/recharge_amount', {payerAccount:localStorage.getItem('userId'), payerAccount: 1, financeItemCode:"1", tradingType: 5, amount:this.radio, transactionNumber:"123洪建成"}, function (res) {
        console.log(res)
        if (res.status >= 200 && status < 300) {
          if (res.data.success) {
            me.$message({message: '提交充值审核任务成功', type: 'success'})
            return
          }
        }
        me.$message.error('充值失败')
      })
    }
  },
  // created: function () {
  //   callApiForMbs('/finance/recharge_amount', {
  //     tradingTime:123456789123,
  //     payer: "小明",
  //     payerAccount:"123456789",
  //     payee:"阿黄",
  //     payeeAccount:"22222222",
  //     financeItemCode:"1",
  //     tradingType:1,
  //     amount:100.0000,
  //     transactionNumber:"1111111111",
  //     images:"['https://www']",
  //     notes:"充值"
  //   } , function (res) {
  //
  //
  //
  //   })
  // }
}
</script>

<style>

</style>
