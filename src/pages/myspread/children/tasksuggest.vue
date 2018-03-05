<template>
  <div class="tasksuggest">
      <div class="top">
        <el-row :gutter="20">
            <el-col :span="8" :offset="16">
                <div class="grid-content bg-purple" style="float: right;">
                    <el-input v-model="valueSeach" size="small" placeholder="请输入ASN" style="width: 240px;"></el-input>
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
            label="产品ASIN"
            width="220">
        </el-table-column>
        <el-table-column
            prop="sellcount"
            label="销量成功总数"
            width="180">
        </el-table-column>
        <el-table-column
            prop="count"
            label="评论总数数/成功数/待评数/评价失败数"
            >
        </el-table-column>
        <el-table-column
            prop="precent"
            label="成功评论比例"
            width="180"
            >
        </el-table-column>
        <el-table-column
            prop="talkcount"
            label="剩余评语数"
            width="180">
        </el-table-column>
        <el-table-column
            label="操作">
            <template slot-scope="scope">
                <el-button type="primary" @click="centerDialogVisible = true">导入评价</el-button><el-button plain>查看评价</el-button>
            </template>
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
      title="批量导入评语"
      :visible.sync="centerDialogVisible"
      width="33%"
      center
      class="tijiaodiscuss">
        <p style="margin-bottom: 20px;"><span class="titledai">商品ID:</span>
        <el-input size="small" v-model="title" placeholder="请输入商品ID"
                    style="width: 80%; margin-right: 10px"></el-input>
        </p>
        <p style="margin-bottom: 20px;"><span class="titledai">导入文件:</span>
        <el-input size="small" v-model="title" disabled
                    style="width: 62%; margin-right: 10px"></el-input>
                    <el-button>浏览</el-button>
        </p>
        <p style="text-align: center;"><a href="javascript:;" class="putout"><i><img src="./down.png" alt=""></i>下载模版(支持导入csw格式文件)</a></p>
        <p style="text-align: center; color: #999999; margin-top: 10px;">(注意：批量导入不支持图片和视频)</p>
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
            centerDialogVisible:false,
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
            precent:"5%",
            talkcount:'50',
            }, {
            productID: '我是产品的ID',
            sellcount: '500',
            count: '80/50/20',
            precent:"5%",
            talkcount:'50',
            }, {
            productID: '我是产品的ID',
            sellcount: '500',
            count: '80/50/20',
            precent:"5%",
            talkcount:'50',
            }, {
            productID: '我是产品的ID',
            sellcount: '500',
            count: '80/50/20',
            precent:"5%",
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
    .paginationwrap{
        margin-top: 20px;
        text-align: right;
    }
    .tijiaodiscuss{
        .titledai {
            display: inline-block;
            vertical-align: top;
            width: 60px;
            margin-right: 10px;
            white-space: nowrap;
            }
        .putout{
            display: inline-block;
            box-sizing: border-box;
            width: 300px;
            height: 30px;
            line-height: 30px;
            font-size: 14px;
            border: 1px solid #2b9ee7;
            text-align: center;
            border-radius: 4px;
            color: #3c8bff;
            background-color: #eef8ff;
            i{
                display: inline-block;
                vertical-align: top;
                padding-top: 3px;
                margin-top: 3px;
                margin-right: 5px;
            }
        }
    }
}
</style>

