<template>
  <div>
    <!-- 导航 -->
    <div class="navBar">
      <van-icon name="wap-home-o" size="26" color="#777" @click="gohome" />
      <span>{{ title }}</span>
      <div class="right">
        <van-icon name="search" size="26" class="search" color="#777" />
        <van-icon
          name="shopping-cart-o"
          size="26"
          color="#777"
          @click="goCart"
          :badge="selectedNum === 0 ? '' : selectedNum"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "navbar",
  props: {
    title: String,
  },

  computed: {
    ...mapGetters(["selectedNum"]),
  },

  methods: {
    gohome() {
      this.$router.push("/");
    },
    goCart() {
      this.$router.push("cart");
    },
  },
};
</script>

<style lang="less" scoped>
.navBar {
  background: #fafafa;
  border-bottom: 1px solid #eee;
  padding: 0 26px 0 24px;
  height: 100px;
  line-height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  span {
    font-size: 38px;
    margin-right: -100px;
  }
  .right {
    display: flex;
    .search {
      margin-right: 30px;
    }
  }
}
</style>
