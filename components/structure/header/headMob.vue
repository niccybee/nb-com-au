<template>
  <nav class="mobile-navigation">
    <div class="mobile-logo">
      <Logo />
    </div>
    <div class="nav-icon">
      <span class="menu-icon"></span>
      <span class="menu-icon"></span>
      <span class="menu-icon"></span>
      </div>
    <nav-links v-if="navIsOpen"/>
  </nav>
</template>

<script>
import Logo from "@/components/Logo.vue";
import NavLinks from '../../add-ins/NavLinks.vue';
export default {
  components: {
    Logo,
    NavLinks
  },
  data() {
    return {
      navIsOpen: false
    }
  },
  methods: {
    openNav() {
      this.navIsOpen = !this.navIsOpen
    }
  }
};
</script>

<style>
.mobile-navigation {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-height: 2rem;
  padding: 1rem;
}
.mobile-navigation nav {
  display: absolute;
}
.nav-icon {
  border: olive dashed 1px;
  display: flex;
  flex-direction: column;
}
.menu-icon:nth-child(2) {
  transform: translateY(10px);
}
.menu-icon:nth-child(2) {
  transform: translateY(-10px);
}
.menu-icon {
  background-color: var(--text-dark);
  width: 2rem;
  /* border: solid 2px var(--text-dark); */
  height: 0.3rem;
  border-radius: 20px;
}
.mobile-logo {
  max-width: 3rem;
}
.mobile-logo > svg {
  height: 1rem;
}
</style>