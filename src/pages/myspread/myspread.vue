<template>
  <div class="myspread">
    <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
        <el-tab-pane label="推广计划" name="first"><v-spreadproduct></v-spreadproduct></el-tab-pane>
        <el-tab-pane label="推广任务" name="second"><v-spreadtask></v-spreadtask></el-tab-pane>
        <el-tab-pane label="任务评价" name="four"><v-taskdetail></v-taskdetail></el-tab-pane>
        <el-tab-pane label="评论库" name="third"><v-tasksuggest></v-tasksuggest></el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import spreadproduct from './children/spreadproduct'
import spreadtask from './children/spreadtask'
import tasksuggest from './children/tasksuggest'
import taskdetail from './children/taskdetail'
export default {
    components: { 
      'v-spreadproduct': spreadproduct,
      'v-spreadtask': spreadtask,
      'v-tasksuggest': tasksuggest,
      'v-taskdetail': taskdetail,
      },
    data() {
      return {
        activeName2: 'four'
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
