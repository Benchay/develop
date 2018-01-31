<template>
  <div class="spreadcenter">
    <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
        <el-tab-pane label="销量推广" name="first"><v-sellspread></v-sellspread></el-tab-pane>
        <el-tab-pane label="流量推广" name="second"><v-bindshop></v-bindshop></el-tab-pane>
        <el-tab-pane label="测评推广" name="third"><v-bindshop></v-bindshop></el-tab-pane>
        <el-tab-pane label="周期螺旋" name="fourth"><v-bindshop></v-bindshop></el-tab-pane>
        <el-tab-pane label="排名优化" name="fiveth"><v-bindshop></v-bindshop></el-tab-pane>
        <el-tab-pane label="Deal活动" name="sixth"><v-bindshop></v-bindshop></el-tab-pane>
        <el-tab-pane label="关联推广" name="seventh"><v-bindshop></v-bindshop></el-tab-pane>
        <el-tab-pane label="还有一个" name="enighth"><v-bindshop></v-bindshop></el-tab-pane>
        <el-tab-pane label="全部推广" name="nineth"><v-bindshop></v-bindshop></el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import sellspread from './children/sellspread'
import bindshop from './children/bindshop'
export default {
    components: { 
      'v-sellspread': sellspread,
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
