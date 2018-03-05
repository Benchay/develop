<template>
  <div class="flowspreadsever">
    <div class="tableWrap">
      <div class="tabHeader">
        <div class="entry">
          <p>入口</p>
        </div>
        <div class="ordinaryClick" v-for="item in activityList">
          <p>{{item.name}}</p>
          <p>每单价格:{{item.commissionChargePrice}}</p>
        </div>
      </div>
      <div class="tabBody">
        <div class="tabBodyItem">
          <div class="entrySearch">
            <span class="insbefore" @click="centerDialogVisible = true">{{entrance.name}}</span>
            <el-input v-model="entrance.keyword" placeholder="请输入内容"></el-input>
            <span class="insafter">X</span>
          </div>
          <div class="clickinputNum" v-for="item in activityList">
            <el-input-number v-model="num1" @change="handleChange" :min="1" label="描述文字"></el-input-number>
          </div>
        </div>
      </div>
    </div>
    <div class="addMore">
      <el-button plain>+ 添加更多</el-button>
    </div>
    <el-dialog
      title="入口设置"
      :visible.sync="centerDialogVisible"
      width="30%"
      center
      class="entrystyle">
      <p><span class="titledai">入口类型:</span>
        <el-select size="small" v-model="entrance.entranceType" placeholder="入口" style="width: 80%;"
                   @change="changeentrancename">
          <el-option
            v-for="item in entranceTypes"
            :key="item.type"
            :label="item.name"
            :value="item.code">
          </el-option>
        </el-select>
      </p>
      <p><span class="titledai">关键词:</span>
        <el-input size="small" v-model="entrance.keyword" placeholder="请输入关键词"
                  style="width: 80%;"></el-input>
      </p>
      <p><span class="titledai">类目选择:</span>
        <el-select size="small" v-model="entrance.catagory" placeholder="All department" style="width: 80%;"
                   @change="">
          <el-option
            v-for="item in catagorys"
            :key="item.value"
            :label="item.lable"
            :value="item.value">
          </el-option>
        </el-select>
      </p>
      <p><span class="titledai">价格区间:</span>
        <el-input size="small" v-model="entrance.minPrice" placeholder="请输入价格"
                  style="width: 38%;"></el-input>
        --
        <el-input size="small" v-model="entrance.maxPrice" placeholder="请输入价格"
                  style="width: 38%;"></el-input>
      </p>
      <div class="mateWrap">
        <el-tabs v-model="entrance.sort">
          <el-tab-pane label="价格排序" name="2">
          </el-tab-pane>
          <el-tab-pane label="热度排序" name="1">
          </el-tab-pane>
        </el-tabs>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="savelistingentrance()">保 存</el-button>
    </span>
    </el-dialog>
  </div>
</template>
<script>
  import {callApiForMbs} from '@/data/callApi'

  export default {
    props: ['listingId'],
    data() {
      return {
        ktext: '',
        centerDialogVisible: false,
        activityList: [],
        entranceType:'',
        entranceTypes: [{
          type: 1,
          code: "keyword",
          name:"搜索"
        }, {
          type: 2,
          code: "catagory",
          name:"类目"
        },
          {
            type: 3,
            code: "ad",
            name:"广告"
          }],
        entrance: {},
        catagory:'',
        catagorys:[],
        keyword: '',
        input: '',
        num1: '',
        num2: '',
        radio2: 3
      }
    },
    methods: {
      handleChange(value) {
        console.log(value);
      },
      savelistingentrance(){
        var _this=this
        if(_this.entrance.entranceType!='keyword'){
          _this.centerDialogVisible=false
          return
        }
        var listingEntrances={}
        var listingId=this.listingId
        listingEntrances.listingId=listingId
        listingEntrances.entranceTypeCode=_this.entrance.entranceType
        var entranceVal={}
        entranceVal.keyword=this.entrance.keyword
        entranceVal.catagory=this.entrance.catagory
        entranceVal.minPrice=this.entrance.minPrice
        entranceVal.maxPrice=this.entrance.maxPrice
        entranceVal.sort=this.entrance.sort
        listingEntrances.entranceVal=JSON.stringify(entranceVal)
        callApiForMbs('listing_entrances/save', listingEntrances, function (res) {
          if (res.data.success) {
            _this.$message("保存成功")
            _this.centerDialogVisible=false
          } else {
            alert(res.data.errmsg)
          }
          console.log(res)
        })
      },
      changeentrancename(name){
        for(var idx in this.entranceTypes){
          var enType=this.entranceTypes[idx]
          if(enType.code==name){
            this.entrance.name=enType.name
          }
        }
      }
    },
    created() {
      var _this = this
      callApiForMbs('promote_activity/find_activity_by_scene_code', {sceneCode: 'flow'}, function (res) {
        if (res.data.success) {
          _this.activityList = res.data.content
        } else {
          alert(res.data.errmsg)
        }
        console.log(res)
      })
    }
  }
</script>
<style lang="scss">
  .el-collapse-item__content {
    position: relative;
    .addMore {
      width: 100%;
      height: 38px;
      position: absolute;
      bottom: 0;
      left: 0;
      text-align: center;
      background-color: #f5f5f5;
      .el-button {
        border: none;
        width: 120px;
        height: 38px;
        color: #205081;
        font-weight: 600;
        background-color: #f5f5f5;
      }
    }
  }

  .flowspreadsever {
    padding-bottom: 38px;
    .tableWrap {
      overflow: hidden;
      .tabHeader {
        padding: 0 30px;
        display: flex;
        margin-bottom: 10px;
        div {
          flex: 1;
          height: 38px;
          text-align: center;
          background-color: #f5f5f5;
          margin-right: 20px;
          border-radius: 20px 20px 0 0;
          border: 1px solid #cccccc;
          overflow: hidden;
          &.entry {
            flex: 3;
            p {
              height: 38px;
              line-height: 38px;
            }
          }
          &:last-child {
            margin-right: 0px;
          }
          p {
            height: 19px;
            line-height: 19px;
            &:nth-child(2) {
              color: #ee811e;
            }
          }
        }
      }
      .tabBody {
        .tabBodyItem {
          display: flex;
          padding: 0 30px;
          margin-bottom: 20px;
          & > div {
            flex: 1;
            height: 40px;
            margin-right: 22px;
            &:last-child {
              margin-right: 0px;
            }
            .el-input-number {
              width: 100%;
            }
          }
          .entrySearch {
            flex: 3;
            display: flex;
            .insbefore {
              width: 75px;
              text-align: right;
              line-height: 40px;
              border-radius: 20px 0 0 20px;
              background-color: #75d282;
              padding-right: 18px;
              color: #ffffff;
            }
            .insafter {
              width: 40px;
              text-align: center;
              line-height: 40px;
              font-size: 20px;
              background-color: #fe6c6f;
              color: #ffffff;
            }
            .el-input__inner {
              flex: 1;
              border-radius: 0;
            }
          }
        }
      }
    }
    .entrystyle {
      p {
        white-space: nowrap;
        margin-top: 20px;
      }
      .titledai {
        display: inline-block;
        width: 60px;
        margin-right: 10px;
      }
      .mateWrap {
        margin-top: 20px;
        .el-tabs__nav-wrap {
          display: inline-block;
          padding-left: 75px;
          position: relative;
          &:before {
            content: '排序:';
            width: 90px;
            height: 40px;
            background-color: #ffffff;
            position: absolute;
            left: 0;
            top: 8px;
          }
          &:after {
            background-color: #ffffff;
          }
        }
        .el-tabs__item {
          margin-right: 10px;
          border: 1px solid #cccccc;
        }
        .el-tabs__item:hover {
          color: #205081;
        }
        .el-tabs__item.is-active {
          color: #205081;
          border: 1px solid #205081;
          position: relative;
          &:before {
            content: "";
            position: absolute;
            bottom: 0;
            right: 0;
            width: 26px;
            height: 26px;
            background: url(./pitch_up.png) center center no-repeat;
          }
        }
        .el-tabs__active-bar {
          background-color: #ffffff;
          height: 0;
        }
      }
    }
  }
</style>

