<template>
  <div class="button-container">
      <div class="button-highlight"></div>
      <button class="primary-button">Contact</button>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.button-container {
    margin-top: 0.5rem;
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
}
.primary-button:hover {
  color: white;
  transition: all 0.3s ease-in-out;
  border: solid white 1px;
}
.button-highlight {
    background-color: var(--highlight-900);
    position: absolute;
    top: 0;
    right: 0;
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