<template>
  <div class="container-water-fall">
    <waterfall :col="2" :data="firstData" @loadmore="loadmore" @scroll="scroll">
      <template>
        <div class="cell-item" v-for="(item, index) in firstData" :key="index">
          <div class="max-img">
            <img
              class="cell-item-img"
              v-if="item.picUrl"
              :lazy-src="item.picUrl"
            />
          </div>

          <div class="goods-list">
            <div class="con-r-title van-multi-ellipsis--l2">
              {{ item.title }}
            </div>
            <div class="comment">
              <img :src="item.avatar" alt="" />
              <span class="commenter">{{ item.nickname }}</span>
              <van-icon name="eye-o" class="eye" />
              <span>{{ item.readCount }}</span>
            </div>
          </div>

          <div class="buy" v-if="item.buyNow">
            <div class="buyNow van-ellipsis">{{ item.buyNow.itemName }}</div>
            <div class="gobuy">去购买></div>
          </div>
        </div>
      </template>
    </waterfall>
  </div>
</template>

<script>
export default {
  name: "waterFall",

  props: {
    data: Array,
  },

  data() {
    return {
      firstData: [],
      col: 5,
    };
  },

  watch: {
    data() {
      this.firstData = this.data;
    },
  },

  computed: {},

  methods: {
    scroll(scrollData) {
      // console.log(scrollData);
    },
    loadmore(index) {
      console.log(666666);
      this.firstData = this.firstData.concat(this.firstData);
    },
  },
};
</script>

<style lang="less" scoped>
.container-water-fall {
  margin: 180px 0px 0 20px;
  .cell-item {
    margin-bottom: 20px;
    background: #fff;
    width: 345px;
    align-items: center;
    box-sizing: border-box;
    border-radius: 12px;
    overflow: hidden;
    .max-img {
      height: 345px;
      .cell-item-img {
        width: 345px;
        height: 345px;
      }
    }
    .goods-list {
      .con-r-title {
        box-sizing: border-box;
        width: 311px;
        height: 100px;
        box-sizing: border-box;
        padding: 18px 16px 0;
        color: #333;
        font-size: 28px;
        line-height: 40px;
        font-family: "PingFangSC-Regular";
        background-color: #fff;
        text-align: left;
      }
      .comment {
        margin-top: 10px;
        padding: 17px 16px 24px 16px;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        > img {
          width: 46px;
          height: 46px;
          border-radius: 50%;
          border: 1px solid #d9d9d9;
          vertical-align: middle;
        }
        span,
        .eye {
          line-height: 48px;
          height: 48px;
          vertical-align: middle;
          color: #7f7f7f;
        }
      }
    }
    .buy {
      display: flex;
      justify-content: space-between;
      padding: 20px 0px;
      margin: 0 19px;
      border-top: 0.5px solid #d9d9d9;
      .buyNow {
        width: 198px;
        height: 32px;
        color: #333333;
      }
      .gobuy {
        color: #dd1a21;
      }
    }
  }
}
</style>
