<template>
    <div class="bindshop">
        <div class="top">
            <el-row :gutter="20">
                <el-col :span="16">
                    <div class="grid-content bg-purple">
                        <el-select size="small" v-model="modelCountry" placeholder="请选择"  style="width: 240px;">
                            <el-option
                            v-for="item in countryList"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                        <el-select size="small" v-model="modelState" placeholder="请选择"  style="width: 240px;">
                            <el-option
                            v-for="item in stateList"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                         <a href="javascript:;" class="addproduct" @click="centerDialogVisible = true"><i></i>新增授权电铺</a>
                    </div>
                </el-col>
                <el-col :span="8">
                    <div class="grid-content bg-purple" style="float: right;">
                        <el-input size="small" v-model="valueSeach" placeholder="请输入店铺名称" style="width: 240px;"></el-input>
                        <el-button style="padding: 8px 20px;">搜  索</el-button>
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
                label="电商平台"
                width="180">
            </el-table-column>
            <el-table-column
                prop="name"
                label="开站点"
                width="180">
            </el-table-column>
            <el-table-column
                prop="overtime"
                label="授权时间"
                width="180">
            </el-table-column>
            <el-table-column
                prop="state"
                label="状态"
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
    <el-dialog
    title="店铺授权"
    :visible.sync="centerDialogVisible"
    width="46%"
    center
    class="shopstyle">
    <el-form :model="dynamicValidateForm" ref="dynamicValidateForm" label-width="100px" class="demo-dynamic">
    <el-form-item
        prop="modelState"
        label="电商平台:"
    >
        <el-select size="small" v-model="dynamicValidateForm.modelState" placeholder="请选择">
            <el-option
            v-for="item in dynamicValidateForm.stateList"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            </el-option>
        </el-select>
    </el-form-item>
    <el-form-item
        prop="modelState"
        label="开站点:"
        :rules="[
        {required: true, message: '开站点不能为空', trigger: 'blur'}
        ]"
    >
        <el-select size="small" v-model="dynamicValidateForm.modelState" placeholder="请选择">
            <el-option
            v-for="item in dynamicValidateForm.stateList"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            </el-option>
        </el-select>
    </el-form-item>
    <el-form-item
        prop="name"
        label="店铺别名:"
        :rules="[
        {required: true, message: '店铺不能为空', trigger: 'blur'}
        ]"
    >
        <el-input v-model="dynamicValidateForm.name"></el-input>
    </el-form-item>
    <el-form-item
        prop="email"
        label="Amazon账号:"
        :rules="[
        { required: true, message: '请输入邮箱地址', trigger: 'blur' },
        { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change' }
        ]"
    >
        <el-input v-model="dynamicValidateForm.email" style="margin-left: 50px;"></el-input>
    </el-form-item>
        <el-form-item
        prop="MerID"
        label="Merchant ID:"
        :rules="[
        {required: true, message: '卖家编号', trigger: 'blur'}
        ]"
    >
        <el-input v-model="dynamicValidateForm.MerID"></el-input>
    </el-form-item>
    <el-form-item
        prop="AWSID"
        label="AWS Access Key ID:"
        :rules="[
        {required: true, message: 'AWS访问键编码', trigger: 'blur'}
        ]"
    >
        <el-input v-model="dynamicValidateForm.AWSID"></el-input>
    </el-form-item>
      <el-form-item
        prop="secKey"
        label="Secret Key:"
        :rules="[
        {required: true, message: '密钥', trigger: 'blur'}
        ]"
    >
        <el-input v-model="dynamicValidateForm.secKey"></el-input>
    </el-form-item>
    </el-form>
    <p style="text-align: right; padding-right: 65px;">
        <a href="javascript:;">如何获取上述信息</a>
    </p>
    <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="centerDialogVisible = false">授 权</el-button>
    </span>
    </el-dialog>
    </div>
</template>
<script>
export default {
    props: {
     
    },
    data(){
        return{
            centerDialogVisible: false,
            dynamicValidateForm: {
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
            name:'',
            email: '',
            MerID:'',
            AWSID:'',
            secKey:''
            },
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
    background-color: #ffffff;
    padding: 15px 20px 35px;
    border: 1px solid #cccccc;
    border-top: none;
     min-height: 300px;
     overflow: hidden;
     .top{
         white-space: nowrap;
         .stateSelect{
             margin: 15px 0px;
             padding: 5px 8px;
             font-size: 16px;
             border: 1px solid #e6e6e6;
            .el-radio-button__orig-radio:checked+.el-radio-button__inner{
                background-color: #FFF;
                color: #205081; 
                font-weight: 600;
                border-color: #ffffff;
            }
            .el-radio-button__inner{
                border: 1px solid #fff;
            }
         }
     }
     .listWrap{
        border: 1px solid #e6e6e6;
     }
     .shopstyle{
         .demo-dynamic{
             .el-form-item__error{
                 left: 50px;
             }
             .el-form-item__label{
                 white-space: nowrap;
             }
             .el-input{
                 margin-left: 50px;
                 width: 80%;
             }
         }
     }
}
</style>
