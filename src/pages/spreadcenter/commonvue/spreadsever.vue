<template>
    <div class="spareadsever">
        <div class="severItem">
            <div class="itemHeader">
                <el-row>
                    <el-col :span="3">
                        <div class="grid-content bg-purple">
                            入口:&nbsp;<el-select v-model="entryvalue" placeholder="请选择" style="width: 90px;" size="small">
                                    <el-option
                                    v-for="item in entrytype"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                    </el-option>
                                </el-select>
                        </div>
                    </el-col>
                    <el-col :span="8">
                        <div class="grid-content bg-purple">
                            关键词: <el-input v-model="valueSeach" placeholder="请输入关键词" style="width: 320px;" size="small"></el-input>
                        </div>
                    </el-col>
                    <el-col :span="5">
                        <div class="grid-content bg-purple">
                            类目:  <el-select v-model="differvalue" placeholder="请选择" style="width: 150px;" size="small">
                                    <el-option
                                    v-for="item in differlist"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                    </el-option>
                                </el-select>
                        </div>
                    </el-col>
                    <el-col :span="2" :offset="6">
                        <div class="grid-content bg-purple right">
                            <i class="el-icon-edit"></i>
                            <i class="el-icon-delete"></i>
                        </div>
                    </el-col>
                </el-row>
            </div>
            <div class="itemBody">
                <div class="primeCard">
                    <div class="top">
                        <p>普通点击[<span class="price">$0.2/个</span>]</p>
                    </div>
                    <div class="middle">
                        <p>Prime</p>
                    </div>
                    <div class="bottom">
                        <el-input-number v-model="num1" @change="handleChange" :min="1" size="small" label="描述文字"></el-input-number>
                    </div>
                </div>
                <div class="primeCard">
                    <div class="top">
                        <p>普通点击[<span class="price">$0.2/个</span>]</p>
                    </div>
                    <div class="middle">
                        <p>Prime</p>
                    </div>
                    <div class="bottom">
                        <el-input-number v-model="num1" @change="handleChange" :min="1" size="small" label="描述文字"></el-input-number>
                    </div>
                </div>
                <div class="primeCard">
                    <div class="top">
                        <p>普通点击[<span class="price">$0.2/个</span>]</p>
                    </div>
                    <div class="middle">
                        <p>Prime</p>
                    </div>
                    <div class="bottom">
                        <el-input-number v-model="num1" @change="handleChange" :min="1" size="small" label="描述文字"></el-input-number>
                    </div>
                </div>
                <div class="primeCard">
                    <div class="top">
                        <p>普通点击[<span class="price">$0.2/个</span>]</p>
                    </div>
                    <div class="middle">
                        <p>Prime</p>
                    </div>
                    <div class="bottom">
                        <el-input-number v-model="num1" @change="handleChange" :min="1" size="small" label="描述文字"></el-input-number>
                    </div>
                </div>
                <div class="primeCard">
                    <div class="top">
                        <p>普通点击[<span class="price">$0.2/个</span>]</p>
                    </div>
                    <div class="middle">
                        <p>Prime</p>
                    </div>
                    <div class="bottom">
                        <el-input-number v-model="num1" @change="handleChange" :min="1" size="small" label="描述文字"></el-input-number>
                    </div>
                </div>
                <div class="primeCard">
                    <div class="top">
                        <p>普通点击[<span class="price">$0.2/个</span>]</p>
                    </div>
                    <div class="middle">
                        <p>Prime</p>
                    </div>
                    <div class="bottom">
                        <el-input-number v-model="num1" @change="handleChange" :min="1" size="small" label="描述文字"></el-input-number>
                    </div>
                </div>
                <div class="primeCard">
                    <div class="top">
                        <p>普通点击[<span class="price">$0.2/个</span>]</p>
                    </div>
                    <div class="middle">
                        <p>Prime</p>
                    </div>
                    <div class="bottom">
                        <el-input-number v-model="num1" @change="handleChange" :min="1" size="small" label="描述文字"></el-input-number>
                    </div>
                </div>
                <div class="primeCard">
                    <div class="top">
                        <p>普通点击[<span class="price">$0.2/个</span>]</p>
                    </div>
                    <div class="middle">
                        <p>Prime</p>
                    </div>
                    <div class="bottom">
                        <el-input-number v-model="num1" @change="handleChange" :min="1" size="small" label="描述文字"></el-input-number>
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
export default {
  data(){
       return{
           entryvalue:'',
           entrytype:[
               {
                   value:'搜索',
                   label:'搜索',
               },
               {
                   value:'类目',
                   label:'类目',
               },
           ],
           differvalue:'',
           differlist:[
               {
                value:'男装',
                label:'男装',
               },{
                value:'女装',
                label:'女装',
               },{
                value:'儿童',
                label:'儿童',
               },{
                value:'搜索',
                label:'搜索',
               }
           ],
           num1: 1
       }
  },
    methods: {
        handleChange(value) {
        console.log(value);
        }
    }
}
</script>
<style lang="scss">
.el-collapse-item__content{
    position: relative;
    .addMore{
    width: 100%;
    height: 38px;
    position: absolute;
    bottom: 0;
    left: 0;
    text-align: center;
    background-color: #f5f5f5;
    .el-button{
        border: none;
        width: 120px;
        height: 38px;
        color: #205081;
        font-weight: 600;
        background-color: #f5f5f5;
    }
    }
}

.spareadsever{
    padding-bottom: 18px;
    .severItem{
        border: 1px solid #cccccc; 
        border-radius: 8px;
        overflow: hidden;
        margin-bottom: 20px;
        .itemHeader{
            white-space: nowrap;
            background-color: #f5f5f5;
            padding: 10px 15px;
            i{
                font-size: 20px;
                margin-left: 20px;
            }
        }
        .itemBody{
            border-top: 1px solid #cccccc; 
            padding: 15px 30px 5px;
            overflow: hidden;
           .primeCard{
               width: 170px;
               box-sizing: border-box;
               border: 1px solid #cccccc;
               margin: 0px 10px 10px;
               float: left;
               .top{
                   padding: 0 20px;
                   background-color: #f5f5f5;
                   text-align: center;
                   p{
                       border-bottom: 1px dashed #cccccc;
                    padding: 2px 0;
                    .price{
                        color: #ff9800;
                    }
                   }
               }
               .middle{
                   text-align: center;
                   padding: 0 20px;
                   background-color: #f5f5f5;
               }
               .bottom{
                   .el-input-number__increase{
                       right: -37px;
                   }
                   .el-input--small .el-input__inner{
                       width: 168px;
                       border-radius: 0;
                       border: none;
                       border-top: 1px solid #cccccc; 
                   }
               }
           } 
        }
    }
}
</style>

