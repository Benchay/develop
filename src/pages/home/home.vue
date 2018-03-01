<template>
  <div class="homeContent">
    <div class="first">
      <div class="slideShow">
        <el-carousel>
          <el-carousel-item>
            <img src="./111.png" alt="">
          </el-carousel-item>
          <el-carousel-item>
            <img src="./111.png" alt="">
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="rightFinance">
          <div class="finaccount">
              <div class="cardheader">
                  <h2>财务账户</h2>
                  <span>查看明细<i class="morewrap"><img src="./more.png" alt=""></i></span>
              </div>
              <div class="goldwrap">
                <p class="firegold">账户余额：<span style="color: #f3900c;">${{userFinance.amount}}</span></p>
                <p class="freezegold">冻结金额：￥<span>{{userFinance.frozenAmount}}</span></p>
              </div>
              <div class="btngroup">
                   <router-link  :to='{path:"/finance/recharge"}'><el-button type="warning">充值</el-button></router-link>
                  <el-button type="success">提现</el-button>
              </div>
          </div>
          <div class="comaccount">
              <div class="cardheader">
                  <h2>金币账户</h2>
                  <span>查看明细<i class="morewrap"><img src="./more.png" alt=""></i></span>
              </div>
              <div class="goldwrap">
                <p class="firegold yonggold">佣金余额：<span style="color: #f3900c;">$66666666666666666666</span></p>
                <p class="freezegold">冻结金额：￥200.00</p>
              </div>
               <div class="btngroup">
                  <el-button type="primary">购买</el-button>
              </div>
          </div>
      </div>
    </div>
    <div class="side">
     <div class="sideitem">
          <div class="cardheader">
              <h2>数据统计</h2>
              <span>更多<i class="morewrap"><img src="./more.png" alt=""></i></span>
          </div>
          <div class="plate">
              <div class="plateitem">

              </div>
              <div class="plateitem"></div>
              <div class="plateitem"></div>
              <div class="plateitem"></div>
          </div>
      </div>
     <div class="sideitem">
          <div class="cardheader">
              <h2>收益趋势</h2>
              <span>更多<i class="morewrap"><img src="./more.png" alt=""></i></span>
          </div>
      </div>
    </div>
    <div class="aduser">
       <div class="aduseritem">
          <div class="cardheader">
              <h2>公告</h2>
              <span>更多<i class="morewrap"><img src="./more.png" alt=""></i></span>
          </div>
          <div class="adcontent">
              <div class="adcontentitem">
                  <div class="adavatarimg">
                      <img src="./111.png" alt="">
                  </div>
                  <p>

                  </p>
              </div>
          </div>
      </div>
       <div class="aduseritem">
          <div class="cardheader">
              <h2>新手入门</h2>
              <span>更多<i class="morewrap"><img src="./more.png" alt=""></i></span>
          </div>
          <div class="xinshouwrap">
              <img src="./xinshou.png" alt="">
          </div>
      </div>
    </div>
    <div class="foot">
      <p class="foottitle">小功能</p>
      <div class="footcontent">
        <div><img src="./111.png" alt=""></div>
        <div><img src="./111.png" alt=""></div>
        <div><img src="./111.png" alt=""></div>
        <div><img src="./111.png" alt=""></div>
        <div><img src="./111.png" alt=""></div>
      </div>
    </div>
  </div>
</template>

<script>
import {callApiForMbs} from '@/data/callApi'
export default {
  components:{

  },
  data(){
    return{
      userFinance: {
        activeAlertness: '',
        alertnessAmount:'',
        amount:'',
        companyId: '',
        distributorCompanyId: '',
        earnAmount: '',
        earnCoin: '',
        frozenAmount: '',
        gmtCreate: '',
        gmtModify: '',
        id: '',
        status: '',
        version: ''
      },
    }
  },
  created: function () {
    let me = this
    callApiForMbs('/finance/get_finance_account', {}, function (res) {
      if (res.status >= 200 && res.status < 300) {
        if (res.data.success) {
          console.log(res.data.content)
          me.userFinance = res.data.content
          if (res.data.content.alertnessAmount) {
            me.earlyWarn = true
          } else {
            me.earlyWarn = false
          }
        }
      }
    })
  }
}
</script>

<style lang="scss">
@import '../../style/mixin';
    .homeContent{
    .top1{
        height: 25px;
        line-height: 25px;
        display: flex;
        justify-content: space-between;
        margin-right: 10px;
        p:first-child{
        border-left:5px solid #205081;
        padding-left: 10px;
        font-weight: bold;
        }
    }
    .cardheader{
        width: 100%;
        height: 40px;
        padding: 10px 0;
        box-sizing: border-box;
        overflow: hidden;
        border-bottom: 1px dashed #e9ebea;
        h2{
            padding-left: 10px;
            display: inline-block;
            vertical-align: top;
            border-left: 4px solid #205081;
            width: 125px;
            height: 20px;
            font-size: 14px;
            line-height: 20px;
        }
        span{
            margin-right: 10px;
            display: inline-block;
            vertical-align: top;
            font-size: 14px;
            height: 20px;
            line-height: 20px;
            color: #999999;
            cursor: pointer;
            float: right;
            i{
                display: inline-block;
                vertical-align: middle;
                margin-left: 5px;
            }
        }
    }
      .first{
        margin-top: 20px;
        display: flex;
        .slideShow{
          flex: 1;
          .el-carousel{
            overflow: hidden;
            .el-carousel__container{
              height: 374px;
            }
            img{
              width:100%;
              height:100%;
            }
          }
        }
        .rightFinance{
          font-size: 16px;
          width:355px;
          height:374px;
          margin-left: 20px;
          overflow: hidden;
          .finaccount,.comaccount{
            width: 100%;
            height: 180px;
            background: #fff;
            border: 1px solid #cccccc;
            box-sizing: border-box;
            border-radius: 4px;
            margin-bottom: 14px;
          }
            .goldwrap{
                padding: 20px 15px 0;
                color: #666666;
            }
            .firegold{
                padding-left: 30px;
                margin-bottom: 20px;
                position: relative;
                &:before{
                    position: absolute;
                    top: -6px;
                    left: 0;
                    width: 24px;
                    height: 24px;
                    content: '';
                    background-image: url(./money.png);

                }
            }
            .firegold.yonggold{
                &:before{
                    background-image: url(./gold.png);
                }
            }
            .freezegold{
                padding-left: 30px;
                margin-bottom: 20px;
                position: relative;
                &:before{
                    position: absolute;
                    top: -3px;
                    left: 0;
                    width: 24px;
                    height: 24px;
                    content: '';
                    background-image: url(./dong.png);

                }
            }
            .btngroup{
                text-align: center;
            }
        }
      }
      .side{
        display: flex;
        margin-top: 20px;
        .sideitem{
          flex: 1;
          border-radius: 4px;
          border:1px solid #cccccc;
          margin-right: 16px;
          height: 258px;
          background: #ffffff;
          &:last-child{
            margin-right: 0;
          }
        }
      }
      .aduser{
        display: flex;
        margin-top: 20px;
        .aduseritem{
          flex: 2;
          height: 228px;
          border-radius: 4px;
          border:1px solid #cccccc;
          background: #ffffff;
          margin-right: 16px;
          &:last-child{
            flex: 1;
            margin-right: 0;
            .cardheader{
              border-bottom: none;
            }
          }
          .xinshouwrap{
            @include wh(100%, 188px);
            img{
            @include wh(100%, 100%);
            }
          }
        }
      }
      .foot{
        margin-top: 20px;
        font-size: 16px;
        height:260px;
        background: #fff;
        border:1px solid #cccccc;
        border-radius: 4px;
        .foottitle{
          width: 100%;
          height: 40px;
          line-height: 40px;
          text-align: center;
          font-weight: bold;
          border-bottom: 1px dashed #e9ebea;
        }
        .footcontent{
          display: flex;
          padding: 30px 0;
          height: 220px;
          box-sizing: border-box;
          &>div{
            flex: 1;
            margin: 0 40px;
            img{
              width: 100%;
              height: 100%;
            }
          }
        }
      }
    }

</style>
