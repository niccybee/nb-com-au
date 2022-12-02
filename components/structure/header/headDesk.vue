<template>
  <div class="top-navigation">
    <nav-links class="top-navigation-sub" />
    <div class="menu-navigation"></div>
  </div>
</template>

<script>
import NavLinks from "@/components/add-ins/NavLinks";
export default {
  components: {
    NavLinks,
  },
};
</script>

<style>
/* debugging */
/* .menu-item {
  border: 1px salmon dashed;
} */
.top-navigation {
  min-width: 100%;
  z-index: 2;
}

/* actual css */
/* - layout */
/* - - desktop */
@media only screen and (min-width: 730px) {
  .top-navigation {
    width: 100%;
  }
  .top-navigation-sub {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding-left: 16%;
    padding-right: 16%;
    padding-top: 1rem;
    padding-bottom: 2rem;
    transition: background-color 0.2s ease-in;
  }
  .top-navigation-sub:hover {
    background: linear-gradient(
      180deg,
      rgba(156, 177, 189, 0.21) 0%,
      rgba(255, 255, 255, 0) 100%
    );
  }
  .top-navigation-sub a {
    color: var(--highlight-900);
    opacity: 0.5;
    transition: all 0.2s ease-out;
    font-weight: 500;
  }
  .top-navigation-sub:hover a {
    opacity: 1;
    transition: all 0.2s ease-in;
  }
}
/* - - mobile */
@media only screen and (max-width: 730px) {
  .top-navigation {
    display: none;
  }
}
@media (prefers-color-scheme: dark) {
  .top-navigation-sub:hover {
    background: none;
  }
}
</style>
