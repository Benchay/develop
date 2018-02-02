<template>
  <div class="spreadtask">
      <div class="top">
        <el-row :gutter="20">
            <el-col :span="16">
                <div class="grid-content bg-purple">
                    推广时间:
                     <el-date-picker
                    v-model="picktime"
                    type="datetimerange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期">
                    </el-date-picker>
                    <el-select v-model="station" placeholder="请选择"  style="width: 240px;">
                        <el-option
                        v-for="item in stationList"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
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
            label="产品ID"
            width="200">
            <template slot-scope="scope">
                <div  v-if="scope.row.isShow === false">
                 <i class="jtwrap"></i><span class="ordernamewrap">{{scope.row.productID}}</span>
                </div>
                <el-popover trigger="hover" placement="top" v-else>
                    <p>{{ scope.row.tiktip }}</p>
                     <div slot="reference" class="name-wrapper">
                         <i class="jtwrap"><img src="./jth.png" alt=""></i><span class="ordernamewrap">{{scope.row.productID}}</span>
                    </div>
                </el-popover>
            </template>
            </el-table-column>
            <el-table-column
            label="任务类型"
            width="180"
            prop="tasktype">
            </el-table-column>
            <el-table-column
            label="任务推广信息"
            prop="taskmessage">
            </el-table-column>
            <el-table-column
            label="执行状态"
            width="180"
            prop="goingstate">
            </el-table-column>
            <el-table-column label="操作">
            <template slot-scope="scope">
                <el-button
                type="primary"
                size="mini"
                >支付</el-button>
                <el-button
                size="mini"
                type="plain">取消</el-button>
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
            station: '',
            stationList: [
                {
                    value: 'New York',
                    label: 'New York'
                },
                {
                    value: 'London',
                    label: 'London'
                },
                {
                    value: 'Sydney',
                    label: 'Sydney'
                }
            ],
            valueSeach:'' ,
            spreadState:'',  
            tableData: [{
            isShow:false,
            productID: '我是推广名称',
            tasktype: '销量推广',
            taskmessage: '关键词: 小号: 初始排名: 当前排名:',
            goingstate: '正在执行',
            tiktip:'排单价格与电商平台价格不符合'
            }, {
            isShow:false,
            productID: '我是推广名称',
            tasktype: '销量推广',
            taskmessage: '关键词: 小号: 初始排名: 当前排名:',
            goingstate: '正在执行',
            tiktip:'排单价格与电商平台价格不符合'
            }, {
            isShow:true,
            productID: '我是推广名称',
            tasktype: '销量推广',
            taskmessage: '关键词: 小号: 初始排名: 当前排名:',
            goingstate: '正在执行',
            tiktip:'排单价格与电商平台价格不符合'
            }, {
            isShow:false,
            productID: '我是推广名称',
            tasktype: '销量推广',
            taskmessage: '关键词: 小号: 初始排名: 当前排名:',
            goingstate: '正在执行',
            tiktip:'排单价格与电商平台价格不符合'
            }]
        }
    },
    methods: {    
     
      }    
}
</script>
<style lang="scss">
.spreadtask{
    background-color: #ffffff;
    padding: 35px 20px;
    border: 1px solid #cccccc;
    border-top: none;
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
                border-color: #ffffff;
            }
            .el-radio-button__inner{
                border: 1px solid #fff;
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

