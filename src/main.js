import { createApp, h } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

createApp({
  created() {
    // Google Sign-in initial
    window.gapi.load("auth2", () => {
      window.gapi.auth2.init({
        client_id:
          "44840602495-h6m8h4gaie536mpfcof5b0on78ff7v6f.apps.googleusercontent.com",
      });
    });
  },
  render: () => h(App),
})
  .use(store)
  .use(router)
  .use(Antd)
  .mount("#app");
