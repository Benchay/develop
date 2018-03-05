<template>
<div class="dataskwrap">
<div class="sider">
    <div class="header">
        <h2>
            产品ASIN列表
        </h2>
    </div>
    <div class="seachASIN">
        <el-input v-model="valueSeach" size="small" placeholder="ASIN搜索" style="width: 140px;"></el-input>
    </div>
    <div class="ASINlist">
        <ul>
            <li class="asincode" v-for="item in items"><a href="javascript:;">{{item.asincode}}</a></li>
        </ul>
    </div>
</div>
  <div class="taskdetail">
      <div class="top">
        <el-row :gutter="20">
            <el-col :span="16">
                <div class="grid-content bg-purple">
                     <el-date-picker
                     size="small"
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
                    <el-input v-model="valueSeach" size="small" placeholder="请输入评价内容" style="width: 240px;"></el-input>
                    <el-button style="padding: 8px 20px;">搜  索</el-button>
                </div>
            </el-col>
        </el-row>
        <el-row>
            <p style="padding-top: 15px;">
            <el-button type="primary">批量评价</el-button>
            </p>
      </el-row>
      </div>
       <div class="listWrap">
         <el-table
            ref="multipleTable"
            :data="tableData3"
            tooltip-effect="dark"
            style="width: 100%"
            @selection-change="handleSelectionChange">
            <el-table-column
            type="selection"
            width="55">
            </el-table-column>
            <el-table-column
            label="任务ID"
            width="80">
            <template slot-scope="scope" style="text-align: center;">
                <el-popover trigger="click" placement="top">
                    <div class="discusstaskdetail">
                        <div class="taskdetailHeader">
                            <h2>
                                评价任务详情
                            </h2>
                        </div>
                        <div class="taskdetailBody">
                            <p><span>任务ID:</span><span class="leimu">21651</span></p>
                            <p><span>产品ASIN码:</span><span class="leimu">DC15612541</span></p>
                            <p class="taskMsgwrap"><span>任务信息:</span><div class="keyWordwrap"><p>关键词 : KJUI</p><p>小号 : IJUYHG</p></div></p>
                            <p><span>可评价开始时间:</span><span class="leimu" style="padding-left: 35px;">2018/07/20 20:20:20</span></p>
                            <p><span>评价状态:</span><span class="leimu" style="color: #1d72f2;">评价成功</span></p>
                            <p><span>评价时间:</span><span class="leimu">2018/07/20 20:20:20</span></p>
                            <p class="taskMsgwrap"><span>评价内容:</span><div class="keyWordwrap" style="padding: 10px;">hehiehei</div></p>
                        </div>
                    </div>
                     <div slot="reference" class="name-wrapper">
                         <span class="ordernamewrap">{{scope.row.taskID}}</span>
                    </div>
                </el-popover>
            </template>
            </el-table-column>
            <el-table-column
            prop="taskmassage"
            label="任务信息"
            show-overflow-tooltip
            width="220">
            </el-table-column>
            <el-table-column
            prop="discussartime"
            label="可评价开始时间" 
            show-overflow-tooltip>
            </el-table-column>
            <el-table-column
            prop="discusstatus"
            label="评价状态"
            width="80"
            show-overflow-tooltip>
            </el-table-column>
            <el-table-column
            prop="discusstime"
            label="评价时间"
            show-overflow-tooltip>
            </el-table-column>
            <el-table-column
            prop="discusscontent"
            label="评价内容"
            show-overflow-tooltip>
            </el-table-column>
            <el-table-column
            label="截图"
            show-overflow-tooltip>
            <template slot-scope="scope">
                <div class="imgwrap">
                    <img :src="scope.row.picclop" alt="" width="100%" height="100%">
                </div>
            </template>
            </el-table-column>
            <el-table-column
            label="操作">
              <template slot-scope="scope">
                <el-button type="primary" @click="centerDialogVisible = true">评价</el-button>
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
     <el-dialog
      title="提交评论"
      :visible.sync="centerDialogVisible"
      width="33%"
      center
      class="tijiaotask">
       <p style="margin-bottom: 20px;"><span class="titledai">可以评论开始时间:</span>
         <span style="color: red;">2018/05/01 15:32:22</span>
         <span>(可先提前预约评价)</span>
        </p>
       <p style="margin-bottom: 20px;"><span class="titledai">商品标题:</span>
        <el-input size="small" v-model="title" placeholder="请输入商品标题"
                    style="width: 70%; margin-right: 10px"></el-input>
        </p>
       <p style="margin-bottom: 20px;"><span class="titledai">商品评价:</span>
        <el-input size="small"  type="textarea" v-model="title" placeholder="请输入商品评价"
                    style="width: 70%; margin-right: 10px"></el-input>
        </p>
       <p style="margin-bottom: 20px;"><span class="titledai">评价星级:</span>
        <el-rate v-model="value1"  disabled></el-rate>
        </p>
       <p><span class="titledai">店铺评价内容:</span>
        <el-input size="small"  type="textarea" v-model="title" placeholder="请输入店铺评价内容"
                    style="width: 70%; margin-right: 10px"></el-input>
        </p>
    <span slot="footer" class="dialog-footer">
        <el-button type="primary">提 交</el-button>
    </span>
    </el-dialog>
</div>
</template>
<script>
export default {
    components: { },
    props: {
     
    },
    data(){
        return{
            value1:3.7,
            centerDialogVisible:false,
            items:[
                {
                    asincode:'SDCDSFF4121SFSF'
                },
                {
                    asincode:'SDCDSFF4121SFSF'
                },
                {
                    asincode:'SDCDSFF4121SFSF'
                },
                {
                    asincode:'SDCDSFF4121SFSF'
                },
                {
                    asincode:'SDCDSFF4121SFSF'
                },
                {
                    asincode:'SDCDSFF4121SFSF'
                },
            ],
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
              tableData3: [
                  {
                taskID:'1001',
                taskmassage:'关键词 jajaj，小号 ： jfasdkjfl',
                discussartime:'2017/12/20 20:00',
                discusstatus:'未评价',
                discusstime:'2017/12/20 20:00',
                discusscontent:'啊哈放大师傅',
                picclop: require('./111.png')
            },
                  {
                taskID:'1001',
                taskmassage:'关键词 jajaj，小号 ： jfasdkjfl',
                discussartime:'2017/12/20 20:00',
                discusstatus:'未评价',
                discusstime:'2017/12/20 20:00',
                discusscontent:'啊哈放大师傅',
                picclop: require('./111.png')
            },
                  {
                taskID:'1001',
                taskmassage:'关键词 jajaj，小号 ： jfasdkjfl',
                discussartime:'2017/12/20 20:00',
                discusstatus:'未评价',
                discusstime:'2017/12/20 20:00',
                discusscontent:'啊哈放大师傅',
                picclop: require('./111.png')
            },
                  {
                taskID:'1001',
                taskmassage:'关键词 jajaj，小号 ： jfasdkjfl',
                discussartime:'2017/12/20 20:00',
                discusstatus:'未评价',
                discusstime:'2017/12/20 20:00',
                discusscontent:'啊哈放大师傅',
                picclop: require('./111.png')
            },
                  {
                taskID:'1001',
                taskmassage:'关键词 jajaj，小号 ： jfasdkjfl',
                discussartime:'2017/12/20 20:00',
                discusstatus:'未评价',
                discusstime:'2017/12/20 20:00',
                discusscontent:'啊哈放大师傅',
                picclop: require('./111.png')
            },
                  {
                taskID:'1001',
                taskmassage:'关键词 jajaj，小号 ： jfasdkjfl',
                discussartime:'2017/12/20 20:00',
                discusstatus:'未评价',
                discusstime:'2017/12/20 20:00',
                discusscontent:'啊哈放大师傅',
                picclop: require('./111.png')
            },
            ],
            multipleSelection: []
        }
    },
    methods: {    
        handleSelectionChange(val) {
            this.multipleSelection = val;
        }
      }    
}
</script>
<style lang="scss">
.dataskwrap{
    display: flex;
    background-color: #ffffff;
    .sider{
        width: 182px;
        margin-top: 15px;
        margin-bottom: 15px;
        border: 1px solid #e9f3f6;
        box-sizing: border-box;
        margin-left: 15px;
        .header{
            margin-bottom: 6px;
            h2{
                background-color: #205081;
                color: #ffffff;
                font-size: 14px;
                height: 38px;
                line-height: 38px;
                text-align: center;
            }
        }
        .seachASIN{
            text-align: center;
            background-color: #fafafa;
            height: 40px;
        }
        .ASINlist{
            .asincode{
                padding-left: 10px;
                padding-top: 20px;
                a{
                    color: #666666;
                    &:hover{
                        color: #205081;
                        text-decoration: underline;
                    }
                }
            }
        }
    }
.taskdetail{
    flex: 1;
    // background-color: #ffffff;
    padding: 15px 20px 35px;
    // border: 1px solid #cccccc;
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
             color: #205081;
             cursor: pointer;
         }
         .imgwrap{
             width: 30px;
             height: 30px;
             border: 1px solid #e6e6e6;
             box-sizing: border-box;
             overflow: hidden;
         }
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
        .tijiaotask{
            .titledai {
                display: inline-block;
                vertical-align: top;
                width: 60px;
                margin-right: 60px;
                white-space: nowrap;
              }
                .el-rate{
                        display: inline-block;
                        vertical-align: top;
                    }
        }
}
.discusstaskdetail{
    width: 500px;
    margin: -13px;
    .taskdetailHeader{
        h2{
        height: 50px;
        line-height: 50px;
        font-size: 16px;
        background: #205081;
        color: #ffffff;
        text-align: center;
    }
    }
    .taskdetailBody{
        padding: 15px;
        &>p{
            color: #999999;
            margin-top: 20px;
          &>span.leimu{
              padding-left: 20px;
              color: #333333;
          }  
          &>span:first-child{
              display: inline-block;
              width: 80px;
              white-space: nowrap;
          }  
        }
        .taskMsgwrap{
                display: inline-block;
                vertical-align: top;
        }
        .keyWordwrap{
            margin-top: 15px;
            padding-left: 20px;
            display: inline-block;
            vertical-align: top;
            width: 366px;
            height: 68px;
            border: 1px solid #cccccc;
            background-color: #fafafa;
            p{
                margin: 10px 0;
            }
        }
    }
}
</style>

