<template>
  <div class="productlist">
    <div class="top">
        <el-row :gutter="20">
            <el-col :span="16">
                <div class="grid-content bg-purple" style="padding-bottom: 15px; border-bottom: 1px solid #f7f7f7;">
                    <el-select size="small" v-model="modelShop" placeholder="请选择"  style="width: 240px;">
                        <el-option
                        v-for="item in shopList"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                    <el-select size="small" v-model="modelPrice" placeholder="请选择"  style="width: 240px;">
                        <el-option
                        v-for="item in priceList"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                    <a href="javascript:;" class="addproduct" @click="centerDialogVisible = true"><i></i>添加产品</a>
                </div>
            </el-col>
            <el-col :span="8">
                <div class="grid-content bg-purple" style="float: right; margin-right: 10px;">
                    <el-input  size="small" v-model="valueSeach" placeholder="请输入内容" style="width: 240px;"></el-input>
                    <el-button>搜  索</el-button>
                </div>
            </el-col>
        </el-row>
        <el-row>
            <p style="padding-top: 15px;"><el-button type="primary" plain>批量删除</el-button></p>  
        </el-row>
    </div>
    <div class="contain">
        <div class="containItem" v-for="item in containItems">
            <div class="productImgwrap">
                <img :src="item.img" alt="" width="100%" height="100%">
                <el-checkbox v-model="checked"></el-checkbox>
            </div>
            <p class="productDetail">
               {{item.productDetail}}
            </p>
            <p class="productPrice">
                <b class="price">{{item.price}}</b>
                <span class="wish"></span>
            </p>

        </div>
    </div>
    <el-dialog
    title="添加商品"
    :visible.sync="centerDialogVisible"
    width="46%"
    center
    class="productstyle">
    <p><span>商品链接:</span><el-input size="small" v-model="productLink" placeholder="请输入商品链接" style="width: 74%; margin: 0 10px"></el-input><el-button>商品抓取</el-button></p>
    <div class="dialogmainwrap">
        <div class="leftwrap">
            <p><span class="titledai">商品名称:</span><el-input size="small" v-model="productName" placeholder="请输入商品名称" style="width: 80%; margin-right: 10px"></el-input></p>
            <p><span class="titledai">商品ID:</span><el-input size="small" v-model="productId" placeholder="请输入商品ID" style="width: 80%; margin-right: 10px"></el-input></p>
            <p><span class="titledai">店铺名称:</span><el-input size="small" v-model="shopName" placeholder="请输入店铺名称" style="width: 80%; margin-right: 10px"></el-input></p>
            <p><span class="titledai">店铺ID:</span><el-input size="small" v-model="shopId" placeholder="请输入店铺ID" style="width: 80%; margin-right: 10px"></el-input></p>
            <p><span class="titledai">品牌名称:</span><el-input size="small" v-model="brandName" placeholder="请输入品牌名称" style="width: 80%; margin-right: 10px"></el-input></p>
            <p><span class="titledai">商品价格:</span><el-input size="small" v-model="productPrice" placeholder="请输入商品价格" style="width: 80%; margin-right: 10px"></el-input></p>
        </div>
        <div class="rightwrap">
            <div class="Qimgwrap">
                <img src="./111.png" alt="" width="100%" height="100%">
            </div>
            <p>
                <el-checkbox v-model="checked">跟卖</el-checkbox>
                <el-checkbox v-model="checked">FBA</el-checkbox>
            </p>
        </div>
    </div>
    <div class="tagwrap">
        <span class="titledai">颜色:</span>
        <el-tag
        :key="tag"
        v-for="tag in ColordynamicTags"
        closable
        :disable-transitions="false"
        @close="handleClose(tag)">
        {{tag}}
        </el-tag>
        <el-input
        class="input-new-tag"
        v-if="inputVisible"
        v-model="inputValue"
        ref="saveTagInput"
        size="small"
        @keyup.enter.native="handleInputConfirm"
        @blur="handleInputConfirm"
        style="width: 80px;"
        >
        </el-input>
        <el-button v-else class="button-new-tag" size="small" @click="showInput">新增</el-button>
    </div>
    <!-- <div class="tagwrap">
        <span class="titledai">尺码:</span>
         <el-tag
        :key="tag"
        v-for="tag in SizedynamicTags"
        closable
        :disable-transitions="false"
        @close="handleClose(tag)">
        {{tag}}
        </el-tag>
        <el-input
        class="input-new-tag"
        v-if="inputVisible1"
        v-model="inputValue1"
        ref="saveTagInput1"
        size="small"
        @keyup.enter.native="handleInputConfirm"
        @blur="handleInputConfirm"
        style="width: 80px;"
        >
        </el-input>
        <el-button v-else class="button-new-tag" size="small" @click="showInput1">新增</el-button>
    </div> -->
    <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addproduct()">确 定</el-button>
    </span>
    </el-dialog>
    </div> 
</template>
<script>
export default {
    props: {
     
    },
    data() {
      return {
        productLink:'',
        productName:'',
        productId:'',
        shopName:'',
        shopId:'',
        brandName:'',
        productPrice:'',
        checked: false,
        ColordynamicTags: ['红', '白', '黑'],
        SizedynamicTags: ['S', 'M', 'L'],
        inputVisible: false,
        inputVisible1: false,
        inputValue: '',
        inputValue1: '',
        centerDialogVisible: false,
        modelShop:'',
          shopList: [
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
        modelPrice: '',
        priceList: [
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
        containItems:[
  
        ]
      };
    },
    created () {
    },
    mounted(){
        // this.initdata();
    },
    methods:{
        handleClose(tag) {
        this.ColordynamicTags.splice(this.ColordynamicTags.indexOf(tag), 1);
      },

      showInput() {
        this.inputVisible = true;
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus();
        });
      },

      handleInputConfirm() {
        let inputValue = this.inputValue;
        if (inputValue) {
          this.ColordynamicTags.push(inputValue);
        }
        this.inputVisible = false;
        this.inputValue = '';
      },
    //   addproduct(){
    //       let param = {
    //           url:this.productLink,
    //         title:this.productName
    //     }
    //       console.log(param);
    //     this.$api.addProduct(param).then(res=>{

    //     })
    //    },
    //    initdata(){
    //        let param = {

    //        }
    //         this.$api.productList(param).then(res =>{

    //         })
    //    }
    }
}
</script>
<style lang="scss">
@import '../../../style/mixin';
 .productlist{
    background-color: #ffffff;
    padding-top: 15px;
    border: 1px solid #cccccc;
    border-top: none;
     min-height: 300px;
     overflow: hidden;
     .top{
         padding: 0 8px 0 16px;
         white-space: nowrap;
    }
    .contain{
        .containItem{
            width: 250px;
            float: left;
            font-size: 14px;
            margin: 10px 0 10px 16px;
            padding-bottom: 15px;
            box-sizing: border-box;
            border: 1px solid #e6e6e6;
            .productImgwrap{
                margin-bottom: 12px;
                width: 100%;
                height: 230px;
                position: relative;
                .el-checkbox{
                    position: absolute;
                    right: 10px;
                    top: 10px;
                }
            }
            .productDetail{
                padding: 0 10px;
                margin-bottom: 12px;
                height: 28px;
                line-height: 14px;
                overflow: hidden;
                position: relative;
                &:after{
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
            .productPrice{
                padding: 0 10px;
                display: flex;
                justify-content: space-between;
                flex-wrap: nowrap;
                .price{
                    font-size: 16px;
                }
                .wish{
                    @include size(50px,20px);
                    background: url(./wish_logo.png) center no-repeat;
                }
            }
        }
    }
    .productstyle{
        overflow: hidden;
        p{
            white-space: nowrap;
        }
        .titledai{
            display: inline-block;
            width: 60px;
            margin-right: 10px;
        }
        .tagwrap{
            margin-top: 20px;
            .titledai{
                margin-right: 5px;
            }
            .el-tag{
                margin-right: 10px;
                margin-bottom: 5px;
            }
        }
        .dialogmainwrap{
            margin-top: 20px;
            display: flex;
            .leftwrap{
                flex:1;
                p{
                    margin-bottom: 20px;
                    &:last-child{
                        margin-bottom: 0;
                    }
                }
            }
            .rightwrap{
                .Qimgwrap{
                    width: 190px;
                    height: 190px;
                }
            }
        }
    }
 }
</style>
