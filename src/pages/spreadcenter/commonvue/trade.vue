<template>
  <div class="trade">
    <div v-if="added">
      <div class="tradeAvatar">
        <img src="./111.png" width="100%" height="100%" alt="">
      </div>
      <div class="tradeName">
        <p class="detail">控制反馈：控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；
        </p>
        <div class="priceWrap">
          <div class="left">
            <span>价格: {{listing.price}}</span>
            <span class="right">ASIN:{{listing.asin}}</span>
          </div>
          <div class="right">
            <el-checkbox v-model="listing.followSell">跟卖</el-checkbox>
            <el-checkbox v-model="listing.platformDelivery">FBA</el-checkbox>
          </div>
        </div>
        <div class="size">
          <span class="scTitle">Size : </span>
          <el-radio-group v-model="radioSize" size="small">
            <el-radio-button label="S"></el-radio-button>
            <el-radio-button label="M"></el-radio-button>
            <el-radio-button label="L"></el-radio-button>
            <el-radio-button label="XL"></el-radio-button>
          </el-radio-group>
        </div>
        <div class="color">
          <span class="scTitle">Color : </span>
          <el-radio-group v-model="radioColor" size="small">
            <el-radio-button label="红色"></el-radio-button>
            <el-radio-button label="花色"></el-radio-button>
            <el-radio-button label="卢瑟"></el-radio-button>
            <el-radio-button label="黑色"></el-radio-button>
          </el-radio-group>
        </div>
      </div>
    </div>
    <div class="addwrap" v-else>
      <div class="tradeAvatar">
        <img @click="querylisting()" src="./add.png" alt="" width="100%" height="100%">
        <p>点击添加商品</p>
      </div>
    </div>
    <el-dialog
      title="选择产品"
      :visible.sync="centerDialogVisible"
      width="54%"
      center
      class="productstyle">
      <!--显示产品列表-->
      <p style="padding-left: 5px;">
        <el-input size="small" v-model="listing.url" placeholder="请输入ASN码" style="width: 54%; margin: 0 10px">
        </el-input>
        <el-button>搜索</el-button>
      </p>
      <div class="contain">
      <div class="containItem" v-for="item in containItems">
          <div class="productImgwrap">
              <img :src="item.img" alt="" width="100%" height="100%">
              <el-checkbox v-model="checked"></el-checkbox>
          </div>
          <div class="detailwrap">
              <p class="productDetail">
              {{item.productDetail}}
              </p>
              <i class="collect" @click="collectshow = !collectshow">
                  <img src="./collect_a.png" alt=""  v-if="collectshow" width="100%" height="100%">
                  <img src="./collect_b.png" alt="" v-if="!collectshow" width="100%" height="100%">
              </i>
          </div>
          <p class="productPrice">
              <b class="price">{{item.price}}</b>
              <span class="wish"></span>
          </p>
      </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible = false">取 消</el-button>
        <el-button type="primary">确 定</el-button>
    </span>
    </el-dialog>
  </div>
</template>
<script>
  import {callApiForMbs} from '@/data/callApi'

  export default {
    data() {
      return {
        listingList: [],
        centerDialogVisible: false,
        tableData: [],
        added: false,
        radioSize: '',
        radioColor: '',
        listing: {},
        containItems: [
          {
              img: require('./111.png'),
              productDetail: '我文件文件夹管理科江苏高考零售价格单联开关吉林省的会计管理科深度国际拉克丝大驾光临开始大驾光临',
              price: '$11122122',
              wish: 'wish'
          },  {
              img: require('./111.png'),
              productDetail: '我文件文件夹管理科江苏高考零售价格单联开关吉林省的会计管理科深度国际拉克丝大驾光临开始大驾光临',
              price: '$11122122',
              wish: 'wish'
          },  {
              img: require('./111.png'),
              productDetail: '我文件文件夹管理科江苏高考零售价格单联开关吉林省的会计管理科深度国际拉克丝大驾光临开始大驾光临',
              price: '$11122122',
              wish: 'wish'
          },  {
              img: require('./111.png'),
              productDetail: '我文件文件夹管理科江苏高考零售价格单联开关吉林省的会计管理科深度国际拉克丝大驾光临开始大驾光临',
              price: '$11122122',
              wish: 'wish'
          },  {
              img: require('./111.png'),
              productDetail: '我文件文件夹管理科江苏高考零售价格单联开关吉林省的会计管理科深度国际拉克丝大驾光临开始大驾光临',
              price: '$11122122',
              wish: 'wish'
          },

        ]
      }
    },
    methods: {
      querylisting() {
        var _this = this
        _this.centerDialogVisible = true;
        callApiForMbs('listing/query_listings', {'pageSize': 10, 'pageNum': 1}, function (res) {
          _this.listingList = res.data.content.records
          _this.tableData = res.data.content.records
          console.log(res.data.content.records)
        })
      },
      filllisting(row) {
        this.centerDialogVisible = false;
        this.added = true;
        this.listing = row
        console.log(row)
      }
    }
  }
</script>
<style lang="scss">
  @import '../../../style/mixin';

  .trade {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    .addwrap{
      text-align: center;
      vertical-align: middle;
      margin: 0 auto;
      .tradeAvatar {
        width: 140px;
        height: 140px;
        padding: 20px;
        box-sizing: border-box;
        position: relative;
        p{
          width: 80px;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          bottom:-5px;
          color: #c9c9c9;
        }
      }
    }
    .tradeName {
      flex: 1;
      .detail {
        font-size: 14px;
        height: 32px;
        line-height: 16px;
        overflow: hidden;
        position: relative;
        padding-top: 5px;
        &:after {
          content: '...';
          display: block;
          font-size: 14px;
          width: 30px;
          height: 16px;
          color: #000;
          background-color: #ffffff;
          position: absolute;
          right: 0;
          bottom: 0;
        }
      }
      .priceWrap {
        overflow: hidden;
        padding-top: 10px;
        .left {
          width: 350px;
          span {
            &:first-child {
              color: #ee811e;
            }
          }
        }
      }
      .size {
        overflow: hidden;
        padding-top: 10px;
      }
      .color {
        overflow: hidden;
        padding-top: 10px;
      }
      .scTitle {
        display: inline-block;
        width: 45px;
        margin-right: 10px;
      }
    }
     .contain{
        overflow: hidden;
        .containItem{
            width: 142px;
            float: left;
            font-size: 12px;
            margin: 10px 0 10px 16px;
            padding-bottom: 5px;
            box-sizing: border-box;
            border: 1px solid #e6e6e6;
            .productImgwrap{
                margin-bottom: 5px;
                width: 100%;
                height: 140px;
                position: relative;
                .el-checkbox{
                    position: absolute;
                    right: 5px;
                    top: 5px;
                }
            }
            .detailwrap{
              display: flex;
                .productDetail{
                    flex: 1;
                    padding: 0 5px;
                    margin-bottom: 5px;
                    height: 28px;
                    line-height: 14px;
                    overflow: hidden;
                    position: relative;
                    &:after{
                        content: '...';
                        display: block;
                        font-size: 14px;
                        width: 42px;
                        height: 13px;
                        color: #000;
                        background-color: #ffffff;
                        position: absolute;
                        right: 0;
                        bottom: 0;
                    }
                }
                .collect{
                    width: 18px;
                    height: 18px;
                    margin-right: 10px;
                }
            }
            .productPrice{
                padding: 0 5px;
                display: flex;
                justify-content: space-between;
                flex-wrap: nowrap;
                .price{
                    font-size: 12px;
                }
                .wish{
                    margin-top: 5px;
                    @include size(30px,15px);
                    background: url(./wish_logo.png) center no-repeat;
                }
            }
        }
        .productPrice {
          padding: 0 10px;
          display: flex;
          justify-content: space-between;
          flex-wrap: nowrap;
          .price {
            font-size: 16px;
          }
          .wish {
            @include size(50px, 20px);
            background: url(./wish_logo.png) center no-repeat;
          }
        }
      }
  }

</style>
