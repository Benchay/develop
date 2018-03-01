<template>
  <div class="allspread">
    <div class="stateSelect">
        <span>推广类型 : </span>
        <el-radio-group v-model="spreadState">
            <el-radio-button label="全部"></el-radio-button>
            <el-radio-button label="流量推广（20）"></el-radio-button>
            <el-radio-button label="销量推广（10）"></el-radio-button>
            <el-radio-button label="排名优化 （20）"></el-radio-button>
            <el-radio-button label="关联推广 （20）"></el-radio-button>
        </el-radio-group>
    </div>
    <div class="spreadwrap">
        <div class="spreadItem">
            <div class="imgwrap">
                <img src="./tg_1.png" alt="">
            </div>
            <div class="detailwrap">
                <div class="starbtnwrap">
                    <div class="star">
                        <span class="starword">流量推广</span>
                        <el-rate v-model="value1"  disabled></el-rate>
                    </div>
                    <el-button type="warning" class="right">立即下单</el-button>
                </div>
                <div class="worddetail">
                    <p>
                      通过多种高效可控的入口方式，如关键词、类目、品牌等，结合买家账号标签和方案，迅速为店铺或产品引入精准流量，有效提高店铺或产品曝光和排名权重，不论你是新店铺还是打造爆款，流量推广将会是你不可或缺的必备工具
                    </p>
                </div>
            </div>
        </div>
        <div class="spreadItem">
            <div class="imgwrap">
                <img src="./tg_2.png" alt="">
            </div>
            <div class="detailwrap">
                <div class="starbtnwrap">
                    <div class="star">
                        <span class="starword">销量推广</span>
                        <el-rate v-model="value1"  disabled></el-rate>
                    </div>
                    <el-button type="warning" class="right">立即下单</el-button>
                </div>
                <div class="worddetail">
                    <p>
                      增加商品的销量，提高转化率，获取较好的搜索排名，从而提升亚马逊卖家平台的转化程度和亚马逊产品的销量，提供不同留评比例，快速上Reviews，快速积累feedback
                    </p>
                </div>
            </div>
        </div>
        <div class="spreadItem">
            <div class="imgwrap">
                <img src="./tg_3.png" alt="">
            </div>
            <div class="detailwrap">
                <div class="starbtnwrap">
                    <div class="star">
                        <span class="starword">周期螺旋</span>
                        <el-rate v-model="value1"  disabled></el-rate>
                    </div>
                    <el-button type="warning" class="right">立即下单</el-button>
                </div>
                <div class="worddetail">
                    <p>
                      用螺旋的方式，可根据不同时期的产品，周期性的安排推广方案，支持每天执行不同的推广服务和数量，实现产品数据（点击率、收藏率、加购率、转化率等）达到平衡稳定状态
                    </p>
                </div>
            </div>
        </div>
        <div class="spreadItem">
            <div class="imgwrap">
                <img src="./tg_4.png" alt="">
            </div>
            <div class="detailwrap">
                <div class="starbtnwrap">
                    <div class="star">
                        <span class="starword">测评推广</span>
                        <el-rate v-model="value1"  disabled></el-rate>
                    </div>
                    <el-button type="warning" class="right">立即下单</el-button>
                </div>
                <div class="worddetail">
                    <p>
                      由真实的测评人员搜索购买，提供百分百真实测评，把引来的流量提升转化率，通过测评推广，卖家可以更安全、高效、省力的拥有真实VP review
                    </p>
                </div>
            </div>
        </div>
        <div class="spreadItem">
            <div class="imgwrap">
                <img src="./tg_5.png" alt="">
            </div>
            <div class="detailwrap">
                <div class="starbtnwrap">
                    <div class="star">
                        <span class="starword">排名优化</span>
                        <el-rate v-model="value1"  disabled></el-rate>
                    </div>
                    <el-button type="warning" class="right">立即下单</el-button>
                </div>
                <div class="worddetail">
                    <p>
                      提供精准关键词在一定周期内将商品推广到首页，并按天计费维持15天，帮助你抓住每一个提升产品排名的机会，不断优化提升listing排名，提升关键词权重，从而获得流量、销售增长
                    </p>
                </div>
            </div>
        </div>
        <div class="spreadItem">
            <div class="imgwrap">
                <img src="./tg_6.png" alt="">
            </div>
            <div class="detailwrap">
                <div class="starbtnwrap">
                    <div class="star">
                        <span class="starword">秒杀活动</span>
                        <el-rate v-model="value1"  disabled></el-rate>
                    </div>
                    <el-button type="warning" class="right">立即下单</el-button>
                </div>
                <div class="worddetail">
                    <p>
                      产品参与deal活动期间，可在短时间内加大产品销量，同时可积累良好的反馈评级，帮助产品在下次参与秒杀活动提供良好的基础
                    </p>
                </div>
            </div>
        </div>
        <div class="spreadItem">
            <div class="imgwrap">
                <img src="./tg_7.png" alt="">
            </div>
            <div class="detailwrap">
                <div class="starbtnwrap">
                    <div class="star">
                        <span class="starword">关联推广</span>
                        <el-rate v-model="value1"  disabled></el-rate>
                    </div>
                    <el-button type="warning" class="right">立即下单</el-button>
                </div>
                <div class="worddetail">
                    <p>
                      把自己需要关联的产品，通过一定的关联形式（浏览关联、购买关联、广告关联、对比关联等）获得更多的曝光率，可以和自己产品关联，也可以和其他大卖的产品关联，如Hot new relases 或者 飙升榜的产品关联，从而提升推广主产品销量
                    </p>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
      return{
          value1:3.7
      }
  }
}
</script>
<style lang="scss">
.allspread{
    background-color: #ffffff;
    border: 1px solid #cccccc;
    border-top: none;
    position: relative;
    .stateSelect{
        margin: 0px 0px 20px;
        padding: 5px 20px;
        font-size: 16px;
        border-bottom: 1px solid #f5f5f5;
    .el-radio-button__orig-radio:checked+.el-radio-button__inner{
        background-color: #FFF;
        font-weight: 600;
        color: #205081; 
        border-color: #ffffff;
    }
    .el-radio-button__inner{
        border: 1px solid #fff;
    }
    }
    .spreadwrap{
        padding: 20px;
        .spreadItem{
            width: 100%;
            height: 164px;
            box-sizing: border-box;
            border: 1px solid #cccccc;
            display: flex;
            margin-bottom: 20px;
            background-color: #fcfcfc;
        }
        .imgwrap{
            width: 120px;
            height: 120px;
            box-sizing: border-box;
            border: 1px solid #adcceb;
            padding: 15px;
            margin: 20px;
            border-radius: 8px;
        }
        .detailwrap{
            flex: 1;
            margin: 20px 0;
            padding: 0 20px;
            border-left: 1px dashed #d4d4d4;
            .starbtnwrap{
                overflow: hidden;
                margin-bottom: 20px;
                .star{
                    float: left;
                    margin-top: 14px;
                    .starword{
                        display: inline-block;
                        vertical-align: top;
                        font-size: 16px;
                        margin-right: 15px;
                    }
                    .el-rate{
                        display: inline-block;
                        vertical-align: top;
                    }
                }
                .el-button{
                    width: 120px;
                    height: 44px;
                    font-size: 16px;
                }
            }
            .worddetail{
                font-size: 14px;
                line-height: 18px;
                color: #666666;
            }
        }
    }
}
</style>
