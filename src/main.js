import { createApp } from "vue";
// 1. 引入 UnoCSS 的重置样式 (抹平浏览器的默认差异)
import "@unocss/reset/tailwind.css";
// 2. 引入 UnoCSS 的核心样式文件
import "virtual:uno.css";
import "./style.css";
import App from "./App.vue";

createApp(App).mount("#app");
