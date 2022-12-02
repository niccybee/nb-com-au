<template>
  <nav>
    <nuxt-link to="/about" class="menu-item">About</nuxt-link>
    <!-- <nuxt-link to="/blog" class="menu-item">Blog</nuxt-link> -->
    <nuxt-link to="/work" class="menu-item">Work</nuxt-link>
    <!-- <nuxt-link to="/cv" class="menu-item">CV</nuxt-link> -->
    <nuxt-link to="/tools" class="menu-item">Tools</nuxt-link>
  </nav>
</template>

<script>
export default {};
</script>

<style>
@media only screen and (min-width: 730px) {
  .menu-item {
    padding: 1rem;
    /* background: yellow; */
    text-decoration: none;
    cursor: pointer;
    transition: text-decoration 0.5s ease-in;
  }
  .menu-item:hover {
    text-decoration: underline;
  }
}
</style>
