<template>
  <div id="app">
    <router-view></router-view>
    <NavBar></NavBar>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
export default {
  name: "App",
  components: {
    NavBar,
  },
};
</script>

<style lang="stylus" scoped></style>
