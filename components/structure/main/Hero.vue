<template>
  <section class="hero">
    <h1>{{title}}</h1>
    <p>{{copy}}</p>
    <div v-if="cta_text">
      <CtaButton 
        :button_name="cta.name" 
        :button_link="cta.link" 
        :target="cta.target" />
    </div>
  </section>
</template>

<script>
// import CtaButton from '@/components/add-ins/CtaButton'
export default {
  props: ['title', 'copy', 'cta_text', 'cta_link'],
  data () {
    return {
      cta: {
        name: 'hero',
        link: '/blog',
        button_text: 'view blogs',
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
}
</style>