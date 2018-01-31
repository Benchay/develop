<template>
  <div class="myspread">
    <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
        <el-tab-pane label="推广订单" name="first"><v-spreadproduct></v-spreadproduct></el-tab-pane>
        <el-tab-pane label="推广任务" name="second"><v-spreadtask></v-spreadtask></el-tab-pane>
        <el-tab-pane label="任务评价" name="third"><v-tasksuggest></v-tasksuggest></el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import spreadproduct from './children/spreadproduct'
import spreadtask from './children/spreadtask'
import tasksuggest from './children/tasksuggest'
export default {
    components: { 
      'v-spreadproduct': spreadproduct,
      'v-spreadtask': spreadtask,
      'v-tasksuggest': tasksuggest
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
