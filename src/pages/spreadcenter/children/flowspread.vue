<template>
  <div class="flowspread">
    <div class="title">
      <el-row :gutter="20">
        <el-col :span="10">
          <el-input v-model="name" placeholder="请输入推广名称"></el-input>
        </el-col>
      </el-row>
    </div>
    <div class="booksystem">
      <el-collapse v-model="activeNames" @change="handleChange">
        <el-collapse-item title="商品信息" name="1">
          <v-trade ref="listingData"></v-trade>
        </el-collapse-item>
        <el-collapse-item title="设置推广服务" name="2">
          <v-flowspreadsever ref="activityData"></v-flowspreadsever>
        </el-collapse-item>
        <el-collapse-item title="时间发布设置" name="3">
          <v-timeopen ref="timeData"></v-timeopen>
        </el-collapse-item>
        <el-collapse-item title="高级选项" name="4">
          <v-highoption ref="extData"></v-highoption>
        </el-collapse-item>
      </el-collapse>
    </div>
    <!--<v-spreadfoot></v-spreadfoot>-->
    <div class="spreadFoot">
      <div class="pgrounp">
        <P>任务总数 : <span class="col21">200</span></P>
        <P><span>所需本金 : <span class="orange">$200.00</span></span><span>所需佣金 : <span class="orange">10</span></span></P>
      </div>
      <div class="btngrounp">
        <el-button type="warning" @click="submit()">确认提交</el-button>
      </div>
    </div>
  </div>
</template>
<script>
  import trade from '../commonvue/trade'
  import flowspreadsever from '../commonvue/flowspreadsever'
  import timeopen from '../commonvue/timeopen'
  import highoption from '../commonvue/highoption'
  import spreadfoot from '../commonvue/spreadfoot'
  import {callApiWithToken} from '@/data/callApi'

  export default {
    components: {
      'v-trade': trade,
      'v-flowspreadsever': flowspreadsever,
      'v-timeopen': timeopen,
      'v-highoption': highoption,
      'v-spreadfoot': spreadfoot,
    },
    data() {
      return {
        name: '',
        valueSeach: '',
        activeNames: ['2']
      }
    },
    methods: {
      handleChange(val) {
        //console.log(this.$refs.listingData.listing)
      },
      submit() {
        var planVo = {}
        planVo.name = this.name
        planVo.listing = this.$refs.listingData.listing
        var entranceList=[]
        var entranceObj={}
        entranceObj.entrance=this.$refs.activityData.entrance
        entranceObj.promoteServiceList=this.$refs.activityData.activityList
        entranceList.push(entranceObj)
        planVo.entranceList=entranceList
        planVo.promoteSceneCode="flow"
        var timeParams={}
        timeParams.timeType=this.$refs.timeData.timeType
        timeParams.startTime=this.$refs.timeData.filters.date.startDate
        timeParams.endTime=this.$refs.timeData.filters.date.endDate
        planVo.timeParams=timeParams
        planVo.addressType=this.$refs.extData.addressType
        planVo.resourceType=this.$refs.extData.resourceType
        planVo.executeSoon=this.$refs.extData.executeSoon
        planVo.accountMatchType=this.$refs.extData.accountMatchType
        planVo.address=this.$refs.extData.address
        callApiWithToken('/api/plan/create_plan', planVo, function (res) {
          console.log(res)
          if(res.data.success){
            alert("提交计划成功")
          }else{
            alert(res.data.errmsg)
          }
        })
      }
    }
  }
</script>
<style lang="scss">
  .flowspread {
    background-color: #ffffff;
    padding: 35px 20px 120px;
    border: 1px solid #cccccc;
    border-top: none;
    position: relative;
    .title {
      .el-input {
        display: inline-block;
        padding-left: 70px;
        position: relative;
        &:before {
          content: '推广名称:';
          width: 70px;
          height: 40px;
          background-color: #fafafa;
          position: absolute;
          left: 0;
          top: 10px;
        }
      }
    }
    .el-collapse-item__wrap {
      border-bottom: none;
    }
    .booksystem {
      margin-top: 20px;
      .el-collapse-item:last-child {
        .el-collapse-item__content {
          padding: 0;
        }
        .el-collapse-item__header {
          text-indent: 0px;
          text-align: center;
          position: relative;
          background-color: #f5f5f5;
          color: #666666;
          box-sizing: border-box;
          border: 1px solid #cccccc;
          &:after {
            content: '（可选择执行任务的资源）';
            color: #999999;
            position: absolute;
            right: 35%;
            top: 0;
          }
          .el-collapse-item__arrow {
            position: absolute;
            right: 46%;
            top: 0;
          }
        }
      }
      .el-collapse-item__header {
        // height: 40px;
        background-color: #205081;
        color: #fff;
        text-indent: 15px;
      }
      .el-collapse-item__arrow {
        // height: 40px;
      }
      .el-collapse-item__content {
        border: 1px solid #cccccc;
        border-top: none;
        margin-bottom: 15px;
        padding: 20px;
      }
    }
  }
</style>
