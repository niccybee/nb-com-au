<template>
  <main>
    <hero title="Work" copy="This is all my work!">
      <gallery :items="items"></gallery>
    </hero>
  </main>
</template>

<script>
import Hero from "@/components/structure/main/Hero";
import Gallery from "@/components/add-ins/Gallery";
export default {
  components: {
    Hero,
    Gallery,
  },
  data() {
    return {
      items: [
        {
          id: 0,
          title: "Sunday Quiz ☀️",
          image_url: "https://placehold.it/",
          url: "https://sundayquiz.com.au",
        },
        {
          id: 1,
          title: "This is all my work",
          image_url: "https://placehold.it/",
        },
        {
          id: 2,
          title: "This is all my work",
          image_url: "https://placehold.it/",
        },

        {
          id: 1,
          title: "This is all my work",
          image_url: "https://placehold.it/",
        },
        {
          id: 2,
          title: "This is all my work",
          image_url: "https://placehold.it/",
        },
        {
          id: 2,
          title: "This is all my work",
          image_url: "https://placehold.it/",
        },
      ],
    };
  },
};
</script>

<style></style>
