<template>
  <div class="bd">
    <!-- 头部导航 -->
    <NavBar title="网易严选" />

    <!-- 严选背景 -->
    <div class="logo">
      <img
        src="http://yanxuan.nosdn.127.net/39c5e4583753d4c3cb868a64c2c109ea.png"
        alt=""
      />
    </div>

    <!-- 登录按钮 -->
    <div class="login">
      <i></i>
      <van-button type="danger" class="phone" @click="toPhone(1)">
        手机号快捷登录</van-button
      >
      <van-button
        @click="toPhone(2)"
        type="default"
        icon="envelop-o"
        color="#DD1A21"
        plain
        >邮箱账号登录</van-button
      >
    </div>

    <!-- 第三方 -->
    <div class="third">
      <div class="thirdItem">
        <img src="@/assets/images/login/wx.png" alt="" />
        <span>微信</span>
      </div>
      <div class="thirdItem qq">
        <img src="@/assets/images/login/qq.png" alt="" />
        <span>QQ</span>
      </div>
      <div class="thirdItem">
        <img src="@/assets/images/login/wb.png" alt="" />
        <span>微博</span>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
export default {
  name: "login",

  methods: {
    toPhone(id) {
      this.$router.push(`/phone/${id}`);
    },
  },

  components: {
    NavBar,
  },
};
</script>

<style lang="less" scoped>
.bd {
  background: #f2f5f4;
}

.logo {
  display: flex;
  justify-content: center;
  > img {
    width: 268px;
    height: 90px;
    margin: 160px 0 232px;
  }
}
.login {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 0 40px;
  .phone {
    margin-bottom: 32px;
  }
  > i {
    position: absolute;
    left: 210px;
    top: 5px;
    z-index: 3;
    background: url("../../assets/login.webp");
    width: 80px;
    height: 80px;
    transform: scale(0.5);
    background-position: 0 -100px;
  }
}

.third {
  position: absolute;
  bottom: 70px;
  left: 0;
  display: flex;
  height: 40px;
  width: 100%;
  justify-content: center;
  .thirdItem {
    height: 40px;
    padding: 0 40px;
    &.qq {
      border-right: 1px solid #ccc;
      border-left: 1px solid #ccc;
    }
    img {
      width: 40px;
      height: 40px;
      vertical-align: middle;
    }
    span {
      vertical-align: middle;
      font-size: 28px;
      line-height: 40px;
      height: 40px;
      color: #7f7f7f;
      margin-left: 5px;
    }
  }
}
</style>
