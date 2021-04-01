<template>
  <aside class="right-aside"> 
    <cta-button/>
  </aside>
</template>

<script>
import CtaButton from '@/components/add-ins/CtaButton'

export default {
  components: {
    CtaButton
  }
};
</script>

<style>
.right-aside {
  display:flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;

}
</style>