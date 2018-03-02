<template>
  <div class="loginheader">
      <el-col :span="24" class="loginTop">
      <el-col :span="4">logo</el-col>
      <el-col :span="6" class="loginTitle">商户系统</el-col>
    </el-col>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="scss">
.loginheader {
    .loginTop {
      height: 60px;
      border-bottom: 3px solid #205081;
      div{
        height:100%;
        display: flex;
        align-items: center;
        padding: 0 20px;
      }
      div:first-child{
        justify-content: center;
        border-right:1px solid #ccc;
      }
    }
    .loginTitle{
      height: 40px;
      font-size: 18px;
      color:#333;
      font-weight: bold;
    }
}
</style>
