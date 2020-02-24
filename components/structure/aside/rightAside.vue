<template>
  <aside class="right-aside">
    <button class="primary-button">Contact</button>
  </aside>
</template>

<script>
export default {};
</script>

<style>
.primary-button {
  border: solid 1px black;
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 2rem;
  padding-right: 2rem;
  border-radius: 4px;
  font-size: 1rem;
  background: none;
  cursor: pointer;
  color: black;
}
.primary-button:hover {
  background: black;
  color: white;
  transition: background 0.5s ease-in;
  transition: color 0.2s ease-in;
}
</style>