<template>
  <div>
    <van-search
      v-if="searchInit.defaultKeyword"
      v-model="value"
      show-action
      :placeholder="searchInit.defaultKeyword.keyword"
      @search="onSearch"
      @cancel="onCancel"
    />

    <!-- 热门 -->
    <div class="hot" v-if="!value">
      <div class="hotSearch">热门搜索</div>
      <div class="hotTag">
        <van-tag
          class="hotTagItem"
          plain
          size="medium"
          v-for="(tagItem, index) in searchInit.hotKeywordVOList"
          :key="index"
          :type="tagItem.highlight ? 'danger' : 'default'"
          >{{ tagItem.keyword }}</van-tag
        >
      </div>
    </div>

    <!-- 搜索动态匹配 -->
    <div class="activeSearch" v-else>
      <div class="searchItem" v-for="(item, index) in search" :key="index">
        <div>{{ item }}</div>
        <van-icon name="arrow" size="15px" color="#aaa" class="arrow" />
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
import debounce from "lodash/debounce";
import request from "@/utils/request";
export default {
  name: "search",

  data() {
    return {
      value: "", // 搜索框输入的内容
      searchInit: {}, //页面初始化数据
      search: [],
    };
  },

  watch: {
    value(value) {
      this.slowSearch(value);
    },
  },

  async mounted() {
    let result = await request("/searchInit");
    if (result.code === 200) {
      this.searchInit = result.data;
    }
  },

  methods: {
    // lodash防抖
    slowSearch: debounce(function(value) {
      // 搜索联想
      this.getSearch(value);
      console.log("联想启动了~~", value);
    }, 300),

    onSearch(val) {
      Toast(val);
    },
    onCancel() {
      this.$router.go(-1);
    },

    // 搜索联想请求数据
    async getSearch(value) {
      let result = await request.post("/search", {
        keywordPrefix: value,
      });
      if (result.code === 200) {
        this.search = result.data;
      }
    },
  },
};
</script>

<style lang="less" scoped>
.hot {
  background: #fff;
  padding: 0 30px 30px 30px;
  .hotSearch {
    height: 90px;
    line-height: 90px;
    font-size: 28px;
    color: #999;
  }
  .hotTag {
    .hotTagItem {
      padding: 10px 15px;
      font-size: 23px;
      margin: 0 32px 32px 0;
    }
  }
}

.activeSearch {
  background: #fff;
  padding-left: 30px;
  .searchItem {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 86px;
    font-size: 28px;
    border-bottom: 1px solid #eee;
    .arrow {
      margin-top: 2px;
      margin-right: 30px;
    }
  }
}
</style>
