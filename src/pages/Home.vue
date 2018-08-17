<template>
  <div>
    <topHeader title="我的地址">
      <router-link to="/" slot="left" class="topSearch">
        <i class="iconfont icon-suosou"></i>
      </router-link>
      <router-link to="/" slot="right" class="topLogin">
        <span class="topLogin-text">
          登录/注册
        </span>
      </router-link>
    </topHeader>


  </div>
</template>

<script>
  import topHeader from '../components/topBar'
  export default {
    components: {
      topHeader
    }
  }
</script>

<style scoped lang="scss">
  .topSearch .iconfont{
    color: #fff;
  }
  .topLogin .topLogin-text{
    color: #fff;
  }
</style>
