<template>
  <div id="pcfather">
    <div id="wrap">
    <div id="header">
        <v-header></v-header>
      </div>
          <div id="main" class="clearfix">
            <div id="content">
                <div class="bg">

                </div>
                <keep-alive>
                    <router-view></router-view>
                </keep-alive>
            </div>
          </div>
        </div>
        <div id="footer">
            <v-footer></v-footer>
      </div>
  </div>
</template>

<script>
import header from '@/components/header'
import footer from '@/components/footer'
export default {
    components: { 
    'v-header' : header,
    'v-footer' : footer
    }
}
</script>

<style lang="scss" type="text/css">
#content {
  width: 1350px;
  margin: 0 auto;
  padding: 20px 0;
  position: relative;
  .bg{
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #e9f3f6;
    z-index: -1;
  }
//   .el-tabs__nav{
//       background-color: #ffffff;
//   }
  .el-tabs--card>.el-tabs__header .el-tabs__item.is-active{
  border-top: 2px solid #205081;
  border-right: 1px solid #cccccc;
  border-left: 1px solid #cccccc;
  border-bottom-color: #ffffff;
  transform: translateY(2px);
}
    .el-tabs--card>.el-tabs__header .el-tabs__item{
      border-left: 1px solid #fafafa;
      background-color: #ffffff;
      margin-right: 1px;
    }
    .el-tabs--card>.el-tabs__header .el-tabs__nav{
      border-top: 1px solid #e9f3f6;
      border-left: none;
      border-right: none; 
    }
   .el-tabs--card>.el-tabs__header{
     border-bottom: 1px solid #cccccc;
   }
.el-tabs.el-tabs--card.el-tabs--top>.el-tabs__header.is-top{
    margin-bottom: 0;
}
.el-tabs--card>.el-tabs__header .el-tabs__item{
    border-bottom-color: #cccccc;
}
.el-radio-button:focus:not(.is-focus):not(:active){
  box-shadow: none;
}
.el-table thead tr th{
    background-color: #edf5fc;
}
.addproduct{
        display: inline-block;
        line-height: 24px;
        text-decoration: none;
        margin-left: 20px;
        color: #205081;
        font-size: 14px;
        i{
          display: inline-block;
          vertical-align: top;
          width: 24px;    
          height: 24px;
          margin-right: 5px;
          background: url(./image/add.png) center no-repeat;
        }
    }
    .el-button {
      padding: 8px 20px;
    }
    .el-dialog--center .el-dialog__header{
      padding: 10px;
      background-color: #205081;
      .el-dialog__title{
      color: #ffffff;
      }
    .el-icon-close:before{
      width: 26px;
      height: 26px;
      padding: 3px;
      font-size: 20px;
      border-radius: 50%;
      background-color: #ffffff;
      color: #205081;
    }
    }
    .el-dialog--center .el-dialog__body{
       padding: 15px 27px 30px;
      }
}
</style>
