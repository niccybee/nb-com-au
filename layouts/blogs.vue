<template>
  <div class="wrap-all" @mousemove="moveFunc">
    <header>
      <HeadDesk class="desktop-header" />
      <HeadMob class="mobile-header" />
    </header>
    <leftAside />
    <Nuxt />
    <rightAside />
    <Foot />
  </div>
</template>

<script>
import HeadDesk from "@/components/structure/header/headDesk.vue";
import HeadMob from "@/components/structure/header/headMob.vue";
import leftAside from "@/components/structure/aside/leftAside.vue";
import rightAside from "@/components/structure/aside/rightAside.vue";
import Foot from "@/components/structure/footer/foot.vue";
export default {
  components: {
    HeadDesk,
    HeadMob,
    leftAside,
    rightAside,
    Foot,
  },
  data() {
    return {
      mouseX: 0,
      mouseY: 0,
      mounted: false,
      noMotion: false,
    };
  },
  mounted() {
    this.mounted = true;
    if (process.client) {
      console.log(window.matchMedia("prefers-reduced-motion"));
    }
  },
  methods: {
    moveFunc(e) {
      if (process.client && this.mounted) {
        // let interval = 1000;
        // let timeout = 30000;
        // let int = setInterval(() => {
        //   // console.log(e.clientX, e.clientY);
        this.mouseX = e.clientX;
        this.mouseY = e.clientY;
        // }, interval);
        // setTimeout(() => {
        //   clearInterval(int);
        // }, timeout);
      }
    },
  },
};
</script>

<style>
/* - layout */
/* - - all  */
.wrap-all {
  min-height: 100vh;
  background-color: var(--highlight-100);
}
main {
  z-index: 1;
}
/* - - desktop */
@media only screen and (min-width: 730px) {
  .wrap-all {
    display: grid;

    background-color: var(--background-color);
    grid-template-columns: 15% 35% 35% 15%;
    grid-template-rows: auto;
    grid-template-areas:
      "left-aside header header right-aside"
      "left-aside main main right-aside"
      "left-aside footer footer right-aside";
  }
  .header {
    min-height: 3rem;
  }
  .desktop-header {
    position: fixed;
    top: 0;
    left: 0;
  }
  .mobile-header {
    display: none;
  }
  .hero h1 {
    font-size: 96px;
  }
  aside {
    /* position: fixed;
    width: 15%; */
    z-index: 2;
    /* padding-top: 3.5rem; */
  }
  .left-aside {
    min-height: 100%;
    left: 0;
    top: 0;
  }

  .right-aside {
    min-height: 100%;
    right: 0;
    top: 0;
  }
}

/* - - mobile */
@media only screen and (max-width: 730px) {
  .wrap-all {
    display: grid;
    background-color: var(--background-color);
    grid-template-columns: 50% 50%;
    grid-template-rows: auto;
    grid-template-areas:
      "header header"
      "main main"
      "left-aside right-aside"
      "footer footer";
  }
  /* .desktop-header {

  } */
  .left-aside,
  .right-aside {
    max-width: 49vw;
  }
}
</style>
