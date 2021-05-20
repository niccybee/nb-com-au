<template>
  <section class="hero">
    <h1>{{title}}</h1>
    <p>{{copy}}</p>
    <div v-if="cta_text">
      <a :href="cta_link">{{cta_text}}</a>
    </div>
  </section>
</template>

<script>
export default {
  props: ['title', 'copy', 'cta_text', 'cta_link']
};
</script>

<style>
.hero {
  min-height: 95vh;
  display: flex;
  flex-direction: column;
  padding: 4rem;
  align-items: center;
}
</style>