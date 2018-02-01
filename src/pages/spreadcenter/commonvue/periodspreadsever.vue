<template>
  <div class="periodspreadsever">
      <div class="topword">
        <el-input v-model="input" placeholder="请输入内容" style="width: 400px;"></el-input>
         <el-button style="background: #205081; color: #ffffff; margin: 0 15px;">选择执行方案</el-button>
         <span>当前已选方案 : 模版一</span>
      </div>
      <div id="bottommain">
      <el-tabs v-model="editableTabsValue" type="card" editable @edit="handleTabsEdit">
        <el-tab-pane
            :key="item.name"
            v-for="(item, index) in editableTabs"
            :label="item.title"
            :name="item.name"
        >
            <div class="tablewrap">
                <el-table
                :data="tableData"
                style="width: 100%">
                <el-table-column
                    prop="date"
                    label="行为名称">
                </el-table-column>
                <el-table-column
                    label="任务数量">
                    <template slot-scope="scope">
                        <el-input-number v-model="num1" @change="handleChange" :min="1" label="描述文字"></el-input-number>
                    </template>
                </el-table-column>
                <el-table-column
                    label="购买件数/单">
                    <template slot-scope="scope">
                        <el-input-number v-model="num1" @change="handleChange" :min="1" label="描述文字"></el-input-number>
                    </template>
                </el-table-column>
                </el-table> 
            </div>
        </el-tab-pane>
        </el-tabs>
        <div class="btnwrap">
            <el-button style="background: #205081; color: #ffffff;">保存方案</el-button>
        </div>
      </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        input: '',
        editableTabsValue: '2',
        editableTabs: [{
          title: '第1天',
          name: '1',
        }, {
          title: '第2天',
          name: '2',
        }],
        tabIndex: 2,
        tableData: [{
            date: '2016-05-02',
          }, {
            date: '2016-05-04',
          }, {
            date: '2016-05-01',
          }, {
            date: '2016-05-03',
          }],
          num1: 1,
      }
    },
    methods: {
      handleTabsEdit(targetName, action) {
        if (action === 'add') {
          let newTabName = ++this.tabIndex + '';
          this.editableTabs.push({
            title: '第'+this.tabIndex+'天',
            name: newTabName,
            content: 'New Tab content'
          });
          this.editableTabsValue = newTabName;
        }
        if (action === 'remove') {
          let tabs = this.editableTabs;
          let activeName = this.editableTabsValue;
          if (activeName === targetName) {
            tabs.forEach((tab, index) => {
              if (tab.name === targetName) {
                let nextTab = tabs[index + 1] || tabs[index - 1];
                if (nextTab) {
                  activeName = nextTab.name;
                }
              }
            });
          }
          
          this.editableTabsValue = activeName;
          this.editableTabs = tabs.filter(tab => tab.name !== targetName);
        }
      },
    handleChange(value) {
        console.log(value);
      }
    }
  }
</script>
<style lang="scss">
    .periodspreadsever{
        .topword{
          padding-left: 60px;
          margin-bottom: 20px;
          position: relative;
          &:before{
              content: '关键词:';
              width: 60px;
              height: 40px;
              background-color: #fff;
              position: absolute;
              left: 0;
              top: 8px;
          }
        }
        #bottommain{
            .el-tabs--card > .el-tabs__header .el-tabs__item{
                margin-right: 1px;
                border: 1px solid #cccccc;
            }
            .el-tabs--card > .el-tabs__header .el-tabs__item.is-active{
                transform: translateY(0px);
                border: 1px solid #205081;
            }
            .tablewrap{
                border: 1px solid #e6e6e6;
                margin-top: 20px;
                .el-table thead tr th{
                    background-color: #edf5fc;
                }
            }
            .btnwrap{
                text-align: center;
                margin-top: 20px;
            }
        }
    }
</style>
