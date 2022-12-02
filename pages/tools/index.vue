<template>
  <main>
    <Hero :title="title" :copy="body" cta_link="#tools" cta_text="View All" />
    <h1 id="tools">Tools</h1>
    <Gallery :items="items" />
  </main>
</template>
<script>
import Hero from "../../components/structure/main/Hero.vue";
import Gallery from "../../components/add-ins/Gallery.vue";
export default {
  components: { Hero, Gallery },
  data() {
    return {
      title: "Tools",
      body: `<p>A collection of tools I've built to help with marketing day to day marketing tasks.</p>`,
      cta_link: "#",
      items: [
        {
          id: 0,
          title: "Email Signature Generator",
          // image_url: "https://placehold.it/",
          url: "/tools/email-sig",
          tags: ["email"],
        },
      ],
    };
  },
};
</script>
