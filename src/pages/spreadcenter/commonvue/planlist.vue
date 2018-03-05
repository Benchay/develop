<template>
    <div class="planlist">
        <div class="main">
            <div class="planlistHeader">
                <h2>计划清单</h2>
            </div>
            <div class="planlistBody">
                <div class="top">
                    <div class="left">
                        <span>ASIN : DX1213213</span>
                        <span>商品价格 : $542.00</span>
                    </div>
                    <div class="right">
                        <span class="goldtitle">本金余额 : <span class="huang">$200.00</span></span>
                        <span class="heititle">佣金余额 : <span class="huang">$200.00</span></span>
                        <el-button type="warning" plain>充 值</el-button>
                    </div>
                </div>
                <div class="listwrap">
                    <el-table
                    ref="multipleTable"
                    :data="tableData3"
                    show-summary
                    tooltip-effect="dark"
                    style="width: 100%">
                    <el-table-column
                    prop="keyword"
                    label="关键词">
                    </el-table-column>
                    <el-table-column
                    prop="reason"
                    label="行为">
                    </el-table-column>
                    <el-table-column
                    prop="thirty"
                    label="数量"
                    show-overflow-tooltip>
                    </el-table-column>
                    <el-table-column
                    prop="degree"
                    label="佣金单价"
                    show-overflow-tooltip>
                    </el-table-column>
                    <el-table-column
                    prop="evprice"
                    label="总消费佣金"
                    show-overflow-tooltip>
                    </el-table-column>
                    <el-table-column
                    prop="totalfee"
                    label="总本金"
                    show-overflow-tooltip>
                    </el-table-column>
                </el-table>
                </div>
            </div>
        </div>
            <div class="planlistFooter">
                <a href="javascript:;" class="putout left"><i><img src="./derive.png" alt=""></i>导出表单</a>
                <el-button type="warning" class="right">确认提交</el-button>
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
            evprice:"$362.00",
            totalfee:"$32323.00"
            }, {
            keyword:"xuanxui",
            reason:"好",
            thirty:"12123",
            degree:"12",
            evprice:"$362.00",
            totalfee:"$32323.00"
            }, {
           keyword:"xuanxui",
            reason:"好",
            thirty:"12123",
            degree:"12",
            evprice:"$362.00",
            totalfee:"$32323.00"
            }, {
            keyword:"xuanxui",
            reason:"好",
            thirty:"12123",
            degree:"12",
            evprice:"$362.00",
            totalfee:"$32323.00"
            }, {
            keyword:"xuanxui",
            reason:"好",
            thirty:"12123",
            degree:"12",
            evprice:"$362.00",
            totalfee:"$32323.00"
            }, {
            keyword:"xuanxui",
            reason:"好",
            thirty:"12123",
            degree:"12",
            evprice:"$362.00",
            totalfee:"$32323.00"
            }, {
            keyword:"xuanxui",
            reason:"好",
            thirty:"12123",
            degree:"12",
            evprice:"$362.00",
            totalfee:"$32323.00"
            }],
      }
     }
}
</script>
<style lang="scss">
   .planlist{
        background-color: #ffffff;
        border: 1px solid #cccccc;
        border-top: none;
        min-height: 300px;
        overflow: hidden;
        .main{
            padding: 15px 20px;
           .planlistHeader{
               height: 40px;
               background: #205081;
               h2{
               height: 40px;
                line-height: 40px;
                font-size: 14px;
                color: #ffffff;
                padding-left: 10px;
               }
           } 
           .planlistBody{
               border: 1px solid #cccccc;
               border-top: none;
               min-height: 100px;
               padding: 15px;
               .top{
                   overflow: hidden;
                   color: #666666;
                   .left{
                        margin-top: 8px;
                       span{
                           &:first-child{
                               margin-right: 50px;
                           }
                       }
                   }
                   .right{
                       .goldtitle{
                           margin-right: 50px;
                       }
                       .heititle{
                           margin-right: 40px;
                       }
                      .huang{
                          color: #e6a23c;
                      }
                   }
               }
               .listwrap{
                    border: 1px solid #e6e6e6;
                    margin-top: 20px;
                    .el-table thead tr th{
                        background-color: #edf5fc;
                    }
                }
           }
        }
        .planlistFooter{
            overflow: hidden;
            height: 100px;
            border-top: 1px solid #cccccc;
            background-color: #fafafa;
            padding: 35px 18px;
            box-sizing: border-box;
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
