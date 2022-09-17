<template>
  <div class="feature-item">
    <h2>Feature 1</h2>
    <p class="feature-text">{{ text }}</p>
    <slot />
  </div>
</template>
<script>
export default {
  props: ["text"],
};
</script>
<style>
.feature-item * {
  box-sizing: border-box;
}
.feature-item {
  border: solid 1px var(--text-dark);
  border-radius: 4px;
  max-width: 30%;
  min-width: 14rem;
  padding: 1rem;
}
.feature-text {
  padding-bottom: 1rem;
}
</style>
