<template>
  <div class="highoption">
      <div class="address">
      <el-tabs v-model="addressType" @tab-click="handleClick">
        <el-tab-pane label="平台提供" name="1">

        </el-tab-pane>
        <el-tab-pane label="商家自己提供" name="2">
            <div class="addressWrap">
            <el-input
            type="textarea"
            :autosize="{ minRows: 4, maxRows: 6}"
            placeholder="请输入具体地址（多行输入）"
            v-model="textarea3">
            </el-input>
            </div>
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="resource">
         <el-tabs v-model="resourceType" @tab-click="handleClick">
        <el-tab-pane label="平台提供" name="1">
            <div class="platform">
                <el-tabs tab-position="left" style="height: 200px;">
                    <el-tab-pane label="Clothing">
                        <div class="tagWrap">
                            <el-tag>women</el-tag>
                            <el-tag>men</el-tag>
                            <el-tag>baby</el-tag>
                            <el-tag>Girl</el-tag>
                            <el-tag>Girl</el-tag>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="Clothing"><div class="tagWrap">
                        <el-tag>women</el-tag>
                            <el-tag>men</el-tag>
                            <el-tag>baby</el-tag>
                            <el-tag>Girl</el-tag>
                            <el-tag>Girl</el-tag>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="Clothing">
                        <div class="tagWrap">
                            <el-tag>women</el-tag>
                                <el-tag>men</el-tag>
                                <el-tag>baby</el-tag>
                                <el-tag>Girl</el-tag>
                                <el-tag>Girl</el-tag>
                            </div>
                        </el-tab-pane>
                    <el-tab-pane label="Clothing">
                        <div class="tagWrap">
                            <el-tag>women</el-tag>
                            <el-tag>men</el-tag>
                            <el-tag>baby</el-tag>
                            <el-tag>Girl</el-tag>
                            <el-tag>Girl</el-tag>
                        </div>
                        </el-tab-pane>
                </el-tabs>
            </div>
            <div class="selectedLabel">
                <div class="labelWrap">
                    <el-tag>women</el-tag>
                    <el-tag>men</el-tag>
                    <el-tag>baby</el-tag>
                    <el-tag>Girl</el-tag>
                    <el-tag>Girl</el-tag>
                </div>
            </div>
            <div class="mateWrap">
              <el-tabs v-model="accountMatchType" @tab-click="handleClick">
                  <el-tab-pane label="优先匹配" name="2">
                  </el-tab-pane>
                  <el-tab-pane label="完全匹配" name="1">
                  </el-tab-pane>
              </el-tabs>
            </div>
        </el-tab-pane>
        <el-tab-pane label="自有资源" name="2">
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
export default {
    data(){
       return{
         addressType:'1',
         resourceType:'1',
         accountMatchType:'1',
            textarea3: ''
       }
    },
    methods:{
        handleClick(tab, event) {
            console.log(tab, event);
        },
    }
}
</script>
<style lang="scss">
.highoption{
    .el-tabs__item{
        margin-right: 10px;
        border: 1px solid #cccccc;
    }
    .el-tabs__item:hover{
        color: #205081;
    }
    .el-tabs__item.is-active{
        color: #205081;
        border: 1px solid #205081;
        position: relative;
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
.address{
    padding: 20px;
    border-bottom: 1px solid #cccccc;
    .el-tabs__nav-wrap{
            display: inline-block;
            padding-left: 70px;
            position: relative;
            &:before{
                content: '收货地址:';
                width: 70px;
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
        .addressWrap{
            padding-left: 70px;
            position: relative;
            &:before{
                content: '地址设置:';
                width: 70px;
                height: 40px;
                background-color: #fff;
                position: absolute;
                left: 0;
                top: 8px;
            }
        }
    }
    .resource{
        padding: 20px 0;
        .el-tabs__header.is-top{
            padding: 0 20px;
        }
        .el-tabs__nav-wrap{
            display: inline-block;
            padding-left: 70px;
            position: relative;
            &:before{
                content: '执行资源:';
                width: 70px;
                height: 40px;
                background-color: #fff;
                position: absolute;
                left: 0;
                top: 8px;
            }
            &:after{
                background-color: #ffffff;
                height: 0;
            }
        }
        .platform{
            padding-top: 20px;
            background-color: #fafafa;
               .el-tabs__nav-wrap{
                display: inline-block;
                padding-left: 70px;
                position: relative;
                &:before{
                    content: '标签选择:';
                    width: 70px;
                    height: 40px;
                    background-color: #fafafa;
                    position: absolute;
                    left: 0;
                    top: 8px;
                }
                &:after{
                    background-color: #ffffff;
                }
            }
            .el-tabs.el-tabs--left{
                padding: 0 20px;
            }
            .el-tabs__item{
                margin-right: 0;
                padding-right: 200px;
                background-color: #ffffff;
            }
            .el-tabs--left .el-tabs__header.is-left{
                margin-right: 0;
                }
            .el-tabs__item.is-active{
                border-right: none;
                   &:before{
                    content: "";
                    position: absolute;
                    bottom: 0;
                    right: 0;
                    width: 0px;
                    height: 0px;
                    background: none;
                }
            }
            .el-tabs--left .el-tabs__active-bar.is-left{
                width: 0px;
            }
            .tagWrap{
                background-color: #ffffff;
                border: 1px solid #205081;
                height: 160px;
                box-sizing: border-box;
                padding: 20px 40px;
                font-size: 0;
                .el-tag{
                margin-right: 12px;
                margin-bottom: 12px;
                }
            }
        }
        .selectedLabel{
            padding: 20px;
            .labelWrap{
                display: inline-block;
                vertical-align: top;
                padding-left: 70px;
                position: relative;
                &:before{
                    content: '已选标签:';
                    width: 70px;
                    height: 40px;
                    background-color: #fff;
                    position: absolute;
                    left: 0;
                    top: 4px;
                }
                 .el-tag{
                margin-right: 12px;
                margin-bottom: 12px;
                }
            }
        }
        .mateWrap{
            .el-tabs__nav-wrap{
                display: inline-block;
                padding-left: 90px;
                position: relative;
                &:before{
                    content: '执行匹配模式:';
                    width: 90px;
                    height: 40px;
                    background-color: #ffffff;
                    position: absolute;
                    left: 0;
                    top: 8px;
                }
                &:after{
                    background-color: #ffffff;
                }
            }
        }
    }
}
</style>
