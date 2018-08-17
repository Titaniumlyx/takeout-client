<template>
    <header class="header-container">
      <slot name="left"></slot>
      <span class="header-title">
        <span class="header-title-text ellipsis">{{title}}</span>
      </span>
      <slot name="right"></slot>
    </header>
</template>

<script>
    export default {
      name: "topBar",
      props: {
        title: String
      }
    }
</script>

<style scoped lang="scss">
  .header-container{
    background: #2CB32C;
    z-index: 100;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 50px;
    color: #fff;
    .topSearch{
      position: absolute;
      top: 50%;
      left: 15px;
      transform: translateY(-50%);
      .iconfont{
        font-size: 16px;
      }
    }
    .header-title{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 50%;
      text-align: center;
      .header-title-text{
        font-size: 20px;
      }
    }
    .topLogin{
      position: absolute;
      top: 50%;
      right: 15px;
      transform: translateY(-50%);
      .topLogin-text{
        font-size: 18px;
      }
    }
  }
</style>
