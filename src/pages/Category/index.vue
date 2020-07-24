<template>
  <div style="background:#fff">
    <!-- 搜索 -->
    <div class="searchContainer" @click="toSearch">
      <div class="search">
        <i class="iconfont icon-sousuo"></i>
        <span>搜索商品，共34085款好物</span>
      </div>
    </div>

    <div class="content">
      <!-- 左侧导航 -->
      <van-sidebar v-model="activeKey" @change="changeNav" class="leftNav">
        <van-sidebar-item
          v-for="navItem in cateLists"
          :key="navItem.id"
          :title="navItem.name"
          class="navItem"
        />
      </van-sidebar>

      <!-- 右侧列表 -->
      <div ref="wrapper" class="right">
        <div class="rightList">
          <img :src="cateList.bannerUrl" class="banner" />
          <div
            class="rightItem"
            v-for="rightItem in cateList.subCateList"
            :key="rightItem.id"
          >
            <img :src="rightItem.wapBannerUrl" alt="" />
            <span>{{ rightItem.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import request from "@/utils/request";
export default {
  name: "category",

  data() {
    return {
      cateLists: [], // 分类数据
      activeKey: 0, // 左侧导航切换标识
      cateList: {}, // 选中导航的数据
    };
  },

  async mounted() {
    let result = await request("cateLists");
    if (result.code === 200) {
      this.cateLists = result.data;
    }

    this.cateList = this.cateLists[0];
  },

  watch: {
    cateLists(value) {
      this.$nextTick(() => {
        this.initBScroll();
      });
    },
  },

  methods: {
    toSearch() {
      this.$router.push("/search");
    },

    // 改变导航选中
    changeNav(index) {
      this.cateList = this.cateLists[index];
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
// 搜索
.searchContainer {
  padding: 0 30px;
  display: flex;
  align-items: center;
  height: 88px;
  background: #fff;
  border-bottom: 1px solid #eee;
  .search {
    flex: 1;
    height: 56px;
    background: #ededed;
    line-height: 56px;
    text-align: center;
    color: #666;
    font-size: 28px;
    i {
      margin-right: 10px;
      vertical-align: middle;
    }
  }
}

.content {
  display: flex;
  // 左侧导航
  .leftNav {
    border-right: 1px solid #eee;
    .navItem {
      width: 162px;
      height: 50px;
      margin-top: 40px;
      line-height: 50px;
      font-size: 28px;
      background: #fff;
      text-align: center;
    }
    /deep/.van-sidebar-item {
      padding: 0;
      &.van-sidebar-item--select {
        color: #ab2b2b;
        &::before {
          width: 6px;
          height: 50px;
          background-color: #ab2b2b;
        }
      }
    }
  }

  .right {
    width: 588px;
    height: calc(100vh - 188px);
    overflow: hidden;
    // 右侧列表
    .rightList {
      padding: 30px 30px 0 30px;
      display: flex;
      flex-wrap: wrap;
      .banner {
        width: 528px;
        height: 192px;
        margin-bottom: 32px;
      }
      .rightItem {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 33.333%;
        img {
          width: 144px;
          height: 144px;
        }
        span {
          margin-top: 5px;
          line-height: 72px;
        }
      }
    }
  }
}
</style>
