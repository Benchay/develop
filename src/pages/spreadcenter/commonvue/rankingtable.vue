<template>
  <div class="rankingtable">
      <div class="keyword">
        <el-input size="medium" v-model="input" placeholder="请输入关键词全站搜索" style="width: 400px;"></el-input>
        <el-button style="padding: 10px 20px; margin-left: 15px;">搜  索</el-button>
         <a href="javascript:;" class="addproduct" @click="centerDialogVisible = true"><i></i>新增关键词</a>
      </div>
      <div class="tablewrap">
        <el-table
            ref="multipleTable"
            :data="tableData2"
            tooltip-effect="dark"
            style="width: 100%"
            @selection-change="handleSelectionChange">
            <el-table-column
            type="selection"
            width="55">
            </el-table-column>
            <el-table-column
            prop="keyword"
            label="关键词">
            </el-table-column>
            <el-table-column
            prop="evprice"
            label="评估价格"
            show-overflow-tooltip>
            </el-table-column>
        </el-table>
      </div>
      <div class="paginationwrap">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="1000">
        </el-pagination>
      </div>
    <el-dialog
      title="选择关键词"
      :visible.sync="centerDialogVisible"
      width="1000px"
      center
      class="keywordstyle">
    <div class="keywordwrap">
        <div class="keywdside">
            <div class="kwsideHeader">
                <span>已选关键词【5】</span>
            </div>
            <div class="kwsideBody">
                <ul>
                    <li v-for="(item,index) in items"><a href="javascript:;">{{index + 1}}.{{item.keyword}}</a><i><img src="./delete.png" alt=""></i></li>
                </ul>
            </div>
            <div class="kwsidefoot">
                <el-button type="primary">确 定</el-button>
            </div>
        </div>
        <div class="keywdlist">
            <div class="keyword" style="margin-bottom: 10px;">
                <el-input size="medium" v-model="input" placeholder="请输入关键词全站搜索" style="width: 400px;"></el-input>
                <el-button style="padding: 10px 20px; margin-left: 15px;">搜  索</el-button>
            </div>
            <div style="border: 1px solid #e6e6e6;">
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
            prop="keyword"
            label="关键词">
            </el-table-column>
            <el-table-column
            prop="reason"
            label="推荐理由">
            </el-table-column>
            <el-table-column
            prop="thirty"
            label="30天搜索热度"
            show-overflow-tooltip>
            </el-table-column>
            <el-table-column
            prop="degree"
            label="竞争度"
            show-overflow-tooltip>
            </el-table-column>
            <el-table-column
            prop="evprice"
            label="评估价格"
            show-overflow-tooltip>
            </el-table-column>
        </el-table>
        </div>
          <div class="paginationwrap">
            <el-pagination
                background
                layout="prev, pager, next"
                :total="1000">
                </el-pagination>
            </div>
        </div>

    </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
    data() {
        return {
            items:[
                {keyword:'关键词哈哈哈'},
                {keyword:'关键词哈哈哈'},
                {keyword:'关键词哈哈哈'},
            ],
        centerDialogVisible: false,
        tableData2:[
            {
                keyword:"xuanxui",
                evprice:"$362.00"
            },
            {
                keyword:"xuanxui",
                evprice:"$362.00"
            },
            {
                keyword:"xuanxui",
                evprice:"$362.00"
            },
            {
                keyword:"xuanxui",
                evprice:"$362.00"
            },
            {
                keyword:"xuanxui",
                evprice:"$362.00"
            },
            {
                keyword:"xuanxui",
                evprice:"$362.00"
            },
            {
                keyword:"xuanxui",
                evprice:"$362.00"
            },
            {
                keyword:"xuanxui",
                evprice:"$362.00"
            },
            {
                keyword:"xuanxui",
                evprice:"$362.00"
            },
            {
                keyword:"xuanxui",
                evprice:"$362.00"
            },
            {
                keyword:"xuanxui",
                evprice:"$362.00"
            },
        ],
        tableData3: [{
            keyword:"xuanxui",
            reason:"好",
            thirty:"12123",
            degree:"12",
            evprice:"$362.00"
            }, {
            keyword:"xuanxui",
            reason:"好",
            thirty:"12123",
            degree:"12",
            evprice:"$362.00"
            }, {
           keyword:"xuanxui",
            reason:"好",
            thirty:"12123",
            degree:"12",
            evprice:"$362.00"
            }, {
            keyword:"xuanxui",
            reason:"好",
            thirty:"12123",
            degree:"12",
            evprice:"$362.00"
            }, {
            keyword:"xuanxui",
            reason:"好",
            thirty:"12123",
            degree:"12",
            evprice:"$362.00"
            }, {
            keyword:"xuanxui",
            reason:"好",
            thirty:"12123",
            degree:"12",
            evprice:"$362.00"
            }, {
            keyword:"xuanxui",
            reason:"好",
            thirty:"12123",
            degree:"12",
            evprice:"$362.00"
            }],
            multipleSelection: []
        }
    },
    methods:{
         handleSelectionChange(val) {
            this.multipleSelection = val;
        }
    }
}
</script>
<style lang="scss">
.rankingtable{
    .keyword{
        padding-left: 60px;
        position: relative;
        &:before{
            content: '关键词:';
            width: 60px;
            height: 40px;
            background-color: #fff;
            position: absolute;
            left: 0;
            top: 8px;
        }
    }
    .tablewrap{
            border: 1px solid #e6e6e6;
            margin-top: 20px;
            .el-table thead tr th{
                background-color: #edf5fc;
            }
            .el-table .cell{
                text-align: center;
            }
        }
    .paginationwrap{
        margin-top: 20px;
        text-align: right;
    }
    .keywordstyle{
        .keywordwrap{
            display: flex;
            .keywdside{
                width: 250px;
                border: 1px solid #205081;
                margin-right: 10px;
                .kwsideHeader{
                    padding-left: 20px;
                    height: 40px;
                    line-height: 40px;
                    border-bottom: 1px solid #205081;
                    box-sizing: border-box;
                    color: #205081;
                    font-weight: 600;
                }
                .kwsideBody{
                    padding: 5px 15px;
                    height: 410px;
                    box-sizing: border-box;
                    overflow-y: scroll;                    
                    li{
                        padding-left: 5px;
                        border-bottom: 1px dashed #cccccc;
                        overflow: hidden;
                      a{
                          display: inline-block;
                          vertical-align: top;
                          height: 34px;
                          line-height: 34px;
                          color: #666666;
                      } 
                      i{
                          float: right;
                          display: inline-block;
                          vertical-align: top;
                          width: 18px;
                          height: 18px;
                          margin-top: 7px;
                      } 
                    }
                }
                .kwsidefoot{
                    text-align: center;
                    height: 60px;
                    line-height: 60px;
                    background-color: #f5f5f5;
                    border-top: 1px solid #205081;
                }
            }
            .keywdlist{
                flex: 1;
            }
        }
    }
}
</style>
