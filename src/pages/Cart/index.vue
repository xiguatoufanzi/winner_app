<template>
  <div>
    <!-- 头部导航 -->
    <van-nav-bar left-text="购物车" class="navBar">
      <template #right>
        <span class="roll">领券</span>
      </template>
    </van-nav-bar>

    <!-- 没物品界面 -->
    <div class="nothing" v-if="false">
      <div>
        <ul class="servicePolicy">
          <li class="item">
            <img
              src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/servicePolicy-de15fb68d3.png?imageView&type=webp"
            />
            <span>30天无忧退货</span>
          </li>
          <li class="item">
            <img
              src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/servicePolicy-de15fb68d3.png?imageView&type=webp"
            />
            <span>48小时快速退款</span>
          </li>
          <li class="item">
            <img
              src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/servicePolicy-de15fb68d3.png?imageView&type=webp"
            />
            <span>满99元免邮费</span>
          </li>
        </ul>
      </div>
      <div class="container">
        <div class="img"></div>
        <div class="txt">去添加点什么吧</div>
      </div>
    </div>

    <!-- 有物品界面 -->
    <cartItem></cartItem>

    <!-- 底部 -->
    <CartBottom />
  </div>
</template>

<script>
import cartItem from "./cartItem/cartItem";
import CartBottom from "./CartBottom/CartBottom";
export default {
  name: "cart",

  data() {
    return {};
  },

  components: {
    cartItem,
    CartBottom,
  },
};
</script>

<style lang="less" scoped>
// 头部导航
.navBar {
  height: 88px;
  /deep/.van-nav-bar__text {
    color: #333;
    font-size: 36px;
  }
  .roll {
    color: #dd1a21;
    font-size: 30px;
    margin-right: 25px;
  }
}

// 没物品界面
.nothing {
  .servicePolicy {
    display: flex;
    height: 70px;
    padding: 0 30px;
    justify-content: space-between;
    align-items: center;
    .item {
      > img {
        width: 10px;
        vertical-align: middle;
        margin-right: 6px;
      }
      > span {
        vertical-align: middle;
        font-size: 24px;
        color: #666;
      }
    }
  }
  .container {
    position: relative;
    height: calc(100vh - 258px);
    background: #f4f4f4;
    box-sizing: border-box;
    padding-top: 50%;
    .img {
      background: url("http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-d6193bd6e4.png?imageView&type=webp");
      height: 248px;
      width: 248px;
      background-size: cover;
      margin: 0 auto;
    }
    .txt {
      font-size: 28px;
      color: #7f7f7f;
      text-align: center;
    }
  }
}
</style>
