<template>
  <div>
    <div class="swiper-container" ref="swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in bannerList" :key="item.id">
          <img :src="item.imgUrl" />
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import Carousel from "@/components/Carousel";
export default {
  name: "recommend",

  data() {
    return {
      bannerList: [
        {
          id: 0,
          imgUrl:
            "https://yanxuan.nosdn.127.net/da67541e53669b388b8c664797549096.jpg?type=webp&imageView&quality=75&thumbnail=750x0",
        },
        {
          id: 1,
          imgUrl:
            "https://yanxuan.nosdn.127.net/e1d32c538a9fcf420411592746098ad2.jpg?type=webp&imageView&quality=75&thumbnail=750x0",
        },
        {
          id: 2,
          imgUrl:
            "https://yanxuan.nosdn.127.net/aeb01490aee3a747325725ddc06150d6.jpg?type=webp&imageView&quality=75&thumbnail=750x0",
        },
        {
          id: 3,
          imgUrl:
            "https://yanxuan.nosdn.127.net/668b5187e5a7c283ca8bb5695d3e87f0.jpg?type=webp&imageView&quality=75&thumbnail=750x0",
        },
      ],
    };
  },

  mounted() {
    this.initSwiper();
  },

  methods: {
    initSwiper() {
      new Swiper(this.$refs.swiper, {
        loop: true, // 循环模式选项
        // 如果需要分页器
        pagination: {
          el: ".swiper-pagination",
        },
      });
    },
  },

  components: {
    Carousel,
  },
};
</script>

<style lang="less">
.swiper-container {
  position: relative;
  .swiper-slide {
    img {
      width: 750px;
      height: 370px;
    }
  }
  .swiper-pagination {
    --swiper-pagination-color: #fff;
    .swiper-pagination-bullet {
      width: 40px;
      height: 4px;
    }
  }
}
</style>
