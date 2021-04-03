<template>
  <main>
    <Hero />
    <TextSection />
  </main>
</template>

<script>
import Hero from "@/components/structure/main/Hero";
import TextSection from "@/components/structure/main/TextSection";
export default {
  head() {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
    };
  },
  components: {
    Hero,
    TextSection
  }
};
</script>

<style>
</style>