<template>
    <div class="hello">
        <div class="top">
          <el-row>
            <el-col :span="16">
              <el-select v-model="value" placeholder="请选择" size="small">
                <el-option
                  v-for="item in systemList"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-col>
            <el-col :span="8" class="flex">
              <el-dropdown>
            <span class="el-dropdown-link">
              <i class="userimg"><img src="../image/user.png" width="100%" height="100%" alt=""></i>我是某某某用户<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
                <el-dropdown-menu slot="dropdown">
                  <router-link :to='{path:"/personal"}'><el-dropdown-item>个人中心</el-dropdown-item></router-link>
                  <router-link :to='{path:"/finance"}'><el-dropdown-item>财务管理</el-dropdown-item></router-link>
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
              <el-dropdown>
            <span class="el-dropdown-link">
              消息通知<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>螺蛳粉</el-dropdown-item>
                  <el-dropdown-item disabled>双皮奶</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
              <div class="logoout">
                 <span>
                      <i class="outimg"><img src="../image/out.png" width="100%" height="100%" alt=""></i>退出登录
                </span>
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="mian flexDQ2">
          <div>logo</div>
          <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1"><i class="homeicon"></i>首页</el-menu-item>
            <el-menu-item index="2"><i class="producticon"></i>我的产品</el-menu-item>
            <el-menu-item index="3"><i class="spreadscentericon"></i>推广中心</el-menu-item>
            <el-menu-item index="4"><i class="myspreadicon"></i><span class="myspreadtitle">我的推广</span></el-menu-item>
            <el-menu-item index="5"><i class="taskicon"></i><span>审核任务</span><span class="tasktitle">22</span></el-menu-item>
          </el-menu>
        </div>
    </div>
</template>
<script>
export default {
   data () {
            return {
                systemList: [
                {
                    value: '1',
                    label: '推手业务系统'
                },
                {
                    value: '2',
                    label: '商户业务系统'
                },
                ],
                value: '1',
                activeIndex:'1',
            }
        },
          methods: {
            handleSelect(index){
                if(index == 1){
                this.$router.push({path:'/'})
                this.activeIndex = '1';
                }else if(index == 2){
                this.$router.push({path:'/product'})
                this.activeIndex = '2';
                }else if(index == 3){
                this.$router.push({path:'/spreadcenter'})
                this.activeIndex = '3';
                }else if(index == 4){
                this.$router.push({path:'/myspread'})
                this.activeIndex = '4';
                }else if(index == 5){
                this.$router.push({path:'/task'})
                this.activeIndex = '5';
                }
            }
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
    padding: 0 60px;
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
