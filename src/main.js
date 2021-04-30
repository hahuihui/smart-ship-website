// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import ViewUI from "view-design";
import "view-design/dist/styles/iview.css";
import VueResource from "vue-resource";

import VueDirectiveImagePreviewer from 'vue-directive-image-previewer'
import 'vue-directive-image-previewer/dist/assets/style.css'
Vue.use(VueDirectiveImagePreviewer)


/* 路由 */
import router from "./router";

/* axios */
import Axios from "axios";
Vue.prototype.$axios = Axios;

Vue.use(VueResource);

Vue.use(ViewUI);

/* swiper */
import "swiper/dist/css/swiper.min.css";

/* 重置样式 */
import "./assets/css/reset.min.css";

/* jquery */
import "jquery";

/* bootstarp */
import "./assets/css/bootstrap.min.css";
import "./assets/js/bootstrap.min";

/* animate.css */
import "animate.css";

/* 头部组件 */
import Header from "./components/Header";
Vue.component(Header.name, Header);

/* 尾部组件 */
import Footer from "./components/Footer";
Vue.component(Footer.name, Footer);

/* 回到顶部 */
import GoTop from "./components/GoTop";
Vue.component(GoTop.name, GoTop);

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});

new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
