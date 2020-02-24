<template>
  <nav class="top-navigation">
    <div class="top-navigation-sub">
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
  min-width: 100%;
}
.top-navigation-sub {
  border: white solid 1px;
}

/* actual css */
/* - layout */
/* - - desktop */
@media only screen and (min-width: 730px) {
  .top-navigation {
    width: 100%;
  }
  .top-navigation-sub {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding-left: 16%;
    padding-right: 16%;
  }
  .menu-item {
    padding: 1rem;
    text-decoration: none;
    cursor: pointer;
  }
  .menu-item:hover {
    text-decoration: underline;
    transition: text-decoration 0.5s ease-in;
  }
}
/* - - mobile */
@media only screen and (max-width: 730px) {
  .top-navigation {
    display: none;
  }
}
</style>