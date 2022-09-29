<template>
  <aside class="right-aside">
    <div style="height: 1rem"></div>
    <cta-button
      :button_name="buttonType"
      :button_link="buttonLink"
      :button_text="buttonText"
      :target="buttonTarget"
    />
    <!-- TODO: FIX THIS HACKY BS -->
    <div style="height: 1rem"></div>
    <div class="toggle-holder">
      <ThemeToggle />
    </div>
    <div class="right-aside-content" v-if="$nuxt.$route.name == 'cv'">
      <div>
        <h4>Past Work</h4>
      </div>
    </div>
  </aside>
</template>

<script>
import CtaButton from "@/components/add-ins/CtaButton";
import ThemeToggle from "@/components/add-ins/ThemeToggle";

export default {
  components: {
    CtaButton,
    ThemeToggle,
  },
  data() {
    return {
      buttonType: "right_corner_main",
      buttonLink: "mailto:testemail@mailinator.com",
      buttonText: "Contact",
      buttonTarget: "_blank",
    };
  },
};
</script>

<style>
.right-aside {
  /* display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  width: 15%;
  position: fixed; */
  width: 15%;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 1rem;
}
.right-aside-content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background: blue;
  /* margin-top: 8rem; */
}
@media only screen and (max-width: 730px) {
  .right-aside {
    flex-direction: row;
    justify-content: center;
    background-color: var(--hightlight-900);
    border-left: 1px solid var(--highlight-900);
    width: 100%;
    height: 100%;
    position: relative;
  }
}
</style>
