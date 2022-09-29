<template>
  <div class="button-container">
    <div class="button-highlight" v-if="button_name === 'right_corner_main'"></div>
    <a class="primary-button" :target="target" :href="button_link">{{ button_text }}</a>
  </div>
</template>

<script>
export default {
  props: ["button_name", "button_link", "button_text", "target"],
};
</script>

<style>
/* testing issue */
.button-container {
  margin: 0;
  padding: 0;
  height: auto !important;
}

/* test issuse end */

.primary-button {
  border: solid 1px var(--text-dark-2);
  padding-top: 0.8rem;
  padding-bottom: 0.8rem;
  padding-left: 1.4rem;
  padding-right: 1.4rem;
  border-radius: 4px;
  font-size: 1rem;
  background: none;
  cursor: pointer;
  color: var(--text-dark-2);
  text-decoration: none;
  /* position: relative; */
}
.primary-button:hover {
  color: white;
  background-color: var(--highlight-900);
  color: var(--highlight-100);
  border: solid var(--highlight-100) 1px;
  transition: all 0.2s ease-in-out;
}
.button-highlight {
  background-color: var(--highlight-900);
  position: absolute;
  top: -6px;
  right: -6px;
  width: 6px;
  height: 6px;
  border-radius: 100%;
  transition: all 0.3s ease-in-out;
  z-index: -100;
}
.button-container:hover .button-highlight {
  transform: scale(60);
  transition: all 0.3s ease-in-out;
}
</style>
