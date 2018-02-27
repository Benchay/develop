<template>
  <div class="ManageMessage">
    <el-container>
      <el-header style="height: 40px;">
        <div class="menu">
          <span>消息管理</span>
        </div>
      </el-header>
      <el-main>
        <el-row class="row-bg">
          <el-col :span="24">
            <div class="button-area">
              <el-button  size="small" @click="deleteMessage">删除</el-button>
              <el-button  size="small" @click="setRead">标记已读</el-button>
            </div>
          </el-col>
        </el-row>
        <el-row class="row-bg">
          <el-col :span="24">
            <div class="radio-area">
              <el-radio-group v-model="radioValue" size="small" @change="changeQuery">
                <el-radio-button label="全部"></el-radio-button>
                <el-radio-button label="已读"></el-radio-button>
                <el-radio-button label="未读"></el-radio-button>
              </el-radio-group>
            </div>
          </el-col>
        </el-row>
        <!--  -->
        <el-row class="row-bg">
          <div class="table-data-area">
            <el-table :data="tableData" header-row-class-name="table-title"
             @selection-change="handleSelectionChange">
              <el-table-column type="selection" width="55"></el-table-column>
              <el-table-column prop="title" label="标题"></el-table-column>
              <el-table-column prop="type" label="状态"></el-table-column>
              <el-table-column prop="content" label="内容"></el-table-column>
              <el-table-column prop="gmtCreate" label="时间"></el-table-column>
            </el-table>
          </div>
        </el-row>
        <el-row class="row-bg footer-row">
          <el-col :span="24">
            <div class="button-area">
              <el-button size="small">导出表单</el-button>
            </div>
            <div class="current-page-area">
              <el-pagination class="right" background layout="prev, pager, next" :total="1000">
              </el-pagination>
            </div>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<script>
// import {callApiToken} from '@/data/callApi'
export default {
  name: 'ManageLog',
  data () {
    return {

      radioValue: '全部',
      currentPage: 1,
      tableData: [
        {messageTitle: '超人大战变形金刚', messageType: '未读', messageContent: '《《《《《《《《《', operatDate: '2018-01-01 00:00:00'}
      ]
    }
  },
  methods: {
    changeQuery () {
      console.log(this.radioValue)
    },
    handleSelectionChange (value) {
      console.log(value)
    },
    handleCurrentChange (value) {
      console.log(value)
    },
    deleteMessage () {

    },
    setRead () {

    },
    updateTableData (res) {
      // console.log(0)
      // console.log(res.data)
      let me = this
      if (res.status >= 200 && res.status < 300) {
        // console.log(res.data)
        if (res.data.success) {
          console.log(res.data.content.records)
          me.tableData = res.data.content.records
        }
      }
    }
  },
  created: function () {
    // callApiToken('/message/query_user_message', {page: 1, pageSize:10}, this.updateTableData)
  }
}
</script>

<style scoped lang='scss'>
  .ManageMessage {
    padding-top: 20px;
    padding-left: 20px;
    padding-right: 20px;
    .menu {
      height: 37px;
      width: 110px;
      background-color: white;
      border-top: 3px solid #205081;
      border-left: 1px solid #d0d0d0;
      border-right: 1px solid #d0d0d0;
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
        padding-right:　40px;
        background-color: white;
        .button-area {
          padding-left: 40px;
        }


        .radio-area {
          padding-top: 15px;
          padding-left: 40px;
        }
        .button-area {
          float: left;
          padding-top: 10px;
          padding-bottom: 10px;
          .el-button {
            background-color: #205081;
            color: white;
          }
        }
        .current-page-area {
          padding-top: 10px;
          padding-right: 40px;
          float: right;
          padding-bottom: 10px;
        }
      }
    }
    .footer-row {
      border-bottom: 1px solid #d7d7d7;
    }
  }
</style>
<style lang='scss'>
.el-radio-button__orig-radio:checked+.el-radio-button__inner {
  background: #205081;
  box-shadow: -1px 0 0 0 #205081;
}
</style>
