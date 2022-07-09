<template>
  <section class="hero" :style="bg_image ? `background-image: url(${bg_image})` : ''">
    <h1>{{ title }}</h1>
    <p><span v-html="copy"></span></p>
    <div v-if="cta_text">
      <CtaButton
        :button_name="cta.name"
        :button_text="cta_text"
        :button_link="cta_link"
        :target="cta.target"
      />
    </div>
    <slot></slot>
  </section>
</template>

<script>
import CtaButton from "@/components/add-ins/CtaButton";
export default {
  components: {
    CtaButton,
  },
  props: ["title", "copy", "cta_text", "cta_link", "bg_image"],
  data() {
    return {
      cta: {
        name: "hero",
        target: "_self",
      },
    };
  },
};
</script>

<style>
@media only screen and (min-width: 729px) {
  .hero {
    min-height: 85vh;
    /* background-color: salmon; */
    display: flex;
    flex-direction: column;
    padding: 4rem;
    align-items: center;
    background-repeat: no-repeat;
  }
}
@media only screen and (max-width: 730px) {
  .hero {
    padding: 2rem;
  }
}
</style>
