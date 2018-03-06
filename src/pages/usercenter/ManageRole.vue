<template>
  <div class="ManageRole">
    <el-container>
      <el-header style="height: 40px;">
        <div class="top-menu">
          <li @click="routerGo('/user/BasicInfo')">基本信息</li>
          <li @click="routerGo('/user/ManageStaff')">员工管理</li>
          <li @click="routerGo('/user/ManageRole')" class="is-active">角色管理</li>
        </div>
      </el-header>
      <el-main>
        <el-row class="row-bg">
          <el-col :span="24">
            <div class="main-header">
              <div class="left-operation">
                <el-button type="small" style="background-color: #67C238;color: white;" @click="openAddRoleDialog()">+添加角色</el-button>
              </div>
              <div class="right-operation">
                <!-- <el-autocomplete v-model="queryValue" :fetch-suggestions="querySearchAsync" size="small" suffix-icon="el-icon-search"
                  placeholder="请输入内容" @select="handleSelect"></el-autocomplete> -->
                  <el-input></el-input>
              </div>
            </div>
          </el-col>
        </el-row>
        <!--  -->
        <el-row class="row-bg">
          <div class="table-data-area">
            <el-table :data="tableData" size="small" header-row-class-name="table-title">
              <el-table-column prop="name" label="角色名称"></el-table-column>
              <el-table-column prop="content" label="角色描述"></el-table-column>
              <el-table-column label="操作" width="170px">
                <template slot-scope="scope">
                  <el-button size="small" @click="openAddRoleDialog(scope.row)">修改</el-button>
                  <el-button style="background-color: #FCA941; color: white;" size="small" @click="deleteDialog(scope.row)">删除</el-button>
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
              <el-pagination class="right" background layout="prev, pager, next" :current-page="currentPage" :total="total"
              @current-change="handleCurrentChange">
              </el-pagination>
            </div>
          </el-col>
        </el-row>

        <!-- 编辑角色窗口 -->
        <el-dialog title="编辑角色" :visible.sync="addFlag" width="40%" :before-close="closeDialog">
          <el-form :model="form">
            <el-form-item label="角色名称" >
              <el-input v-model="form.name" style="width: 250px;"></el-input>
            </el-form-item>
            <el-form-item label="角色描述" >
              <el-input v-model="form.content" style="width: 250px;"></el-input>
            </el-form-item>
            <el-form-item >
              <!-- 授权 -->
              <el-tabs type="border-card" @tab-click="changeMenuItem">
                <el-tab-pane v-for="item in authItem" :label="item.name" :name="item.id + ''">
                    <el-checkbox-group v-model="checkedItem" @change="handleCheckedCitiesChange">
                      <el-checkbox v-for="childItem in childAuthItem" :label="childItem.id" :key="childItem.id">{{childItem.name}}</el-checkbox>
                    </el-checkbox-group>
                </el-tab-pane>
              </el-tabs>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="closeDialog">取 消</el-button>
            <el-button type="primary" @click="commitAddRole">确 定</el-button>
          </div>
        </el-dialog>

        <!-- 删除弹窗 -->
        <el-dialog title="删除角色" :visible.sync="removeRole" width="30%">
          <p>是否删除:</p>
          <h4>角色：{{removeForm.name}}</h4>
          <span>描述：{{removeForm.content}}</span>
          <div slot="footer" class="dialog-footer">
            <el-button @click="closeDialog">取 消</el-button>
            <el-button type="primary" @click="commitDeleteRole">确 定</el-button>
          </div>
        </el-dialog>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import {callApiToken} from '@/data/callApi'
export default {
  name: 'ManageRole',
  data () {
    return {
      itemParamName: {
        label: 'name',
        children: 'children'
      },
      form: {
        name: '',
        content: '',
    		applicationId: 1,
    		auths:[]
      },
      removeForm: {
        id: '',
        name: '',
        content: ''
      },

      authItem: [],
      allAuthItem: [],
      checkedItem: [10006, 10001],

      childAuthItem: [{name: '首页', id: 10001}, {name: '啦啦啦', id: 10002}, {name: '洪建成', id: 10003}],

      checked: [],

      addFlag: false,
      removeRole: false,
      activeIndex: '/managerole',
      queryValue: '',
      currentPage: 1,
      dateValue: '',
      options: [
        {label: '登录平台', value: '1'},
        {label: '角色管理', value: '2'}
      ],
      selectValue: '',
      total: 0,
      currentPage: 0,
      tableData: [
        {id: '1', name: '管理员', content: '拥有最大权限'}
      ]
    }
  },
  methods: {
    // 搜索
    querySearchAsync () {

    },
    handleSelect () {

    },

    // 页面跳转
    handleCurrentChange (value) {
      callApiToken('/role/query_role', {applicationId: 1, name: this.queryValue, page: value, pageSize: 10}, this.updateTableData)
    },
    handleCheckedCitiesChange(value) {
        console.log(value)
    },
    routerGo (url) {
      this.$router.push({path: url})
    },

    // 修改子集item
    changeMenuItem (val) {
      this.childAuthItem = []
      for (var i = 0; i < this.allAuthItem.length; i++) {
        if (this.allAuthItem[i].parentId == val.name) {
          this.childAuthItem.push(this.allAuthItem[i])
        }
      }
      if (this.childAuthItem.length < 1) {
        for (var i = 0; i < this.allAuthItem.length; i++) {
          if (this.allAuthItem[i].id == val.name) {
            this.allAuthItem[i]
            this.childAuthItem.push(this.allAuthItem[i])
          }
        }
      }
    },

    // 开启添加修改角色窗口
    openAddRoleDialog (rowValue) {
      this.addFlag = true
      let me = this
      let temp = this.allAuthItem
      if (rowValue) {
        callApiToken('/role/get_role_info', {roleId: rowValue.id} ,function (res) {
          if (res.status >= 200 && res.status < 300) {
            if (res.data.success) {
              // 成功，并开始循环
              // me.checkedItem = res.data.content.auths
              me.checkedItem = []
              for (var i = 0; i < res.data.content.auths.length; i++) {
                me.checkedItem.push(res.data.content.auths[i].authId)
              }
            }
          }
        })
      } else {
        this.form.id = ''
      }
    },

    // 提交添加表单
    commitAddRole () {
      let me =this
      for(var i=0; i< this.allAuthItem.length; i++) {
        if (this.allAuthItem[i].checked === true) {
          this.form.auths.push({authId: this.allAuthItem[i].id, editable: true, parentId: this.allAuthItem[i].parentId})
        }
      }
      // 从小类权限获取大类权限
      var authLength = this.form.auths.length
      for (var i = 0; i < this.authItem.length; i++) {
        for (var j = 0; j < authLength; j++) {
          if (this.authItem[i].id == this.form.auths[j].parentId) {
            this.form.auths.push({authId: this.authItem[i].id, editable: true})
            break;
          }
        }
      }
      // 提交到服务器
      callApiToken('/role/save_role', this.form, function (res) {
        // 重新刷新
        callApiToken('/role/query_role', {applicationId: 1, name: me.queryValue, page: me.currentPage, pageSize: 10}, me.updateTableData)
      })
      this.addFlag = false
    },

    // 打开删除警告窗口
    deleteDialog (rowValue) {
      this.removeForm.id = rowValue.id
      this.removeForm.name = rowValue.name
      this.removeForm.content = rowValue.content
      this.removeRole = true
    },

    // 提交删除方法
    commitDeleteRole () {
      let me = this
      callApiToken('/role/delete_role', {roleIds: [this.removeForm.id]}, function (res) {
        console.log(res)
        if (res.status >= 200 && res.status < 300) {
          if (res.data.success) {
            callApiToken('/role/query_role', {applicationId: 1, name: me.queryValue, page: 1, pageSize: 10}, me.updateTableData)
          }
        }
      })
    },

    // 关闭所有窗口
    closeDialog () {
      this.form.id = ''
      this.form.name = ''
      this.form.content = ''
      this.addFlag = false
      this.removeRole = false
      this.checkedItem = []
    },

    // 修改表格及分页信息
    updateTableData (res) {
      console.log(res.data.content)
      if (res.status >= 200 && res.status < 300) {
        if (res.data.success) {
          this.tableData = res.data.content.records
          this.total = res.data.content.total
          this.currentPage = res.data.content.page
          this.closeDialog()
        }
      }
    }
  },
  created: function () {
    let me = this
    // 获取权限列表
    callApiToken('/auth/query_auths_by_application', {applicationId: 1}, function (res) {
      if (res.data.success) {
        me.allAuthItem = res.data.content
        for (var i = 0; i < res.data.content.length; i++) {
          if (res.data.content[i].parentId === null) {
            me.authItem.push(res.data.content[i])
          }
        }
      }
    })

    // 获取角色列表
      callApiToken('/role/query_role', {applicationId:1, page:1, pageSize:10}, this.updateTableData)
  }
}
</script>

<style scoped lang='scss'>
  .ManageRole {
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
          padding-left: 40px;
          padding-right: 40px;
          padding-top: 20px;
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
    }
    .footer-row {
      border-bottom: 1px solid #d7d7d7;
    }
  }
</style>
