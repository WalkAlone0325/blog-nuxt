export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: "独行的博客",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        name: "keyword",
        content:
          "IT，前端，文章，博客，blog，web，程序员，vue，SSR，react，node，小程序"
      },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#4a9fdf" },
  /*
   ** Global CSS
   */
  css: [
    "@/assets/css/normalize.css",
    "@/assets/font/iconfont.css",
    "@/assets/css/style.scss"
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    "~/plugins/filters",
    "~/plugins/vtime",
    "~/plugins/lazy",
    "~/plugins/loading"
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    "@nuxtjs/eslint-module"
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ["@nuxtjs/axios"],
  axios: {
    baseURL: "http://api.loner.shop/web/api"
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
