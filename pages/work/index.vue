<template>
  <main>
    <hero title="Work" copy="Some recent work">
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
          title: "Mr Yum Clone in Vue",
          image_url: "https://paray-inn.surge.sh/",
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
