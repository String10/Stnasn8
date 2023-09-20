import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/Stnasn8/",

  lang: "zh-CN",
  title: "STNASN8",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
