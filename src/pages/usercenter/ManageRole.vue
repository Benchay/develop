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
                <el-autocomplete v-model="queryValue" :fetch-suggestions="querySearchAsync" size="small" suffix-icon="el-icon-search"
                  placeholder="请输入内容" @select="handleSelect"></el-autocomplete>
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
              <el-pagination
                class="right"
                background
                layout="prev, pager, next"
                :total="1000">
              </el-pagination>
            </div>
          </el-col>
        </el-row>

        <!--  -->
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

                  <el-tree :data="childAuthItem" show-checkbox
                    node-key="id"
                    :default-checked-keys="[5]"
                    :props="itemParamName">
                  </el-tree>
                </el-tab-pane>
              </el-tabs>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="closeDialog">取 消</el-button>
            <el-button type="primary" @click="commitAddRole">确 定</el-button>
          </div>
        </el-dialog>
        <el-dialog title="删除角色" :visible.sync="removeRole" width="30%">
          <p>是否删除:</p>
          <h4>角色：{{form.roleName}}</h4>
          <span>描述：{{form.roleDescribe}}</span>
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
      },
      form: {
        id: 0,
        name: '',
    		applicationId: 1,
    		auths:[]
      },
      authItem: [],
      allAuthItem: [],
      childAuthItem: [],

      checked: [],

      addFlag: false,
      removeRole: false,
      activeIndex: '/managerole',
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
        {Id: '1', name: '管理员', content: '拥有最大权限'}
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
    handleAvatarSuccess () {

    },
    routerGo (url) {
      this.$router.push({path: url})
    },
    changeMenuItem (val) {
      console.log(val)
      this.childAuthItem = []
      for (var i = 0; i < this.allAuthItem.length; i++) {
        if (this.allAuthItem[i].parentId == val.name) {
          this.childAuthItem.push(this.allAuthItem[i])
        }
        // console.log(this.allAuthItem[i].parentId == val.name)
      }
      console.log(this.childAuthItem)
      // console.log(val.name)
    },
    // 开启添加修改角色窗口
    openAddRoleDialog (rowValue) {
      if (rowValue) {
        this.form.id = rowValue.id
        this.form.name = rowValue.name
        this.form.content = rowValue.content
        // callApiToken('')
      }
      this.addFlag = true;
    },
    commitAddRole () {
      var temp = {
        name: this.form.name,
        content: this.form.content
      }
      if (this.form.id != 0) {
        temp.id = this.form.id
      }
      // callApiToken('/role/save_role',temp, function (res) {

      // })
      this.addFlag = false
    },
    deleteDialog (rowValue) {
      this.form.Id = rowValue.Id
      this.form.roleName = rowValue.roleName
      this.form.roleDescribe = rowValue.roleDescribe
      this.removeRole = true
    },
    commitDeleteRole () {
      var temp = []
      for (var i = 0; i < this.tableData.length; i++) {
        if (this.tableData[i].Id === this.form.Id)
          continue
        temp.push(this.tableData[i])
      }
      this.tableData = temp
      this.removeRole = false
    },
    closeDialog () {
      this.form.Id = ''
      this.form.roleName = ''
      this.form.roleDescribe = ''
      this.addFlag = false
      this.removeRole = false
    },
    updateTableData(res){
      console.log(res)
      if (res.status >= 200 && res.status < 300) {
        if (res.data.success) {
          this.tableData = res.data.content.records
        }
      }
    }
  },
  created: function () {
    let me = this
    // 获取权限列表
    callApiToken('/auth/query_auths_by_application', {applicationId: 1}, function (res) {
      console.log(res)
      if (res.data.success) {
        me.allAuthItem = res.data.content
        for (var i = 0; i < res.data.content.length; i++) {
          if (res.data.content[i].parentId === null) {
            me.authItem.push(res.data.content[i])
          }
        }
      }
    })

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
