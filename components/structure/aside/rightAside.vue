<template>
  <aside class="right-aside"> 
    <cta-button :button_name="buttonType" :button_link="buttonLink" :target="buttonTarget"/>
  </aside>
</template>

<script>
import CtaButton from '@/components/add-ins/CtaButton'

export default {
  components: {
    CtaButton
  },
  data () {
    return {
      buttonType: 'right_corner_main',
      buttonLink: 'mailto:testemail@mailinator.com',
      buttonTarget: '_blank'
    }
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