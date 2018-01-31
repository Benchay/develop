<template>
    <div class="spreadFoot">
        <div class="pgrounp">
            <P>任务总数 : <span class="col21">200</span></P>
            <P><span>所需本金 : <span class="orange">$200.00</span></span><span>所需佣金 : <span class="orange">10</span></span></P>
        </div>
        <div class="btngrounp">
            <el-button type="warning">确认提交</el-button>
        </div>
    </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss">
   .spreadFoot{
        position: absolute;
        bottom: 0;
        left: 0;
        padding: 30px 0;
        box-sizing: border-box;
        background-color: #fafafa;
        display: flex;
        width: 100%;
        height: 100px;
        border: 1px solid #cccccc;
        border-left: none; 
        border-right: none;
        .pgrounp{
            flex: 1;
            padding-left: 20px;
            p{
                margin-bottom: 10px;
                font-size: 14px;
                &>span{
                    margin-right: 15px;
                }
            }
            .orange{
                color: #ee811e;
            }
            .col21{
                color: #205081;
            }
        }
        .btngrounp{
            width: 158px;
            
        }
    }
</style>
