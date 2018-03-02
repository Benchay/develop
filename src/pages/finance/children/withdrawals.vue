<template>
  <div class="withdrawals">
      <div class="title">
          <h2>金额提现</h2>
      </div>
      <div class="rechargewrap">
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="支付宝支付" name="first">
              <!-- <alipay/> -->
            </el-tab-pane>
            <el-tab-pane label="网银支付" name="second">
              <!-- <Onlinebank/> -->
            </el-tab-pane>
            <el-tab-pane label="微信支付" name="third">
              <!-- <WeCha tPay/> -->
            </el-tab-pane>
        </el-tabs>
      </div>
  </div>
</template>
<script>
// import {callApiWithToken} from '@/data/callApi'
export default {
  name: 'withdrawals',
  components: {
    // alipay,Onlinebank,WeChatPay
  },
  data(){
      return{
        activeName:'first'
      }
  },
  methods: {
    handleClick () {

    }
  },
  created () {
    // var _this=this
    // callApiWithToken('mbs/api/finance/query_receiver_config',{'pageSize':10,'pageNum':1,'status':1},function (res) {
    //   _this.webSiteCodeList=res.data.content
    //   console.log(res)
    // })
  },
}
</script>
<style lang="scss">
.withdrawals{
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
        // border-bottom: 1px dashed #e9ebea;
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
    .rechargewrap{
        .el-tabs__item{
            margin-right: 10px;
            border: 1px solid #cccccc;
        }
        .el-tabs__nav-wrap{
            display: inline-block;
            position: relative;
            &:after{
                    background-color: #ffffff;
                }
        }
        .el-tabs__item.is-active{
            border: 1px solid #205081;
            position: relative;
            &:before{
                content: "";
                position: absolute;
                bottom: 0;
                right: 0;
                width: 26px;
                height: 26px;
                background: url(./pitch_up.png) center center no-repeat;
            }
        }
        .el-tabs__active-bar{
            background-color: #ffffff;
            height: 0;
        }
    }
}
</style>
