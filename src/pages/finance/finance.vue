<template>
  <div class="finance">
    <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
        <el-tab-pane label="财务总览" name="first">
          <v-overview v-if="$route.name == 'finance'"></v-overview>
          <v-recharge v-if="$route.name == 'recharge'"></v-recharge>
        </el-tab-pane>
        <el-tab-pane label="金额交易记录" name="second"><v-principal></v-principal></el-tab-pane>
        <!-- <el-tab-pane label="佣金交易记录" name="third"><v-commission></v-commission></el-tab-pane> -->
    </el-tabs>
  </div>
</template>
<script>
import overview from './children/overview'
import principal from './children/principal'
import commission from './children/commission'
import recharge from './children/recharge'
export default {
    components: {
      'v-overview': overview,
      'v-principal': principal,
      'v-commission': commission,
      'v-recharge': recharge
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
</script>
<style lang="scss">

</style>
