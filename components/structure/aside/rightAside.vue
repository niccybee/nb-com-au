<template>
  <aside class="right-aside"> 
    <cta-button 
      :button_name="buttonType" 
      :button_link="buttonLink" 
      :button_text="buttonText"
      :target="buttonTarget"/>
      <div class="right-aside-content">
      <div v-if="$nuxt.$route.name == 'cv'">
        <h4>Past Work</h4>
        
      </div>
      </div>
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
      buttonText: 'Contact',
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
    width: 15%;
  position:fixed;
}
.right-aside-content {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100%;
  margin-top:8rem;

}
</style>