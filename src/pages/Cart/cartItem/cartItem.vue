<template>
  <div>
    <div class="cart">
      <van-swipe-cell
        class="cartItem"
        v-for="(item, index) in cartList"
        :key="item.id"
      >
        <template #right>
          <van-button
            square
            text="删除"
            type="danger"
            class="delete-button"
            @click="delCartItem"
          />
        </template>
        <template #default>
          <van-card
            :price="item.retailPrice"
            :title="item.name"
            class="cardItem"
          >
            <template #tags>
              <van-checkbox
                v-model="item.selected"
                checked-color="#dd1a21"
                class="check"
                icon-size="18"
                @change="changeSelected(item.selected, index)"
              ></van-checkbox>
            </template>

            <template #thumb>
              <img :src="item.listPicUrl" alt="" class="cartImg" />
            </template>

            <template #desc>
              <div class="desc">
                <span>{{ item.promotionDesc }}</span>
                <van-icon name="arrow-down" class="arrow" />
              </div>
            </template>

            <template #num>
              <van-stepper
                v-model="item.count"
                default-value="1"
                class="count"
                :min="1"
              />
            </template>
            <!--  -->
          </van-card>
        </template>
      </van-swipe-cell>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "cartitem",

  data() {
    return {};
  },

  computed: {
    ...mapState({
      cartList: (state) => state.cart.cartList,
    }),
  },

  methods: {
    ...mapMutations(["CHANGE_SELECTED"]),

    // 删除购物车项
    delCartItem() {
      Toast("提示内容");
    },

    // 改变选中状态
    changeSelected(selected, index) {
      this.CHANGE_SELECTED({ selected, index });
    },
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
      margin: 10px 0;
      padding: 0 10px;
      color: #7f7f7f;
      background: #fafafa;
      border: 1px solid #efefef;
      display: inline-block;
      .arrow {
        margin: 10px 10px 0 13px;
      }
    }
    .count {
      margin-top: -10px;
    }
  }
}
</style>
