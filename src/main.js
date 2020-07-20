import Vue from "vue";
import "lib-flexible/flexible";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./vant";
import "swiper/css/swiper.min.css";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
