<template>
  <section class="feature-hero">
    <div
      :class="reverse ? 'feature-hero-text-right feature-hero-text' : 'feature-hero-text'"
    >
      <h2>A dog above all dogs</h2>
      <h3>Compact yet full of intuitive features</h3>
      <p>{{ text }}</p>
    </div>
    <div class="feature-hero-image"><img src="https://picsum.photos/1200" alt="" /></div>
  </section>
</template>
<script>
export default {
  props: {
    text: String,
    reverse: Boolean,
  },
};
</script>

<style>
.feature-hero {
  width: 100%;
  min-height: 60vh;
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr 1fr;
}
.feature-hero-text {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
}
.feature-hero-text-right {
  order: 2;
}
.feature-hero-text h2 {
  padding-bottom: 1rem;
}
.feature-hero-image {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.feature-hero-image img {
  width: 100%;
  border-radius: 10px;
  min-width: 385px;
}
</style>
