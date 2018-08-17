<template>
  <div id="app">
    <router-view/>
    <footTab v-show="$route.meta.showFoot" />
    <!--$route 代表当前路由  meta是一个路由里的对象，原本为空    v-show是隐藏不显示，但是有，v-if是有或没有-->
  </div>
</template>

<script>
  import footTab from './components/tabbar'

  export default {
    components: {
      footTab
    }
  }
</script>

<style>
#app {
}
</style>
