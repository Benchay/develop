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
                <div class="parameter">
                    <p>参数定制</p>
                </div>
            </div>
            <div class="tabBody">
                <div class="tabBodyItem">
                    <div class="entrySearch">
                        <span class="insbefore"><i><img src="./entrance_1.png" alt=""></i>搜索</span>
                        <el-input v-model="input" placeholder="请输入内容"></el-input>
                        <span class="insafter">X</span>
                    </div>
                    <div class="sellinputNum">
                         <el-input-number v-model="num1"  @change="handleChange" :min="1" label="描述文字"></el-input-number>
                    </div>
                    <div class="orderinputNum">
                         <el-input-number v-model="num2" @change="handleChange" :min="1" label="描述文字"></el-input-number>
                    </div>
                    <div class="parameterSelect">
                        <el-radio-group v-model="radio2">
                            <el-radio :label="3">Prime</el-radio>
                            <el-radio :label="6">15%评价</el-radio>
                            <el-radio :label="9">30%评价</el-radio>
                        </el-radio-group>
                    </div>
                </div>
                <div class="tabBodyItem">
                    <div class="entrySearch">
                        <span class="insbefore" style="background: #a8d2f7;"><i><img src="./entrance_2.png" alt=""></i>类目</span>
                        <el-input v-model="input" placeholder="请输入内容"></el-input>
                        <span class="insafter">X</span>
                    </div>
                    <div class="sellinputNum">
                         <el-input-number v-model="num1"  @change="handleChange" :min="1" label="描述文字"></el-input-number>
                    </div>
                    <div class="orderinputNum">
                         <el-input-number v-model="num2" @change="handleChange" :min="1" label="描述文字"></el-input-number>
                    </div>
                    <div class="parameterSelect">
                        <el-radio-group v-model="radio2">
                            <el-radio :label="3">Prime</el-radio>
                            <el-radio :label="6">15%评价</el-radio>
                            <el-radio :label="9">30%评价</el-radio>
                        </el-radio-group>
                    </div>
                </div>
                <div class="tabBodyItem">
                    <div class="entrySearch">
                        <span class="insbefore" style="background: #cec9f8;"><i><img src="./entrance_3.png" alt=""></i>广告</span>
                        <el-input v-model="input" placeholder="请输入内容"></el-input>
                        <span class="insafter">X</span>
                    </div>
                    <div class="sellinputNum">
                         <el-input-number v-model="num1"  @change="handleChange" :min="1" label="描述文字"></el-input-number>
                    </div>
                    <div class="orderinputNum">
                         <el-input-number v-model="num2" @change="handleChange" :min="1" label="描述文字"></el-input-number>
                    </div>
                    <div class="parameterSelect">
                        <el-radio-group v-model="radio2">
                            <el-radio :label="3">Prime</el-radio>
                            <el-radio :label="6">15%评价</el-radio>
                            <el-radio :label="9">30%评价</el-radio>
                        </el-radio-group>
                    </div>
                </div>
                <div class="tabBodyItem">
                    <div class="entrySearch">
                        <span class="insbefore" style="background: #fbbb8e;"><i><img src="./entrance_4.png" alt=""></i>秒杀</span>
                        <el-input v-model="input" placeholder="请输入内容"></el-input>
                        <span class="insafter">X</span>
                    </div>
                    <div class="sellinputNum">
                         <el-input-number v-model="num1"  @change="handleChange" :min="1" label="描述文字"></el-input-number>
                    </div>
                    <div class="orderinputNum">
                         <el-input-number v-model="num2" @change="handleChange" :min="1" label="描述文字"></el-input-number>
                    </div>
                    <div class="parameterSelect">
                        <el-radio-group v-model="radio2">
                            <el-radio :label="3">Prime</el-radio>
                            <el-radio :label="6">15%评价</el-radio>
                            <el-radio :label="9">30%评价</el-radio>
                        </el-radio-group>
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

.spareadsever{
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
                &.parameter{
                    flex: 4;
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
                    .insbefore{
                        width: 80px;
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
                .parameterSelect{
                    flex: 4;
                }
                .sellinputNum,.orderinputNum{
                    .el-input-number{
                        width: 100%;
                    }
                }
                .parameterSelect{
                    line-height: 40px;
                    overflow: hidden;
                    max-width: 329px;
                    .el-radio-group{
                        padding-left: 20px;
                        white-space: nowrap;
                        .el-radio__inner{
                            border-radius: 0;
                            &:after{
                                width: 14px;
                                height: 14px;
                                background-color: #205081;
                                background-image: url(./checked3.png);
                                background-size:10px 10px;
                                background-repeat:no-repeat;
                                background-position: center;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>

