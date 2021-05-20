<template>
  <section class="hero" :style="bg_image ? `background-image: url(${bg_image})` :  '' ">
    <h1>{{title}}</h1>
    <p>{{copy}}</p>
    <div v-if="cta_text">
      <CtaButton 
        :button_name="cta.name" 
        :button_text="cta_text"
        :button_link="cta_link" 
        :target="cta.target" />
    </div>
  </section>
</template>

<script>
import CtaButton from '@/components/add-ins/CtaButton'
export default {
  components: {
    CtaButton
  },
  props: ['title', 'copy', 'cta_text', 'cta_link', 'bg_image'],
  data () {
    return {
      cta: {
        name: 'hero',
        target: '_self'
      }
    }
  }
};
</script>

<style>
.hero {
  min-height: 95vh;
  display: flex;
  flex-direction: column;
  padding: 4rem;
  align-items: center;
  background-repeat: no-repeat;
}
</style>