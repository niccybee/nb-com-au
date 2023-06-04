<template>
  <main class="work">
    <hero title="Work" copy="<p>Some of my recent work in web design, dev and digital marketing.</p>">
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
          title: "24 Hour Tan",
          // image_url: "https://placehold.it/",
          url: "https://24hourtan.com.au",
          tags: ["design", "dev"],
        },
        {
          id: 1,
          title: "Nic & Georgia's Wedding",
          // image_url: "https://placehold.it/",
          url: "https://nicandgeorgia.com.au",
          tags: ["design", "dev"],
        },
        {
          id: 2,
          title: "Sunday Quiz ☀️",
          // image_url: "https://placehold.it/",
          url: "https://sundayquiz.com.au",
          tags: ["design", "dev"],
        },
        {
          id: 3,
          title: "Mr Yum Clone in Vue (WIP)",
          url: "https://paray-inn.surge.sh/",
          tags: ["design", "dev"],
        },
        {
          id: 4,
          title: "Mobile Course Activity (WIP)",
          url: "http://activity-test.surge.sh/",
          tags: ["dev"],
        },

        {
          id: 5,
          title: "Recent Design Folio",
          url: "/work/folio",
          tags: ["design"],
        },
        {
          id: 6,
          title: "New sign-up flow",
          url: "/work/sign-up-flow",
          tags: ["design"],
        },

        {
          id: 7,
          title: "Education Dashboard (WIP)",
          url: "https://e2-concept-dashboard.surge.sh",
        },
      ],
    };
  },
};
</script>

<style>
.work {
  z-index: 1;
}
</style>
