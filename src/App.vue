<template>
  <div id="app">
    <router-view></router-view>
    <TabBar v-show="!$route.meta.isHide"></TabBar>
  </div>
</template>

<script>
import TabBar from "@/components/TabBar";
export default {
  name: "App",
  components: {
    TabBar,
  },
};
</script>

<style lang="less">
body {
  background: #eee;
}
</style>
