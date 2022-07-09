export default {
  // DEPRECIATED -> mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "./assets/img/favicon.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossorigin: "true"
      },
      {
        rel: "stylesheet",
        href:
          'https://fonts.googleapis.com/css2?family=DM+Serif+Text:ital@0;1&display=swap" rel="stylesheet'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#54798E" },
  /*
   ** Global CSS
   */
  css: [
    // 'assets/type.css'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],

  target: "static",
  /*
   ** Nuxt.js modules
   */
  modules: ["@nuxt/content"],
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
