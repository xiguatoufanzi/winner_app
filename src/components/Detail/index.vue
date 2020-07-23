<template>
  <div>
    <!-- 头部导航 -->
    <NavBar :title="'网易严选'" />

    <!-- 内容 -->
    <div class="detailContent">
      <img src="" alt="" />
      <div>￥59</div>
      <div>一泵洗8件 日本超浓缩48小时抗菌消臭洗衣液</div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
export default {
  name: "detail",

  components: {
    NavBar,
  },
};
</script>

<style lang="less" scoped></style>
