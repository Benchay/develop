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
              我是某某某用户<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item disabled>双皮奶</el-dropdown-item>
                  <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
              <el-dropdown>
            <span class="el-dropdown-link">
              系统设置<i class="el-icon-arrow-down el-icon--right"></i>
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
              <div>退出登录</div>
            </el-col>
          </el-row>
        </div>
        <div class="mian flexDQ2">
          <div>logo</div>
          <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1">首页</el-menu-item>
            <el-menu-item index="2">我的产品</el-menu-item>
            <el-menu-item index="3">推广中心</el-menu-item>
            <el-menu-item index="4"><el-badge :value="200" :max="99" class="item">我的推广</el-badge></el-menu-item>
            <el-menu-item index="5"><el-badge :value="200" :max="99" class="item">审核任务</el-badge></el-menu-item>
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
        }

        .el-menu--horizontal>.el-menu-item.is-active,.el-menu--horizontal .el-menu-item:hover{
            background: #183b5e;
            color:#fff;
        }
        // .el-menu--horizontal>.el-menu-item.is-active{
        //     position: relative;
        //     &:after{
        //         position: absolute;
        //         bottom: 0;
        //         left: 0;
        //         width: 0;
        //         height: 0;
        //         border-right: 50px solid transparent;
        //         border-bottom: 50px solid #e9f3f6;
        //         border-left: 50px solid transparent;
        //     }
        // }
        .el-badge__content .is-fixed{
            position: absolute;
            top: 11px;
            right: 10px;
        }
        .el-menu--horizontal>.el-menu-item.is-active{
            border-bottom: 2px solid #183b5e;
        }
        .el-badge__content.is-fixed{
            z-index: 1;
        }
    }
}
</style>
