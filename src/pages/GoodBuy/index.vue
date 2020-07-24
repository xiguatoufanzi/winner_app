<template>
  <div class="goodBuy">
    <!-- 头部导航 -->
    <NavBar title="值得买"></NavBar>
    <div ref="wrapper2" class="goodContainer">
      <div>
        <!-- 值得买面板 -->
        <div class="goodBuyList">
          <div class="goodTop">
            <img
              src="https://m.you.163.com/topic/index/img/topic_logo.c2284970.png"
              alt=""
            />
            <span>严选好物 用心生活</span>
          </div>

          <!-- 轮播 -->
          <div class="goodBottomContainer">
            <div class="swiper-container" ref="swiper">
              <div class="swiper-wrapper">
                <div
                  class="swiper-slide"
                  v-for="goodItem in goodBuyList"
                  :key="goodItem.id"
                >
                  <div class="goodItem">
                    <img :src="goodItem.picUrl" alt="" />
                    <div class="mainTitle">{{ goodItem.mainTitle }}</div>
                    <div class="viceTitle">
                      {{ goodItem.viceTitle }}
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-pagination"></div>
            </div>
          </div>
        </div>

        <!-- 瀑布流面板 -->
        <Waterfall :data="firstData"></Waterfall>
      </div>
    </div>

    <!--  -->
  </div>
</template>

<script>
import throttle from "lodash/throttle";
import BScroll from "better-scroll";
import Swiper from "swiper";
import NavBar from "@/components/NavBar";
import Waterfall from "./Waterfall/Waterfall";
import request from "@/utils/request";
export default {
  name: "goodbuy",

  data() {
    return {
      goodBuyList: [], // 值得买面板数据
      firstData: [], // 首屏数据
    };
  },

  watch: {
    goodBuyList(value) {
      this.$nextTick(() => {
        this.initBScroll();
        this.initSwiper();
      });
    },
  },

  async mounted() {
    let result = await request("/goodBuy");
    if (result.code === 200) {
      this.goodBuyList = result.data;
    }

    this.getFirstData();
  },

  methods: {
    // 创建BScroll
    initBScroll() {
      this.scroll2 = new BScroll(this.$refs.wrapper2, {
        scrollY: true,
        click: true,
        // bounce: false,
        pullUpLoad: {
          threshold: 0,
        },
        probeType: 3,
      });

      function name(params) {
        if (this.timer) return;
        this.timer = setTimeout(() => {}, 2000);
      }

      this.scroll2.on(
        "pullingUp",
        throttle(() => {
          console.log(33333);
          this.firstData = this.firstData.concat(this.firstData);
          this.scroll2.finishPullUp();
        }, 2000)
      );
    },

    // 创建轮播
    initSwiper() {
      new Swiper(this.$refs.swiper, {
        // loop: true, // 循环模式选项
        // 如果需要分页器
        pagination: {
          el: ".swiper-pagination",
        },
        slidesPerColumn: 2, // 每行或每列放置数量
        slidesPerColumnFill: "row", // 设置列或行
        slidesPerView: 4, // 每行显示数量
        threshold: 5,
      });
    },

    // 获取首屏数据
    async getFirstData() {
      let result = await request("/recManual");
      if (result.code === 200) {
        this.firstData = result.data;
      }
    },
  },

  components: {
    NavBar,
    Waterfall,
  },
};
</script>

<style lang="less" scoped>
// 轮播
.swiper-container {
  position: relative;
  width: 100%;
  height: 540px;
  .swiper-slide {
    width: 25%;
    height: 40%;
    margin-top: 24px;
    .goodItem {
      height: 201px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      > img {
        width: 120px;
        height: 120px;
      }
      .mainTitle {
        font-family: "PingFang-SC-Bold";
        font-weight: bold;
        font-size: 28px;
        width: 126px;
        height: 30px;
        white-space: nowrap;
        color: #333333;
        text-align: center;
        line-height: 30px;
      }
      .viceTitle {
        width: 126px;
        margin-top: 1.5px;
        font-family: "PingFangSC-Regular";
        color: #999999;
        text-align: center;
        height: 22.5px;
        line-height: 22.5px;
        white-space: nowrap;
        font-size: 20px;
      }
    }
  }
  /deep/.swiper-pagination {
    --swiper-pagination-color: #dd1a21;
    .swiper-pagination-bullet {
      width: 40px;
      height: 4px;
      margin: 0;
    }
  }
}

.goodContainer {
  height: calc(100vh - 200px);
  overflow: hidden;
}

// 值得买面板
.goodBuyList {
  position: relative;
  .goodTop {
    position: relative;
    width: 750px;
    height: 518px;
    background: url(https://m.you.163.com/topic/index/img/topic_title_bg.2373a140.png);
    background-size: cover;
    > img {
      position: absolute;
      top: 45px;
      left: 9px;
      width: 130px;
      height: 68px;
    }
    > span {
      font-size: 30px;
      line-height: 33px;
      height: 33px;
      position: absolute;
      font-family: "PingFangSC-Regular";
      left: 140px;
      top: 70px;
      color: #fff;
    }
  }

  .goodBottomContainer {
    overflow: hidden;
    position: absolute;
    left: 20px;
    top: 130px;
    width: 710px;
    background: #fff;
    border-radius: 12px;
  }
}
</style>
