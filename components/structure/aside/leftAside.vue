<template>
  <aside class="left-aside">
    <Logo />
    <social-buttons v-if="$nuxt.$route.name !== 'cv'"/>
    <cv-side v-else />
  </aside>
</template>

<script>
import Logo from "@/components/Logo.vue";
import CvSide from "@/components/add-ins/CvSide.vue"
import SocialButtons from '@/components/add-ins/SocialButtons.vue';
export default {
  components: {
    Logo,
    SocialButtons,
    CvSide,
  }
};
</script>

<style>
aside {
  padding: 1rem;
}
.left-aside {
  width: 15%;
  position:fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}
@media only screen and (max-width: 730px) {
  .left-aside {
    display: none;
  }
}
</style>