<template>
<div class="trade">
        <div class="tradeAvatar">
            <img src="./111.png" width="100%" height="100%" alt="">
        </div>
        <div class="tradeName">
            <p class="detail">控制反馈：控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；
页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；
页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。知自己的操作；页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</p>
            <div class="priceWrap">
                <div class="left">
                    <span>价格: $39</span>
                    <span class="right">ASIN:B4435D4646D4654</span>
                </div>
                <div class="right">
                    hahaha
                </div>
            </div>
            <div class="size">
                <span class="scTitle">Size : </span><el-radio-group v-model="radioSize" size="small">
                            <el-radio-button label="S" ></el-radio-button>
                            <el-radio-button label="M"></el-radio-button>
                            <el-radio-button label="L"></el-radio-button>
                            <el-radio-button label="XL"></el-radio-button>
                        </el-radio-group>
            </div>
            <div class="color">
                <span class="scTitle">Color : </span><el-radio-group v-model="radioColor" size="small">
                            <el-radio-button label="红色" ></el-radio-button>
                            <el-radio-button label="花色"></el-radio-button>
                            <el-radio-button label="卢瑟"></el-radio-button>
                            <el-radio-button label="黑色"></el-radio-button>
                        </el-radio-group>
            </div>
        </div>
    </div>
</template>
<script>
export default {
     data(){
       return{
            radioSize:'',
            radioColor:'',
       }
     }    
}
</script>
<style lang="scss">
.trade{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    .tradeAvatar{
        width: 160px;
        height: 160px;
        box-sizing: border-box;
        border: 1px solid #cccccc;
        margin-right: 20px;
    }
    .tradeName{
        flex: 1;
        .detail{
            font-size: 14px;
            height: 32px;
            line-height: 16px;
            overflow: hidden;
            position: relative;
            padding-top: 5px;
            &:after{
                content: '...';
                display: block;
                font-size: 14px;
                width: 30px;
                height: 16px;
                color: #000;
                background-color: #ffffff;
                position: absolute;
                right: 0;
                bottom: 0;
            }
        }
        .priceWrap{
            overflow: hidden;
            padding-top: 10px;
            .left{
                width: 350px;;
                span{
                    &:first-child{
                      color: #ee811e;  
                    }
                }
            }
        }
        .size{
            overflow: hidden;
            padding-top: 10px;
        }    
        .color{
            overflow: hidden;
            padding-top: 10px;
        }
        .scTitle{
            display: inline-block;
            width: 45px;
            margin-right: 10px;
        }
    }
}
</style>
