<template>
  <div>
    <!-- 头部导航 -->
    <NavBar :title="'网易严选'" class="nav" />

    <!-- 内容 -->
    <div class="detailContent">
      <img :src="shopDetail.listPicUrl" alt="" />
      <div class="content">
        <div class="money">￥{{ shopDetail.retailPrice }}</div>
        <div class="name">{{ shopDetail.name }}</div>
        <div class="txt1">推荐理由</div>
        <div class="txtList">
          <div>1) 100%桑蚕丝填充，丝丝精粹不掺杂</div>
          <div>2) 创新井字拉网工艺，桑蚕丝不易黏连结块</div>
          <div>3) 两种面料可选，贡缎手感细腻，竹棉清爽透气</div>
          <div>4) AB双面设计，多种活性印花不易褪色</div>
        </div>
      </div>
    </div>

    <!-- 底部 -->
    <div class="detailBottom">
      <img
        src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/detail-kefu-d10f0489d2.png?imageView&type=webp"
        alt=""
      />
      <button class="buy">立即购买</button>
      <van-button @click="addCart(shopDetail)" type="danger" class="addCart"
        >加入购物车</van-button
      >
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import NavBar from "@/components/NavBar";
import { Toast } from "vant";
export default {
  name: "detail",

  data() {
    return {
      shopDetail: {}, //详情页面总数据
    };
  },

  created() {
    this.shopDetail = this.$route.query.cateItem;
  },

  methods: {
    ...mapMutations(["ADD_CART"]),

    // 加入购物车
    addCart(shopDetail) {
      this.ADD_CART(shopDetail);
      Toast("加入成功");
    },
  },

  components: {
    NavBar,
  },
};
</script>

<style lang="less" scoped>
.nav {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
}

.detailContent {
  margin-top: 100px;
  > img {
    width: 750px;
    height: 750px;
    display: block;
  }
  .content {
    background: #fff;
    height: 600px;
    padding: 26px 0 36px 30px;
    .money {
      color: #dd1a21;
      font-family: PingFang SC;
      font-size: 54px;
      font-weight: 700;
    }
    .name {
      font-size: 32px;
      color: #333;
      line-height: 48px;
      margin-bottom: 4px;
      margin-top: 5px;
      font-weight: 700;
    }
    .txt1 {
      font-size: 24px;
      line-height: 36px;
      color: #333;
      font-weight: lighter;
    }
    .txtList {
      margin: 12px 0 0;
      padding: 14px 20px;
      width: 648px;
      height: 300px;
      line-height: 60px;
      background: #fafafa;
      border: 1px solid #e6e6e6;
      border-radius: 4px;
      position: relative;
    }
  }
}

.detailBottom {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 3;
  width: 100%;
  height: 104px;
  background: #fff;
  display: flex;
  > img {
    width: 60px;
    height: 60px;
    padding: 21px 47.5px;
    border: 1px solid #eee;
  }
  .buy {
    width: 296px;
    height: 102px;
    background: #fff;
    border: none;
    font-size: 28px;
    border: 1px solid #eee;
    border-left: none;
  }
  .addCart {
    width: 295px;
    height: 102px;
    background: #dd1a21;
    font-size: 28px;
  }
}
</style>
