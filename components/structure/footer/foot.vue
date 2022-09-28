<template>
  <footer class="foot">
    <p>© {{ thisYear }} Nicholas Benson</p>
  </footer>
</template>

<script>
export default {
  computed: {
    thisYear() {
      let d = new Date();
      return d.getFullYear();
    },
  },
};
</script>

<style>
.foot {
  padding-left: 4rem;
  padding-right: 4rem;
  z-index: 1;
  text-align: center;
}
</style>
