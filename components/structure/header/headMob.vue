<template>
  <nav class="mobile-navigation">
    <div class="mobile-logo">
      <Logo />
    </div>
    <div class="nav-icon-container">
      <div class="nav-icon" @click="toggleNav">
        <span :class="navIsOpen ? 'menu-icon top-active' : 'menu-icon'"></span>
        <span :class="navIsOpen ? 'menu-icon middle-active' : 'menu-icon'"></span>
        <span :class="navIsOpen ? 'menu-icon bottom-active' : 'menu-icon'"></span>
      </div>
    </div>
    <transition name="fade">
      <div
        :class="navIsOpen ? 'mobile-menu mobile-menu-active' : 'mobile-menu'"
        v-if="navIsOpen"
      >
        <nav-links />
      </div>
    </transition>
  </nav>
</template>

<script>
import Logo from "@/components/Logo.vue";
import NavLinks from "../../add-ins/NavLinks.vue";
export default {
  components: {
    Logo,
    NavLinks,
  },
  data() {
    return {
      navIsOpen: false,
    };
  },
  watch: {
    $route() {
      this.closeNav();
    },
  },
  methods: {
    toggleNav() {
      this.navIsOpen = !this.navIsOpen;
    },
    closeNav() {
      this.navIsOpen = false;
    },
  },
};
</script>

<style>
@media only screen and (min-width: 730px) {
  .mobile-navigation {
    display: none;
    visibility: hidden;
    opacity: 0;
  }
}
.mobile-navigation {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-height: 2rem;
  padding: 2rem;
  height: auto;
}
.mobile-menu {
  padding-top: 4rem;
  position: absolute;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100vw;
  background: var(--highlight-100);
  transition: opacity 0.3s ease-in-out;
  opacity: 0;
  z-index: 100;
}
.mobile-menu-active {
  opacity: 1;
}
.mobile-menu nav {
  display: flex;
  flex-direction: column;
}
.mobile-menu nav a {
  color: var(--text-dark);
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  text-align: center;
  padding: 1.5rem 0;
}
.mobile-menu nav a:hover {
  background: var(--text-dark);
  color: var(--text-light);
  padding: 1.8rem 0;
}

.nav-icon-container {
  position: relative;
  width: 2.6rem;
  height: 2.6rem;
}
.nav-icon {
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  z-index: 101;
}
.menu-icon {
  width: 100%;
  background: var(--text-dark);
  height: 0.25rem;
  border-radius: 0.2rem;
  transform: rotate(0deg);
  transform-origin: 0%;
  transition: transform 0.5s ease-in;
}
/* menu-icon states */
.top-active {
  transform: rotate(45deg);
}
.bottom-active {
  transform: rotate(-45deg);
}
.middle-active {
  transform: translateX(1000px);
}
.mobile-logo > svg {
  height: 1rem;
}
</style>
