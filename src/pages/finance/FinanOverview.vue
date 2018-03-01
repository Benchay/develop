<template>
  <div class="FinanOverview">
    <el-container>
      <el-header style="height: 40px;">
        <div class="top-menu">
          <li @click="routerGo('/finance/FinanOverview')" class="is-active">财务总览</li>
          <li @click="routerGo('/finance/TransactRecord')">本金交易记录</li>
          <li @click="routerGo('/finance/AccountConfig')">佣金交易记录</li>
        </div>
      </el-header>
      <el-main>
        <el-row class="row-bg">
          <!-- 账户余额 -->
          <el-col :span="8">
            <div class="financial-account">
              <el-card class="box-card" style="padding-left: 0px;">
                <div class="card-top">
                  <p class="title-area">
                    <span>财务账户</span>
                  </p>
                  <p class="detail-look">
                    查看明细>
                  </p>
                </div>
                <div class="card-main">
                  <p class="big-money">
                    <i class="el-icon-info"></i>
                    账户余额:￥
                    <span>123123.00</span>
                  </p>
                  <p class="small-miney">
                    <i class="el-icon-info"></i>
                    冻结金额:￥
                    <span>200.00</span>
                  </p>
                </div>
                <div class="card-footer">
                  <el-button size="small" @click="routerGo('/change/balance', 1)" class="recharge">充值</el-button>
                  <el-button size="small" @click="routerGo('/change/balance', 2)" class="withdrawals">提现</el-button>
                </div>
              </el-card>
            </div>
          </el-col>
          <!--  -->
          <el-col :span="8">
            <div class="fund-notice">
              <el-card class="box-card" style="padding-left: 0px;">
                <div class="card-top">
                  <p class="title-area">
                    <span>佣金账户</span>
                  </p>
                  <p class="detail-look">
                    查看明细>
                  </p>
                </div>
                <div class="card-main">
                  <p class="big-money">
                    <i class="el-icon-info"></i>
                    佣金余额:￥
                    <span>123123.00</span>
                  </p>
                  <p class="small-miney">
                    <i class="el-icon-info"></i>
                    冻结佣金:￥
                    <span>200.00</span>
                  </p>
                </div>
                <div class="card-footer">
                  <el-button size="small" @click="routerGo('/change/balance', 1)" class="purchase">购买</el-button>
                </div>
              </el-card>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="fund-notice">
              <el-card class="box-card" style="padding-left: 0px;">
                <div class="card-top">
                  <p class="title-area">
                    <span>预警设置</span>
                  </p>
                  <p class="detail-look">
                    查看明细>
                  </p>
                </div>
                <div class="card-main-notice">
                  <p class="switch">
                    <i class="el-icon-info"></i>
                    可用本金余额预警:
                  </p>
                  <p class="money-value">
                    <i class="el-icon-info" @click=""></i>
                    预警值为:￥
                    <span>5000.00</span>
                    <i class="el-icon-edit-outline" @click=""></i>
                  </p>
                </div>
              </el-card>
            </div>
          </el-col>

          <!-- 其他账户管理 -->
        </el-row>
        <el-row class="row-bg">
          <div class="table-top">
            最近交易记录
          </div>
          <div class="table-data-area">
            <el-table :data="tableData" size="small" header-row-class-name="table-title">
              <el-table-column prop="operatDate" label="流水号"></el-table-column>
              <el-table-column prop="operatDate" label="操作时间"></el-table-column>
              <el-table-column prop="username" label="类型"></el-table-column>
              <el-table-column prop="operatModular" label="交易账户"></el-table-column>
              <el-table-column prop="operatType" label="本金账户"></el-table-column>
              <el-table-column prop="operatContent" label="本金余额变化"></el-table-column>
              <el-table-column prop="operatIp" label="本金冻结变化"></el-table-column>
              <el-table-column prop="operatIp" label="交易类型"></el-table-column>
              <el-table-column prop="operatIp" label="状态"></el-table-column>
              <el-table-column prop="operatIp" label="说明"></el-table-column>
              <el-table-column label="操作">
                <template slot-scope="scope">
                  <el-button size="small">查看凭证详情</el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </el-row>
        <el-row class="row-bg footer-row">
          <el-col :span="24">
            <div class="left-export-button">
              <el-button size="small">表单导出</el-button>
            </div>
            <div class="current-page-area">
              <el-pagination
                class="right"
                background
                layout="prev, pager, next"
                :total="1000">
              </el-pagination>
            </div>
          </el-col>
        </el-row>
        <el-dialog title="预警编辑" :visible.sync="openDialog">
          <el-form :model="form">
            <el-form-item :label="form.label">
              <el-input v-model="form.value" ></el-input>元
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="openDialog = false">取 消</el-button>
            <el-button type="primary" @click="openDialog = false">确 定</el-button>
          </div>
        </el-dialog>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'ManageLog',
  data () {
    return {
      form: {label: '预警值', value: '100'},
      openDialog: false,
      switchValue: '',
      queryValue: '',
      currentPage: 1,
      dateValue: '',
      options: [
        {label: '登录平台', value: '1'},
        {label: '角色管理', value: '2'},
        {label: '员工管理', value: '3'},
        {label: '基本资料', value: '4'},
        {label: '账户总览', value: '5'},
        {label: '财务交易', value: '6'},
        {label: '账户设置', value: '7'}
      ],
      selectValue: '',
      tableData: [
        {operatDate: '2018-01-01 00:00:00', username: 'XXX', operatModular: '登录平台', operatType: '登录', operatContent: '登录', operatIp: '162.168.0.1'},
        {operatDate: '2018-01-01 00:00:00', username: 'YYY', operatModular: '登录平台', operatType: '登录', operatContent: '登录', operatIp: '162.168.1.5'}
      ]
    }
  },
  methods: {
    handleSelect () {

    },
    handleSizeChange (value) {

    },
    handleCurrentChange (value) {

    },
    routerGo (url, index) {
      if (index !== 0) {
        this.$router.push({path: url, params: index})
      }
    }
  }
}
</script>

<style lang='scss' scoped>
  .FinanOverview {
    .top-menu {
      height: 38px;
      li {
        background-color: white;
        border: 1px solid #d4d4d4;
        height: 38px;
        width: 110px;
        float: left;
        line-height: 38px;
        text-align: center;
      }
      .is-active {
        height: 36px;
        line-height: 37px;
        border-top: 3px solid #205081;
        border-bottom: 1px solid white;
      }
    }
    .el-main {
      padding-top: 0px;
      .row-bg {
        border-left: 1px solid #D7D7D7;
        border-right: 1px solid #D7D7D7;
        background-color: white;
        .financial-account {
          min-width: 200px;
          padding-top: 20px;
          padding-left: 40px;
        }
        .table-top {
          margin-top: 30px;
          margin-left: 40px;
          margin-right: 40px;
          background-color: #205081;
          height: 40px;
          line-height: 40px;
          color: white;
          padding-left: 20px;
        }
        .table-data-area {
          padding-left: 40px;
          padding-right: 40px;
        }
        .fund-notice {
          min-width: 300px;
          padding-left: 40px;
          padding-right: 40px;
          padding-top: 20px;
        }
        .left-export-button {
          padding-top: 10px;
          padding-left: 40px;
          float: left;
          padding-bottom: 10px;
        }
        .current-page-area {
          padding-top: 10px;
          padding-right: 40px;
          float: right;
        }
      }
    }
    .footer-row {
      border-bottom: 1px solid #d7d7d7;
    }
  }
</style>

<style lang='scss'>
.FinanOverview {
  .el-card__body {
    height: 190px;
    padding-left: 0px;
    padding-right: 0px;
    padding-top: 10px;
    .card-top {
      height: 30px;
      .title-area {
        float: left;
        padding-left: 20px;
        border-left: 5px solid #205081;
        font-size: 18px;
        font-weight:bold;
      }
      .detail-look {
        float: right;
        font-size: 15px;
      }
    }
    .card-main {
      padding-bottom: 20px;
      border-top: 1px dashed #D7D7D7;
      padding-left: 20px;
      .big-money {
        padding-top: 20px;
        span {
          font-size: 25px;
          color: #FCA941;
        }
      }
      .small-miney {
        padding-top: 20px;
        span {
          font-size: 13px;
        }
      }
    }
    .card-footer {
      text-align: center;
      .el-button {
        width: 110px;
        height: 40px;
      }
      .recharge {
        background-color: #FCA941;
        color: white;
      }
      .withdrawals {
        background-color: #90D404;
        color: white;
      }
      .purchase {
        background-color: #205081;
        color: white;
      }
    }
    .card-main-notice {
      padding: 20px;
      border-top: 1px dashed #D7D7D7;
      .switch {
        padding-top: 20px;
      }
      .money-value {
        padding-top: 30px;
        span {
          font-size: 25px;
          color: #FCA941;
          padding-left: 20px;
          padding-right: 20px;
        }
      }
    }
  }
}
</style>
