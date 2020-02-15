<template>
  <nav class="mobile-navigation">
    <div class="mobile-logo">
      <Logo />
    </div>
    <nav class="mobile-navigation">=</nav>
  </nav>
</template>

<script>
import Logo from "@/components/Logo.vue";
export default {
  components: {
    Logo
  }
};
</script>

<style>
.mobile-navigation {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-height: 2rem;
  padding: 1rem;
}
.mobile-logo {
  /* max-height: 100%; */
  max-width: 3rem;
}
.mobile-logo > svg {
  height: 1rem;
}
</style>