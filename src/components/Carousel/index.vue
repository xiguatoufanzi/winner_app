<template>
  <div>
    <!-- 轮播 -->
    <div class="swiper-container" ref="swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in carouselList" :key="item.id">
          <img :src="item.imgUrl" />
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>

      <!-- 如果需要导航按钮 -->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  name: "carousel",

  props: {
    // 声明接收属性
    carouselList: Array,
  },

  watch: {
    carouselList(value) {
      // 如果有数据才去创建延迟swiper
      if (value.length > 0) {
        this.$nextTick(() => {
          this.initSwiper();
        });
      }
    },
  },

  methods: {
    initSwiper() {
      new Swiper(this.$refs.swiper, {
        loop: true, // 循环模式选项
        // 如果需要分页器
        pagination: {
          el: ".swiper-pagination",
        },
        // 如果需要前进后退按钮
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    },
  },
};
</script>

<style lang="less" scoped></style>
