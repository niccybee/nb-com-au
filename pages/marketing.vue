<template>
  <main>
    <Hero v-animate-on-scroll class="mkt mkt-hero" title="Marketing Landing Page">
      <p class="mkt-hero-copy">A marketing style landing page about my dog daisy</p>
      <CtaButton class="mkt-button" button_text="Learn More" button_link="#" />
    </Hero>
    <FeatureContainer v-animate-on-scroll class="mkt" :text="text" />
    <FeatureHero v-animate-on-scroll class="mkt" :text="text" />
    <FeatureHero v-animate-on-scroll class="mkt" reverse :text="text" />
    <FeatureHero v-animate-on-scroll class="mkt" :text="text" />
    <CtaSection v-animate-on-scroll class="mkt" />
  </main>
</template>
<script>
import Hero from "@/components/structure/main/Hero";
import TextSection from "@/components/structure/main/TextSection";
import CtaButton from "@/components/add-ins/CtaButton";
import CtaSection from "@/components/add-ins/CtaSection";
import FeatureContainer from "@/components/add-ins/marketing/FeatureContainer";
import FeatureHero from "@/components/add-ins/marketing/FeatureHero";
export default {
  components: { TextSection, Hero, CtaButton, FeatureContainer, FeatureHero, CtaSection },
  data() {
    return {
      list: [],
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum vitae, id ullam temporibus sapiente accusantium laborum molestiae? Voluptatum nemo nulla sint blanditiis, odit magnam explicabo id magni quo facere sapiente?",
    };
  },
};
</script>
<style>
/* mkt animations */
.mkt {
  /* .scroll-leave  */
  opacity: 0;
  transform: translateY(-10px);
}
.scroll-enter {
  opacity: 1;
  transition: all 0.5s ease-in;
}
/*  */

.mkt-hero > h1 {
  width: 100%;
  text-align: left;
}
.mkt-hero-copy {
  width: 100%;
  padding-bottom: 1rem;
}
.mkt-button {
  text-align: left;
  padding-top: 2rem;
  place-self: flex-start;
}
</style>
