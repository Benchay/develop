<template>
  <div class="OtherManage">
    <el-container>
      <el-header style="height: 50px;">
        <el-menu :router="true" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-menu-item index="/finanoverview" style="border-bottom-color: transparent;">财务总览</el-menu-item>
          <el-menu-item index="/transactrecord" style="border-bottom-color: transparent;">财务交易记录</el-menu-item>
          <el-menu-item index="/accountconfig" style="border-bottom-color: transparent;">账户设置</el-menu-item>
        </el-menu>
      </el-header>
      <el-main>
        <div class="main-bg">
          <div class="business-account">
            <el-row type="flex">
              银行卡
              <el-card class="box-card">
                <i class="el-icon-plus"></i><span>添加银行卡</span>
              </el-card>
            </el-row>
          </div>
          <!--  -->
          <div class="business-account">
            <el-row type="flex">
              微信
              <el-card class="box-card wechat">
                <i class="el-icon-plus"></i><span>添加微信</span>
              </el-card>
            </el-row>
          </div>
          <!--  -->
          <div class="business-account">
            <el-row type="flex">
              支付宝
              <el-card class="box-card">
                <i class="el-icon-plus"></i><span>添加支付宝</span>
              </el-card>
            </el-row>
          </div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'OtherManage',
  data () {
    return {
      activeIndex: '/finanoverview'
    }
  },
  methods: {
    handleSelect () {

    }
  }
}
</script>

<style scoped lang='scss'>
  .OtherManage {
    .el-main {
      padding-top: 0px;
      .main-bg {
        background-color: white;
        padding-top: 80px;
        padding-left: 40px;
        padding-right: 40px;
        padding-bottom: 200px;
        .business-account {
          border-bottom: 1px dashed #d8d8d8;
          height: 160px;
          line-height: 160px;
          .box-card {
            width: 330px;
            height: 120px;
            margin-left: 20px;
            margin-top: 20px;
            line-height: 90px;
            text-align:center;
            i {
              width: 40px;
              height: 27px;
              border-radius: 20px;
              border: 1px solid #d8d8d8;
              padding-top: 13px;
            }
            span {
              margin-left: 20px;
            }
          }
          .wechat{
            margin-left: 35px;
          }
        }

      }
    }
  }
</style>

<style lang='scss'>
.table-data-area {
  padding-top: 15px;
  padding-left: 40px;
  padding-right: 40px;
  .table-title {
    .is-leaf{
      font-size: 13px;
      background-color: #ededed;
    }
  }
}
.el-menu--horizontal {
  li {
    font-size: 15px;
    border-bottom: 1px solid white;
  }
  background-color: #F4F4F4;
   .el-menu-item {
     border-top: 1px solid #D8D8D8;
     border-left: 1px solid #D8D8D8;
     border-right: 1px solid #D8D8D8;
     width: 140px;
     height: 50px;
     text-align: center;
     line-height: 50px;
   }
   .is-active {
     height: 50px;
     text-align: center;
     padding-left:20px;
     background-color: white;
     border-top: 1px solid #DA444F;
     border-left: 1px solid #DA444F;
     border-right: 1px solid #DA444F;
   }
}
</style>
