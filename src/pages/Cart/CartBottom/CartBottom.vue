<template>
  <div>
    <div class="cartBottom">
      <div class="cartLeft">
        <van-checkbox
          v-model="checked"
          checked-color="#dd1a21"
          class="check"
          icon-size="18"
          @click="changeAllSelected(!isAllSelected)"
        ></van-checkbox>
        <span>已选({{ selectedNum }})</span>
      </div>

      <div class="cartRight">
        <span class="money">合计:￥{{ totalPrice }}</span>
        <button class="pay">下单</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "cartbottom",

  data() {
    return {
      checked: false,
    };
  },

  computed: {
    ...mapGetters(["isAllSelected", "selectedNum", "totalPrice"]),
  },

  watch: {
    isAllSelected(value) {
      this.checked = value;
    },
  },

  methods: {
    ...mapMutations(["CHANGE_ALL_CHANGE_SELECTED"]),

    changeAllSelected(selected) {
      this.CHANGE_ALL_CHANGE_SELECTED(selected);
    },
  },
};
</script>

<style lang="less" scoped>
.cartBottom {
  position: fixed;
  bottom: 102px;
  left: 0;
  background: #fff;
  width: 100%;
  height: 118px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 30px;
  box-sizing: border-box;
  .cartLeft {
    display: flex;
    .check {
      width: 38px;
      height: 38px;
      margin-right: 16px;
    }
    > span {
      color: #7f7f7f;
      font-size: 28px;
    }
  }
  .cartRight {
    .money {
      color: #dd1a21;
      line-height: 1;
      margin-right: 8px;
      font-size: 28px;
    }
    .pay {
      width: 226px;
      height: 118px;
      background: #dd1a21;
      border: none;
      font-size: 28px;
      color: #fff;
    }
  }
}
</style>
