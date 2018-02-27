<template>
  <div class="Balance">
    <el-container>
      <el-header style="height: 50px;">
        <div class="menu">
          <span>修改密码</span>
        </div>
      </el-header>
      <el-main>
        <el-tabs type="border-card" v-model="activeName">
          <el-tab-pane label="充值" name="">
            <el-row type="flex" justify="center">
                <div class="" style="width: 830px;">
                  <div class="title-area" style="background-color: #f4f4f4; height: 40px;line-height: 40px;padding-left: 20px;">
                    当前账户余额：<span>111</span>
                  </div>
                  <el-row>
                    <div class="" style="padding-top: 50px;">

                      <el-tabs type="border-card" v-model="payType">
<!-- ——————————————————————————————————————————————————————————————————————支付宝充值—————————————————————————————————————————————————— -->
                        <el-tab-pane label="支付宝充值" name="alipay">
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
                            <el-row type="flex" justify="center">
                              <div class="" style="padding-top: 50px;">
                                <el-radio v-model="radio" label="0">自定义金额<el-input style="margin-left:20px;" v-model="radio"></el-input></el-radio>
                              </div>
                            </el-row>
                            <el-row type="flex" justify="center">
                              <div class="button-box" style="padding-top: 50px;">
                                <el-button style="background-color: red; color: white;">立即充值</el-button>
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
                        </el-tab-pane>
<!--  ——————————————————————————————————————————————————————————微信充值————————————————————————————————————————————————————————-->
                        <el-tab-pane label="微信充值" name="WeChat">
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
                            <el-row type="flex" justify="center">
                              <div class="" style="padding-top: 50px;">
                                <el-radio v-model="radio" label="0">自定义金额<el-input style="margin-left: 20px;" v-model="radio"></el-input></el-radio>
                              </div>
                            </el-row>
                            <el-row type="flex" justify="center">
                              <div class="button-box" style="padding-top: 50px;">
                                <el-button style="background-color: red; color: white;">立即充值</el-button>
                                <el-button >取消</el-button>
                              </div>
                            </el-row>
                            <el-row>
                              <div class="text-box" style="padding-top: 50px; padding-left: 130px;">
                                <p>温馨提示</p>
                                <p>1、不支持信用卡方式充值</p>
                                <p>2、首次使用需要在手机端下载微信</p>
                              </div>
                            </el-row>
                          </div>
                        </el-tab-pane>

                        <el-tab-pane label="网银充值" name="">
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
                            <el-row type="flex" justify="center">
                              <div class="" style="padding-top: 50px;">
                                <el-radio v-model="radio" label="0">自定义金额<el-input style="margin-left: 20px;" v-model="radio"></el-input></el-radio>
                              </div>
                            </el-row>

                            <el-row >
                              <!-- 改为使用下拉框 -->
                              <p style="padding-top: 20px;padding-left: 130px;">
                                <span>收款账户：</span>
                                <el-input placeholder="请输入内容" style="width: 200px;" v-model="input21"></el-input>
                              </p>

                              <p style="padding-top: 20px;padding-left: 130px;">
                                <span>付款帐号：</span>
                                <el-input placeholder="请输入内容" style="width: 200px;" v-model="input21"></el-input>
                              </p>

                              <p style="padding-top: 20px;padding-left: 130px;">
                                <span>交易流水：</span>
                                <el-input placeholder="请输入内容" style="width: 200px;" v-model="input21"></el-input>
                              </p>
                            </el-row>

                            <el-row type="flex" justify="center">
                              <div class="button-box" style="padding-top: 50px;">
                                <el-button style="background-color: red; color: white;">提交</el-button>
                                <el-button >取消</el-button>
                              </div>
                            </el-row>

                            <el-row>
                              <div class="text-box" style="padding-top: 50px;">
                                <p style="padding-left: 130px;"><img src="${1}" alt="${0}"/>温馨提示</p>
                                <p style="padding-left: 130px;">请填写真实有效的充值信息，连续超过3次错误，将被定义为恶意充值，并冻结账号</p>
                              </div>
                            </el-row>
                          </div>
                        </el-tab-pane>
                        <el-tab-pane label="线下汇款" name="">
                        </el-tab-pane>
                      </el-tabs>
                    </div>
                  </el-row>
                </div>
            </el-row>
          </el-tab-pane>

<!-- ————————————————————————————————————————————————————退款———————————————————————————————————————————————————————————————— -->
          <el-tab-pane label="退款" name="">
            <div class="">
              <el-row type="flex" justify="center">
                <div class="" style="width: 830px;">
                  <div class="title-area" style="background-color: #f4f4f4; height: 40px;line-height: 40px;padding-left: 20px;">
                    当前账户余额：<span>111</span><span>最低提现金额为￥50.00</span>
                  </div>
                  <div class="" style="margin-left: 110px; margin-top: 50px;">
                    <el-form>
                      <el-form-item label="提现金额 :"><el-input style="width: 200px; margin-left: 50px;"></el-input></el-form-item>
                      <!-- 将改为下拉框 -->
                      <el-form-item label="提现金额 :"><el-input style="width: 200px; margin-left: 50px;"></el-input></el-form-item>
                      <!-- 使用验证码 -->
                      <el-form-item label="提现金额 :"><el-input style="width: 200px; margin-left: 50px;"></el-input></el-form-item>
                    </el-form>
                  </div>
                  <p>*请您认真核对提现金额及提现账户，确保户名与帐号一致，以免造成提现失败甚至金额损失。</p>
                  <div class="" style="margin-left: 110px;">
                    <el-button>提交</el-button>
                    <el-button>取消</el-button>
                  </div>
                </div>
              </el-row>
            </div>
          </el-tab-pane>

<!-- ————————————————————————————————————————————————————转账———————————————————————————————————————————————————————— -->
          <el-tab-pane label="转账" name="">
            <div class="">
              <el-row type="flex" justify="center">
                <div class="" style="width: 830px;">
                  <div class="title-area" style="background-color: #f4f4f4; height: 40px;line-height: 40px;padding-left: 20px;">
                    当前账户余额：<span>111</span>
                  </div>
                  <div class="" style="margin-top: 50px;">
                    <el-form :inline="true">
                        <el-form-item label="待收款档口：" ><el-input style="width: 200px; "></el-input></el-form-item>
                        <el-form-item label="总欠款金额："><el-input style="width: 200px;"></el-input></el-form-item>
                        <el-form-item label="到期金额：" ><el-input style="width: 200px; margin-left: 14px;"></el-input></el-form-item>
                        <el-form-item label="付款金额：" ><el-input style="width: 200px; margin-left: 14px;"></el-input></el-form-item>
                        <el-form-item label="抹平金额：" ><el-input style="width: 200px; margin-left: 14px;"></el-input></el-form-item>
                        <el-form-item label="实付金额：" ><el-input style="width: 200px; margin-left: 14px;"></el-input></el-form-item>
                        <el-form-item label="付款方式：" ><el-input style="width: 200px; margin-left: 14px;"></el-input></el-form-item>
                        <el-form-item label="付款帐号：" ><el-input style="width: 200px; margin-left: 14px;"></el-input></el-form-item>
                        <el-form-item label="短信验证：" ><el-input style="width: 200px; margin-left: 14px;"></el-input></el-form-item>
                        <div class="">
                          <el-button>立即转账</el-button>
                          <el-button>取消</el-button>
                        </div>
                    </el-form>
                  </div>

                </div>
              </el-row>
            </div>
          </el-tab-pane>
        </el-tabs>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'Balance',
  data () {
    return {
      payType: '',
      activeName: '1',
      radio: ''
    }
  }

}
</script>

<style scoped lang="scss">
  .Balance {
    .menu {
      height: 50px;
      width: 139px;
      background-color: white;
      border-top: 1px solid #DA444F;
      border-left: 1px solid #DA444F;
      border-right: 1px solid #DA444F;
      text-align: center;
      float: left;
      line-height: 50px;
    }
    .el-main {
      padding-top: 0px;
    }
  }
</style>
