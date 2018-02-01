<template>
  <div class="ranking">
       <div class="booksystem">
        <el-collapse v-model="activeNames" @change="handleChange">
        <el-collapse-item title="商品名称" name="1">
        <v-trade></v-trade>
        </el-collapse-item>
        <el-collapse-item title="入口信息" name="2">
        <v-rankingtable></v-rankingtable>
        </el-collapse-item>
        </el-collapse>
      </div>
        <v-spreadfoot></v-spreadfoot>
  </div>
</template>
<script>
import trade from '../commonvue/trade'
import rankingtable from '../commonvue/rankingtable'
import spreadfoot from '../commonvue/spreadfoot'
export default {
components: { 
    'v-trade': trade,
    'v-rankingtable': rankingtable,
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
.ranking{
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
