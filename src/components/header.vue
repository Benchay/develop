<template>
    <div class="hello">
        <div class="top">
          <el-row type="flex" justify="center">
            <div style="width: 1350px;">
              <el-row>
                <el-col :span="16">
                  <el-select v-model="typeValue" placeholder="请选择" size="small" @change="changeSystem">
                    <el-option
                      v-for="item in systemList"
                      :key="item.id"
                      :label="item.name"
                      :value="item.id">
                    </el-option>
                  </el-select>
                </el-col>

                <el-col :span="8" class="flex">
                  <el-dropdown style="margin-left: 40px;">
                    <span class="el-dropdown-link">
                      <i class="userimg"><img src="../image/user.png" width="100%" height="100%" alt=""></i>{{username}}<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                      <router-link :to='{path:"/user/basicinfo"}'><el-dropdown-item>个人中心</el-dropdown-item></router-link>
                      <router-link :to='{path:"/finance"}'><el-dropdown-item>财务管理</el-dropdown-item></router-link>
                      <router-link :to='{path:"/ManageLog"}'><el-dropdown-item>日志管理</el-dropdown-item></router-link>
                    </el-dropdown-menu>
                  </el-dropdown>

                  <el-dropdown>
                    <span class="el-dropdown-link">
                      <i class="systemimg"><img src="../image/set.png" width="100%" height="100%" alt=""></i>系统设置<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item>黄金糕</el-dropdown-item>
                      <el-dropdown-item>狮子头</el-dropdown-item>
                    </el-dropdown-menu>
                  </el-dropdown>
                  <el-dropdown >
                <span class="el-dropdown-link">
                  消息通知<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                    <el-dropdown-menu slot="dropdown">
                      <router-link :to='{path: "/ManageMessage"}'><el-dropdown-item >消息管理</el-dropdown-item></router-link>
                      <el-dropdown-item disabled>双皮奶</el-dropdown-item>
                    </el-dropdown-menu>
                  </el-dropdown>
                  <div class="logoout">
                    <span @click="logout()">
                      <i class="outimg"><img src="../image/out.png"  width="100%" height="100%" alt=""></i>退出登录
                    </span>
                  </div>
                </el-col>
              </el-row>
            </div>
          </el-row>
        </div>
        <div class="mian flexDQ2">
          <div>logo</div>
          <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <!-- <el-menu-item index="1"><i class="homeicon"></i>首页</el-menu-item>
            <el-menu-item index="2"><i class="producticon"></i>我的产品</el-menu-item>
            <el-menu-item index="3"><i class="spreadscentericon"></i>推广中心</el-menu-item>
            <el-menu-item index="4"><i class="myspreadicon"></i><span class="myspreadtitle">我的推广</span></el-menu-item>
            <el-menu-item index="5"><i class="taskicon"></i><span>审核任务</span><span class="tasktitle">22</span></el-menu-item> -->
            <el-menu-item v-for="item in ItemList" :index="item.authId + ''">{{item.name}}</el-menu-item>
          </el-menu>
        </div>
    </div>
</template>
<script>
import {callApiToken} from '@/data/callApi'
export default {
  data () {
    return {
      username: '',
      ItemList: [],
      systemList: [
        {
          value: '2',
          label: '推手业务系统'
        },
        {
          value: '1',
          label: '商户业务系统'
        },
      ],
      typeValue: '',
      activeIndex:'10001',
    }
  },
  methods: {
    // 退出登录
    logout () {
      console.log('退出登录')
      localStorage.removeItem('access_token')
      //this.$router.push({path:'/'})
      window.location.reload(true)
      //window.location.href='http://proxy.tintop.cn:26082/mbs/index.html'
    },
    handleSelect(index){
      if(index == 10001){
        this.$router.push({path:'/'})
        this.activeIndex = '10001';
      }else if(index == 10002){
        this.$router.push({path:'/product'})
        this.activeIndex = '10002';
      }else if(index == 10003){
        this.$router.push({path:'/spreadcenter'})
        this.activeIndex = '10003';
      }else if(index == 10004){
        this.$router.push({path:'/myspread'})
        this.activeIndex = '10004';
      }else if(index == 10005){
        this.$router.push({path:'/task'})
        this.activeIndex = '10005';
      }
    },
    changeSystem (value) {
      if (value == '1') {
        console.log(1)
        window.location.href='http://proxy.tintop.cn:26082/mbs/index.html'
      } else if (value == '2') {
        console.log(2)
        window.location.href='http://proxy.tintop.cn:26082/pbs/index.html'
      }
    },
    routerGo(url){
      this.$router.push(url)
    }
  },
    created: function () {
      this.username = localStorage.getItem('username')
      // 自动加载导航栏
      let me = this
      callApiToken('/role/query_user_auths', {applicationId: 1}, function (res) {
        if (res.status>= 200 && res.status<300) {
          if (res.data.success) {
            // 访问正常
            for (var i = 0; i < res.data.content.auths.length; i++) {
              if (res.data.content.auths[i].parentId === null) {
                me.ItemList.push(res.data.content.auths[i])
              }
            }
            me.systemList = res.data.content.applications
            for (var i = 0; i < res.data.content.applications.length; i++) {
              if (res.data.content.applications[i].id === 1) {
                me.typeValue = res.data.content.applications[i].name
              }
            }
          } else {
            console.log(res)
          }
        } else {
          console.log(res)
        }
      })
    }
  }
</script>
<style lang="scss">
@import "../style/mixin.scss";
.hello{
    .top{
    background-color: #ffffff;
    height: 40px;
    line-height: 40px;
    padding: 0 0px;
    .system{
        line-height: 37px;
    }
    .el-dropdown{
        margin-right: 30px;
    }
    .userimg{
        display: inline-block;
        width: 30px;
        height: 30px;
        overflow: hidden;
        vertical-align: middle;
        margin-right: 5px;
        position: relative;
        img{
          position: absolute;
          top: 0;
          left: 0;
        }
    }
    .systemimg{
        display: inline-block;
        width: 18px;
        height: 18px;
        overflow: hidden;
        vertical-align: middle;
        margin-right: 5px;
        position: relative;
        img{
          position: absolute;
          top: 0;
          left: 0;
        }
    }
    .logoout{
        color: #606266;
        font-size: 14px;
    }
    .outimg{
        display: inline-block;
        width: 18px;
        height: 18px;
        overflow: hidden;
        vertical-align: middle;
        margin-right: 5px;
        position: relative;
        img{
          position: absolute;
          top: 0;
          left: 0;
        }
    }
    }
    .mian{
        width:100%;
        height: 60px;
        background: #205081;
        color:#fff;
        font-size: 18px;
        .el-menu{
            background: $blue;
        }
        .el-menu--horizontal .el-menu-item{
            color:#fff;
            width: 160px;
            text-align: center;
            font-size: 16px;
            i{
                display: inline-block;
                width: 24px;
                height: 24px;
                margin-right: 10px;
                margin-top: -2px;
                &.homeicon{
                    background: url(../image/nav_5.png);
                }
                &.producticon{
                    background: url(../image/nav_6.png);
                }
                &.spreadscentericon{
                    background: url(../image/nav_7.png);
                }
                &.myspreadicon{
                    background: url(../image/nav_8.png);
                    margin-top: 2px;
                }
                &.taskicon{
                    background: url(../image/nav_9.png);
                    margin-top: 2px;
                }
            }
            .myspreadtitle{
                position: relative;
                &:after{
                    position: absolute;
                    top: 5px;
                    right: -20px;
                    content: '';
                    width: 16px;
                    height: 16px;
                    background-image: url(../image/hint.png);
                }
            }
            .tasktitle{
                margin-left: 3px;
                display: inline-block;
                width: 17px;
                height: 13px;
                line-height: 13px;
                font-size: 12px;
                border-radius: 4px 4px 4px 0;
                background-color: #fe6c6f;
                position: relative;
                 &:after{
                    position: absolute;
                    top: 13px;
                    left: 0px;
                    content: '';
                    width: 0;
                    height: 0;
                    border-right: 5px solid transparent;
                    border-bottom: 5px solid transparent;
                    border-top: 5px solid #fe6c6f;
                }
            }
        }

        .el-menu--horizontal>.el-menu-item.is-active,.el-menu--horizontal .el-menu-item:hover{
            background: #183b5e;
            color:#fff;
        }
        // .el-menu--horizontal>.el-menu-item.is-active{

        // }
        .el-badge__content .is-fixed{
            position: absolute;
            top: 11px;
            right: 10px;
        }
        .el-menu--horizontal>.el-menu-item.is-active{
            border-bottom: 2px solid #183b5e;
            position: relative;
            &:after{
                content: '';
                position: absolute;
                bottom: -3px;
                left: 50%;
                transform: translateX(-50%);
                width: 0;
                height: 0;
                border-right: 10px solid transparent;
                border-bottom: 10px solid #e9f3f6;
                border-left: 10px solid transparent;
            }
        }
        .el-badge__content.is-fixed{
            z-index: 1;
        }
    }
}
</style>
