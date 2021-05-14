<template>
  <nav class="top-navigation-sub">
      <nuxt-link to="/" class="menu-item">About</nuxt-link>
      <nuxt-link to="/" class="menu-item">Blog</nuxt-link>
      <nuxt-link to="/" class="menu-item">Work</nuxt-link>
      <nuxt-link to="/" class="menu-item">CV</nuxt-link>
      {{menuLinks}}
    </nav>
</template>

<script>
export default {
  computed: {
    menuLinks() {
      return this.$routes
    }
  }
}
</script>

<style>

</style>