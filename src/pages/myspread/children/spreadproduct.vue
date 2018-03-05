<template>
  <div class="spreadproduct">
      <div class="top">
        <el-row :gutter="20">
            <el-col :span="16">
                <div class="grid-content bg-purple">
                    <span style="font-size: 14px;">下单时间:</span>
                     <el-date-picker
                     size="small"
                    v-model="picktime"
                    type="datetimerange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期">
                    </el-date-picker>
                    <el-select v-model="station" placeholder="请选择" size="small"  style="width: 240px;">
                        <el-option
                        v-for="item in stationList"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
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
          <div class="stateSelect">
              <span>推广类型 : </span>
                <el-radio-group v-model="spreadState">
                    <el-radio-button label="全部"></el-radio-button>
                    <el-radio-button label="流量推广（20）"></el-radio-button>
                    <el-radio-button label="销量推广（10）"></el-radio-button>
                    <el-radio-button label="排名优化 （20）"></el-radio-button>
                    <el-radio-button label="关联推广 （20）"></el-radio-button>
                </el-radio-group>
          </div>
      </div>
       <div class="listWrap">
            <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column
            label="订单名称"
            prop="ordername"
            width="200">
            </el-table-column>
            <el-table-column
            label="推广类型"
            width="180"
            prop="spreadtype">
            </el-table-column>
            <el-table-column
            label="总数/执行中/成功数/失败数"
            prop="count">
            </el-table-column>
            <el-table-column
            label="订单状态"
            width="180"
            prop="orderstate">
            </el-table-column>
            <el-table-column label="操作">
            <template slot-scope="scope">
                <el-button
                type="primary"
                size="mini"
                >编辑</el-button>
                <el-button
                size="mini"
                type="plain">复制</el-button>
                <el-button
                size="mini"
                type="plain">删除</el-button>
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
            ordername: '我是推广名称',
            spreadtype: '销量推广',
            count: '80/20/20/20',
            orderstate: '正在执行',
            tiktip:'你的账号余额不足'
            }, {
            isShow:false,
            ordername: '我是推广名称',
            spreadtype: '销量推广',
            count: '80/20/20/20',
            orderstate: '正在执行',
            tiktip:'你的账号余额不足'
            }, {
            isShow:true,
            ordername: '我是推广名称',
            spreadtype: '销量推广',
            count: '80/20/20/20',
            orderstate: '正在执行',
            tiktip:'你的账号余额不足'
            }, {
            isShow:false,
            ordername: '我是推广名称',
            spreadtype: '销量推广',
            count: '80/20/20/20',
            orderstate: '正在执行',
            tiktip:'你的账号余额不足'
            }]
        }
    },
    methods: {
        handleEdit(index, row) {
            console.log(index, row);
        },
        handleDelete(index, row) {
            console.log(index, row);
        }
      }
}
</script>
<style lang="scss">
.spreadproduct{
    background-color: #ffffff;
    padding: 15px 20px 35px;
    border: 1px solid #cccccc;
    border-top: none;
    min-height: 400px;
    overflow: hidden;
      .top{
         white-space: nowrap;
         .stateSelect{
             margin: 15px 0px;
             padding: 5px 8px;
             font-size: 16px;
             border: 1px solid #e6e6e6;
            .el-radio-button__orig-radio:checked+.el-radio-button__inner{
                background-color: #FFF;
                font-weight: 600;
                color: #205081;
                box-shadow: none;
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

