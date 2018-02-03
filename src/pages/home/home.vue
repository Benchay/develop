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
        <div class="top1">
          <p>财务账户</p><p>查看明细＞</p>
        </div>
        <div class="main">
          <p>账户余额：</p>
          <p>￥6666666666666</p>
          <p>冻结金额：￥200.00</p>
        </div>
        <div class="button">
          <el-button type="success" size="small">充 值</el-button>
          <el-button type="warning" size="small">提 现</el-button>
        </div>
      </div>
    </div>
    <div class="side">
      <div class="data">
        <div class="top1">
          <p>数据统计</p><p>更多＞</p>
        </div>
        <div class="main">
          <ul>
            <li>手机</li>
            <li>任务机</li>
            <li>代理IP</li>
            <li>买家账号</li>
          </ul>
        </div>
      </div>
      <div class="data">
        <div class="top1">
          <p>收益趋势</p><p>更多＞</p>
        </div>
        <div class="main">

        </div>
      </div>
    </div>
    <div id="notice">
      <div class="notice1">
        <div class="top1">
          <p>公告</p><p>更多＞</p>
        </div>
        <div class="main">

        </div>
      </div>
      <div class="notice2">
        <div class="top1">
          <p>新手入门</p><p>更多＞</p>
        </div>
        <div class="main">
             <img src="./111.png" alt="">
        </div>
      </div>
    </div>
    <div class="foot">
      <div class="footTop">小功能</div>
      <div class="main">
            <ul class="footMain">
              <li>
                <img src="./111.png" alt="">
              </li>
              <li>
                <img src="./111.png" alt="">
              </li>
              <li>
                <img src="./111.png" alt="">
              </li>
              <li>
                <img src="./111.png" alt="">
              </li>
              <li>
                <img src="./111.png" alt="">
              </li>
            </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components:{

  },
  data(){
    return{
    }
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
      .first{
        margin-top: 20px;
        display: flex;
        .slideShow{
          width:66%;
          .el-carousel{
            height: 270px;
            overflow: hidden;
            img{
              width:100%;
              height:100%;
            }
          }
        }
        .rightFinance{
          font-size: 16px;
          width:32%;
          height:250px;
          margin-left: 2%;
          background: #fff;
          border:1px solid #d7d7d7;
          border-radius: 5px;
          padding: 10px 0;
          .main{
            font-size: 16px;
            margin-top: 10px;
            border-top:1px dashed #d7d7d7;
            padding: 0 15px;
            p{
              height: 40px;
              line-height: 40px;
              &:nth-child(2){
                display: flex;
                justify-content: center;
                font-size: 30px;
                color:orange;
                height: 60px;
                line-height: 60px;
              }
            }
          }
          .button{
            display: flex;
            justify-content: center;
            margin-top: 8px;
            button:first-child{
              margin-right: 40px;
            }
          }
        }
      }
      .side{
        display: flex;
        margin-top: 20px;
        .data{
          font-size: 16px;
          width:50%;
          height:250px;
          background: #fff;
          border:1px solid #d7d7d7;
          border-radius: 5px;
          padding: 10px 0;
          .main {
            font-size: 16px;
            margin-top: 10px;
            border-top: 1px dashed #d7d7d7;
            padding: 0 15px;
            ul{
              display: flex;
              justify-content: space-between;
              padding: 0 4%;
              li{
                width:23%;
              }
            }
          }
          &:first-child{
            margin-right: 1%;
          }
          &:last-child{
            margin-left: 1%;
          }
        }
      }
      #notice{
        display: flex;
        margin-top: 20px;
        .notice1,.notice2{
          font-size: 16px;
          width:65%;
          height:250px;
          background: #fff;
          border:1px solid #d7d7d7;
          border-radius: 5px;
          padding: 10px 0;
          &:first-child{
            margin-right: 1%;
          }
          &:last-child{
            margin-left: 1%;
          }
          .main {
            font-size: 16px;
            margin-top: 10px;
            border-top: 1px dashed #d7d7d7;
            padding: 0 15px;
          }
        }
        .notice2{
          width: 35%;
        }

      }
      .foot{
        margin-top: 20px;
        font-size: 16px;
        height:250px;
        background: #fff;
        border:1px solid #d7d7d7;
        border-radius: 5px;
        padding: 10px 0;
        .footTop{
          display: flex;
          justify-content: center;
          font-weight: bold;
        }
        .main {
          font-size: 16px;
          margin-top: 10px;
          border-top: 1px dashed #d7d7d7;
          padding: 0 15px;
        }
      }
    }

</style>
