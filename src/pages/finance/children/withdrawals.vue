<template>
  <div class="withdrawals">
      <div class="title">
          <h2>金额提现</h2>
      </div>
      <div class="rechargewrap">
          <div class="content-box">
            <!-- 开头 -->
            <el-row type="flex" justify="center">
              <el-col :span="18">
                <div class="content-title">
                  <span>当前账户余额：</span>
                  <span>￥1000</span>
                </div>
              </el-col>
            </el-row>
            <!-- 中心内容 -->
            <el-row type="flex" justify="center">
                <div class="concent-body">
                  <div class="content-body-content">
                    <p>
                      <span>提现账户:</span>
                      <el-select v-model="form.payeeAccount" placeholder="请选择" @visible-change="getPresentAccount" v-if="select">
                        <el-option v-for="item in withdrawalsOptions" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                      </el-select>
                      <el-input v-else></el-input>
                    </p>
                    <p>
                      <span>提现金额:</span>
                      <el-input>
                        <template slot="append">
                          <span>元</span>
                        </template>
                      </el-input>
                    </p>
                    <p>
                      <!-- 手机验证码 -->
                      <span>短信验证:</span>
                        <el-input v-model="code" placeholder="请输入手机验证码">
                          <template slot="append" class="" >
                            <el-button v-if="sendMobile" type="infor" class="codeBtn" style="">获取验证码</el-button>
                          </template>
                        </el-input>
                    </p>
                  </div>
                </div>
            </el-row>
            <el-row type="flex" justify="center">
              <el-col :span="18">
                <div class="promptMsg">
                  <span style="color: red;">*</span>
                  <span class="">请您认真核对提现金额及提现账户，确保户名与帐号一致，以免造成提现失败甚至金额损失。</span>
                </div>
              </el-col>
            </el-row>

            <el-row type="flex" justify="center">
              <div class="botton-area">
                <div class="content-body-content">
                  <p>
                    <el-button class="Determine" @click="onSubmit">提现</el-button>
                    <el-button class="cancel">取消</el-button>
                  </p>
                </div>
              </div>
            </el-row>
          </div>
      </div>
  </div>
</template>
<script>
// import {callApiWithToken} from '@/data/callApi'
import {callApiForMbs} from '@/data/callApi'
export default {
  name: 'withdrawals',
  components: {
    // alipay,Onlinebank,WeChatPay
  },
  data(){
      return{
        select: true,


        sendMobile: true,
        activeName:'first',
        withdrawalsOptions: [
          {label: '支付宝', value: '1'},
          {label: '网银', value: '2'},
          {label: '微信', value: '3'}
        ],


        form: {
           payerAccount:"222222",
           payeeAccount:"123456",
           financeItemCode: '1',
           amount: -100,
        },
        withdrawalsType: '',
        code: '',
      }
  },
  methods: {
    getPresentAccount (getAccount) {
      if (getAccount) {
        let me = this
        /*
          如果有选择账号的话，可以在这里调用接口
          填写如url（字符串）以及发送数据（json对象即可）
          接下来在箭头函数中进行数据返回后的操作
        */
        // callApiForMbs('', {}, (res) => {
        //   if (res.status >= 200 && res.status < 300) {
        //     if (res.data.success) {
        //       me.withdrawalsOptions = res.data.content
        //     }
        //   }
        // })
      }
    },
    onSubmit () {
      let me = this
      callApiForMbs('/finance/withdraw', this.form, function (res) {
        if (res.status >= 200 && res.status < 300) {
          if (res.data.success) {
            me.$message({message: '申请成功，请等待审核', type: 'success'})
            return
          }
        }
        me.$message.error(res.data.errmsg)
      })
    },
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
      .content-box {
        .content-title {
          background-color: #205081;
          height: 40px;
          line-height: 40px;
          padding-left: 40px;
          color: white;
        }
        .concent-body {
          padding-top: 20px;
          text-align: center;
          .content-body-content {
            width:400px;
            p {
              margin-bottom: 20px;
              .el-select {
                width: 250px;
              }
              .el-input {
                width: 250px;
                .el-button {
                  background-color: #205081;
                  color:white;
                  height: 38px;
                }
              }
            }
          }
        }
        .promptMsg {
          font-size: 10px;
        }
        .botton-area {
          padding-top: 20px;
          .Determine {
            background-color: #205081;
            color:white;
            height: 38px;
          }
          .cancel {
            height: 38px;
          }
        }
      }

    }
}
</style>
