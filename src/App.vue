<template>
  <div id="app">
    <router-view></router-view>
    <TabBar></TabBar>
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
