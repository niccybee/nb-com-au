<template>
  <div class="wrap-all">
    <header>
      <HeadDesk class="desktop-header" />
      <HeadMob class="mobile-header" />
    </header>
    <left-aside />
    <nuxt />
    <right-aside />
    <footer>footer</footer>
  </div>
</template>

<script>
import HeadDesk from "@/components/structure/header/headDesk.vue";
import HeadMob from "@/components/structure/header/headMob.vue";
import leftAside from "@/components/structure/aside/leftAside.vue";
import rightAside from "@/components/structure/aside/rightAside.vue";
export default {
  components: {
    HeadDesk,
    HeadMob,
    leftAside,
    rightAside
  }
};
</script>

<style>
/* debugging */
header,
aside,
main,
footer {
  border: dashed 1px purple;
}
/* grid areas labelling */
header {
  grid-area: header;
  background-color: blue;
}
footer {
  grid-area: footer;
  background-color: red;
}
main {
  grid-area: main;
  background-color: green;
}
.left-aside {
  grid-area: left-aside;
  background-color: yellow;
}
.right-aside {
  grid-area: right-aside;
  background-color: yellow;
}
/* actual styling -> */
/* - layout */
/* - - desktop */
@media only screen and (min-width: 730px) {
  .wrap-all {
    display: grid;
    width: 98vw;
    min-height: 98vh;
    grid-template-columns: 4fr 4fr 4fr 4fr;
    grid-template-rows: auto;
    grid-template-areas:
      "left-aside header header right-aside"
      "left-aside main main right-aside"
      "footer footer footer footer";
  }
  .mobile-header {
    display: none;
  }
}

/* - - mobile */
@media only screen and (max-width: 730px) {
  .desktop-header,
  .left-aside {
    display: none;
  }
  .mobile-header {
    background: cornflowerblue;
  }
}
</style>