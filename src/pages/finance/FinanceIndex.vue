<template>
  <div class="FinanceIndex">
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'FinanceIndex',
  data () {
    return {
      activeIndex: '0'
    }
  },
  mehtods: {
  }
}
</script>

<style lang='scss' scoped>
  .FinanceIndex {
    padding-top: 20px;
    padding-left: 20px;
    padding-right: 20px;
  }
</style>
