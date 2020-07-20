import Vue from "vue";
import "lib-flexible/flexible";
import App from "./App.vue";
import router from "./router";
import "./vant";
// import "swiper/swiper.less";
// import "swiper/swiper-bundle.min.css";
import "swiper/css/swiper.min.css";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
