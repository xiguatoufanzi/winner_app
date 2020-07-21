<template>
  <div>
    <i class="goToTop"></i>
  </div>
</template>

<script>
export default {
  name: "ToTop",
};
</script>

<style lang="less" scoped>
.goToTop {
  position: fixed;
  right: 23px;
  bottom: 120px;
  display: inline-block;
  vertical-align: middle;
  width: 82px;
  height: 82px;
  background-image: url("../../assets/images/home/goToTop.webp");
  background-size: 82px;
  z-index: 2;
}
</style>
