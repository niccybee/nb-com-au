<template>
  <section class="hero" :style="bg_image ? `background-image: url(${bg_image})` : ''">
    <h1>{{ title }}</h1>
    <div class="hero-copy" v-if="copy"><span v-html="copy"></span></div>
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
.hero {
  z-index: 1;
}
.hero h1 {
  margin-bottom: 0.5rem;
}
.hero-copy {
  padding: 0 0 2rem 0;
}

@media only screen and (min-width: 729px) {
  .hero {
    min-height: 85vh;
    display: flex;
    flex-direction: column;
    padding: 2rem;
    align-items: center;
    justify-content: center;
    background-repeat: no-repeat;
  }
  .hero h1 {
    font-size: 96px;
  }
}
@media only screen and (max-width: 730px) {
  .hero {
    padding: 2rem;
    min-height: 60vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .hero h1 {
    font-size: 36px;
  }
  .hero {
    padding: 2rem;
  }
}
</style>
