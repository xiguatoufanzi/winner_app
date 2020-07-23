<template>
  <div>
    <van-tabbar
      v-model="active"
      @change="onChange"
      border
      active-color="#B4282D"
      route
    >
      <van-tabbar-item replace to="/">
        <span>首页</span>
        <template #icon="props">
          <img :src="props.active ? icon.active : icon.inactive" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item replace to="/category">
        <span>分类</span>
        <template #icon="props">
          <img :src="props.active ? icon.active1 : icon.inactive1" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item replace to="/goodbuy">
        <span>值得买</span>
        <template #icon="props">
          <img :src="props.active ? icon.active2 : icon.inactive2" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item
        replace
        to="/cart"
        :badge="selectedNum === 0 ? '' : selectedNum"
      >
        <span>购物车</span>
        <template #icon="props">
          <img :src="props.active ? icon.active3 : icon.inactive3" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item replace to="/personal">
        <span>个人</span>
        <template #icon="props">
          <img :src="props.active ? icon.active4 : icon.inactive4" />
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from "vant";
import { mapGetters } from "vuex";
export default {
  name: "tabbar",

  data() {
    return {
      active: 0,
      icon: {
        active: require("../../assets/images/tabBar/tab-home-current.png"),
        inactive: require("../../assets/images/tabBar/tab-home.png"),

        active1: require("../../assets/images/tabBar/tab-cate-current.png"),
        inactive1: require("../../assets/images/tabBar/tab-cate.png"),

        active2: require("../../assets/images/tabBar/buy-current.png"),
        inactive2: require("../../assets/images/tabBar/buy.png"),

        active3: require("../../assets/images/tabBar/tab-cart-current.png"),
        inactive3: require("../../assets/images/tabBar/tab-cart.png"),

        active4: require("../../assets/images/tabBar/tab-my-current.png"),
        inactive4: require("../../assets/images/tabBar/tab-my.png"),
      },
    };
  },

  computed: {
    ...mapGetters(["selectedNum"]),
  },

  methods: {
    // 切换导航
    onChange(index) {},
  },
};
</script>

<style lang="stylus" scoped></style>
