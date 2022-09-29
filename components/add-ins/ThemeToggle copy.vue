<template>
  <div>
    <button class="theme-switcher" @click="switchTheme">
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
      if (localStorage.theme) {
        this.theme = localStorage.theme;
        console.log("local theme: ", localStorage.theme);
      } else {
        console.log("page theme", theme);
        document.body.classList.add(theme);
      }

      window
        .matchMedia("(prefers-color-scheme: dark)")
        .addEventListener("change", (event) => {
          console.log("switch theme  event: ", event);
          this.initTheme();
        });
    }
  },
  methods: {
    initTheme() {
      let dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      let theme = dark ? "dark" : "light";
      this.theme = theme;
    },
    setTheme() {
      if (process.client) {
        if (this.theme === "dark") {
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
  watch: {
    theme(newTheme) {
      localStorage.theme = newTheme;
      console.log("local (watched) theme: ", localStorage.theme);
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
  padding: 0.5rem;
  font-size: 2rem;
  cursor: pointer;
  background: none;
  border: none;
}
</style>
