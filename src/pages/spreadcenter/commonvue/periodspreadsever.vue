<template>
  <div class="periodspreadsever">
      <div class="topword">
        <el-input v-model="input" placeholder="请输入内容" style="width: 400px;"></el-input>
         <el-button style="background: #205081; color: #ffffff; margin: 0 15px;">选择执行方案</el-button>
         <span>当前已选方案 : 模版一</span>
          <div style="float: right; margin-bottom: 20px;">
              <el-checkbox v-model="showdeal">显示Deal活动购买件数</el-checkbox>
          </div>
      </div>
      <div class="bottommain">
          <div class="tabHeader">
                <div>
                    <p>周期天数</p>
                    <p style="color: #ee811e;">新增</p>
                </div>
                <div>
                    <p>普通点击</p>
                    <p style="color: #ee811e;">($0.2/个)</p>
                </div>
                <div>
                    <p>普通加购</p>
                    <p style="color: #ee811e;">($0.5/个)</p>
                </div>
                <div>
                    <p>普通收藏</p>
                    <p style="color: #ee811e;">($0.5/个)</p>
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
                        <span class="insafter">X</span>
                    </div>
                     <div class="sellinputNum">
                            <el-input-number v-model="num1"  @change="handleChange" :min="1" label="描述文字"></el-input-number>
                        </div>
                         <div class="sellinputNum">
                            <el-input-number v-model="num1"  @change="handleChange" :min="1" label="描述文字"></el-input-number>
                        </div>
                         <div class="sellinputNum">
                            <el-input-number v-model="num1"  @change="handleChange" :min="1" label="描述文字"></el-input-number>
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
                        <span class="insafter">X</span>
                    </div>
                     <div class="sellinputNum">
                            <el-input-number v-model="num1"  @change="handleChange" :min="1" label="描述文字"></el-input-number>
                        </div>
                         <div class="sellinputNum">
                            <el-input-number v-model="num1"  @change="handleChange" :min="1" label="描述文字"></el-input-number>
                        </div>
                         <div class="sellinputNum">
                            <el-input-number v-model="num1"  @change="handleChange" :min="1" label="描述文字"></el-input-number>
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
        <div class="btnwrap">
            <el-button style="background: #205081; color: #ffffff;">保存方案</el-button>
        </div>
      </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
         showdeal: true,
        input: '',
        editableTabs: [{
          title: '第1天',
          name: '1',
        }, {
          title: '第2天',
          name: '2',
        }],
        tabIndex: 2,
        tableData: [{
            date: '2016-05-02',
          }, {
            date: '2016-05-04',
          }, {
            date: '2016-05-01',
          }, {
            date: '2016-05-03',
          }],
          num1: 1,
      }
    },
    methods: {
    
    }
  }
</script>
<style lang="scss">
    .periodspreadsever{
        .topword{
          overflow: hidden;
          padding: 0 20px 15px 80px;
          margin: 0 -20px;
          position: relative;
          border-bottom: 1px solid #cccccc;
          &:before{
              content: '关键词:';
              width: 60px;
              height: 40px;
              background-color: #fff;
              position: absolute;
              left: 20px;
              top: 8px;
          }
        }
        .bottommain{
          padding-top: 20px;
          .tabHeader{
            padding: 0 30px;
            display: flex;
            margin-bottom: 10px;
            div{
                flex: 1;
                height: 50px;
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
                    flex: 2;
                    display: flex;
                    justify-content: space-around;
                    padding-top: 5px;
                    box-sizing: border-box;
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
                        flex: 1;
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
                    flex: 2;
                    display: flex;
                    .sellinputNum{
                        .el-input-number{
                            width: 100%;
                        }
                    }
                    .orderinputNum{
                        margin-left: 15px;
                        .el-input-number{
                            width: 100%;
                        }
                    }
                 }
            }
        }
            .btnwrap{
                text-align: center;
                margin-top: 20px;
            }
        }
    }
</style>
