<template>
  <div class="AccountConfig">
    <el-container>
      <el-header style="height: 40px;">
        <div class="top-menu">
          <li @click="routerGo('/finance/FinanOverview')">财务总览</li>
          <li @click="routerGo('/finance/TransactRecord')">本金交易记录</li>
          <li @click="routerGo('/finance/AccountConfig')" class="is-active">佣金交易记录</li>
        </div>
      </el-header>
      <el-main>
        <el-row class="row-bg">
          <el-col :span="24">
            <div class="left-operation">
              时间过滤：<el-date-picker v-model="dateValue" type="datetimerange" size="small" class="databox"
                start-placeholder="开始日期" range-separator="-" end-placeholder="结束日期">
              </el-date-picker>
              <!-- 下拉选项 -->
              <el-select v-model="selectValue" placeholder="状态过滤" size="small" class="selectbox">
                <el-option v-for="item in options"
                  :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </div>
            <div class="right-operation">
              <el-autocomplete v-model="queryValue" :fetch-suggestions="querySearchAsync" size="small"
                placeholder="流水号查询" @select="handleSelect" suffix-icon="el-icon-search">
              </el-autocomplete>
            </div>
          </el-col>
        </el-row>
        <el-row class="row-bg">
          <div class="transactionType">
            <div>
              <p class="top1">
                <i>交易类型:</i>
                <span>
                  <el-button type="text" v-if="typeValue === 1" style="font-weight:bold;">全部</el-button>
                  <el-button type="text" v-if="typeValue != 1" @click="changeType (1)">全部</el-button>
                  <el-button type="text" v-if="typeValue === 2" style="font-weight:bold;">刷销量</el-button>
                  <el-button type="text" v-if="typeValue != 2" @click="changeType (2)">刷销量</el-button>
                  <el-button type="text" v-if="typeValue === 3" style="font-weight:bold;">刷流量</el-button>
                  <el-button type="text" v-if="typeValue != 3" @click="changeType (3)">刷流量</el-button>
                  <el-button type="text" v-if="typeValue === 4" style="font-weight:bold;">排名推广</el-button>
                  <el-button type="text" v-if="typeValue != 4" @click="changeType (4)">排名推广</el-button>
                  <el-button type="text" v-if="typeValue === 5" style="font-weight:bold;">测评套餐</el-button>
                  <el-button type="text" v-if="typeValue != 5" @click="changeType (5)">测评套餐</el-button>
                </span>
              </p>
              <p>
                <i>记录状态:</i>
                <span>
                  <el-button type="text" v-if="statusValue === 1" style="font-weight:bold;">全部</el-button>
                  <el-button type="text" v-if="statusValue != 1" @click="changeStatus (1)">全部</el-button>
                  <el-button type="text" v-if="statusValue === 2" style="font-weight:bold;">已完成</el-button>
                  <el-button type="text" v-if="statusValue != 2" @click="changeStatus (2)">已完成</el-button>
                  <el-button type="text" v-if="statusValue === 3" style="font-weight:bold;">未完成</el-button>
                  <el-button type="text" v-if="statusValue != 3" @click="changeStatus (3)">未完成</el-button>
                </span>
              </p>
            </div>

          </div>
        </el-row>
        <el-row class="row-bg">
          <div class="table-data-area">
            <el-table :data="tableData" size="small" header-row-class-name="table-title">
              <el-table-column prop="operatDate" label="流水号"></el-table-column>
              <el-table-column prop="operatDate" label="时间"></el-table-column>
              <el-table-column prop="username" label="类型"></el-table-column>
              <el-table-column prop="operatModular" label="交易账户"></el-table-column>
              <el-table-column prop="operatType" label="佣金余额变化"></el-table-column>
              <el-table-column prop="operatContent" label="佣金冻结变化"></el-table-column>
              <el-table-column prop="operatIp" label="交易类型"></el-table-column>
              <el-table-column prop="operatIp" label="任务编号"></el-table-column>
              <el-table-column prop="operatIp" label="状态"></el-table-column>
              <el-table-column prop="operatIp" label="说明"></el-table-column>
            </el-table>
          </div>
        </el-row>
        <el-row class="row-bg footer-row">
          <div class="flooter-area">
            <div class="flooter-left">
              <el-button size="small">导出表单</el-button>
            </div>
            <div class="flooter-right">
              <el-pagination
                class="right"
                background
                layout="prev, pager, next"
                :total="1000">
              </el-pagination>
            </div>

          </div>
        </el-row>
      </el-main>
    </el-container>

  </div>
</template>

<script>
export default {
  name: 'AccountConfig',
  data () {
    return {
      typeValue: 1,
      statusValue: '1',
      currentPage: 1,
      dateValue: '',
      selectValue: '',
      bindmobile: '',
      queryValue: '',
      options:[
        {label: '状态1', value: '1'},
        {label: '状态2', value: '2'},
        {label: '状态3', value: '3'}
      ],
      tableData: [

      ]
    }
  },
  methods: {
    routerGo (url) {
      this.$router.push({path: url})
    },
    querySearchAsync () {

    },
    handleSelect () {

    },
    handleSizeChange (value) {

    },
    handleCurrentChange (value) {

    },
    changeType (value) {
      this.typeValue = value
    },
    changeStatus (value) {
      this.statusValue = value
    }
  }
}
</script>

<style scoped lang='scss'>
  .AccountConfig {
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
      .row-bg{
        border-left: 1px solid #D7D7D7;
        border-right: 1px solid #D7D7D7;
        .el-col {
          padding-top: 20px;
        }
        padding-left: 40px;
        padding-right: 40px;
        background-color: white;
        .left-operation {
          float: left;
        }
        .right-operation {
          float: right;
        }
        .transactionType {
          padding-top: 20px;
          div{
            border: 1px solid #D7D7D7;
            padding-left: 20px;
            .top1 {
              border-bottom: 1px solid #D7D7D7;
            }
          }
          i {
            margin-right: 20px;
          }
          span {
            .el-button {
              color: black;
              font-weight: normal;
            }
          }
        }
        .table-data-area {
          padding-top: 20px;
        }
        .flooter-area {
          padding-top: 10px;
          .flooter-left {
            float: left;
            padding-bottom: 10px;
          }
          .flooter-right{
            float: right;
            padding-bottom: 10px;
          }
        }
      }
    }
    .footer-row {
      border-bottom: 1px solid #D7D7D7;
    }
 }
</style>
