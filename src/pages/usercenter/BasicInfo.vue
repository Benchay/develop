<template>
  <div class="BasicInfo">
    <el-container>
      <el-header style="height: 40px;">
        <div class="top-menu">
          <li @click="routerGo('/user/BasicInfo')" class="is-active">基本信息</li>
          <li @click="routerGo('/user/ManageStaff')">员工管理</li>
          <li @click="routerGo('/user/ManageRole')" >角色管理</li>
        </div>
      </el-header>
      <el-main>
        <el-row class="row-bg">
          <el-col :span="2">
            <div class="main-header">
              <!-- 图片 -->
              <el-upload class="avatar-uploader"
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="false" :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload">
                <el-tooltip content="点击修改图片" placement="top-end">
                  <img v-if="imageUrl" :src="imageUrl" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-tooltip>
              </el-upload>

            </div>
          </el-col>
          <el-col :span="22">
            <div class="main-header">

              <div class="user-title-box">
                <!-- <p><span>用户名：</span></p> -->
                <p><span>手机号码：</span></p>
                <p><span>注册时间：</span></p>
              </div>

              <div class="user-info-box">
                <!-- <p><span>{{userName}}</span> -->

                <!-- </p> -->
                <p>
                  <span>{{userMobile}}</span>
                  <el-button type="text" @click="routerGo('/resetPwd')">修改密码</el-button>
                </p>
                <p>
                  <span>{{registerTime}}</span>
                </p>
              </div>
            </div>

          </el-col>
        </el-row>

        <el-row class="row-bg">
          <div class="table-data-area">
            <el-table :data="tableData" size="small" header-row-class-name="table-title">
              <el-table-column prop="operatDate" label="公司名称"></el-table-column>
              <el-table-column prop="operatDate" label="公司LOGO"></el-table-column>
              <el-table-column prop="username" label="管理员"></el-table-column>
              <!-- <el-table-column prop="operatModular" label="公司规模"></el-table-column> -->
              <el-table-column label="操作" width="200px">
                <template slot-scope="scope">
                  <el-button size="mini" type="text" >编辑</el-button>
                  <el-button size="mini" type="text" >删除</el-button>
                  <el-button size="mini" type="text" >管理转让</el-button>
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
      </el-main>
    </el-container>
  </div>
</template>

<script>
import {callApiToken} from '@/data/callApi'
import {changeDateFormat} from '@/data/callApi'
export default {
  name: 'BasicInfo',
  data () {
    return {
      userName: '',
      userMobile: '',
      registerTime: '',
      activeIndex: '/basicinfo',
      imageUrl: '',
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
        {operatDate: 'XXXYYYXXX', username: 'XXX', operatModular: '登录平台'},
        {operatDate: 'XXXYYYXXX', username: 'YYY', operatModular: '登录平台'}
      ]
    }
  },
  methods: {
    handleSelect () {

    },
    handleSizeChange () {

    },
    handleCurrentChange () {

    },
    handleAvatarSuccess () {

    },
    beforeAvatarUpload () {

    },
    routerGo (url) {
      this.$router.push({path: url})
    }
  },
  created: function () {
    this.userName = localStorage.getItem('username')
    let me = this
    callApiToken('/user/load_user_info',{}, function (res) {
      if (res.status >= 200 && res.status < 300) {
        if (res.data.success) {
          me.userName = res.data.content.username
          me.userMobile = res.data.content.mobile
          me.registerTime = changeDateFormat(res.data.content.registerTime)
        }
      }
      console.log(res)
    })
    // callApiToken('', {}, (res) => {
    //
    // })
  }
}
</script>

<style scoped lang='scss'>
  .BasicInfo {
    .top-menu {
      height: 48px;
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
          .avatar-uploader {
            .avatar-uploader-icon {
              height: 100px;
              width: 100px;
              line-height: 100px;
            }
            height: 100px;
            width: 100px;
            border: 1px solid #D8D8D8;

          }
          .user-info-box {
            padding-top: 5px;
            margin-left: 100px;
            float:left;
            p {
              font-size: 15px;
              margin: 10px;
              .el-button {
                height: 15px;
                margin-left: 90px;
                font-size: 13px;
              }
            }
          }
          .user-title-box {
            padding-top: 10px;
            p {
              font-size: 15px;
              margin: 10px;
            }
            float:left;
          }
        }
        .company-operation {
          padding-top: 20px;
          padding-left: 40px;
          span {
            margin-left: 85px;
          }
        }
        .table-data-area {
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
