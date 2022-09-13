<template>
  <main>
    <Hero>
      <div class="folio-section">
        <iframe
          style="border: 1px solid rgba(0, 0, 0, 0.1)"
          width="600px"
          height="450"
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FZGZfWM1Fsc3dxomCf51RIF%2FNB_CV%3Fnode-id%3D0%253A1"
          allowfullscreen
        ></iframe>
      </div>
    </Hero>
  </main>
</template>
<script>
import Hero from "../../../components/structure/main/Hero.vue";
export default {
  components: { Hero },
};
</script>
<style>
.folio-section {
  background-color: none;
  width: 100%;
}
.folio-loading {

}
</style>
