<template>
  <div class="timeopen">
    <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="自动设置" name="first">
                时间设置: <el-date-picker
                    v-model="picktime"
                    type="datetimerange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期">
                    </el-date-picker>
            </el-tab-pane>
            <el-tab-pane label="手动设置" name="second">手动设置</el-tab-pane>
        </el-tabs>
  </div>
</template>
<script>
export default {
    data(){
       return{
          picktime: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
          activeName: 'first'
       }
    }
}
</script>
<style lang="scss">
.timeopen{
    .el-tabs__nav-wrap{
        display: inline-block;
        padding-left: 70px;
        position: relative;
        &:before{
            content: '设置类型:';
            width: 70px;
            height: 40px;
            background-color: #fff;
            position: absolute;
            left: 0;
            top: 8px;
        }
        &:after{
            background-color: #ffffff;
        }
    }
    .el-tabs__item:hover{
        color: #205081;
    }
    .el-tabs__item.is-active{
        color: #205081;
        
    }
    .el-tabs__active-bar{
        background-color: #ffffff;
    }
}
</style>
