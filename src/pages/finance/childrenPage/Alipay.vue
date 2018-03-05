<template>
  <div class="alipay-pay">

  </div>
</template>

<script>
import {callApiForMbs} from '@/data/callApi'
export default {
  data () {
    return {
      form: {
        payerAccount: '',
        payeeAccount: '',
        financeItemCode: '1',
        tradingType:'5',
        amount: '50',
        transactionNumber:'',
      }
    }
  },
  methods: {
    onSubmit () {
      let me = this
      callApiForMbs('/finance/recharge_amount', this.form, function (res) {
        if (res.status >= 200 && status < 300) {
          if (res.data.success) {
            me.$message({message: '提交充值审核任务成功', type: 'success'})
            return
          }
        }
        me.$message.error('充值失败')
      })
    }
  }
}
</script>

<style scoped lang="scss">
  .alipay-pay {
    
  }
</style>
