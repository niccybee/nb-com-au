<template>
  <div class="gallery">
    <div
      class="gallery-item"
      v-for="i in items"
      :style="`background-image:url(${i.image_url})`"
    >
      <h2 v-if="i.title">{{ i.title }}</h2>
      <a v-if="i.url" :href="i.url"><div class="gallery-item-overlay"></div></a>
    </div>
  </div>
</template>
<script>
export default {
  props: ["items"],
};
</script>
<style>
.gallery {
  z-index: 0;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1rem;
}
.gallery-item {
  background-color: var(--highlight-100);
  height: 100%;
  display: flex;
  align-items: flex-end;
  min-height: 12rem;
  padding: 1.2rem;
  cursor: pointer;
  position: relative;
  transition: all 0.2s ease-in-out;
}
.gallery-item-overlay {
  z-index: 1;
  width: 100%;
  height: 100%;
  position: absolute;
  background: rgba(59, 59, 59, 0.149);
  left: 0;
  top: 0;
}
.gallery-item:hover {
  background-color: var(--highlight-900);
}
@media only screen and (max-width: 730px) {
  .gallery {
    grid-template-columns: 1fr;
  }
  .gallery-item {
    width: 100%;
  }
}
</style>
