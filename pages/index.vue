<template>
  <main class="home">
    <Hero
      :title="HeroContents.title"
      :copy="HeroContents.copy"
      :cta_link="HeroContents.cta_link"
      :cta_text="HeroContents.cta_text"
    />
    <!-- <TextSection :text="textSect.header" :header="textSect.text" /> -->
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
        title: "Welcome",
        copy:
          "Personal site of Nicholas Benson. <br/> I like playing around with front-end development– especially Vue.js.",
        cta_link: "/blog",
        // cta_text: "View All Blogs",
      },
      textSect: {
        header: "This is the new header",
        text: "This is the new text section",
      },
    };
  },
};
</script>

<style></style>
