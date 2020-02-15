<template>
  <nav class="top-navigation">
    <div class="top-navigation">
      <div class="menu-item">About</div>
      <div class="menu-item">Blog</div>
      <div class="menu-item">Work</div>
      <div class="menu-item">CV</div>
    </div>
    <div class="menu-navigation"></div>
  </nav>
</template>

<script>
export default {};
</script>

<style>
/* debugging */
.menu-item {
  border: 1px salmon dashed;
}
.top-navigation {
  border: white solid 1px;
}

/* actual css */
/* - layout */
/* - - desktop */
@media only screen and (min-width: 730px) {
  .top-navigation {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-around;
  }
}
/* - - mobile */
@media only screen and (max-width: 730px) {
  .top-navigation {
    display: none;
  }
}
</style>