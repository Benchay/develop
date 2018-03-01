<template>
  <div class="principal">
    <div class="top">
        <el-row :gutter="20">
            <el-col :span="16">
                <div class="grid-content bg-purple">
                    <span style="font-size: 14px;">日期过滤:</span>
                     <el-date-picker
                     size="small"
                    v-model="picktime"
                    type="datetimerange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    style="width: 350px;">
                    </el-date-picker>
                    <el-select v-model="station" placeholder="交易类型过滤" size="small"  style="width: 180px;">
                        <el-option
                        v-for="item in stationList"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                    <el-select v-model="station" placeholder="状态过滤" size="small"  style="width: 180px;">
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
                    <el-input v-model="valueSeach" size="small" placeholder="请输入流水号" style="width: 240px;"></el-input>
                    <el-button style="padding: 8px 20px;">搜  索</el-button>
                </div>
            </el-col>
        </el-row>
      </div>
      <div class="tablewrap">
           <el-table
            :data="tableData"
            show-summary
            style="width: 100%">
            <el-table-column
                prop="waternum"
                label="流水号"
                width="180">
            </el-table-column>
            <el-table-column
                prop="time"
                label="时间"
                width="180">
            </el-table-column>
            <el-table-column
                prop="type"
                label="类型">
            </el-table-column>
            <el-table-column
                prop="changeaccount"
                label="交易账户">
            </el-table-column>
            <el-table-column
                prop="goldchange"
                label="本金余额变化">
            </el-table-column>
            <el-table-column
                prop="freezegold"
                label="本金冻结变化">
            </el-table-column>
            <el-table-column
                prop="changestate"
                label="交易类型">
            </el-table-column>
            <el-table-column
                prop="state"
                label="状态">
            </el-table-column>
            <el-table-column
                prop="detail"
                label="说明">
            </el-table-column>
            <el-table-column
                label="操作"
                width="140">
                <template slot-scope="scope">
                    <el-button plain>查看凭证详情</el-button>
                </template>
            </el-table-column>
            </el-table>
      </div>
    <div class="paginationwrap">
    <a href="javascript:;" class="putout"><i><img src="./derive.png" alt=""></i>导出表单</a>
      <el-pagination
        background
        layout="prev, pager, next"
        :total="1000">
        </el-pagination>
      </div>
  </div>
</template>
<script>
import {callApiForMbs} from '@/data/callApi'
export default {
   data(){
        return{
          station: '',
          stationList: '',
            picktime: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
            valueSeach:'',
            tableData: [{
            waternum: '46465465465',
            time: '2016-12-6',
            type: '类型',
            changeaccount:'1313211',
            goldchange:'+10',
            freezegold:'-10',
            changestate:'推广服务',
            state:'正常',
            detail:'说明',
          }, {
            waternum: '46465465465',
            time: '2016-12-6',
            type: '类型',
            changeaccount:'1313211',
            goldchange:'+10',
            freezegold:'-10',
            changestate:'推广服务',
            state:'正常',
            detail:'说明',
          }, {
            waternum: '46465465465',
            time: '2016-12-6',
            type: '类型',
            changeaccount:'1313211',
            goldchange:'+10',
            freezegold:'-10',
            changestate:'推广服务',
            state:'正常',
            detail:'说明',
          }, {
            waternum: '46465465465',
            time: '2016-12-6',
            type: '类型',
            changeaccount:'1313211',
            goldchange:'+10',
            freezegold:'-10',
            changestate:'推广服务',
            state:'正常',
            detail:'说明',
          }]
        }
   },
   methods: {

   },
   created: function () {
     callApiForMbs ('/finance/query_merchant_finance', {pageNum: 1, pageSize: 10}, function (res) {
       console.log('错误信息' + res.data.errmsg)
     })
   }
}
</script>
<style lang="scss">
.principal{
    background-color: #ffffff;
    padding: 15px 20px 35px;
    border: 1px solid #cccccc;
    border-top: none;
    min-height: 400px;
    overflow: hidden;
      .top{
         white-space: nowrap;
     }
     .tablewrap{
         margin-top: 20px;
         border: 1px solid #e6e6e6;
     }
    .paginationwrap{
        margin-top: 20px;
        text-align: right;
        .putout{
            float: left;
            display: inline-block;
            box-sizing: border-box;
            width: 100px;
            height: 30px;
            line-height: 30px;
            font-size: 14px;
            border: 1px solid #205081;
            text-align: center;
            border-radius: 4px;
            i{
                display: inline-block;
                vertical-align: middle;
                padding-top: 3px;
            }
        }
    }
}
</style>
