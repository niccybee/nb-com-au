<template>
<div class="mobile-navigation">
    <nav >
    <div class="mobile-logo">
      <Logo />
    </div>
    <div class="nav-icon-container">
      <div class="nav-icon" @click="openNav">
      <span :class="navIsOpen ? 'menu-icon top-active' : 'menu-icon'"></span>
      <span :class="navIsOpen ? 'menu-icon middle-active' : 'menu-icon'"></span>
      <span :class="navIsOpen ? 'menu-icon bottom-active' : 'menu-icon'"></span>
    </div>

    </div>
    <transition name="fade">
      <div :class="navIsOpen ? 'mobile-menu mobile-menu-active' : 'mobile-menu'" v-if="navIsOpen">
        <nav-links />
      </div>
    </transition>
  </nav>
</div>
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
.mobile-menu {
  position: absolute;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100vw;
  background: var(--highlight-100);
  transition: opacity 0.3s ease-in-out;
  opacity: 0;

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
  width: 3rem;
  height: 3rem;
  
}
.nav-icon {
  position: absolute;
  right:0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  z-index: 3;
  
}
.menu-icon {
  width: 100%;
  background: var(--text-dark);
  height: 0.5rem;
  border-radius: 3px;
  transform: rotate(0deg);
  transform-origin: 0%;
  transition: all 0.5s ease-in;
  
}
/* menu-icon states */
.top-active {
  transform: rotate(45deg);
}
.bottom-active {
  transform: rotate(315deg);
}
.middle-active {
  transform: translateX(1000px);
}
.mobile-logo {
  max-width: 3rem;
}
.mobile-logo > svg {
  height: 1rem;
}
</style>