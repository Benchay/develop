<template>
  <div class="UserIndex">
    <el-container>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'UserIndex',
  data () {
    return {
      activeIndex: '/user/basicinfo'
    }
  },
  mehtods: {

  }
}
</script>

<style lang='scss' scoped>
  .UserIndex {
    padding-top: 20px;
    padding-left: 60;
    padding-right: 60;
    .el-header {
      .el-menu--horizontal {
        background-color: #E9F3F6;
         .el-menu-item {
           border-top: 1px solid #D8D8D8;
           border-left: 1px solid #D8D8D8;
           border-right: 1px solid #D8D8D8;
           width: 140px;
           height: 50px;
           text-align: center;
           background-color: white;
           line-height: 50px;
         }
         .is-active {
           height: 48px;
           text-align: center;
           padding-left:20px;
           background-color: white;
           border-top: 3px solid #205081;
           border-bottom: 3px solid white;
         }
      }
    }
    .el-main {
      padding-top: 0px;

    }
  }
</style>
