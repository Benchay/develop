<template>
  <div class="timeopen">
    <el-tabs v-model="timeType" @tab-click="handleClick">
      <el-tab-pane label="自动设置" name="1">
        <el-date-picker
          v-model="picktime"
          type="datetimerange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期">
        </el-date-picker>
        <el-checkbox v-model="executeSoon">尽快执行</el-checkbox>
      </el-tab-pane>
      <el-tab-pane label="手动设置" name="2">
        <div class="youselfTime">
          <div class="startTime">
            <el-date-picker
              v-model="filters.date.startDate"
              type="date"
              placeholder="选择开始日期"
              value-format="yyyy-MM-dd-HH-mm-ss"
              :picker-options="startDateBefore"
            >
            </el-date-picker>
          </div>
          <div class="endTime">
            <el-date-picker
              v-model="filters.date.endDate"
              type="date"
              placeholder="选择截止日期"
              :picker-options="startDateAfter"
              value-format="yyyy-MM-dd-HH-mm-ss"
              @change="handleIconClickDate"
            >
            </el-date-picker>
          </div>
        </div>
        <div class="youselfNum">
          <div class="numPick">
            <div class="numHeader">
              <p><i class="el-icon-time"></i>00:00</p>
            </div>
            <div class="numBody">
              <el-input-number size="small" v-model="num0" controls-position="right" @change="handleChange" :min="1"
                               :max="10"></el-input-number>
            </div>
          </div>
          <div class="numPick">
            <div class="numHeader">
              <p><i class="el-icon-time"></i>01:00</p>
            </div>
            <div class="numBody">
              <el-input-number size="small" v-model="num1" controls-position="right" @change="handleChange" :min="1"
                               :max="10"></el-input-number>
            </div>
          </div>
          <div class="numPick">
            <div class="numHeader">
              <p><i class="el-icon-time"></i>02:00</p>
            </div>
            <div class="numBody">
              <el-input-number size="small" v-model="num2" controls-position="right" @change="handleChange" :min="1"
                               :max="10"></el-input-number>
            </div>
          </div>
          <div class="numPick">
            <div class="numHeader">
              <p><i class="el-icon-time"></i>03:00</p>
            </div>
            <div class="numBody">
              <el-input-number size="small" v-model="num3" controls-position="right" @change="handleChange" :min="1"
                               :max="10"></el-input-number>
            </div>
          </div>
          <div class="numPick">
            <div class="numHeader">
              <p><i class="el-icon-time"></i>04:00</p>
            </div>
            <div class="numBody">
              <el-input-number size="small" v-model="num4" controls-position="right" @change="handleChange" :min="1"
                               :max="10"></el-input-number>
            </div>
          </div>
          <div class="numPick">
            <div class="numHeader">
              <p><i class="el-icon-time"></i>05:00</p>
            </div>
            <div class="numBody">
              <el-input-number size="small" v-model="num5" controls-position="right" @change="handleChange" :min="1"
                               :max="10"></el-input-number>
            </div>
          </div>
          <div class="numPick">
            <div class="numHeader">
              <p><i class="el-icon-time"></i>06:00</p>
            </div>
            <div class="numBody">
              <el-input-number size="small" v-model="num6" controls-position="right" @change="handleChange" :min="1"
                               :max="10"></el-input-number>
            </div>
          </div>
          <div class="numPick">
            <div class="numHeader">
              <p><i class="el-icon-time"></i>07:00</p>
            </div>
            <div class="numBody">
              <el-input-number size="small" v-model="num7" controls-position="right" @change="handleChange" :min="1"
                               :max="10"></el-input-number>
            </div>
          </div>
          <div class="numPick">
            <div class="numHeader">
              <p><i class="el-icon-time"></i>08:00</p>
            </div>
            <div class="numBody">
              <el-input-number size="small" v-model="num8" controls-position="right" @change="handleChange" :min="1"
                               :max="10"></el-input-number>
            </div>
          </div>
          <div class="numPick">
            <div class="numHeader">
              <p><i class="el-icon-time"></i>09:00</p>
            </div>
            <div class="numBody">
              <el-input-number size="small" v-model="num9" controls-position="right" @change="handleChange" :min="1"
                               :max="10"></el-input-number>
            </div>
          </div>
          <div class="numPick">
            <div class="numHeader">
              <p><i class="el-icon-time"></i>10:00</p>
            </div>
            <div class="numBody">
              <el-input-number size="small" v-model="num10" controls-position="right" @change="handleChange" :min="1"
                               :max="10"></el-input-number>
            </div>
          </div>
          <div class="numPick">
            <div class="numHeader">
              <p><i class="el-icon-time"></i>11:00</p>
            </div>
            <div class="numBody">
              <el-input-number size="small" v-model="num11" controls-position="right" @change="handleChange" :min="1"
                               :max="10"></el-input-number>
            </div>
          </div>
          <div class="numPick">
            <div class="numHeader">
              <p><i class="el-icon-time"></i>12:00</p>
            </div>
            <div class="numBody">
              <el-input-number size="small" v-model="num12" controls-position="right" @change="handleChange" :min="1"
                               :max="10"></el-input-number>
            </div>
          </div>
          <div class="numPick">
            <div class="numHeader">
              <p><i class="el-icon-time"></i>13:00</p>
            </div>
            <div class="numBody">
              <el-input-number size="small" v-model="num13" controls-position="right" @change="handleChange" :min="1"
                               :max="10"></el-input-number>
            </div>
          </div>
          <div class="numPick">
            <div class="numHeader">
              <p><i class="el-icon-time"></i>14:00</p>
            </div>
            <div class="numBody">
              <el-input-number size="small" v-model="num14" controls-position="right" @change="handleChange" :min="1"
                               :max="10"></el-input-number>
            </div>
          </div>
          <div class="numPick">
            <div class="numHeader">
              <p><i class="el-icon-time"></i>15:00</p>
            </div>
            <div class="numBody">
              <el-input-number size="small" v-model="num15" controls-position="right" @change="handleChange" :min="1"
                               :max="10"></el-input-number>
            </div>
          </div>
          <div class="numPick">
            <div class="numHeader">
              <p><i class="el-icon-time"></i>16:00</p>
            </div>
            <div class="numBody">
              <el-input-number size="small" v-model="num16" controls-position="right" @change="handleChange" :min="1"
                               :max="10"></el-input-number>
            </div>
          </div>
          <div class="numPick">
            <div class="numHeader">
              <p><i class="el-icon-time"></i>17:00</p>
            </div>
            <div class="numBody">
              <el-input-number size="small" v-model="num17" controls-position="right" @change="handleChange" :min="1"
                               :max="10"></el-input-number>
            </div>
          </div>
          <div class="numPick">
            <div class="numHeader">
              <p><i class="el-icon-time"></i>18:00</p>
            </div>
            <div class="numBody">
              <el-input-number size="small" v-model="num18" controls-position="right" @change="handleChange" :min="1"
                               :max="10"></el-input-number>
            </div>
          </div>
          <div class="numPick">
            <div class="numHeader">
              <p><i class="el-icon-time"></i>19:00</p>
            </div>
            <div class="numBody">
              <el-input-number size="small" v-model="num19" controls-position="right" @change="handleChange" :min="1"
                               :max="10"></el-input-number>
            </div>
          </div>
          <div class="numPick">
            <div class="numHeader">
              <p><i class="el-icon-time"></i>20:00</p>
            </div>
            <div class="numBody">
              <el-input-number size="small" v-model="num20" controls-position="right" @change="handleChange" :min="1"
                               :max="10"></el-input-number>
            </div>
          </div>
          <div class="numPick">
            <div class="numHeader">
              <p><i class="el-icon-time"></i>21:00</p>
            </div>
            <div class="numBody">
              <el-input-number size="small" v-model="num21" controls-position="right" @change="handleChange" :min="1"
                               :max="10"></el-input-number>
            </div>
          </div>
          <div class="numPick">
            <div class="numHeader">
              <p><i class="el-icon-time"></i>22:00</p>
            </div>
            <div class="numBody">
              <el-input-number size="small" v-model="num22" controls-position="right" @change="handleChange" :min="1"
                               :max="10"></el-input-number>
            </div>
          </div>
          <div class="numPick">
            <div class="numHeader">
              <p><i class="el-icon-time"></i>23:00</p>
            </div>
            <div class="numBody">
              <el-input-number size="small" v-model="num23" controls-position="right" @change="handleChange" :min="1"
                               :max="10"></el-input-number>
            </div>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        picktime: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
        timeType: '1',
        executeSoon: true,
        filters: {
          date: {
            startDate: '',
            endDate: ''
          }
        },
        startDateBefore: {
          disabledDate: (time) => {
            let beginDateVal = this.filters.date.endDate;
            if (beginDateVal) {
              return time.getTime() > beginDateVal;
            }
          }
        },
        startDateAfter: {
          disabledDate: (time) => {
            let beginDateVal = this.filters.date.startDate;
            if (beginDateVal) {
              return time.getTime() < beginDateVal;
            }
          }
        },
        num0: 1,
        num1: 1,
        num2: 1,
        num3: 1,
        num4: 1,
        num5: 1,
        num6: 1,
        num7: 1,
        num8: 1,
        num9: 1,
        num10: 1,
        num11: 1,
        num12: 1,
        num13: 1,
        num14: 1,
        num15: 1,
        num16: 1,
        num17: 1,
        num18: 1,
        num19: 1,
        num20: 1,
        num21: 1,
        num22: 1,
        num23: 1,
      }
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      handleChange(value) {
        console.log(value);
      },
      handleIconClickDate() {
      },
    }
  }
</script>
<style lang="scss">
  .timeopen {
    .el-tabs__item {
      margin-right: 10px;
      border: 1px solid #cccccc;
    }
    .el-tabs__nav-wrap {
      display: inline-block;
      padding-left: 70px;
      position: relative;
      &:before {
        content: '设置类型:';
        width: 70px;
        height: 40px;
        background-color: #fff;
        position: absolute;
        left: 0;
        top: 8px;
      }
      &:after {
        background-color: #ffffff;
      }
    }
    .el-tabs__item.is-active {
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
    #pane-first {
      padding-left: 70px;
      position: relative;
      &:before {
        content: '时间设置:';
        width: 70px;
        height: 40px;
        background-color: #fff;
        position: absolute;
        left: 0;
        top: 8px;
      }
      .el-checkbox {
        margin-left: 15px;
      }
    }
    .youselfTime {
      .startTime {
        display: inline-block;
        padding-left: 70px;
        position: relative;
        &:before {
          content: '开始时间:';
          width: 70px;
          height: 40px;
          background-color: #fff;
          position: absolute;
          left: 0;
          top: 8px;
        }
      }
      .endTime {
        margin-left: 60px;
        display: inline-block;
        padding-left: 70px;
        position: relative;
        &:before {
          content: '结束时间:';
          width: 70px;
          height: 40px;
          background-color: #fff;
          position: absolute;
          left: 0;
          top: 8px;
        }
      }
    }
    .youselfNum {
      margin-top: 22px;
      padding-left: 70px;
      position: relative;
      &:before {
        content: '数量设置:';
        width: 70px;
        height: 40px;
        background-color: #fff;
        position: absolute;
        left: 0;
        top: 8px;
      }
      .numPick {
        width: 100px;
        height: 64px;
        box-sizing: border-box;
        border-radius: 8px 8px 0 0;
        border: 1px solid #cccccc;
        float: left;
        margin-right: 30px;
        margin-bottom: 10px;
        overflow: hidden;
        .numHeader {
          width: 100%;
          height: 28px;
          border-bottom: 1px solid #cccccc;
          background-color: #f5f5f5;
          text-align: center;
          padding-top: 3px;
          i {
            font-size: 16px;
            margin-right: 6px;
          }
        }
        .numBody {
          .el-input-number.is-controls-right .el-input-number__decrease {
            right: 32px;
          }
          .el-input-number__increase {
            right: 32px;
          }
          .el-input--small .el-input__inner {
            outline: none;
            width: 98px;
            height: 28px;
            border-color: #ffffff;
          }
        }
      }
    }
  }
</style>
