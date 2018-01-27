<template>
  <div class="productlist">
    <div class="top">
        <el-row :gutter="20">
            <el-col :span="16">
                <div class="grid-content bg-purple">
                    <el-select v-model="modelShop" placeholder="请选择"  style="width: 240px;">
                        <el-option
                        v-for="item in shopList"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                    <el-select v-model="modelPrice" placeholder="请选择"  style="width: 240px;">
                        <el-option
                        v-for="item in priceList"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                </div>
            </el-col>
            <el-col :span="8">
                <div class="grid-content bg-purple" style="float: right;">
                    <el-input v-model="valueSeach" placeholder="请输入内容" style="width: 240px;"></el-input>
                    <el-button plain>搜  索</el-button>
                </div>
            </el-col>
        </el-row>
    </div>
    <div class="contain">
        <div class="containItem" v-for="item in containItems">
            <div class="productImgwrap">
                <img :src="item.img" alt="" width="100%" height="100%">
            </div>
            <p class="productDetail">
               {{item.productDetail}}
            </p>
            <p class="productPrice">
                <b class="price">{{item.price}}</b>
                <span class="wish">{{item.wish}}</span>
            </p>

        </div>
    </div>
    </div> 
</template>
<script>
export default {
    props: {
     
    },
    data() {
      return {
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
            {
                img: require('./111.png'),
                productDetail: '我文件文件夹管理科江苏高考零售价格单联开关吉林省的会计管理科深度国际拉克丝大驾光临开始大驾光临',
                price: '$11122122',
                wish: 'wish'
            },{
               img: require('./111.png'),
                productDetail: '我文件文件夹管理科江苏高考零售价格单联开关吉林省的会计管理科深度国际拉克丝大驾光临开始大驾光临',
                price: '$11122122',
                wish: 'wish'  
            },{
                img: require('./111.png'),
                productDetail: '我文件文件夹管理科江苏高考零售价格单联开关吉林省的会计管理科深度国际拉克丝大驾光临开始大驾光临',
                price: '$11122122',
                wish: 'wish'
            },{
                img: require('./111.png'),
                productDetail: '我文件文件夹管理科江苏高考零售价格单联开关吉林省的会计管理科深度国际拉克丝大驾光临开始大驾光临',
                price: '$11122122',
                wish: 'wish'
            },{
                img: require('./111.png'),
                productDetail: '我文件文件夹管理科江苏高考零售价格单联开关吉林省的会计管理科深度国际拉克丝大驾光临开始大驾光临',
                price: '$11122122',
                wish: 'wish'
            },{
                img: require('./111.png'),
                productDetail: '我文件文件夹管理科江苏高考零售价格单联开关吉林省的会计管理科深度国际拉克丝大驾光临开始大驾光临',
                price: '$11122122',
                wish: 'wish'
            },{
                img: require('./111.png'),
                productDetail: '我文件文件夹管理科江苏高考零售价格单联开关吉林省的会计管理科深度国际拉克丝大驾光临开始大驾光临',
                price: '$11122122',
                wish: 'wish'
            },{
                img: require('./111.png'),
                productDetail: '我文件文件夹管理科江苏高考零售价格单联开关吉林省的会计管理科深度国际拉克丝大驾光临开始大驾光临',
                price: '$11122122',
                wish: 'wish'
            },{
                img: require('./111.png'),
                productDetail: '我文件文件夹管理科江苏高考零售价格单联开关吉林省的会计管理科深度国际拉克丝大驾光临开始大驾光临',
                price: '$11122122',
                wish: 'wish'
            },{
                img: require('./111.png'),
                productDetail: '我文件文件夹管理科江苏高考零售价格单联开关吉林省的会计管理科深度国际拉克丝大驾光临开始大驾光临',
                price: '$11122122',
                wish: 'wish'
            },{
                img: require('./111.png'),
                productDetail: '我文件文件夹管理科江苏高考零售价格单联开关吉林省的会计管理科深度国际拉克丝大驾光临开始大驾光临',
                price: '$11122122',
                wish: 'wish'
            },{
                img: require('./111.png'),
                productDetail: '我文件文件夹管理科江苏高考零售价格单联开关吉林省的会计管理科深度国际拉克丝大驾光临开始大驾光临',
                price: '$11122122',
                wish: 'wish'
            },{
                img: require('./111.png'),
                productDetail: '我文件文件夹管理科江苏高考零售价格单联开关吉林省的会计管理科深度国际拉克丝大驾光临开始大驾光临',
                price: '$11122122',
                wish: 'wish'
            },{
                img: require('./111.png'),
                productDetail: '我文件文件夹管理科江苏高考零售价格单联开关吉林省的会计管理科深度国际拉克丝大驾光临开始大驾光临',
                price: '$11122122',
                wish: 'wish'
            },{
                img: require('./111.png'),
                productDetail: '我文件文件夹管理科江苏高考零售价格单联开关吉林省的会计管理科深度国际拉克丝大驾光临开始大驾光临',
                price: '$11122122',
                wish: 'wish'
            },{
                img: require('./111.png'),
                productDetail: '我文件文件夹管理科江苏高考零售价格单联开关吉林省的会计管理科深度国际拉克丝大驾光临开始大驾光临',
                price: '$11122122',
                wish: 'wish'
            },{
                img: require('./111.png'),
                productDetail: '我文件文件夹管理科江苏高考零售价格单联开关吉林省的会计管理科深度国际拉克丝大驾光临开始大驾光临',
                price: '$11122122',
                wish: 'wish'
            },{
                img: require('./111.png'),
                productDetail: '我文件文件夹管理科江苏高考零售价格单联开关吉林省的会计管理科深度国际拉克丝大驾光临开始大驾光临',
                price: '$11122122',
                wish: 'wish'
            },{
                img: require('./111.png'),
                productDetail: '我文件文件夹管理科江苏高考零售价格单联开关吉林省的会计管理科深度国际拉克丝大驾光临开始大驾光临',
                price: '$11122122',
                wish: 'wish'
            },{
                img: require('./111.png'),
                productDetail: '我文件文件夹管理科江苏高考零售价格单联开关吉林省的会计管理科深度国际拉克丝大驾光临开始大驾光临',
                price: '$11122122',
                wish: 'wish'
            },{
                img: require('./111.png'),
                productDetail: '我文件文件夹管理科江苏高考零售价格单联开关吉林省的会计管理科深度国际拉克丝大驾光临开始大驾光临',
                price: '$11122122',
                wish: 'wish'
            },{
                img: require('./111.png'),
                productDetail: '我文件文件夹管理科江苏高考零售价格单联开关吉林省的会计管理科深度国际拉克丝大驾光临开始大驾光临',
                price: '$11122122',
                wish: 'wish'
            },{
                img: require('./111.png'),
                productDetail: '我文件文件夹管理科江苏高考零售价格单联开关吉林省的会计管理科深度国际拉克丝大驾光临开始大驾光临',
                price: '$11122122',
                wish: 'wish'
            },{
                img: require('./111.png'),
                productDetail: '我文件文件夹管理科江苏高考零售价格单联开关吉林省的会计管理科深度国际拉克丝大驾光临开始大驾光临',
                price: '$11122122',
                wish: 'wish'
            }
        ]
      };
    },

}
</script>
<style lang="scss">
@import '../../../style/mixin';
 .productlist{
     min-height: 300px;
     overflow: hidden;
     .top{
         padding: 0 8px 0 16px;
         white-space: nowrap;
    }
    .contain{
        .containItem{
            width: 220px;
            float: left;
            font-size: 14px;
            margin: 10px 0 10px 16px;
            padding-bottom: 15px;
            box-sizing: border-box;
            border: 1px solid #e6e6e6;
            .productImgwrap{
                margin-bottom: 12px;
                width: 100%;
                height: 200px;
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
                    width: 52px;
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
                    @include size(50px,20px)
                }
            }
        }
    }
 }
</style>
