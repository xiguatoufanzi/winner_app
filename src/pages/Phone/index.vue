<template>
  <div class="bg">
    <NavBar title="网易严选" />

    <!-- 严选背景 -->
    <div class="logo">
      <img
        src="http://yanxuan.nosdn.127.net/39c5e4583753d4c3cb868a64c2c109ea.png"
        alt=""
      />
    </div>

    <!-- 手机登录表单 -->
    <van-form
      @submit="onSubmit"
      class="form"
      v-if="isPhone === '1'"
      :show-error="false"
    >
      <van-field
        v-model="username"
        name="用户名"
        placeholder="请输入手机号"
        :rules="[
          { required: true, message: '请输入手机号' },
          {
            pattern: /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/,
            message: '请输入正确的手机号',
          },
        ]"
      />
      <van-field
        name="短信"
        v-model="sms"
        center
        clearable
        placeholder="请输入短信验证码"
        :rules="[
          { required: true, message: '请输入验证码' },
          {
            pattern: /^\d{4}$/,
            message: '验证码不正确',
          },
        ]"
      >
        <template #button v-if="isPhone === '1'">
          <van-button size="small" color="#bbb" plain>获取验证码</van-button>
        </template>
      </van-field>
      <!-- 遇到问题 -->
      <div class="problem">
        <span class="havePro">遇到问题？</span>
        <span class="usePassword" @click="usePassword">使用密码验证登录</span>
      </div>
      <div style="margin: 16px;">
        <van-button block type="danger" native-type="submit">
          登录
        </van-button>
      </div>
    </van-form>

    <!-- 邮箱登录 -->
    <van-form @submit="onSubmit" class="form" v-else :show-error="false">
      <van-field
        v-model="email"
        name="用户名"
        placeholder="邮箱账号"
        :rules="[
          { required: true, message: '请输入邮箱账号' },
          {
            pattern: /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/,
            message: '请输入正确的邮箱账号',
          },
        ]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        placeholder="密码"
        :rules="[
          { required: true, message: '请输入密码' },
          {
            pattern: /^[A-Z]/,
            message: '必须以大写字母开头',
          },
          {
            pattern: /^\w{4,10}$/,
            message: '密码必须为4-10位数字字母或下划线',
          },
        ]"
      />
      <!-- 忘记密码 -->
      <div class="problem">
        <span class="havePro">注册账号</span>
        <span class="havePro">忘记密码</span>
      </div>

      <div style="margin: 16px;">
        <van-button block type="danger" native-type="submit">
          登录
        </van-button>
      </div>
    </van-form>

    <!-- 登录方式切换 -->
    <div class="changeLogin" @click="toLogin">
      其他登录方式<van-icon name="arrow" class="arrow" size="16" color="#aaa" />
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
export default {
  name: "phone",

  data() {
    return {
      username: "",
      sms: "",
      email: "",
      password: "",
      isPhone: "",
    };
  },

  mounted() {
    // 控制显示界面
    this.isPhone = this.$route.params.id;
  },

  watch: {
    $route(to, from) {
      this.isPhone = to.params.id;
    },
  },

  methods: {
    onSubmit(values) {
      console.log("submit", values);
    },

    // 去登录页面
    toLogin() {
      this.$router.push("/login");
    },

    usePassword() {
      this.$router.push("/phone/2");
      this.isPhone = "2";
    },
  },

  components: {
    NavBar,
  },
};
</script>

<style lang="less" scoped>
.bg {
  background: #fff;
  height: 1334px;
}

.logo {
  margin-top: 56px;
  margin-bottom: 100px;
  > img {
    width: 268px;
    height: 90px;
    margin: 0 auto;
    display: block;
  }
}

.form {
  padding: 0 20px;
  .problem {
    height: 43px;
    cursor: pointer;
    line-height: 43px;
    font-size: 30px;
    display: flex;
    justify-content: space-between;
    padding: 0 25px;
    margin-top: 20px;
    .havePro {
      color: #7f7f7f;
    }
    .usePassword {
      color: #333;
      height: 45px;
      line-height: 45px;
    }
  }
}

.changeLogin {
  margin-top: 80px;
  font-size: 28px;
  line-height: 40px;
  text-align: center;
  vertical-align: middle;
  .arrow {
    vertical-align: middle;
    margin-bottom: 3px;
  }
}
</style>
