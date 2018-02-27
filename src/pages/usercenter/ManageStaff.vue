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
                <el-select v-model="selectTypeValue" placeholder="不限状态" size="small" class="selectbox">
                  <el-option v-for="item in optionsStatus"
                    :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>

                <el-select v-model="selectSoleValue" placeholder="全部角色" size="small" class="selectbox">
                  <el-option v-for="item in roleOptions"
                    :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>

                <el-autocomplete v-model="queryNameValue" :fetch-suggestions="querySearchAsync" size="small"
                  placeholder="姓名" @select="handleSelect" suffix-icon="el-icon-search"></el-autocomplete>

                <el-autocomplete v-model="queryPhoneValue" :fetch-suggestions="querySearchAsync" size="small"
                  placeholder="手机号" @select="handleSelect" suffix-icon="el-icon-search"></el-autocomplete>
              </div>
              <div class="right-operation">
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row class="row-bg">
          <el-col :span="24">
            <div class="button-box">
              <el-button size="small" @click="addStaffDialog()">添加成员</el-button>
              <el-button size="small">启用</el-button>
              <el-button size="small">禁用</el-button>
            </div>
          </el-col>
        </el-row>
        <el-row  class="row-bg">
          <div class="table-data-area">
            <el-table :data="tableData" size="small" header-row-class-name="table-title"
            @selection-change="handleSelectionChange">
             <el-table-column type="selection" width="55"></el-table-column>
              <el-table-column prop="userName" label="用户名"></el-table-column>
              <el-table-column prop="reallyName" label="姓名"></el-table-column>
              <el-table-column prop="mobilePhone" label="手机号"></el-table-column>
              <el-table-column prop="roleName" label="角色"></el-table-column>
              <el-table-column prop="createTime" label="添加时间"></el-table-column>
              <el-table-column prop="status" label="状态"></el-table-column>
              <el-table-column label="操作" width="250px">
                <template slot-scope="scope" >
                  <el-button size="mini" @click="addStaffDialog(scope.row)">编辑</el-button>
                  <el-button size="mini" @click="enableStaff(scope.row)">
                    <span v-if="scope.row.status === '启用'">禁用</span>
                    <span v-if="scope.row.status === '禁用'">启用</span>
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
                background
                layout="prev, pager, next"
                :total="1000">
              </el-pagination>
            </div>
          </el-col>
        </el-row>

        <el-dialog title="编辑" :visible.sync="addStaff">
          <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
            <el-tab-pane  label="用户信息" name="first">
              <el-form :model="form">
                <el-form-item label="用户名" >
                  <el-input v-model="form.userName" auto-complete="off" :disabled="updateStaff"></el-input>
                </el-form-item>
                <el-form-item label="手机号"  >
                  <el-input v-model="form.mobilePhone" auto-complete="off" :disabled="updateStaff"></el-input>
                </el-form-item>
                <el-form-item label="姓　名" >
                  <el-input v-model="form.reallyName" auto-complete="off" :disabled="updateStaff"></el-input>
                </el-form-item>
                <el-form-item v-if="updateStaff === false" label="密　码" >
                  <el-input v-model="form.password" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="角色选择" >
                  <el-checkbox-group v-model="form.type">
                   <el-checkbox label="系统管理员" name="type"></el-checkbox>
                   <el-checkbox label="全部角色" name="type"></el-checkbox>
                 </el-checkbox-group>
                </el-form-item>
              </el-form>
            </el-tab-pane>
            <el-tab-pane v-if="updateStaff===false" label="已注册用户" name="second">
              <el-form :model="form">
                <span>输入手机号码：</span>
                <el-input v-model="mobileQuery" placeholder="请输入内容" style="width: 300px;"></el-input>
                <el-button>搜索</el-button>
                <p>{{mobileQuery}}</p>
                <el-form-item label="选择角色：">
                  <el-checkbox-group v-model="form.type">
                   <el-checkbox label="系统管理员" name="type"></el-checkbox>
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
          <p></p>
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
export default {
  name: 'ManageStaff',
  data () {
    return {
      activeName: 'first',
      status: '启用',
      form: {
        Id: '',
        userName: '',
        reallyName: '',
        mobilePhone: '',
        roleName: '',
        password: '',
        createTime: '',
        status: '',
        type: [
          {label: '系统管理员', value: '1'}
        ]
      },
      mobileQuery: '',
      activeIndex: '/managestaff',
      selectSoleValue: '',
      selectTypeValue: '',
      queryNameValue: '',
      queryPhoneValue: '',
      removeStaff: false,
      addStaff: false,
      updateStaff: false,
      currentPage: 1,
      dateValue: '',
      optionsStatus: [
        {label: '全部', value: '0'},
        {label: '禁用', value: '1'},
        {label: '启用', value: '2'}
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
    handleSelectionChange () {

    },
    handleClick () {

    },
    routerGo (url) {
      this.$router.push({path: url})
    },
    addStaffDialog (rowValue) {
      if (rowValue) {
        console.log(true)
        this.form.userName = rowValue.userName
        this.form.reallyName = rowValue.reallyName
        this.form.mobilePhone = rowValue.mobilePhone
        this.form.status = rowValue.status
        this.form.password = rowValue.password
        this.form.Id = rowValue.Id
        this.updateStaff = true
      } else {
        console.log(false)
        this.updateStaff = false
      }
      this.activeName='first'
      this.addStaff = true
    },
    commitUpdateSoff () {
        this.addStaff = false
    },
    enableStaff (row) {
      if (row.status === '启用') {
        row.status = '禁用'
      } else {
        row.status = '启用'
      }
    },
    deleteStaff (row) {
      console.log('删除'+ row.userName)
      this.removeStaff = true
    },
    commitDeleteStaff () {
      this.removeStaff = false
    },
    closeDiolog () {
      this.removeStaff = false
      this.addStaff = false
    }
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
