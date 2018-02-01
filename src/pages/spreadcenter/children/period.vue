<template>
  <div class="period">
       <div class="booksystem">
        <el-collapse v-model="activeNames" @change="handleChange">
        <el-collapse-item title="商品名称" name="1">
        <v-trade></v-trade>
        </el-collapse-item>
        <el-collapse-item title="推广设置" name="2">
        <v-periodspreadsever></v-periodspreadsever>
        </el-collapse-item>
        <el-collapse-item title="时间发布设置" name="3">
        <v-timeopen></v-timeopen>            
        </el-collapse-item>
        </el-collapse>
      </div>
        <v-spreadfoot></v-spreadfoot>
  </div>
</template>
<script>
import trade from '../commonvue/trade'
import periodspreadsever from '../commonvue/periodspreadsever'
import timeopen from '../commonvue/timeopen'
import spreadfoot from '../commonvue/spreadfoot'
export default {
components: { 
    'v-trade': trade,
    'v-periodspreadsever': periodspreadsever,
    'v-timeopen': timeopen,
    'v-spreadfoot': spreadfoot,
    },
   data(){
       return{
           activeNames: ['2']
       }
   },
    methods: {
      handleChange(val) {
        
      }
    }
}
</script>
<style lang="scss">
.period{
    background-color: #ffffff;
    padding: 35px 20px 120px;
    border: 1px solid #cccccc;
    border-top: none;
    position: relative;
    .el-collapse-item__wrap{
        border-bottom: none;
    }
    .booksystem{
        margin-top: 20px;
        .el-collapse-item__header{
            // height: 40px;
            background-color: #205081;
            color: #fff;
            text-indent: 15px;
        }
        .el-collapse-item__arrow{
            // height: 40px;
        }
        .el-collapse-item__content{
            border: 1px solid #cccccc;
            border-top: none;
            margin-bottom: 15px; 
            padding: 20px;
        }
    }
}
</style>
