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
        <el-collapse-item title="高级选项" name="4">
        <v-highoption></v-highoption>      
        </el-collapse-item>
        </el-collapse>
      </div>
      <div class="sellspreadFoot">
          <div class="pgrounp">
              <P>任务总数 : <span class="col21">200</span></P>
              <P><span>所需本金 : <span class="orange">$200.00</span></span><span>所需佣金 : <span class="orange">10</span></span></P>
          </div>
          <div class="btngrounp">
              <el-button type="warning">确认提交</el-button>
          </div>
      </div>
  </div>
</template>
<script>
import trade from '../commonvue/trade'
import spreadsever from '../commonvue/spreadsever'
import timeopen from '../commonvue/timeopen'
import highoption from '../commonvue/highoption'
export default {
components: { 
    'v-trade': trade,
    'v-spreadsever': spreadsever,
    'v-timeopen': timeopen,
    'v-highoption': highoption,
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
.sellspread{
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
        .el-collapse-item:last-child{
            .el-collapse-item__content{
                padding: 0;
            }
            .el-collapse-item__header{
                text-indent: 0px;
                text-align: center;
                position: relative;
                background-color: #f5f5f5;
                color: #666666;
                box-sizing: border-box;
                border: 1px solid #cccccc;
                &:after{
                    content: '（可选择执行任务的资源）';
                    color: #999999;
                    position: absolute;
                    right: 35%;
                    top: 0;
                }
                .el-collapse-item__arrow{
                    position: absolute;
                    right: 46%;
                    top: 0;
                }
            }
        }
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
