<template>
  <div>
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
      <div class="headerNav">
        <ul class="navList">
          <li class="navItem active">推荐</li>
          <li class="navItem">居家生活</li>
          <li class="navItem">居家生活</li>
          <li class="navItem">居家生活</li>
          <li class="navItem">居家生活</li>
          <li class="navItem">居家生活</li>
          <li class="navItem">居家生活</li>
          <li class="navItem">居家生活</li>
          <li class="navItem">居家生活</li>
          <li class="navItem">居家生活</li>
          <li class="navItem">居家生活</li>
          <li class="navItem">居家生活</li>
          <li class="navItem">居家生活</li>
          <li class="navItem">居家生活</li>
          <li class="navItem">居家生活</li>
          <li class="navItem">居家生活</li>
          <li class="navItem">居家生活</li>
          <li class="navItem">居家生活</li>
          <li class="navItem">居家生活</li>
          <li class="navItem">居家生活</li>
          <li class="navItem">居家生活</li>
          <li class="navItem">居家生活</li>
          <li class="navItem">居家生活</li>
          <li class="navItem">居家生活</li>
          <li class="navItem">居家生活</li>
          <li class="navItem">居家生活</li>
          <li class="navItem">居家生活</li>
          <li class="navItem">居家生活</li>
          <li class="navItem">居家生活</li>
        </ul>
      </div>
    </div>

    <div class="contentContainer">
      <Recommend></Recommend>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import Recommend from "./Recommend/Recommend";
export default {
  name: "home",

  mounted() {
    this.initBScroll();
  },

  methods: {
    // 创建BScroll
    initBScroll() {
      let scroll = new BScroll(".headerNav", {
        scrollX: true,
      });
    },
  },

  components: {
    Recommend,
  },
};
</script>

<style lang="less" scoped>
#headerContainer {
  .header {
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
    width: 750px;
    overflow: hidden;
    display: flex;
    .navList {
      display: flex;
      white-space: nowrap;
      padding: 0 30px;
      .navItem {
        padding: 0 16px;
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
  }
}
</style>
