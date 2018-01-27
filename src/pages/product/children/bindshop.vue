<template>
    <div class="bindshop">
        <div class="top">
            <el-row :gutter="20">
                <el-col :span="16">
                    <div class="grid-content bg-purple">
                        <el-select v-model="modelCountry" placeholder="请选择"  style="width: 240px;">
                            <el-option
                            v-for="item in countryList"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                        <el-select v-model="modelState" placeholder="请选择"  style="width: 240px;">
                            <el-option
                            v-for="item in stateList"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                </el-col>
                <el-col :span="8">
                    <div class="grid-content bg-purple" style="float: right;">
                        <el-input v-model="valueSeach" placeholder="请输入店铺名称" style="width: 240px;"></el-input>
                        <el-button plain>搜  索</el-button>
                    </div>
                </el-col>
            </el-row>
            <div class="stateSelect">
                <span>店铺类型 : </span>
                <el-radio-group v-model="shopState">
                    <el-radio-button label="全部"></el-radio-button>
                    <el-radio-button label="已绑定（20）"></el-radio-button>
                    <el-radio-button label="授权过期（10）"></el-radio-button>
                    <el-radio-button label="授权失败 （20）"></el-radio-button>
                </el-radio-group>
            </div>
        </div>
        <div class="listWrap">
            <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column
                prop="type"
                label="平台类型"
                width="180">
            </el-table-column>
            <el-table-column
                prop="name"
                label="姓名"
                width="180">
            </el-table-column>
            <el-table-column
                prop="country"
                label="美国"
                width="180">
            </el-table-column>
            <el-table-column
                prop="overtime"
                label="授权过期时间"
                width="280">
            </el-table-column>
            <el-table-column
                prop="recentlytime"
                label="最近授权时间"
                width="280">
            </el-table-column>
            <el-table-column
                label="操作">
                <template slot-scope="scope">
                    <el-button plain> 停用 </el-button><el-button type="primary">同步商品</el-button>
                </template>
            </el-table-column>
            </el-table>
        </div>
    </div>
</template>
<script>
export default {
    props: {
     
    },
    data(){
        return{
            modelCountry:'',
            countryList: [
            {
                value: 'New York',
                label: 'New York'
            },
            {
                value: 'London',
                label: 'London'
            },
            {
                value: 'Sydney',
                label: 'Sydney'
            }
            ], 
            modelState: '',
            stateList: [
                {
                    value: 'New York',
                    label: 'New York'
                },
                {
                    value: 'London',
                    label: 'London'
                },
                {
                    value: 'Sydney',
                    label: 'Sydney'
                }
            ],
            valueSeach:'' ,
            shopState:'',
            tableData: [{
                type: 'Amazon',
                name: 'yamaxun',
                country: '美国',
                overtime:'2018-12-28',
                recentlytime:'2018-12-28',
                }, {
                type: 'Amazon',
                name: 'yamaxun',
                country: '美国',
                overtime:'2018-12-28',
                recentlytime:'2018-12-28',
                }, {
                type: 'Amazon',
                name: 'yamaxun',
                country: '美国',
                overtime:'2018-12-28',
                recentlytime:'2018-12-28',
                }, {
                type: 'Amazon',
                name: 'yamaxun',
                country: '美国',
                overtime:'2018-12-28',
                recentlytime:'2018-12-28',
            }]
        }
    },
    methods: {
         
         
        }
}
</script>
<style lang="scss">
@import '../../../style/mixin';
.bindshop{
     min-height: 300px;
     overflow: hidden;
     .top{
         white-space: nowrap;
         .stateSelect{
             margin: 20px 0px;
             padding: 10px 8px;
             font-size: 16px;
             border: 1px solid #e6e6e6;
            .el-radio-button__orig-radio:checked+.el-radio-button__inner{
                background-color: #FFF;
                color: #205081; 
                font-weight: 600;
                box-shadow: -1px 0 0 0 #FFF;
                border-color: #ffffff;
            }
            .el-radio-button__inner{
                border: 1px solid #fff;
            }
            .el-radio-button__inner:hover{
                color: #205081; 
            }
         }
     }
     .listWrap{
        border: 1px solid #e6e6e6;
     }
}
</style>
