<template>
  <div id="pcfather">
    <div id="wrap">
    <div id="header">
        <v-header></v-header>
      </div>
          <div id="main" class="clearfix">
            <div id="content">
                <keep-alive>
                    <router-view></router-view>
                </keep-alive>
            </div>
          </div>
        </div>
        <div id="footer">
            <v-footer></v-footer>
      </div>
  </div>
</template>

<script>
import header from '@/components/header'
import footer from '@/components/footer'
export default {
    components: { 
    'v-header' : header,
    'v-footer' : footer
    }
}
</script>

<style lang="scss" type="text/css">
#content {
  margin: 20px 80px;
}
</style>
