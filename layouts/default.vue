<template>
  <div class="wrap-all">
    <header>
      <HeadDesk class="desktop-header" />
      <HeadMob class="mobile-header" />
    </header>
    <left-aside />
    <nuxt />
    <right-aside />
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
    Foot
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Playfair+Display:700&display=swap");
/* CSS Variables */
:root {
  --background-color: #F8FCFE;
  --highlight-100: #E0ECF3;
  --highlight-900: #54798E;
  --text-dark: #282727;
  --text-dark-2: #504E4E;
  --text-light: #FFFFFF;

}


/* debugging */
header,
aside,
main,
footer {
  border: dashed 1px purple;
}
.desktop-header {
  z-index: 1;
  /* background: lightblue; */
}
/* - grid areas labelling */
header {
  grid-area: header;
  /* background-color: blue; */
}
footer {
  grid-area: footer;
  /* background-color: red; */
}
main {
  grid-area: main;
  /* background-color: green; */
}
.left-aside {
  grid-area: left-aside;
  /* background-color: yellow;  */
}
.right-aside {
  grid-area: right-aside;
  /* background-color: yellow; */
}

/* styling -> */
/* - fonts */

h1 {
  font-family: "Playfair Display", Georgia, "Times New Roman", Times, serif;
  font-weight: 700;
}
h2,
h3,
h4,
h5,
p,
nav {
  font-family: 'Avenir Next',-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  line-height: 1.5rem;
}
/* - layout */
/* - - all  */
.wrap-all {
  min-height: 98vh;
}
/* - - desktop */
@media only screen and (min-width: 730px) {
  .wrap-all {
    display: grid;
    width: 98vw;
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
    position: fixed;
    min-width: 15%;
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
  .desktop-header,
  .left-aside {
    display: none;
  }
  .mobile-header {
    background: cornflowerblue;
  }
  .hero h1 {
    font-size: 36px;
  }
}
</style>