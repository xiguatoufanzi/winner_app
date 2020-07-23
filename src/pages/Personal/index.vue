<template>
  <div>
    <!-- 头部 -->
    <div class="userTop">
      <div class="user" @click="toLogin">
        <img
          src="http://thirdqq.qlogo.cn/g?b=oidb&k=MvtlngXWLiaofzZYQHAtJog&s=100&t=1556536864"
          alt=""
        />
        <div class="userInfo">
          <p class="name">用户1</p>
          <p class="pu">普通用户</p>
        </div>
      </div>
      <div class="mail">
        <van-icon name="envelop-o" size="20" color="#dd1a21" />
      </div>
    </div>

    <!-- 其他 -->
    <div class="content">
      <h2>我的资产</h2>
      <div class="myAssetList">
        <div class="assetItem">
          <span>￥0</span>
          <span>回馈金</span>
        </div>
        <div class="assetItem">
          <span>11</span>
          <span>红包</span>
        </div>
        <div class="assetItem">
          <span>3</span>
          <span>优惠券</span>
        </div>
        <div class="assetItem">
          <span>￥0</span>
          <span>津贴</span>
        </div>
        <div class="assetItem">
          <span>0</span>
          <span>礼品卡</span>
        </div>
      </div>
      <!-- 列表选项 -->
      <van-grid :border="false" :column-num="3" gutter="1">
        <van-grid-item v-for="(item, index) in personalList" :key="index">
          <i class="iconfont iconstyle" :class="item.icon"></i>
          <p class="gridName">{{ item.name }}</p>
        </van-grid-item>
      </van-grid>
    </div>

    <!-- 退出登陆 -->
    <button class="quit">退出登录</button>
  </div>
</template>

<script>
export default {
  name: "personal",

  data() {
    return {
      personalList: [
        {
          name: "我的订单",
          icon: "icon-dingdan11",
        },
        {
          name: "我的拼团",
          icon: "icon-pintuandingdan",
        },
        {
          name: "领红包",
          icon: "icon-tubiaolunkuo-1",
        },
        {
          name: "我的积分",
          icon: "icon-jifen3",
        },
        {
          name: "地址管理",
          icon: "icon-dizhiguanli",
        },
        {
          name: "账号安全",
          icon: "icon-dingdan11",
        },
        {
          name: "联系客服",
          icon: "icon-zhanghaoanquan",
        },
        {
          name: "用户反馈",
          icon: "icon-tubiaolunkuo-",
        },
        {
          name: "帮助中心",
          icon: "icon-bangzhuzhongxin",
        },
        {
          name: "退还/售后",
          icon: "icon-shouhou",
        },
      ],
    };
  },

  mounted() {
    // 动态填充列表项
    const num =
      Math.ceil(this.personalList.length / 3) * 3 - this.personalList.length;
    for (let i = 0; i < num; i++) {
      this.personalList.push({
        name: "",
        icon: "",
      });
    }
  },

  methods: {
    toLogin() {
      this.$router.push("/login");
    },
  },
};
</script>

<style lang="less" scoped>
// 头部
.userTop {
  width: 100%;
  height: 270px;
  background: url("http://yanxuan.nosdn.127.net/5905098f74e04c39fa5e76ebb9ff591b.png?imageView&type=webp");
  background-size: cover;
  display: flex;
  justify-content: space-between;
  .user {
    width: 510px;
    display: flex;
    align-items: center;
    > img {
      width: 142px;
      height: 142px;
      border-radius: 50%;
      margin-left: 30px;
    }
    .userInfo {
      margin-left: 20px;
      padding-top: 20px;
      color: #fff;
      .name {
        margin-bottom: 10px;
        font-size: 36px;
        text-align: left;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
      .pu {
        font-size: 26px;
      }
    }
  }
  .mail {
    margin: 100px 50px 0 0;
  }
}

.content {
  > h2 {
    width: 720px;
    height: 104px;
    line-height: 104px;
    font-weight: 400;
    background: #fff;
    font-size: 28px;
    padding-left: 30px;
    border-bottom: 1px solid #d9d9d9;
  }
  .myAssetList {
    background: #fff;
    display: flex;
    margin-bottom: 20px;
    .assetItem {
      width: 20%;
      height: 128px;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: 32px;
      & span:first-child {
        margin-bottom: 4px;
        font-size: 32px;
        line-height: 48px;
        font-weight: 700;
      }
      & span:last-child {
        font-size: 24px;
        line-height: 36px;
      }
    }
  }
  /deep/.iconfont {
    font-size: 60px;
  }
  .gridName {
    font-size: 24px;
    line-height: 34px;
    color: #333;
  }
}

.quit {
  width: 100%;
  border: 1px solid #fff;
  height: 94px;
  background: #fff;
  margin-top: 40px;
  margin-bottom: 120px;
  font-size: 28px;
}
</style>
