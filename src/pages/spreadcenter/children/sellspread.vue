<template>
  <div class="sellspread">
      <div class="title">
        <el-row :gutter="20">
            <el-col :span="10">
                <el-input v-model="valueSeach" placeholder="请输入推广名称"></el-input>
            </el-col>
        </el-row>
      </div>
      <div class="booksystem">
        <el-collapse v-model="activeNames" @change="handleChange">
        <el-collapse-item title="商品名称" name="1">
        <v-trade></v-trade>
        </el-collapse-item>
        <el-collapse-item title="设置推广服务" name="2">
        <v-spreadsever></v-spreadsever>
        </el-collapse-item>
        <el-collapse-item title="时间发布设置" name="3">
        <v-timeopen></v-timeopen>            
        </el-collapse-item>
        </el-collapse>
      </div>
  </div>
</template>
<script>
import trade from '../commonvue/trade'
import spreadsever from '../commonvue/spreadsever'
import timeopen from '../commonvue/timeopen'
export default {
components: { 
    'v-trade': trade,
    'v-spreadsever': spreadsever,
    'v-timeopen': timeopen,
    },
   data(){
       return{
           valueSeach:'',
           activeNames: ['1','2','3']
       }
   },
    methods: {
      handleChange(val) {
        
      }
    }
}
</script>
<style lang="scss">
.sellspread{
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
