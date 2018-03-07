<template>
  <div class="ManageStaff">
    <el-container>
      <el-header style="height: 40px;">
        <div class="top-menu">
          <li @click="routerGo('/user/BasicInfo')">基本信息</li>
          <li @click="routerGo('/user/ManageStaff')" class="is-active">员工管理</li>
          <li @click="routerGo('/user/ManageRole')" >角色管理</li>
        </div>
      </el-header>
      <el-main>
        <el-row class="row-bg">
          <el-col :span="24">
            <div class="main-header">
              <div class="left-operation">
                <!-- 下拉选项 -->
                <el-select v-model="selectStatusValue" placeholder="全部状态" size="small" class="selectbox" @change="selectStatus">
                  <el-option v-for="item in optionsStatus"
                    :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>

                <el-select v-model="selectSoleValue" placeholder="全部角色" size="small" class="selectbox">
                  <el-option v-for="item in roleOptions"
                    :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
                <!-- 名称过滤 -->
                <el-input v-model="queryNameValue" @change="querySearchName" size="small"
                  placeholder="姓名" suffix-icon="el-icon-search" style="width: 200px;"></el-input>

                <el-input v-model="queryMobileValue" @change="querySearchMobile" size="small"
                  placeholder="手机号" suffix-icon="el-icon-search" style="width: 200px;"></el-input>
              </div>
              <div class="right-operation">
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row class="row-bg">
          <el-col :span="24">
            <div class="button-box">
              <el-button size="small" @click="addStaffDialog()" type="primary">添加成员</el-button>
              <el-button size="small" @click="changeAbleToTrue" type="primary">启用</el-button>
              <el-button size="small"@click="changeAbleToFalse" type="primary">禁用</el-button>
            </div>
          </el-col>
        </el-row>
        <!-- 数据表格 -->
        <el-row  class="row-bg">
          <div class="table-data-area">
            <el-table :data="tableData" size="small" header-row-class-name="table-title"
            @selection-change="handleSelectionChange">
             <el-table-column type="selection" width="55"></el-table-column>
              <el-table-column prop="username" label="用户名"></el-table-column>
              <el-table-column prop="name" label="姓名"></el-table-column>
              <el-table-column prop="mobile" label="手机号"></el-table-column>
              <el-table-column prop="roleNames" label="角色"></el-table-column>
              <el-table-column prop="registerTime" label="添加时间"></el-table-column>
              <!-- 状态显示 -->
              <el-table-column label="状态">
                <template slot-scope="scope">
                  <span v-if="scope.row.able == true">启用</span>
                  <span v-else>禁用</span>
                </template>
              </el-table-column>
              <!-- 操作按钮显示 -->
              <el-table-column label="操作" width="250px">
                <template slot-scope="scope" >
                  <el-button size="mini" @click="addStaffDialog(scope.row)">编辑</el-button>
                  <!-- 启用禁用按钮 -->
                  <el-button size="mini" @click="enableStaff(scope.row)">
                    <span v-if="scope.row.able == true">禁用</span>
                    <span v-else>启用</span>
                  </el-button>

                  <el-button type="danger" size="mini" @click="deleteStaff(scope.row)">删除</el-button>
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
                background :current-page="currentPage"
                @current-change="handleCurrentChange"
                layout="prev, pager, next"
                :total="total">
              </el-pagination>
            </div>
          </el-col>
        </el-row>

        <!-- 编辑窗口 -->
        <el-dialog title="编辑" :visible.sync="addStaff" :before-close="closeDiolog">
          <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
            <el-tab-pane  label="用户信息" name="first">
              <el-form :model="form">
                <el-form-item label="手机号"  >
                  <el-input v-model="form.mobile" auto-complete="off" :disabled="updateStaff"></el-input>
                </el-form-item>
                <el-form-item label="姓　名" >
                  <el-input v-model="form.name" auto-complete="off" :disabled="updateStaff"></el-input>
                </el-form-item>
                <el-form-item v-if="updateStaff === false" label="密　码" >
                  <el-input type="password" v-model="form.password" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="角色选择" >
                  <el-checkbox-group v-model="checkedItem">
                   <el-checkbox v-for="role in roleItem" :label="role.id" :key="role.id">{{role.name}}</el-checkbox>
                 </el-checkbox-group>
                </el-form-item>
              </el-form>
            </el-tab-pane>
            <el-tab-pane v-if="updateStaff === false" label="已注册用户" name="second">
              <el-form :model="form">
                <span>输入手机号码：</span>
                <el-input v-model="mobileQuery" placeholder="请输入内容" style="width: 300px;"></el-input>
                <el-button>搜索</el-button>
                <p>{{mobileQuery}}</p>
                <el-form-item label="选择角色：">
                  <el-checkbox-group v-model="form.type">
                   <el-checkbox label="系统管理员" name="role"></el-checkbox>
                 </el-checkbox-group>
                </el-form-item>
              </el-form>
            </el-tab-pane>
          </el-tabs>
          <div slot="footer" class="dialog-footer">
            <el-button @click="closeDiolog">取 消</el-button>
            <el-button type="primary" @click="commitUpdateSoff">确 定</el-button>
          </div>
        </el-dialog>



        <el-dialog title="警告" :visible.sync="removeStaff">
          <p>是否确定要删除一下员工</p>
          <p>姓名：{{deleteStaffValue.name}}</p>
          <p>电话：{{deleteStaffValue.mobile}}</p>
          <div slot="footer" class="dialog-footer">
            <el-button @click="closeDiolog">取 消</el-button>
            <el-button type="primary" @click="commitDeleteStaff">确 定</el-button>
          </div>
        </el-dialog>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import {callApiToken, changeDateFormat} from '@/data/callApi'
export default {
  name: 'ManageStaff',
  data () {
    return {
      activeName: 'first',
      status: '启用',

      form: {
        username: '',
        name: '',
        mobile: '',
        password: '',
        roleIds: []
      },
      checkedItem: [],
      oldRoleIds: [],
      roleItem: [],

      selectedTable: [],
      deleteStaffValue: {},

      mobileQuery: '',
      activeIndex: '/managestaff',

      selectSoleValue: '',
      selectStatusValue: '',

      queryNameValue: '',
      queryMobileValue: '',

      removeStaff: false,
      addStaff: false,
      updateStaff: false,

      currentPage: 1,
      total: 0,

      dateValue: '',
      optionsStatus: [
        {label: '全部状态', value: null},
        {label: '禁用', value: false},
        {label: '启用', value: true}
      ],
      roleOptions: [
        {label: '全部', value: '0'}
      ],
      selectValue: '',
      tableData: [
        {Id: '1', userName: 'Shadow', reallyName: 'XXX', mobilePhone: '192...123123', roleName: '管理员', createTime: '2018-01-01 00:00:00', status: '启用'},
        {Id: '2', userName: 'Shadow', reallyName: 'YYY', mobilePhone: '192...123123', roleName: '管理员', createTime: '2018-01-01 00:00:00', status: '禁用'}
      ]
    }
  },
  methods: {
    // 用户名过滤
    querySearchName () {
      callApiToken('/user/load_user_infos', {able: this.selectStatusValue, mobile: this.queryMobileValue, name: this.queryNameValue, applicationId: 1, page: 1, pageSize: 10},this.updateTableData)
    },
    // 电话号码过滤
    querySearchMobile () {
      console.log(this.queryMobileValue)
      callApiToken('/user/load_user_infos', {able: this.selectStatusValue, mobile: this.queryMobileValue, name: this.queryNameValue, applicationId: 1, page: 1, pageSize: 10}, this.updateTableData)
    },
    // 状态过滤
    selectStatus () {
      callApiToken('/user/load_user_infos', {able: this.selectStatusValue, mobile: this.queryMobileValue, name: this.queryNameValue, applicationId: 1, page: 1, pageSize: 10},this.updateTableData)
    },
    // 分页查询
    handleCurrentChange (value) {
      console.log(value)
      callApiToken('/user/load_user_infos', {able: this.selectStatusValue, mobile: this.queryMobileValue, name: this.queryNameValue, applicationId: 1, page: value, pageSize: 10}, this.updateTableData)
    },
    handleAvatarSuccess () {

    },
    // 批量设为禁用
    changeAbleToTrue () {
      var temp = []
      for (var i = 0; i < this.selectedTable.length; i++) {
        temp.push(this.selectedTable[i].id)
      }
      console.log(temp)
      callApiToken('')
    },
    // 批量设为启用
    changeAbleToFalse () {
      var temp = []
      for (var i = 0; i < this.selectedTable.length; i++) {
        temp.push(this.selectedTable[i].id)
      }

    },
    // 修改选中选项
    handleSelectionChange (value) {
      this.selectedTable = value
    },
    handleClick () {

    },
    routerGo (url) {
      this.$router.push({path: url})
    },
    // 打开添加窗口
    addStaffDialog (rowValue) {
      let me = this
      if (rowValue) {
        // 修改处理
        me.checkedItem = []
        me.oldRoleIds = []
        this.form.id = rowValue.id
        this.form.username = rowValue.username
        this.form.mobile = rowValue.mobile
        this.form.name = rowValue.name
        this.updateStaff = true
        callApiToken('/role/get_user_roles', {userId: rowValue.id}, function (res) {
          console.log(res)
          if (res.status >= 200 && res.status < 300) {
            if (res.data.success) {
              for (var i = 0; i < res.data.content.length; i++) {
                me.checkedItem.push(res.data.content[i].roleId)
                me.oldRoleIds.push(res.data.content[i].roleId)
              }
            }
          }
        })
      } else {
        // 添加
        this.updateStaff = false
      }
      this.activeName='first'
      this.addStaff = true
    },

    // 提交修改或添加窗口
    commitUpdateSoff () {
      this.form.username = this.form.mobile
      let me = this
      for (var i = 0; i < this.checkedItem.length; i++) {
        this.form.roleIds.push(this.checkedItem[i])
      }
      if (this.updateStaff) {
        console.log(this.form.id)
        callApiToken('/role/save_user_role', {userId: this.form.id, oldRoleIds: me.oldRoleIds, newRoleIds: me.checkedItem} ,function (res) {
          if (res.status >= 200 && res.status < 300) {
            if (res.data.success) {
              me.$message({message: '保存成功', type: 'success'})
              me.closeDiolog()
              return
            }
          }
          console.log(res)
        })
      } else {
        callApiToken('/user/add_user', this.form, function (res) {
          if (res.status >= 200 && res.status <300) {
            if (res.data.success) {
              callApiToken('/user/load_user_infos',{page: 1, pageSize: 10}, me.updateTableData)
              me.$message({message: '添加成功', type: 'success'})
              me.closeDiolog()
              return
            }
          }
          console.log(res)
          me.closeDiolog()
        })
      }
    },

    // 修改用户状态
    enableStaff (row) {
      let me = this
      console.log(row.id)
      if (row.able) {
        callApiToken('/user/lock_user', {userId: row.id}, function (res) {
          if(res.status >= 200 && res.status < 300) {
            if (res.data.success) {
              me.$message({message: row.name + ':'+ row.mobile + ' ' +'状态禁用成功', type: 'success'})
              row.able = !row.able
              return
            }
            me.$message.error(res.data.errmsg)
            return
          }
          me.$message.error(res.status)
          console.log(res)
        })
      } else {
        callApiToken('/user/unlock_user', {userId: row.id}, function (res) {
          if(res.status >= 200 && res.status < 300) {
            if (res.data.success) {
              me.$message({message: row.name + ':'+ row.mobile + ' ' +'状态启用成功', type: 'success'})
              row.able = !row.able
              return
            }
            me.$message.error(res.data.errmsg)
            return
          }
          me.$message.error(res.status)
          console.log(res)
        })
      }
    },

    // 打开删除员工警告窗口
    deleteStaff (row) {
      this.deleteStaffValue = row
      this.removeStaff = true
    },

    // 提交删除员工
    commitDeleteStaff () {
        let me = this
      callApiToken('/user/delete_user', {userIds: [this.deleteStaffValue.id]}, function (res) {
        if (res.status >= 200 && res.status < 300) {
          if (res.data.success) {
            me.$message({message: '删除成功', type: 'success'})
            callApiToken('/user/load_user_infos', {able: this.selectStatusValue, mobile: me.queryMobileValue, name: me.queryNameValue, applicationId: 1, page: 1, pageSize: 10}, me.updateTableData)
            return
          }
        }
        console.log(res)
      })
      this.removeStaff = false
    },

    // 关闭窗口
    closeDiolog () {
      this.removeStaff = false
      this.addStaff = false
      this.form.id = ''
      this.form.username = ''
      this.form.name = '',
      this.form.mobile = '',
      this.form.password = '',
      this.form.roleIds = []
      this.checkedItem = []
    },

    // 修改表格数据
    updateTableData (res) {
      let me = this
      console.log(res)
      if (res.status >= 200 && res.status < 300) {
        if (res.data.success) {
          me.tableData = res.data.content.records
          me.total = res.data.content.total
          me.currentPage = res.data.content.page
          for (var i = 0; i < me.tableData.length; i++) {
            me.tableData[i].roleNames = JSON.parse(me.tableData[i].roleNames).toString()
            me.tableData[i].registerTime = changeDateFormat(me.tableData[i].registerTime)
          }
        }
      }
    }
  },
// 初始化
  created: function () {
    let me = this
    callApiToken('/user/load_user_infos',{applicationId: 1, page: 1, pageSize: 10}, this.updateTableData)

    callApiToken('/role/query_role', {applicationId: 1, page:1, pageSize: 100}, function (res) {
      me.roleItem = res.data.content.records
    })
  }
}
</script>

<style scoped lang='scss'>
  .ManageStaff {
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
        list-style-type:none;
      }
      .is-active {
        height: 36px;
        line-height: 43px;
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
        }
        .table-data-area {
          padding-top: 20px;
          padding-right: 40px;
          padding-left: 40px;
        }
        .button-box {
          padding-top: 20px;
          padding-left:40px;
        }
        .left-export-button {
          padding-top: 20px;
          padding-left: 40px;
          float: left;
          padding-bottom: 10px;
        }
        .current-page-area {
          padding-top: 20px;
          padding-right: 40px;
          float: right;
        }
      }
      .el-form {
        padding-top: 20px;
        padding-left: 20px;
        .el-form-item {
          .el-input {
            width: 200px;
          }
        }
      }
    }
    .footer-row {
      border-bottom: 1px solid #d7d7d7;
    }
  }
</style>
