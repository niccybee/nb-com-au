<template>
  <main class="home">
    <Hero 
      :title="HeroContents.title" 
      :copy="HeroContents.copy" 
      :cta_link="HeroContents.cta_link" 
      :cta_text="HeroContents.cta_text" />
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
  },
  data () {
    return {
      HeroContents: {
        title: "Welcome",
        copy: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi numquam iusto ea cupiditate voluptatem vero fuga eum similique culpa in nesciunt quia accusantium quae, molestiae fugit laudantium esse laborum labore.",
        cta_link: "/blog",
        cta_text: "View All Blogs"
      }
    }
  }
};
</script>

<style>
</style>