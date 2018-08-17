<template>
    <div class="tabContainer">
      <router-link to="/home" class="tabItem">
        <i class="iconfont icon-waimai"></i>
        <span>外卖</span>
      </router-link>
      <router-link to="/search" class="tabItem">
        <i class="iconfont icon-suosou"></i>
        <span>搜索</span>
      </router-link>
      <router-link to="/orderForm" class="tabItem">
        <i class="iconfont icon-dingdan"></i>
        <span>订单</span>
      </router-link>
      <router-link to="/personal" class="tabItem">
        <i class="iconfont icon-wode"></i>
        <span>我的</span>
      </router-link>
    </div>
</template>

<script>
    export default {
      name: "tabbar"
    }
</script>

<style scoped lang="scss">
  .tabContainer{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-around;
    background: #fafbfe;
    .tabItem{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color:#999;
      i{
        display: block;
        font-size: 28px;
        margin-bottom: 1px;
      }
      span{
        font-size: 12px;
      }
    }
    a.router-link-active{
      border-top:2px solid #45B963;
      color:#45B963;
    }
  }
</style>
