<template>
    <div class="dealspreadsever">
        <div class="tableWrap">
            <div style="text-align: right; margin-bottom: 20px; overflow: hidden;">
                <el-checkbox v-model="showdeal">显示Deal活动购买件数</el-checkbox>
            </div>
            <div class="tabHeader">
                <div class="entry">
                    <p>入口</p>
                </div>
                <div class="sellNum">
                    <span class="left">刷销量<span style="color: #ee811e;">($20.00/个)</span></span>
                    <span class="right">每单购买数</span>
                </div>
            </div>
            <div class="tabBody">
                <div class="tabBodyItem">
                    <div class="entrySearch">
                        <span class="insbefore" style="background: #efabaf;"><i><img src="./entrance_1.png" alt=""></i>关键词</span>
                        <el-input v-model="input" placeholder="请输入内容"></el-input>
                        <span class="insafter">X</span>
                    </div>
                    <div class="sonumWrap">
                        <div class="sellinputNum">
                            <el-input-number v-model="num1"  @change="handleChange" :min="1" label="描述文字"></el-input-number>
                        </div>
                        <div class="orderinputNum" v-if="showdeal">
                            <el-input-number v-model="num2" @change="handleChange" :min="1" label="描述文字"></el-input-number>
                        </div>
                     </div>
                </div>
                <div class="tabBodyItem">
                    <div class="entrySearch">
                        <span class="insbefore" style="background: #4499db;"><i><img src="./entrance_2.png" alt=""></i>Today's deal</span>
                        <el-input v-model="input" placeholder="请输入内容"></el-input>
                        <span class="insafter">X</span>
                    </div>
                    <div class="sonumWrap">
                        <div class="sellinputNum">
                            <el-input-number v-model="num1"  @change="handleChange" :min="1" label="描述文字"></el-input-number>
                        </div>
                        <div class="orderinputNum" v-if="showdeal">
                            <el-input-number v-model="num2" @change="handleChange" :min="1" label="描述文字"></el-input-number>
                        </div>
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
        showdeal: true,
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
                flex: 1;
                height: 38px;
                text-align: center;
                background-color: #f5f5f5;
                margin-right: 20px;  
                border-radius: 20px 20px 0 0;
                border: 1px solid #cccccc;
                overflow: hidden;
                &:last-child{
                margin-right: 0px;  
                }
                &.sellNum{
                    display: flex;
                    justify-content: space-around;
                }
                span{
                    height: 38px;  
                    line-height: 38px;
                    margin-left: 6px;
                }
            }
        }
        .tabBody{
            .tabBodyItem{
                 display: flex;
                 padding: 0 30px;
                 margin-bottom: 20px;
                &>div{
                  flex: 1; 
                  height: 40px;
                  margin-right: 20px;   
                    &:last-child{
                margin-right: 0px;  
                }
                }
                .entrySearch{
                    display: flex;
                    .insbefore{
                        width: 120px;
                        text-align: right;
                        line-height: 40px;
                        border-radius: 20px 0 0 20px;
                        background-color: #75d282;
                        padding-right: 15px;
                        color: #ffffff;
                        i{
                            display: inline-block;
                            vertical-align: top;
                            margin-top: 4px;
                            margin-right: 4px;
                        }
                    }
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
                .sonumWrap{
                    display: flex;
                    .sellinputNum{
                        flex: 2;
                        .el-input-number{
                            width: 100%;
                        }
                    }
                    .orderinputNum{
                        flex: 1;
                        margin-left: 15px;
                        .el-input-number{
                            width: 100%;
                        }
                    }
                 }
            }
        }
    }
}
</style>

