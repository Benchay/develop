<template>
    <div class="dealspreadsever">
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
                    <div class="entrySearch">
                        <el-input v-model="input" placeholder="请输入内容"></el-input>
                        <span class="insafter">X</span>
                    </div>
                    <div class="sellinputNum">
                         <el-input-number v-model="num1"  @change="handleChange" :min="1" label="描述文字"></el-input-number>
                    </div>
                    <div class="orderinputNum">
                         <el-input-number v-model="num2" @change="handleChange" :min="1" label="描述文字"></el-input-number>
                    </div>
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
        input:'',
        num1:'',
        num2:'',
        radio2: 3
       }
  },
    methods: {
    handleChange(value) {
        console.log(value);
      }
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

.dealspreadsever{
    padding-bottom: 38px;
    .tableWrap{
        overflow: hidden;
        .tabHeader{
            padding: 0 30px;
            display: flex;
            margin-bottom: 10px;
            div{
                flex: 3;
                height: 38px;
                text-align: center;
                background-color: #f5f5f5;
                margin-right: 20px;  
                border-radius: 20px 20px 0 0;
                border: 1px solid #cccccc;
                overflow: hidden;
                &.entry{
                    flex: 5;
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
                 display: flex;
                 padding: 0 30px;
                 margin-bottom: 20px;
                &>div{
                  flex: 3; 
                  height: 40px;
                  margin-right: 20px;   
                    &:last-child{
                margin-right: 0px;  
                }
                }
                .entrySearch{
                    flex: 5;
                    display: flex;
                    .insafter{
                        width: 40px;
                        text-align: center;
                        line-height: 40px;
                        font-size: 20px;
                        background-color: #fe6c6f;
                        color: #ffffff;
                    }
                    .el-input__inner{
                        flex: 1;
                        border-radius: 0;
                    }
                }
                .sellinputNum,.orderinputNum{
                    .el-input-number{
                        width: 100%;
                    }
                }
            }
        }
    }
}
</style>

