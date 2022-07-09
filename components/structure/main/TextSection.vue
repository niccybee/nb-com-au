<template>
  <section class="text-section">
    <h2>{{header}}</h2>
    <p>{{text}}</p>
  </section>
</template>

<script>
export default {
  props: ['header', 'text']
};
</script>

<style>
.text-section {
  height: 100vh;
  padding: 4rem;
}
</style>