<template>
  <div class="spreadsetup">
      <div class="keywordwrap">
          <el-input v-model="keywords" placeholder="请输入测评关键词"></el-input>
      </div>
      <div class="tablewrap">
        <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="自己提供" name="first">
            <div class="pingWrap">
            <el-input
            type="textarea"
            :autosize="{ minRows: 4, maxRows: 6}"
            placeholder="请输入评语内容，多个请用分号隔开"
            v-model="textarea3">
            </el-input>
            </div>
        </el-tab-pane>
        <el-tab-pane label="系统提供" name="second">
        </el-tab-pane>
      </el-tabs>
      </div>
      <div class="selectmeal">
          <div class="mealwrap">
            <div class="mealItem active">
                <p class="title">试用套餐</p>
                <div class="detail">
                    <p>测评数量 : 5个</p>
                    <p>周期 : 7天</p>
                    <p>费用 : $0</p>
                </div>
            </div>
            <div class="mealItem mealA">
                <p class="title">套餐A</p>
                <div class="detail">
                    <p>测评数量 : 15个</p>
                    <p>周期 : 15天</p>
                    <p>费用 : $199</p>
                </div>
            </div>
            <div class="mealItem mealB">
                <p class="title">套餐B</p>
                <div class="detail">
                    <p>测评数量 : 30个</p>
                    <p>周期 : 30天</p>
                    <p>费用 : $299</p>
                </div>
            </div>
            <div class="mealItem mealC">
                <p class="title">套餐C</p>
                <div class="detail">
                    <p>测评数量 : 90个</p>
                    <p>周期 : 90天</p>
                    <p>费用 : $899</p>
                </div>
            </div>
            <div class="mealItem setmeal">
                <p class="title">自定义套餐</p>
                <div class="detail">
                    <p>测评数量 : 90个</p>
                    <p>周期 : 90天</p>
                    <p>费用 : $899</p>
                    <span>（定价为$8每单）</span>
                </div>
            </div>
          </div>
      </div>
  </div>
</template>
<script>
export default {
     data() {
      return {
        keywords: '',
        activeName: 'first',
        textarea3:''
      }
     },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
}
</script>
<style lang="scss">
@import '../../../style/mixin';
.spreadsetup{
    padding: 0 30px;
    .tablewrap{
        margin-bottom: 20px;
        .el-tabs__item{
            margin-right: 10px;
            border: 1px solid #cccccc;
        }
        .el-tabs__nav-wrap{
            display: inline-block;
            padding-left: 94px;
            position: relative;
            &:before{
                content: '设置类型:';
                width: 94px;
                height: 40px;
                background-color: #fff;
                position: absolute;
                left: 0;
                top: 8px;
            }
            &:after{
                background-color: #ffffff;
            }
        }
        .el-tabs__item:hover{
            color: #205081;
        }
        .el-tabs__item.is-active{
            color: #205081;
            border: 1px solid #205081;
               &:before{
                content: "";
                position: absolute;
                bottom: 0;
                right: 0;
                width: 26px;
                height: 26px;
                background: url(./pitch_up.png) center center no-repeat;
            }
        }
        .el-tabs__active-bar{
            background-color: #ffffff;
            height: 0;
        }
        .pingWrap{
            padding-left: 94px;
            position: relative;
            &:before{
                content: '评语内容:';
                width: 94px;
                height: 40px;
                background-color: #fff;
                position: absolute;
                left: 0;
                top: 8px;
            }
        }
    }
    .keywordwrap{
        width: 60%;
        display: inline-block;
        padding-left: 94px;
        margin-bottom: 20px;
        position: relative;
        &:before{
            content: '测评关键词:';
            width: 94px;
            height: 40px;
            background-color: #fff;
            position: absolute;
            left: 0;
            top: 8px;
        }
    }
    .selectmeal{
        padding-left: 94px;
        margin-bottom: 20px;
        position: relative;
        &:before{
            content: '选择套餐:';
            width: 94px;
            height: 40px;
            background-color: #fff;
            position: absolute;
            left: 0;
            top: 8px;
        }
        .mealwrap{
            overflow: hidden;
            display: flex;
            .mealItem{
                flex: 1;
                height: 180px;
                box-sizing: border-box;
                border: 1px solid #cccccc;
                margin-right: 20px;
                position: relative;
                &:last-child{
                    margin-right: 0;
                }
                .title{
                    @include size(100%,38px);
                    background-color: #ececec;
                }
                .detail{
                    p{
                       padding-left: 22%;
                       margin-bottom: 15px;
                       &:first-child{
                           margin-top: 20px;
                       }
                   } 
                }
                &.mealA{
                    .title{
                        background-color: #fa9a35;
                        color: #ffffff;
                        }
                }
                &.mealB{
                    .title{
                        background-color: #10c55b;
                        color: #ffffff;
                        }
                }
                &.mealC{
                    .title{
                        background-color: #4ea1f8;
                        color: #ffffff;
                        }
                }
                &.active{
                    border-color: #205081;
                    .detail{
                        p{
                            color: #205081;
                        }
                    }
                    &::after{
                        content: '';
                        position: absolute;
                        bottom: 0;
                        right: 0;
                        width: 26px;
                        height: 26px;
                        background: url(./pitch_up.png) center center no-repeat;
                    }
                }
            }
        }
    }
}
</style>
