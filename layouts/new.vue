<template>
  <div class="wrap-all">
    <header>
      <HeadDesk class="desktop-header" />
      <HeadMob class="mobile-header" />
    </header>
    <!-- <left-aside /> -->
    <nuxt />
    <!-- <right-aside /> -->
    <foot />
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
};
</script>

<style scoped>
/* - layout */
/* - - all  */
.wrap-all {
  min-height: 100vh;
}
/* - - desktop */
@media only screen and (min-width: 730px) {
  .wrap-all {
    display: grid;

    background-color: var(--background-color);
    grid-template-columns: 15% 35% 35% 15%;
    grid-template-rows: auto;
    grid-template-areas:
      "left-aside header header"
      "left-aside main main"
      "right-aside footer footer";
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
  /* .left-aside {
    display: none;
  } */
}
</style>
