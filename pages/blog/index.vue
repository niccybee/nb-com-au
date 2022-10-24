<template>
  <main class="blog">
    <Hero
      title="Blog Page"
      copy="<p>Lorem ipsum eatsum chipsum with dipsum</p>"
      cta_text="View All"
      cta_link="#all"
    />
    <blog-container :blogs="blogs" />
  </main>
</template>

<script>
import Hero from "@/components/structure/main/Hero";
import BlogContainer from "@/components/add-ins/blog/BlogContainer.vue";
export default {
  layout: "blogs",
  components: {
    Hero,
    BlogContainer,
  },
  async asyncData({ $content, params }) {
    const blogs = await $content("blog", params.slug).fetch();

    return {
      blogs,
    };
  },
};
</script>

<style></style>
