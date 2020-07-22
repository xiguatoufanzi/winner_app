<template>
  <div ref="wrapper" class="recommendCategory">
    <div>
      <!-- 轮播 -->
      <div class="swiper-container" ref="swiper">
        <div class="swiper-wrapper" v-if="navData">
          <div
            class="swiper-slide"
            v-for="(swiperItem, index) in navData.category.bannerUrlList"
            :key="index"
          >
            <img :src="swiperItem" />
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
      </div>

      <!-- 列表区域 -->
      <div class="listContainer" v-if="navData">
        <div class="top">
          <div class="title">{{ navData.category.name }}</div>
          <div class="desc">{{ navData.category.frontDesc }}</div>
        </div>

        <div class="list">
          <div
            class="cateItem"
            v-for="cateItem in navData.itemList"
            :key="cateItem.id"
          >
            <img :src="cateItem.listPicUrl" alt="" />
            <div class="cateName">{{ cateItem.name }}</div>
            <div class="price">￥ {{ cateItem.retailPrice }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import BScroll from "better-scroll";
import request from "@/utils/request";
export default {
  name: "recommendCategory",

  data() {
    return {
      homeNavData: [],
    };
  },

  props: {
    navId: Number,
  },

  async mounted() {
    const result = await request("/indexCateList");
    if (result.code === 200) {
      this.homeNavData = result.data;
    }
  },

  watch: {
    homeNavData: {
      handler(value) {
        this.$nextTick(() => {
          // 初始化轮播
          this.initSwiper();
          this.initBScroll();
        });
      },
      // immediate: true, // 初始显示之前就立即调用一次
    },

    navId(value) {
      // this.swiper1.update(true);
      this.$nextTick(() => {
        console.log(value);
        this.initSwiper();
      });
    },
  },

  computed: {
    // 计算当前总数据
    navData() {
      return this.homeNavData.find(
        (item) => this.navId === item.category.parentId
      );
    },
  },

  methods: {
    // 创建轮播
    initSwiper() {
      this.swiper1 = new Swiper(this.$refs.swiper, {
        loop: true, // 循环模式选项
        // 如果需要分页器
        pagination: {
          el: ".swiper-pagination",
        },
      });
    },

    // 创建BScroll
    initBScroll() {
      this.bs = new BScroll(this.$refs.wrapper, {
        scrollY: true,
        bounce: false,
        click: true,
      });
    },
  },
};
</script>

<style lang="less" scoped>
.recommendCategory {
  height: calc(100vh - 240px);
  overflow: hidden;
}

// 轮播
.swiper-container {
  position: relative;
  .swiper-slide {
    img {
      width: 750px;
      height: 296px;
    }
  }
  /deep/.swiper-pagination {
    --swiper-pagination-color: #fff;
    .swiper-pagination-bullet {
      width: 40px;
      height: 4px;
    }
  }
}

// 内容
.listContainer {
  background: #fff;
  .top {
    height: 120px;
    text-align: center;
    padding-top: 20px;
    box-sizing: border-box;
    .title {
      font-size: 32px;
    }
    .desc {
      margin-top: 6px;
      color: #999;
      font-size: 24px;
    }
  }
  .list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 10px 0 20px;
    .cateItem {
      padding-bottom: 33px;
      > img {
        width: 345px;
        height: 345px;
      }
      .cateName {
        width: 345px;
        margin: 6px 0;
        text-align: left;
        font-size: 28px;
        text-overflow: ellipsis;
        overflow: hidden;
        color: #333;
        font-family: PingFangSC-Regular;
        display: -webkit-box;
        -webkit-line-clamp: 2;
      }
      .price {
        font-size: 32px;
        line-height: 48px;
        text-align: left;
        color: #dd1a21;
        font-family: PingFangSC-Regular;
      }
    }
  }
}
</style>
