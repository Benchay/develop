<template>
    <div class="spareadsever">
        <div class="tableWrap">
            <div class="tabHeader">
                <div class="entry">
                    <p>入口</p>
                </div>
                <div class="sellNum">
                    <p>刷销量<span>($20.00/个)</span></p>
                </div>
                <div class="orderNum">
                    <p>每单购买数</p>
                </div>
            </div>
            <div class="tabBody">
                <div class="tabBodyItem">
                    <div>
                        <span>搜索</span>
                        <el-input v-model="input" placeholder="请输入内容"></el-input>
                        <span>X</span>
                    </div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
        <div class="addMore">
            <el-button plain>+ 添加更多</el-button>
        </div>
    </div>
</template>
<script>
export default {
  data(){
       return{
        
       }
  },
    methods: {
 
    }
}
</script>
<style lang="scss">
.el-collapse-item__content{
    position: relative;
    .addMore{
    width: 100%;
    height: 38px;
    position: absolute;
    bottom: 0;
    left: 0;
    text-align: center;
    background-color: #f5f5f5;
    .el-button{
        border: none;
        width: 120px;
        height: 38px;
        color: #205081;
        font-weight: 600;
        background-color: #f5f5f5;
    }
    }
}

.spareadsever{
    padding-bottom: 38px;
    .tableWrap{
        overflow: hidden;
        .tabHeader{
            padding: 0 30px;
            display: flex;
            div{
                flex: 1;
                height: 38px;
                text-align: center;
                background-color: #f5f5f5;
                margin-right: 20px;  
                border-radius: 20px 20px 0 0;
                border: 1px solid #cccccc;
                overflow: hidden;
                &.entry{
                    flex: 2;
                }
                &:last-child{
                margin-right: 0px;  
                }
                p{
                  height: 38px;  
                  line-height: 38px;
                  span{
                      color: #ee811e;
                      margin-left: 6px;
                  }
                }
            }
        }
        .tabBody{
            .tabBodyItem{
                    
            }
        }
    }
}
</style>

