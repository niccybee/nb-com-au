<template>
  <aside class="left-aside">
    <Logo />
    <social-buttons/>
  </aside>
</template>

<script>
import Logo from "@/components/Logo.vue";
import SocialButtons from '@/components/add-ins/SocialButtons.vue';
export default {
  components: {
    Logo,
    SocialButtons
  }
};
</script>

<style>
aside {
  padding: 1rem;
}
.left-aside {
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