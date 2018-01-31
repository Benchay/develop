<template>
  <div class="evaluationspread">
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
        <el-collapse-item title="推广设置" name="2">
        <v-spreadsetup></v-spreadsetup>
        </el-collapse-item>
        </el-collapse>
      </div>
        <v-spreadfoot></v-spreadfoot>
  </div>
</template>
<script>
import trade from '../commonvue/trade'
import spreadsetup from '../commonvue/spreadsetup'
import spreadfoot from '../commonvue/spreadfoot'
export default {
components: { 
    'v-trade': trade,
    'v-spreadsetup': spreadsetup,
    'v-spreadfoot': spreadfoot,
    },
   data(){
       return{
           valueSeach:'',
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
.evaluationspread{
    background-color: #ffffff;
    padding: 35px 20px 120px;
    border: 1px solid #cccccc;
    border-top: none;
    position: relative;
    .title{
        .el-input{
            display: inline-block;
            padding-left: 70px;
            position: relative;
            &:before{
                content: '推广名称:';
                width: 70px;
                height: 40px;
                background-color: #fafafa;
                position: absolute;
                left: 0;
                top: 10px;
            }
        }
    }
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
    .sellspreadFoot{
        position: absolute;
        bottom: 0;
        left: 0;
        padding: 30px 0;
        box-sizing: border-box;
        background-color: #fafafa;
        display: flex;
        width: 100%;
        height: 100px;
        border: 1px solid #cccccc;
        border-left: none; 
        border-right: none;
        .pgrounp{
            flex: 1;
            padding-left: 20px;
            p{
                margin-bottom: 10px;
                font-size: 14px;
                &>span{
                    margin-right: 15px;
                }
            }
            .orange{
                color: #ee811e;
            }
            .col21{
                color: #205081;
            }
        }
        .btngrounp{
            width: 158px;
            
        }
    }
}
</style>
