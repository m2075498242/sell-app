import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
// 导入vantcss
import "vant/lib/index.css";
import "vant/lib/index.less";
import "@/assets/css/reset.css";
import "@/assets/css/common.css";

// 引入单个组件
import {
  Tab,
  Tabs,
  Sidebar,
  SidebarItem,
  Card,
  Button,
  Tag,
  Stepper,
  Overlay,
  Rate,
  Badge,
  Icon,
  ActionSheet,
} from "vant";
Vue.use(Tab)
  .use(Tabs)
  .use(Sidebar)
  .use(SidebarItem)
  .use(Card)
  .use(Button)
  .use(Tag)
  .use(Stepper)
  .use(Overlay)
  .use(Rate)
  .use(Badge)
  .use(Icon)
  .use(ActionSheet);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
