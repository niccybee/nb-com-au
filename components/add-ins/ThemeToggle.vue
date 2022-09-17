<template>
  <div id="dark-toggle" class="theme-switcher">
    <button @click="switchTheme">
      <span v-if="theme === 'dark'">🌞</span><span v-else>🌙</span>
    </button>
    <!-- <p class="info">{{ this.theme }}</p> -->
  </div>
</template>
<script>
export default {
  // props: ["theme"],
  mounted() {
    if (process.client) {
      let dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      let theme = dark ? "dark" : "light";
      this.theme = theme;
      console.log(theme);
      document.body.classList.add(theme);
    }
  },
  methods: {
    switchTheme() {
      console.log("clicked the switcher");
      if (process.client) {
        if (this.theme !== "dark") {
          document.body.classList.add("dark");
          document.body.classList.remove("light");
          console.log("dark mode");
          this.theme = "dark";
        } else {
          document.body.classList.add("light");
          document.body.classList.remove("dark");
          console.log("dark mode");
          this.theme = "light";
        }
      }
    },
  },
  data() {
    return {
      theme: "system",
    };
  },
};
</script>
<style>
.info {
  position: absolute;
  top: 16rem;
  right: 32rem;
}
.theme-switcher {
  padding: 0.2rem;
  font-size: 2rem;
  cursor: pointer;
}
</style>
