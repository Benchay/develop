<template>
  <div class="product">
    <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
        <el-tab-pane label="产品列表" name="first"><v-productlist></v-productlist></el-tab-pane>
        <el-tab-pane label="绑定店铺" name="second"><v-bindshop></v-bindshop></el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import productlist from './children/productlist'
import bindshop from './children/bindshop'
export default {
    components: { 
      'v-productlist': productlist,
      'v-bindshop': bindshop
      },
    data() {
      return {
        activeName2: 'first'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  }
</script>
<style lang="scss">

</style>
