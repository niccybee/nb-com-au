<template>
  <main class="home">
    <Hero
      :title="HeroContents.title"
      :copy="HeroContents.copy"
      :cta_link="HeroContents.cta_link"
      :cta_text="HeroContents.cta_text"
    />
    <!-- <TextSection id="about-me" :text="textSect.header" :header="textSect.text" /> -->
  </main>
</template>

<script>
import Hero from "@/components/structure/main/Hero";
import TextSection from "@/components/structure/main/TextSection";
export default {
  head() {
    return {
      script: [{ src: "https://identity.netlify.com/v1/netlify-identity-widget.js" }],
    };
  },
  components: {
    Hero,
    TextSection,
  },
  data() {
    return {
      HeroContents: {
        title: "About Me",
        copy:
          "Digital Marketing Manager, with 5+ years experience in delivering high-converting lead-generation and sales campaigns. Passion for learning new technologies and creating strategies for business success.",
        cta_link: "#about-me",
        cta_text: "CV",
      },
      textSect: {
        header: "This is the stuff about me!",
        text: "CV",
      },
    };
  },
};
</script>

<style></style>
