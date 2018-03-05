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
    <div v-else>
      <div class="tradeAvatar">
        <el-button @click="querylisting()">添加产品</el-button>
      </div>
    </div>
    <el-dialog
      title="选择产品"
      :visible.sync="centerDialogVisible"
      width="46%"
      center
      class="productstyle">
      <!--显示产品列表-->
      <div class="contain">
        <div class="containItem" v-for="item in listingList">
          <div class="productImgwrap">
            <img :src="item.mainImgUrl" alt="" width="100%" height="100%">
            <el-checkbox v-model="checked"></el-checkbox>
          </div>
          <p class="productDetail">
            {{item.description}}
          </p>
          <p class="productPrice">
            <b class="price">{{item.price}}</b>
            <span class="wish"></span>
          </p>
        </div>
      </div>
      <div class="listWrap">
        <el-table
          :data="tableData"
          @row-click="filllisting"
          style="width: 100%">
          <el-table-column
            prop="id"
            label="商品编号"
            width="180">
          </el-table-column>
          <el-table-column
            prop="asin"
            label="ASIN"
            width="180">
          </el-table-column>
          <el-table-column
            prop="title"
            label="标题"
            width="180">
          </el-table-column>
          <el-table-column
            label="操作">
            <template slot-scope="scope">
              <el-button plain> 编辑 </el-button>
              <el-button type="primary">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
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
        listing: {}
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
        this.$emit('updatelistingid',this.listing.id); //主动触发updatelistingid方法，listing.id 为向父组件传递的数据
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
    .tradeAvatar {
      width: 160px;
      height: 160px;
      box-sizing: border-box;
      border: 1px solid #cccccc;
      margin-right: 20px;
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
    .contain {
      .containItem {
        width: 250px;
        float: left;
        font-size: 14px;
        margin: 10px 0 10px 16px;
        padding-bottom: 15px;
        box-sizing: border-box;
        border: 1px solid #e6e6e6;
        .productImgwrap {
          margin-bottom: 12px;
          width: 100%;
          height: 230px;
          position: relative;
          .el-checkbox {
            position: absolute;
            right: 10px;
            top: 10px;
          }
        }
        .productDetail {
          padding: 0 10px;
          margin-bottom: 12px;
          height: 28px;
          line-height: 14px;
          overflow: hidden;
          position: relative;
          &:after {
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
            //background: url(./wish_logo.png) center no-repeat;
          }
        }
      }
    }
  }
</style>
