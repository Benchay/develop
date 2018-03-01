<template>
  <div class="ManageLog">
    <el-container>
      <el-header style="height: 40px;">
        <div class="menu">
          日志管理
        </div>
      </el-header>
      <el-main>
        <el-row class="row-bg">
          <el-col :span="24">
            <div class="main-header">
              <div class="left-operation">
                <!-- 日期 -->
                <el-date-picker v-model="dateValue" type="datetimerange" size="small" class="databox"
                start-placeholder="开始日期" range-separator="-" end-placeholder="结束日期" @change="changeFilterDate">
                </el-date-picker>
                <!-- 下拉选项 -->
                <el-select @change="selectType" v-model="selectValue" placeholder="全部" size="small" class="selectbox">
                  <el-option v-for="item in options"
                    :key="item.id" :label="item.name" :value="item.id">
                  </el-option>
                </el-select>
                <el-input v-model="queryValue" style="width:200px;" size="small" placeholder="输入操作人"></el-input>
                <el-button size="small" type="primary" @click="queryByName">搜索</el-button>
              </div>
              <div class="right-operation">
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row class="row-bg">
          <div class="table-data-area">
            <el-table :data="tableData" size="small" header-row-class-name="table-title">
              <el-table-column prop="createTime" label="操作时间" sortable></el-table-column>
              <el-table-column prop="userId" label="用户名" sortable></el-table-column>
              <el-table-column prop="operatModular" label="操作模块" sortable></el-table-column>
              <el-table-column prop="type" label="操作类型" sortable></el-table-column>
              <el-table-column prop="content" label="操作内容" sortable></el-table-column>
            </el-table>
          </div>
        </el-row>
        <el-row class="row-bg footer-row">
          <el-col :span="24">
            <div class="button-area">
              <el-button size="small">导出表单</el-button>
            </div>
            <div class="current-page-area">
              <el-pagination
                @current-change="handleCurrentChange"
                class="right"
                background
                layout="prev, pager, next"
                :total="recordTotal">
              </el-pagination>
            </div>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<script>
// import {callApiToken, changeDateFormat} from '@/data/callApi'
export default {
  name: 'ManageLog',
  data () {
    return {
      queryValue: '',
      currentPage: 1,
      recordTotal: 0,
      dateValue: '',
      options: [
        {name: '全部', id: ''},
        {name: '登录平台', id: '1'},
        {name: '角色管理', id: '2'},
        {name: '员工管理', id: '3'},
        {name: '基本资料', id: '4'},
        {name: '账户总览', id: '5'},
        {name: '财务交易', id: '6'},
        {name: '账户设置', id: '7'}
      ],
      selectValue: '',

      tableData: [
        {id:'', createTime: '', userId: 'XXX', operatModular: '登录平台', type: '登录', content: '登录', operatIp: '162.168.0.1'}
      ]
    }
  },
  methods: {
    changeFilterDate () {
      var startTimes = ''
      var endTimes = ''
      if(this.dateValue.length > 0) {
        startTimes = changeDateFormat(this.dateValue[0].getTime())
        endTimes = changeDateFormat(this.dateValue[1].getTime())
      }
      callApiToken('/message/query_users_log', {startTime: startTimes, endTime: endTimes, operatorId: this.queryValue, type: this.selectValue, page:1, pageSize:10}, this.updateTableData)

    },
    selectType () {
      var startTime = ''
      var endTime = ''
      if(this.dateValue.length > 0) {
        startTime = changeDateFormat(this.dateValue[0].getTime())
        endTime = changeDateFormat(this.dateValue[1].getTime())
      }
      callApiToken('/message/query_users_log', {startTime: startTime, endTime: endTime, operatorId: this.queryValue, type: this.selectValue, page:1, pageSize:10}, this.updateTableData)
    },
    queryByName () {
      callApiToken('/message/query_users_log', {operatorId: this.queryValue, type: this.selectValue, page: 1, pageSize:10}, this.updateTableData)
    },
    handleSizeChange () {

    },
    handleCurrentChange (value) {
      var startTime = ''
      var endTime = ''
      if(this.dateValue.length > 0) {
        startTime = changeDateFormat(this.dateValue[0].getTime())
        endTime = changeDateFormat(this.dateValue[1].getTime())
      }
      callApiToken('/message/query_users_log', {startTime: startTime, endTime: endTime, operatorId: this.queryValue, type: this.selectValue, page: value, pageSize:10}, this.updateTableData)
    },
    updateTableData (res) {
      if (res.status>=200 && res.status <300) {
        if (res.data.success) {
          this.tableData = res.data.content.records
          for (var i=0; i<this.tableData.length; i++) {
            this.tableData[i].createTime = changeDateFormat(this.tableData[i].createTime)
          }
          this.recordTotal = res.data.content.total
        }
      }
    }
  },
  created: function () {
    let me = this
    callApiToken('/message/query_users_log', {page:1, pageSize:10}, this.updateTableData)
    callApiToken('/auth/query_auths_by_application', {applicationId: 1}, function (res) {
      me.options = res.data.content
      console.log(res.data.content)
    })
  }
}
</script>

<style lang='scss' scoped>
  .ManageLog {
    padding-top: 20px;
    padding-left: 20px;
    padding-right: 20px;
    .menu {
      height: 37px;
      width: 110px;
      background-color: white;
      border-top: 3px solid #205081;
      text-align: center;
      float: left;
      line-height: 37px;
    }
    .el-main {
      padding-top: 0px;
      .row-bg {
        border-left: 1px solid #D7D7D7;
        border-right: 1px solid #D7D7D7;
        padding-left: 40px;
        padding-right: 40px;
        background-color: white;
        .main-header {
          padding-top: 20px;
          // padding-left: 40px;
          padding-right: 40px;
          .left-operation {
            .datebox {
              width: 230px;
            }
            .selectbox {
              width: 120px;
            }
            // float: left;
          }
          // .right-operation {
          //   float: right;
          // }
        }
        .button-area {
          float: left;
          padding-top: 10px;
          padding-bottom: 10px;
        }
        .table-data-area {
          padding-top: 20px;
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

<style lang="scss">
.el-table {
  .el-table__header {
    tr {
      th {
        background-color: #f5f7fa;
        font-size:14px;
      }
    }
  }
}
</style>
