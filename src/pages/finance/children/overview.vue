<template>
  <div class="overview">
      <div class="accountcard">
          <div class="finaccount">
              <div class="cardheader">
                  <h2>财务账户</h2>
                  <span>查看明细<i class="morewrap"><img src="./more.png" alt=""></i></span>
              </div>
              <div class="goldwrap">
                <p class="firegold">账户余额：<span style="color: #f3900c;">${{userFinance.amount}}</span></p>
                <p class="freezegold">冻结金额：￥<span>{{userFinance.frozenAmount}}</span></p>
              </div>
              <div class="btngroup">
                   <router-link  :to='{path:"/finance/recharge"}'><el-button type="warning">充值</el-button></router-link>
                  <el-button type="success">提现</el-button>
              </div>
          </div>
          <!-- <div class="comaccount">
              <div class="cardheader">
                  <h2>佣金账户</h2>
                  <span>查看明细<i class="morewrap"><img src="./more.png" alt=""></i></span>
              </div>
              <div class="goldwrap">
                <p class="firegold yonggold">佣金余额：<span style="color: #f3900c;">$66666666666666666666</span></p>
                <p class="freezegold">冻结金额：￥200.00</p>
              </div>
               <div class="btngroup">
                  <el-button type="primary">购买</el-button>
              </div>
          </div> -->
          <div class="setwarning">
               <div class="cardheader">
                  <h2>预警设置</h2>
              </div>
              <div class="goldwrap">
                <p class="firegold warninglight" style="margin-bottom: 40px;">可用本金余额预警
                    <el-switch
                    v-model="earlyWarn" @change="changeEarlyWarn"
                    style="margin-left: 15px;">
                    </el-switch>
                </p>
                <!-- 预警金额 -->
                <p class="freezegold setlight">预警阀值为：
                  <span v-if="earlyWarnf">
                    <span style="color: #f3900c; margin-right: 35px;">
                      ￥<span>{{earlyWarnAmount}}</span>
                    </span>
                    <i @click="earlyWarnf = !earlyWarnf"><img src="./warning_gai.png" alt=""></i>
                  </span>

                  <span v-else>
                    <span style="color: #f3900c; margin-right: 35px;">
                      ￥<el-input size="mini" style="width: 80px;" v-model="earlyWarnAmount"></el-input>
                    </span>
                    <el-button size="mini" type="primary" @click="changeEarlyWarn">确定</el-button>
                    <el-button size="mini" @click="earlyWarnf = !earlyWarnf">取消</el-button>
                  </span>
                </p>
              </div>
          </div>
      </div>
      <!-- <el-dialog></el-dialog> -->
      <div class="record">
          <div class="recordtitle">
               <h2>最近交易记录</h2>
                <span>查看更多>></span>
          </div>
          <div class="recordtable">
                <el-table
                :data="tableData"
                style="width: 100%">
                <el-table-column
                    prop="waternum"
                    label="流水号"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="time"
                    label="时间"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="type"
                    label="类型">
                </el-table-column>
                <el-table-column
                    prop="changeaccount"
                    label="交易账户">
                </el-table-column>
                <el-table-column
                    prop="goldchange"
                    label="本金余额变化">
                </el-table-column>
                <el-table-column
                    prop="freezegold"
                    label="本金冻结变化">
                </el-table-column>
                <el-table-column
                    prop="changestate"
                    label="交易类型">
                </el-table-column>
                <el-table-column
                    prop="state"
                    label="状态">
                </el-table-column>
                <el-table-column
                    prop="detail"
                    label="说明">
                </el-table-column>
                <el-table-column
                    label="操作"
                    width="140">
                    <template slot-scope="scope">
                        <el-button plain>查看凭证详情</el-button>
                    </template>
                </el-table-column>
                </el-table>
          </div>
      </div>
  </div>
</template>

<script>
import {callApiForMbs} from '@/data/callApi'
export default {
    components: {

      },
    data() {
      return {
          userFinance: {
            activeAlertness: '',
            alertnessAmount:'',
            amount:'',
            companyId: '',
            distributorCompanyId: '',
            earnAmount: '',
            earnCoin: '',
            frozenAmount: '',
            gmtCreate: '',
            gmtModify: '',
            id: '',
            status: '',
            version: ''
          },
          earlyWarn: false,
          earlyWarnAmount: 0,
          earlyWarnf: true,

          tableData: [{
            waternum: '46465465465',
            time: '2016-12-6',
            type: '类型',
            changeaccount:'1313211',
            goldchange:'+10',
            freezegold:'-10',
            changestate:'推广服务',
            state:'正常',
            detail:'说明',
          }, {
            waternum: '46465465465',
            time: '2016-12-6',
            type: '类型',
            changeaccount:'1313211',
            goldchange:'+10',
            freezegold:'-10',
            changestate:'推广服务',
            state:'正常',
            detail:'说明',
          }, {
            waternum: '46465465465',
            time: '2016-12-6',
            type: '类型',
            changeaccount:'1313211',
            goldchange:'+10',
            freezegold:'-10',
            changestate:'推广服务',
            state:'正常',
            detail:'说明',
          }, {
            waternum: '46465465465',
            time: '2016-12-6',
            type: '类型',
            changeaccount:'1313211',
            goldchange:'+10',
            freezegold:'-10',
            changestate:'推广服务',
            state:'正常',
            detail:'说明',
          }]
      };
    },
    methods: {
      reLoadFinance () {
        let me = this
        callApiForMbs('/finance/get_finance_account', {}, function (res) {
          if (res.status >= 200 && res.status < 300) {
            if (res.data.success) {
              me.userFinance = res.data.content
              me.earlyWarnAmount = res.data.content.alertnessAmount
              if (res.data.content.activeAlertness) {
                me.earlyWarn = true
              } else {
                me.earlyWarn = false
              }
            } else {
              this.$message.error(res)
            }
          } else {
            this.$message.error(res)
          }
        })
      },
      changeEarlyWarn () {
        let me = this
        callApiForMbs('/finance/operate_alertness', {financeAccountId:this.userFinance.id, activeAlertness: this.earlyWarn, alertnessAmount: this.earlyWarnAmount}, function (res) {
          if (res.status >= 200 && res.status < 300) {
            if(res.data.success) {
              me.reLoadFinance()
              me.$message({message:'成功获取',type: 'success'})
              me.earlyWarnf = true
            }
          }
        })
        callApiForMbs('/finance/query_merchant_finance', {})

      },




    },
    created: function () {
      this.reLoadFinance()
    }
  }

</script>
<style lang="scss">
.overview{
    background-color: #ffffff;
    padding: 30px 20px 35px;
    border: 1px solid #cccccc;
    border-top: none;
    .accountcard{
        display: flex;
        justify-content: space-between;
        &>div{
            flex: 1;
            height: 180px;
            border: 1px solid #cccccc;
            box-sizing: border-box;
            border-radius: 4px;
            .cardheader{
                width: 100%;
                height: 40px;
                padding: 10px 0;
                box-sizing: border-box;
                overflow: hidden;
                border-bottom: 1px dashed #e9ebea;
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
                span{
                    margin-right: 10px;
                    display: inline-block;
                    vertical-align: top;
                    font-size: 14px;
                    height: 20px;
                    line-height: 20px;
                    color: #999999;
                    cursor: pointer;
                    float: right;
                    i{
                        display: inline-block;
                        vertical-align: middle;
                        margin-left: 5px;
                    }
                }
            }
        }
        .finaccount,.comaccount{
            margin-right: 80px;
        }
            .goldwrap{
                padding: 20px 15px 0;
                color: #666666;
            }
            .firegold{
                padding-left: 30px;
                margin-bottom: 20px;
                position: relative;
                &:before{
                    position: absolute;
                    top: -6px;
                    left: 0;
                    width: 24px;
                    height: 24px;
                    content: '';
                    background-image: url(./money.png);

                }
            }
            .firegold.yonggold{
                &:before{
                    background-image: url(./yong_1.png);
                }
            }
            .firegold.warninglight{
                &:before{
                    background-image: url(./warning_1.png);
                }
            }
            .freezegold{
                padding-left: 30px;
                margin-bottom: 20px;
                position: relative;
                &:before{
                    position: absolute;
                    top: -3px;
                    left: 0;
                    width: 24px;
                    height: 24px;
                    content: '';
                    background-image: url(./dong.png);

                }
            }
            .freezegold.setlight{
                &:before{
                    background-image: url(./warning_set.png);
                }
            }
            .btngroup{
                text-align: center;
            }
    }
    .record{
        margin-top: 30px;
        border: 1px solid #e6e6e6;
        box-sizing: border-box;
        .recordtitle{
                width: 100%;
                height: 40px;
                padding: 10px 0;
                box-sizing: border-box;
                overflow: hidden;
                background-color: #205081;
                color: #ffffff;
                h2{
                    padding-left: 10px;
                    display: inline-block;
                    vertical-align: top;
                    width: 125px;
                    height: 20px;
                    font-size: 14px;
                    line-height: 20px;
                }
                span{
                    margin-right: 10px;
                    display: inline-block;
                    vertical-align: top;
                    font-size: 14px;
                    height: 20px;
                    line-height: 20px;
                    cursor: pointer;
                    float: right;
                }
        }
    }
}
</style>
