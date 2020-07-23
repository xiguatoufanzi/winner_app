<template>
  <div>
    <div class="cart">
      <van-swipe-cell class="cartItem">
        <template #right>
          <van-button square text="删除" type="danger" class="delete-button" />
        </template>
        <template #default>
          <van-card price="149" title="商品标题" class="cardItem">
            <template #tags>
              <van-checkbox
                v-model="checked"
                checked-color="#dd1a21"
                class="check"
                icon-size="18"
              ></van-checkbox>
            </template>

            <template #thumb>
              <img
                src="https://yanxuan-item.nosdn.127.net/8037ef53fb7b08e652e7c9c08d4a07fe.png?type=webp&imageView&thumbnail=160x0&quality=75"
                alt=""
                class="cartImg"
              />
            </template>

            <template #desc>
              <div class="desc">
                <span>知性黑白</span>
                <van-icon name="arrow-down" class="arrow" />
              </div>
            </template>

            <template #num>
              <van-stepper default-value="1" class="count" />
            </template>
            <!--  -->
          </van-card>
        </template>
      </van-swipe-cell>
    </div>
  </div>
</template>

<script>
export default {
  name: "cartitem",

  data() {
    return {
      checked: true,
    };
  },
};
</script>

<style lang="less" scoped>
// 有物品界面
.cart {
  .delete-button {
    height: 100%;
  }
  .cardItem {
    position: relative;
    padding-left: 86px;
    background: #fff;
    margin-top: 20px;
    .check {
      position: absolute;
      left: -250px;
      top: 50%;
      transform: translateY(-50%);
    }

    .cartImg {
      width: 172px;
      height: 172px;
    }
    .desc {
      padding: 0 10px;
      color: #7f7f7f;
      background: #fafafa;
      border: 1px solid #efefef;
      display: inline-block;
      .arrow {
        margin: 10px 10px 0 13px;
      }
    }
  }
}
</style>
