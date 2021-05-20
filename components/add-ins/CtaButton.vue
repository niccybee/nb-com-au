<template>
  <div class="button-container">
      <div class="button-highlight" v-if="button_name === 'right_corner_main'"></div>
      <a class="primary-button" :target="target" :href="button_link">Contact</a>
  </div>
</template>

<script>
export default {
  props: ['button_name', 'button_link', 'target' ]
}
</script>

<style>
.button-container {
    margin-top: 1rem;
}
.primary-button {
  border: solid 1px var(--text-dark-2);
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 2rem;
  padding-right: 2rem;
  border-radius: 4px;
  font-size: 1rem;
  background: none;
  cursor: pointer;
  color: var(--text-dark-2);
  text-decoration: none;
}
.primary-button:hover {
  color: white;
  transition: all 0.3s ease-in-out;
  border: solid white 1px;
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
    transform: scale(100);
    transition: all 0.3s ease-in-out
}

</style>