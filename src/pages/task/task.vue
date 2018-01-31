<template>
  <div class="task">
      <div class="top">
        <el-row :gutter="20">
            <el-col :span="16">
                <div class="grid-content bg-purple">
                    时间筛选:
                     <el-date-picker
                    v-model="picktime"
                    type="datetimerange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期">
                    </el-date-picker>
                </div>
            </el-col>
            <el-col :span="8">
                <div class="grid-content bg-purple" style="float: right;">
                    <el-input v-model="valueSeach" placeholder="请输入内容" style="width: 240px;"></el-input>
                    <el-button plain>搜  索</el-button>
                </div>
            </el-col>
        </el-row>
          <div class="stateSelect">
              <span>推广类型 : </span>
                <el-radio-group v-model="spreadState">
                    <el-radio-button label="全部"></el-radio-button>
                    <el-radio-button label="执行中（20）"></el-radio-button>
                    <el-radio-button label="成功（10）"></el-radio-button>
                    <el-radio-button label="失败 （20）"></el-radio-button>
                    <el-radio-button label="待支付 （20）"></el-radio-button>
                </el-radio-group>
          </div>
      </div>
       <div class="listWrap">
            <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column
                prop="taskID"
                label="任务ID">
            </el-table-column>
            <el-table-column
                prop="tasktype"
                label="任务类型">
            </el-table-column>
            <el-table-column
                prop="keyword"
                label="关键词">
            </el-table-column>
            <el-table-column
                prop="ordernum"
                label="订单号">
            </el-table-column>
            <el-table-column
                prop="price"
                label="金额">
            </el-table-column>
            <el-table-column
                prop="lookstate"
                label="审核状态">
            </el-table-column>
            <el-table-column
                prop="buyer"
                label="买家账号">
            </el-table-column>
            <el-table-column
                label="截图">
                <template slot-scope="scope">
                    <div style="width:20px; height:20px; overflow: hidden; position: relative;">
                        <img :src="scope.row.clopimg" alt="" width="100%" height="100%">
                    </div>
                </template>
            </el-table-column>
            <el-table-column
                label="操作"
                width="200">
                <template slot-scope="scope">
                    <el-button plain> 通过 </el-button><el-button type="primary">不通过</el-button>
                </template>
            </el-table-column>
            </el-table>
    </div>
  </div>
</template>
<script>
export default {
    components: { },
    props: {
     
    },
    data(){
        return{
            picktime: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
            valueSeach:'' ,
            spreadState:'',
            tableData: [{
                taskID:'我是任务的id',
                tasktype:'销量推广',
                keyword:'文字',
                ordernum:'4534354354',
                price:'￥500',
                lookstate:'审核成功',
                buyer: '哇哈哈',
                clopimg: require('./children/111.png')
                }, {
                taskID:'我是任务的id',
                tasktype:'销量推广',
                keyword:'文字',
                ordernum:'4534354354',
                price:'￥500',
                lookstate:'审核成功',
                buyer: '哇哈哈',
                clopimg: require('./children/111.png')
                }, {
                taskID:'我是任务的id',
                tasktype:'销量推广',
                keyword:'文字',
                ordernum:'4534354354',
                price:'￥500',
                lookstate:'审核成功',
                buyer: '哇哈哈',
                clopimg: require('./children/111.png')
                }, {
                taskID:'我是任务的id',
                tasktype:'销量推广',
                keyword:'文字',
                ordernum:'4534354354',
                price:'￥500',
                lookstate:'审核成功',
                buyer: '哇哈哈',
                clopimg: require('./children/111.png')
            }]
        }
    },
    methods: {    
     
      }    
}
</script>
<style lang="scss">
.task{
    background-color: #ffffff;
    padding: 35px 20px;
    border: 1px solid #cccccc;
   min-height: 400px;
    overflow: hidden;
      .top{
         white-space: nowrap;
         .stateSelect{
             margin: 20px 0px;
             padding: 10px 8px;
             font-size: 16px;
             border: 1px solid #e6e6e6;
            .el-radio-button__orig-radio:checked+.el-radio-button__inner{
                background-color: #FFF;
                color: #205081; 
                font-weight: 600;
                box-shadow: -1px 0 0 0 #FFF;
                border-color: #ffffff;
            }
            .el-radio-button__inner{
                border: 1px solid #fff;
            }
            .el-radio-button__inner:hover{
                color: #205081; 
            }
         }
     }
    .listWrap{
         border: 1px solid #e6e6e6;
         .jtwrap{
             display: inline-block;
             width: 16px;
             height: 16px;
             overflow: hidden;
             vertical-align: top;
             margin-top: 3px;
             margin-right: 5px;
             img{
                 width: 100%;
                 height: 100%;
             }
         }
         .ordernamewrap{
             display: inline-block;
             vertical-align: top;
             height: 16px;
         }
     }
}
</style>

