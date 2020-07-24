<template>
  <div ref="wrapper" class="recommendContainer">
    <div>
      <!-- 轮播 -->
      <div class="swiper-container" ref="swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="item in bannerList" :key="item.id">
            <img :src="item.imgUrl" />
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
      </div>

      <div class="brand">
        <!-- policyDescList区域 -->
        <div class="policyDescList">
          <div
            class="policyDescItem"
            v-for="(item, index) in homeData.policyDescList"
            :key="index"
          >
            <img :src="item.icon" alt="" />
            <span>{{ item.desc }}</span>
          </div>
        </div>
        <!-- kingKongList 10个图标区域 -->
        <div class="kingKongList" v-if="homeData.kingKongModule">
          <div
            class="kingKongItem"
            v-for="(item, index) in homeData.kingKongModule.kingKongList"
            :key="index"
          >
            <img :src="item.picUrl" alt="" />
            <span>{{ item.text }} </span>
          </div>
        </div>
      </div>

      <!-- 新用户 -->
      <div class="newUser">
        <div class="firstBuy"></div>
        <div class="newItem">
          <img
            src="https://yanxuan.nosdn.127.net/8b5c103801f035cc7369afc1a46e0bc5.png?quality=75&type=webp&imageView&thumbnail=375x0"
            alt=""
          />
          <img
            src="https://yanxuan.nosdn.127.net/01fae6d1209f9904af34095feb394325.png?quality=75&type=webp&imageView&thumbnail=375x0"
            alt=""
          />
        </div>
      </div>

      <!-- 新人专享 -->
      <div class="newUserEnjoy">
        <div class="text">
          <span>新人专享礼</span>
        </div>
        <div class="newLeft">
          <div class="name">新人专享礼包</div>
          <img
            src="http://yanxuan.nosdn.127.net/352b0ea9b2d058094956efde167ef852.png"
            alt=""
          />
        </div>
        <div class="newRight">
          <div class="top">
            <div class="title">福利社</div>
            <div class="subTitle">今日特价</div>
            <img
              src="https://yanxuan-item.nosdn.127.net/4193be1039593e97798de896c304fb9d.png?quality=75&type=webp&imageView&thumbnail=200x200"
              alt=""
            />
            <div class="discount">
              <div class="line1">¥10</div>
              <div class="line2">¥15</div>
            </div>
          </div>
          <div class="bottom">
            <div class="title">新人拼团</div>
            <div class="subTitle">1元起包邮</div>
            <img
              src="https://yanxuan-item.nosdn.127.net/2738944ac699357481e5c1a94b56bdea.png?quality=75&type=webp&imageView&thumbnail=200x200"
              alt=""
            />
            <div class="discount">
              <div class="line1">¥4.9</div>
              <div class="line2">¥10.0</div>
            </div>
          </div>
        </div>
      </div>

      <!-- 热销榜 -->
      <div class="hot">
        <div class="title">
          类目热销榜
        </div>
        <div class="hotList" v-if="homeData.categoryHotSellModule">
          <div
            class="hotItem"
            v-for="(hotItem, index) in homeData.categoryHotSellModule
              .categoryList"
            :key="index"
          >
            <div class="hotName">{{ hotItem.categoryName }}</div>
            <img :src="hotItem.picUrl" alt="" />
          </div>
        </div>
      </div>

      <!-- 限时购 -->
      <div class="flashSale">
        <div class="flashSaleHeader">
          <div class="title">限时购</div>
          <van-count-down
            v-if="homeData.flashSaleModule"
            :time="homeData.flashSaleModule.nextStartTime"
            class="count"
          >
            <template v-slot="timeData">
              <span class="block">{{ timeData.hours }}</span>
              <span class="colon">:</span>
              <span class="block">{{ timeData.minutes }}</span>
              <span class="colon">:</span>
              <span class="block">{{ timeData.seconds }}</span>
            </template>
          </van-count-down>
          <div class="more">
            <span>更多</span>
            <van-icon name="arrow" size="16" class="arrow" />
          </div>
        </div>
        <div class="flashList" v-if="homeData.flashSaleModule">
          <div
            class="flashItem"
            v-for="flashItem in homeData.flashSaleModule.itemList"
            :key="flashItem.itemId"
          >
            <img :src="flashItem.picUrl" alt="" />
            <span class="actualPrice">￥{{ flashItem.activityPrice }}</span>
            <span class="retailPrice">￥{{ flashItem.originPrice }}</span>
          </div>
        </div>
      </div>

      <!-- 员工精选 -->
      <div class="workerBuy">
        <div class="left">
          <div class="title">严选超市</div>
          <div class="desc">10元凑好物</div>
          <div class="picList">
            <img
              src="https://yanxuan-item.nosdn.127.net/cfd0fec5e70ca09d4c0b7492dba26f2e.png?quality=75&amp;type=webp&amp;imageView&amp;thumbnail=150x150"
              class="pic"
            /><img
              src="https://yanxuan-item.nosdn.127.net/1eecf74b769af3ed4c7817aeb5d6bb2b.png?quality=75&amp;type=webp&amp;imageView&amp;thumbnail=150x150"
              class="pic"
            />
          </div>
        </div>
        <div class="right">
          <div class="title">员工精选</div>
          <div class="desc">自动伞75折</div>
          <div class="picList">
            <img
              src="https://yanxuan-item.nosdn.127.net/f3f18a4fe9e7905cd7c9ff28e42ff0c2.png?quality=75&type=webp&imageView&thumbnail=150x150"
              class="pic"
            /><img
              src="https://yanxuan-item.nosdn.127.net/fe544cee59cc95a9159a722b6be01faa.png?quality=75&type=webp&imageView&thumbnail=150x150"
              class="pic"
            />
          </div>
        </div>
      </div>

      <!-- 底部版权 -->
      <div class="ftWrap">
        <div class="bd">
          <a
            href="/downloadapp?_stat_from=search_pz_baidu_29&amp;appAwakeUrl=http%3a%2f%2fm.you.163.com"
            class="goApp"
            >下载APP</a
          ><a
            href="https://you.163.com?_m_forcepc_=true&amp;_m_anonid_=ff1b6ade-2a7c-4539-a6e2-af40e1d43dbb"
            class="goWeb"
            >电脑版</a
          >
        </div>
        <p class="copyright">
          网易公司版权所有 © 1997-2020<br />食品经营许可证：JY13301080111719
        </p>
      </div>
    </div>

    <!-- 固定定位 -->
    <a
      class="goGift"
      href="https://act.you.163.com/act/pub/qAU4P437asfF.html"
    ></a>

    <ToTop v-show="backtop" @click.native="goTop" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import Swiper from "swiper";
import BScroll from "better-scroll";
import Carousel from "@/components/Carousel";
import ToTop from "@/components/ToTop";
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

      backtop: false, // 去顶部按钮显示标识
    };
  },

  mounted() {},

  watch: {
    homeData(value) {
      this.$nextTick(() => {
        this.initSwiper();
        this.initBScroll();
      });
    },
  },

  computed: {
    ...mapState({
      homeData: (state) => state.home.homeData,
    }),
  },

  methods: {
    // 创建轮播
    initSwiper() {
      new Swiper(this.$refs.swiper, {
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
        probeType: 3,
      });

      this.bs.on("scroll", ({ x, y }) => {
        this.backtop = -y > 700;
      });
    },

    goTop() {
      this.bs.scrollTo(0, 0, 700);
    },
  },

  components: {
    ToTop,
  },
};
</script>

<style lang="less" scoped>
.recommendContainer {
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

// 品牌
.brand {
  background: #fff;
  padding-bottom: 32px;
  .policyDescList {
    display: flex;
    padding: 0 30px;
    height: 72px;
    align-items: center;
    .policyDescItem {
      flex: 1;
      text-align: center;
      img {
        width: 32px;
        height: 32px;
        vertical-align: middle;
      }
      span {
        font-size: 24px;
        margin-left: 8px;
        line-height: 5px;
        vertical-align: middle;
      }
    }
  }
  .kingKongList {
    display: flex;
    flex-wrap: wrap;
    .kingKongItem {
      width: 20%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin: 10px 0;
      img {
        width: 110px;
        height: 110px;
        margin-bottom: 10px;
      }
    }
  }
}

// 新用户
.newUser {
  .firstBuy {
    background: url("../../../assets/images/home/newUser.gif");
    width: 100%;
    height: 322px;
    background-size: cover;
  }
  .newItem {
    display: flex;
    justify-content: space-around;
    box-sizing: border-box;
    padding: 16px;
    background: rgb(230, 73, 4);
    img {
      width: 351px;
      height: 186px;
    }
  }
}

// 新人专享
.newUserEnjoy {
  background: #fff;
  margin: 20px 0;
  padding-bottom: 30px;
  overflow: hidden;
  .text {
    width: 690px;
    height: 90px;
    padding: 0 30px;
    line-height: 90px;
    text-align: center;
    span {
      position: relative;
      color: #333;
      font-size: 32px;
      &::after,
      &::before {
        content: "";
        position: absolute;
        top: 15px;
        right: -40px;
        width: 24px;
        height: 3px;
        background: #333;
      }
      &::before {
        left: -40px;
      }
    }
  }
  .newLeft {
    width: 343px;
    height: 434px;
    background: #f9e9cf;
    margin-left: 30px;
    float: left;
    .name {
      padding: 30px 0 0 30px;
      font-size: 32px;
    }
    img {
      width: 258px;
      height: 257px;
      margin: 37px 42px;
    }
  }
  .newRight {
    .top,
    .bottom {
      position: relative;
      width: 343px;
      height: 215px;
      padding: 25px 0 0 30px;
      background: #fbe2d3;
      float: right;
      box-sizing: border-box;
      margin: 0 30px 4px 0;
      .title {
        font-size: 32px;
      }
      .subTitle {
        color: #7f7f7f;
      }
      img {
        position: absolute;
        right: 0;
        top: 10px;
        width: 200px;
        height: 200px;
      }
      .discount {
        position: absolute;
        top: 15px;
        right: 20px;
        width: 80px;
        height: 80px;
        opacity: 0.8;
        background: #f59524;
        border-radius: 50%;
        padding-top: 10px;
        box-sizing: border-box;
        color: #fff;
        text-align: center;
        .line1 {
          font-size: 24px;
        }
        .line2 {
          font-size: 12px;
          text-decoration: line-through;
        }
      }
    }
    .bottom {
      background: #ffecc2;
    }
  }
}

// 热销榜
.hot {
  padding: 0 30px 20px 30px;
  background: #fff;
  margin-bottom: 20px;
  .title {
    height: 100px;
    font-size: 32px;
    line-height: 100px;
  }
  .hotList {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    .hotItem {
      width: 161px;
      height: 180px;
      margin: 0 10px 10px 0;
      background: #f5f5f5;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      &:nth-of-type(1),
      &:nth-of-type(2) {
        position: relative;
        width: 330px;
        height: 200px;
        background: #f9f3e4;
        display: block;
        .hotName {
          position: relative;
          margin-top: 66px;
          padding: 24px;
          font-size: 28px;
          &::after {
            content: "";
            position: absolute;
            bottom: 0;
            left: 25px;
            width: 48px;
            height: 4px;
            background: #333;
          }
        }
        img {
          position: absolute;
          right: 0;
          top: 0px;
          width: 200px;
          height: 200px;
        }
      }
      &:nth-of-type(2) {
        background: #ebeff6;
      }
      img {
        width: 120px;
        height: 120px;
      }
      .hotName {
        height: 36px;
        line-height: 36px;
        font-size: 24px;
        margin-top: 10px;
      }
    }
  }
}

// 限时购
.flashSale {
  background: #fff;
  margin-bottom: 20px;
  .flashSaleHeader {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100px;
    padding: 0 30px;
    font-size: 32px;
    .title {
      margin-right: 12px;
    }
    .count {
      margin-left: -300px;
      .colon {
        display: inline-block;
        margin: 0 4px;
        color: #333;
      }
      .block {
        display: inline-block;
        width: 36px;
        color: #fff;
        font-size: 12px;
        text-align: center;
        background-color: #333;
        margin: 0 10px;
      }
    }
    .more {
      font-size: 28px;
      span {
        vertical-align: middle;
      }
      .arrow {
        vertical-align: middle;
      }
    }
  }
  .flashList {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 0 10px 0 22px;
    .flashItem {
      padding-bottom: 30px;
      img {
        width: 216px;
        height: 216px;
        display: block;
        margin-bottom: 12px;
      }
      .actualPrice {
        padding-left: 20px;
        font-size: 28px;
        color: #dd1a21;
        margin-right: 12px;
      }
      .retailPrice {
        font-size: 24px;
        color: #7f7f7f;
        text-decoration: line-through;
      }
    }
  }
}

// 员工购
.workerBuy {
  background: #fff;
  padding: 10px 30px 30px 26px;
  display: flex;
  .left,
  .right {
    width: 50%;
    background: #f5f5f5;
    margin: 4px 0 0 8px;
    padding: 20px 0 0 20px;
    .title {
      font-size: 32px;
      padding-left: 10px;
      color: rgb(51, 51, 51);
    }
    .desc {
      font-size: 24px;
      padding-left: 10px;
      color: rgb(127, 127, 127);
    }
    .picList {
      img {
        width: 150px;
        height: 150px;
      }
    }
  }
}

// 版权
.ftWrap {
  background: #414141;
  padding: 54px 20px 28px 20px;
  border-top: 1px solid rgba(0, 0, 0, 0.15);
  text-align: center;
  .bd {
    margin-bottom: 36px;
    .goApp,
    .goWeb {
      width: 172px;
      font-size: 24px;
      border: 1px solid #999;
      margin-right: 50px;
      height: 62px;
      line-height: 62px;
      color: #fff;
      background-color: transparent;
      display: inline-block;
    }
    .goWeb {
      margin: 0;
    }
  }
  .copyright {
    font-size: 24px;
    line-height: 32px;
    color: #999;
  }
}

// 固定定位
.goGift {
  position: fixed;
  right: 0;
  bottom: 240px;
  width: 112px;
  height: 80px;
  z-index: 10;
  animation: 0.8s moveLeft linear;
  background: url("http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/wapNewUserEntry-b69d0624fd.png?imageView&type=webp");
  background-size: 100% 100%;
  vertical-align: middle;
  background-repeat: no-repeat;

  @keyframes moveLeft {
    from {
      right: -200px;
    }
    to {
      right: 0;
    }
  }
}
</style>
