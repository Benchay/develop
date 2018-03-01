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
            <span class="insbefore">搜索</span>
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
  </div>
</template>
<script>
  import {callApiForMbs} from '@/data/callApi'

  export default {
    data() {
      return {
        activityList: [],
        entrance:{},
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
      }
    },
    created() {
      var _this = this
      callApiForMbs('promote_activity/find_activity_by_scene_code', {sceneCode:'flow'}, function (res) {
        if(res.data.success){
          _this.activityList = res.data.content
        }else{
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
  }
</style>

