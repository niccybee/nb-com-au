export default {
  // DEPRECIATED -> mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: "Nic Benson",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Nic Benson"
      },
      {
        name: "msapplication-TileColor",
        content: "#da532c"
      },
      { name: "theme-color", content: "#ffffff" }
    ],
    link: [
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png"
      },
      { rel: "manifest", href: "/site.webmanifest" },
      { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#5bbad5" },
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
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
  css: ["@/assets/base.css", "@/assets/index.css", "@/assets/type.css"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: "@/plugins/animateOnScoll.client.js", mode: "client" }
    // { src: "@/plugins/darkModeToggle.client.js", mode: "client" }
  ],

  /*
   ** Nuxt.js dev-modules
   */
  // buildModules: ["@nuxtjs/google-fonts"],
  // googleFonts: {
  //   families: {
  //     "DM+Serif+Text": true,
  //     Raleway: {
  //       wght: [100, 400],
  //       ital: [100]
  //     }
  //   }
  // },

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
