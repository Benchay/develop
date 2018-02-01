<template>
  <div class="rankingtable">
      <div class="keyword">
        <el-input size="medium" v-model="input" placeholder="请输入内容" style="width: 400px;"></el-input>
        <el-button style="padding: 10px 20px; margin-left: 15px;">搜  索</el-button>
      </div>
      <div class="tablewrap">
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
</template>
<script>
export default {
    data() {
        return {
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
        }
    .paginationwrap{
        margin-top: 20px;
        text-align: right;
    }
}
</style>
