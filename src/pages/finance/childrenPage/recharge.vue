<template>
  <div class="recharge">
    <div class="title">
        <h2>本金充值</h2>
    </div>
      <el-container style="border: 1px solid #f4f4f4;">
        <el-aside style="width: 200px;">
          <el-menu :default-active="page" class="el-menu-vertical-demo" @select="handleSelect">
            <el-menu-item index="1">
              <span slot="title">支付宝充值</span>
            </el-menu-item>
            <el-menu-item index="2">
              <span slot="title">支付宝充值</span>
            </el-menu-item>
            <el-menu-item index="3">
              <span slot="title">银行卡充值</span>
            </el-menu-item>
            <el-menu-item index="4">
              <span slot="title">微信充值</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
          <onlineAlipay v-if="page == '1'"/>
          <alipay v-if="page == '2'"/>
          <Onlinebank v-if="page == 3"/>
        </el-main>
      </el-container>
  </div>
</template>
<script>
import alipay from '@/pages/finance/childrenPage/Alipay'
import Onlinebank from '@/pages/finance/childrenPage/Onlinebank'
import WeChatPay from '@/pages/finance/children/WeChatPay'
import onlineAlipay from '@/pages/finance/childrenPage/onlineAlipay'
export default {
  components: {
    alipay,Onlinebank,WeChatPay,onlineAlipay
  },
  data(){
      return{
        activeName:'first',
        userAmount: '100',
        page: '1',
      }
  },
  methods: {

    handleSelect (value) {
      this.page = value
      // console.log(this.page)
      // switch (value) {
        // case 1: page = 1 brea
      // }
      // console.log(value)

    }

    // handleSelect (value) {
    //   console.log(value)
    //   if (value == '1') {
    //     this.$router.push('/finance/recharge/online-alipay')
    //   }
    // }
  },
  created () {
  },
}
</script>
<style lang="scss">
.recharge{
   background-color: #ffffff;
    padding: 30px 20px 35px;
    border: 1px solid #cccccc;
    border-top: none;
    min-height: 450px;
    overflow: hidden;
    .title{
        width: 100%;
        height: 40px;
        padding: 10px 0;
        box-sizing: border-box;
        overflow: hidden;
        margin-bottom: 20px;
        h2{
            padding-left: 10px;
            display: inline-block;
            vertical-align: top;
            border-left: 4px solid #205081;
            width: 125px;
            height: 20px;
            font-size: 14px;
            line-height: 20px;
        }
    }
    .el-aside {
      // background-color: pink;
    }
}
</style>
