<template>
  <div class="tasksuggest">
      <div class="top">
        <el-row :gutter="20">
            <el-col :span="16">
                <div class="grid-content bg-purple">
                    <span style="font-size: 14px;">任务时间:</span>
                     <el-date-picker
                     size="small"
                    v-model="picktime"
                    type="datetimerange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期">
                    </el-date-picker>
                    <a href="javascript:;" class="addproduct"><i></i>创建订单</a>
                </div>
            </el-col>
            <el-col :span="8">
                <div class="grid-content bg-purple" style="float: right;">
                    <el-input v-model="valueSeach" size="small" placeholder="请输入内容" style="width: 240px;"></el-input>
                    <el-button style="padding: 8px 20px;">搜  索</el-button>
                </div>
            </el-col>
        </el-row>
      </div>
       <div class="listWrap">
        <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
            prop="productID"
            label="产品ID">
        </el-table-column>
        <el-table-column
            prop="sellcount"
            label="销量总数"
            width="180">
        </el-table-column>
        <el-table-column
            prop="count"
            label="计划评论数/成功数/待评数"
            >
        </el-table-column>
        <el-table-column
            prop="talkcount"
            label="评语数"
            width="180">
        </el-table-column>
        <el-table-column
            label="操作">
            <template slot-scope="scope">
                <el-button plain>导入评价</el-button><el-button type="primary">查看评价</el-button>
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
            tableData: [{
            productID: '我是产品的ID',
            sellcount: '500',
            count: '80/50/20',
            talkcount:'50',
            }, {
            productID: '我是产品的ID',
            sellcount: '500',
            count: '80/50/20',
            talkcount:'50',
            }, {
            productID: '我是产品的ID',
            sellcount: '500',
            count: '80/50/20',
            talkcount:'50',
            }, {
            productID: '我是产品的ID',
            sellcount: '500',
            count: '80/50/20',
            talkcount:'50',
        }]
        }
    },
    methods: {    
      
      }    
}
</script>
<style lang="scss">
.tasksuggest{
    background-color: #ffffff;
    padding: 15px 20px 35px;
    border: 1px solid #cccccc;
    border-top: none;
   min-height: 400px;
    overflow: hidden;
      .top{
         white-space: nowrap;
         margin-bottom: 20px;
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

