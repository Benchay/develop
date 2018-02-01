<template>
  <div class="spreadcenter">
    <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
        <el-tab-pane label="销量推广" name="first"><v-sellspread></v-sellspread></el-tab-pane>
        <el-tab-pane label="流量推广" name="second"><v-flowspread></v-flowspread></el-tab-pane>
        <el-tab-pane label="测评推广" name="third"><v-evaluationspread></v-evaluationspread></el-tab-pane>
        <el-tab-pane label="周期螺旋" name="fourth"><v-period></v-period></el-tab-pane>
        <el-tab-pane label="排名优化" name="fiveth"><v-ranking></v-ranking></el-tab-pane>
        <el-tab-pane label="Deal活动" name="sixth"><v-dealactivity></v-dealactivity></el-tab-pane>
        <el-tab-pane label="关联推广" name="seventh"><v-relativespread></v-relativespread></el-tab-pane>
        <el-tab-pane label="全部推广" name="nineth"><v-flowspread></v-flowspread></el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import sellspread from './children/sellspread'
import flowspread from './children/flowspread'
import evaluationspread from './children/evaluationspread'
import period from './children/period'
import ranking from './children/ranking'
import dealactivity from './children/dealactivity'
import relativespread from './children/relativespread'
export default {
    components: { 
      'v-sellspread': sellspread,
      'v-flowspread': flowspread,
      'v-evaluationspread': evaluationspread,
      'v-period': period,
      'v-ranking': ranking,
      'v-dealactivity': dealactivity,
      'v-relativespread': relativespread,
      },
    data() {
      return {
        activeName2: 'seventh'
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
