<template>
  <div class="TransactRecord">
    <el-container>
      <el-header style="height: 40px;">
        <div class="top-menu">
          <li @click="routerGo('/finance/FinanOverview')" >财务总览</li>
          <li @click="routerGo('/finance/TransactRecord')" class="is-active">本金交易记录</li>
          <li @click="routerGo('/finance/AccountConfig')">佣金交易记录</li>
        </div>
      </el-header>
      <el-main>
        <el-row class="row-bg">
          <el-col :span="24">
            <div class="main-header">
              <div class="left-operation">
                <!-- 日期 -->
                <el-date-picker v-model="dateValue" type="datetimerange" size="small" class="databox"
                start-placeholder="开始日期" range-separator="-" end-placeholder="结束日期">
                </el-date-picker>
                <!-- 下拉选项 -->
                <el-select v-model="selectValue" placeholder="交易类型" size="small" class="selectbox">
                  <el-option v-for="item in options"
                    :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>

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
              <div class="right-operation">
              </div>
            </div>
          </el-col>
        </el-row>
        <!--  -->
        <el-row class="row-bg">
          <div class="table-data-area">
            <el-table :data="tableData" size="small" header-row-class-name="table-title">
              <el-table-column prop="operatDate" label="流水"></el-table-column>
              <el-table-column prop="operatDate" label="日期"></el-table-column>
              <el-table-column prop="username" label="类型名"></el-table-column>
              <el-table-column prop="operatModular" label="交易账户"></el-table-column>
              <el-table-column prop="operatType" label="金额变化"></el-table-column>
              <el-table-column prop="operatContent" label="冻结金额"></el-table-column>
              <el-table-column prop="operatIp" label="状态"></el-table-column>
              <el-table-column prop="operatIp" label="描述"></el-table-column>
              <el-table-column prop="operatIp" label="操作"></el-table-column>
            </el-table>
          </div>
        </el-row>
        <el-row class="row-bg footer-row">
          <el-col :span="24">
            <div class="left-export-button">
              <el-button size="small" >导出表单</el-button>
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
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'TransactRecord',
  data () {
    return {
      activeIndex: '2',
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
    querySearchAsync () {

    },
    handleSelect () {

    },
    handleSizeChange () {

    },
    handleCurrentChange () {

    },
    routerGo (url) {
      this.$router.push(url)
    }
  }
}
</script>

<style  lang='scss' scoped>
  .TransactRecord {
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
        .main-header {
          padding-top: 20px;
          padding-left: 40px;
          padding-right: 40px;
          .left-operation {
            .datebox {
              width: 230px;
            }
            .selectbox {
              width: 120px;
            }
            float: left;
          }
          .right-operation {
            float: right;
          }
        }
        .table-data-area {
          padding-top: 20px;
          padding-left: 40px;
          padding-right: 40px;
        }
        .left-export-button {
          float:left;
          padding-left: 40px;
          padding-top: 10px;
          padding-bottom: 10px;
        }
        .current-page-area {
          padding-right: 40px;
          padding-top: 10px;
          padding-bottom: 10px;
          float: right;
        }
      }
    }
    .footer-row {
      border-bottom: 1px solid #d7d7d7;
    }
  }
</style>
