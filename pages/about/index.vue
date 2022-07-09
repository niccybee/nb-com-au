<template>
  <main class="home">
    <Hero 
      :title="HeroContents.title" 
      :copy="HeroContents.copy" 
      :cta_link="HeroContents.cta_link" 
      :cta_text="HeroContents.cta_text" />
    <TextSection
      id="about-me"
      :text="textSect.header"
      :header="textSect.text"
     />
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
  },
  data () {
    return {
      HeroContents: {
        title: "About Me",
        copy: "First my mum, met my dad. Hi I'm Nic, and my life... it's kinda crazy.",
        cta_link: "#about-me",
        cta_text: "All about me"
      },
      textSect: {
        header: 'This is the stuff about me!',
        text: 'Not too much to know really...'
      }
    }
  }
};
</script>

<style>
</style>