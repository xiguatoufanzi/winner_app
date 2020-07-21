<template>
  <div>
    <!-- 顶部 -->
    <div id="headerContainer">
      <!-- 头部区域 -->
      <div class="header">
        <h1>
          <img src="@/assets/images/logo.png" alt="" />
        </h1>
        <div class="searchContainer">
          <i class="iconfont icon-sousuo"></i>
          <span>搜索商品，共34085款好物</span>
        </div>
        <div class="btn">登录</div>
      </div>

      <!-- 头部导航 -->
      <div class="headerNav" ref="wrapper">
        <ul class="navList" v-if="homeData.kingKongModule">
          <li
            class="navItem "
            :class="{ active: navIndex === 0 }"
            @click="changeNav(0)"
          >
            推荐
          </li>
          <li
            class="navItem"
            :class="{ active: navIndex === index + 1 }"
            v-for="(navItem, index) in homeData.kingKongModule.kingKongList"
            :key="index"
            @click="changeNav(index + 1)"
          >
            {{ navItem.text }}
          </li>
        </ul>
        <van-collapse
          v-model="activeNames"
          class="openNav"
          @click.native="openNav"
          accordion
        >
          <van-collapse-item name="1"></van-collapse-item>
        </van-collapse>
      </div>

      <div class="openNavList" v-show="showNav">
        <div class="title">
          全部频道
        </div>
        <ul class="navList2" v-if="homeData.kingKongModule">
          <li
            class="navItem"
            :class="{ active: navIndex === 0 }"
            @click="changeNav(0)"
          >
            推荐
          </li>
          <li
            class="navItem"
            :class="{ active: navIndex === index + 1 }"
            v-for="(navItem, index) in homeData.kingKongModule.kingKongList"
            :key="index"
            @click="changeNav(index + 1)"
          >
            {{ navItem.text }}
          </li>
        </ul>
      </div>

      <van-overlay :show="show" z-index="5" @click="openNav(2)" duration="0" />
    </div>
    <!-- 内容 -->
    <div class="contentContainer">
      <Recommend></Recommend>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import BScroll from "better-scroll";
import Recommend from "./Recommend/Recommend";
export default {
  name: "home",

  data() {
    return {
      navIndex: "", //导航下标
      show: false, // 遮罩层标识
      showNav: false, // 头部导航展开标识
      activeNames: "",
    };
  },

  mounted() {
    this.getHomeData();
  },

  watch: {
    homeData(value) {
      this.$nextTick(() => {
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
    // 创建BScroll
    initBScroll() {
      let scroll = new BScroll(this.$refs.wrapper, {
        scrollX: true,
        click: true,
      });
    },

    // 切换头部导航
    changeNav(navIndex) {
      if (navIndex === this.navIndex) return;
      this.navIndex = navIndex;
    },

    ...mapActions(["getHomeData"]),

    // 展开头部导航
    openNav(num) {
      this.show = !this.show;
      this.showNav = !this.showNav;
      if (num === 2) {
        this.activeNames = 0;
      }
    },
  },

  components: {
    Recommend,
  },
};
</script>

<style lang="less" scoped>
#headerContainer {
  background: #fff;
  position: relative;
  .header {
    position: relative;
    z-index: 6;
    background: #fff;
    display: flex;
    align-items: center;
    padding: 16px 30px;
    h1 {
      margin-right: 20px;
      display: flex;
      align-items: center;
      img {
        width: 138px;
        height: 40px;
      }
    }
    .searchContainer {
      width: 442px;
      height: 56px;
      background: #ededed;
      line-height: 56px;
      text-align: center;
      color: #666;
      i {
        margin-right: 10px;
        vertical-align: middle;
        font-weight: bold;
      }
      span {
        font-size: 28px;
      }
    }
    .btn {
      width: 72px;
      height: 38px;
      line-height: 38px;
      margin-left: 16px;
      text-align: center;
      color: #dd1a21;
      border: 1px solid #dd1a21;
      border-radius: 5px;
    }
  }

  .headerNav {
    position: relative;
    width: 750px;
    overflow: hidden;
    display: flex;
    .navList {
      display: flex;
      white-space: nowrap;
      padding: 0 30px;
      .navItem {
        padding: 0 26px;
        font-size: 28px;
        color: #555;
        text-align: center;
        line-height: 60px;
        &.active {
          position: relative;
          color: #dd1a21;
          &::after {
            content: " ";
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 4px;
            background-color: #dd1a21;
          }
        }
      }
    }

    .openNav {
      position: absolute;
      right: 0;
      top: 0;
      width: 100px;
      height: 60px;
      line-height: 60px;
      z-index: 11;
      /deep/.van-cell {
        padding: 0;
        .van-icon {
          left: 25px;
          top: 5px;
          font-size: 40px;
        }
      }
    }
  }

  // 打开导肮
  .openNavList {
    position: absolute;
    left: 0;
    top: 88px;
    z-index: 10;
    background: #fff;
    width: 100%;
    .title {
      padding-left: 30px;
      height: 60px;
      line-height: 60px;
      font-size: 28px;
    }
    .navList2 {
      padding-top: 24px;
      display: flex;
      flex-wrap: wrap;
      .navItem {
        width: 148px;
        height: 54px;
        line-height: 54px;
        text-align: center;
        background: #fafafa;
        border: 1px solid #ccc;
        border-radius: 4px;
        margin: 0 0 40px 30px;
        &.active {
          border: 1px solid #dd1a21;
          color: #dd1a21;
        }
      }
    }
  }
}
</style>
