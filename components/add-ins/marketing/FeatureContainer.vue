<template>
  <section class="feature-container">
    <FeatureItem v-for="feature in features" :text="text" :key="feature.id">
      <CtaButton button_text="Click me" />
    </FeatureItem>
  </section>
</template>
<script>
import FeatureItem from "@/components/add-ins/marketing/FeatureItem";
import CtaButton from "@/components/add-ins/CtaButton";
export default {
  props: ["text"],
  components: {
    FeatureItem,
    CtaButton,
  },
  data() {
    return {
      features: [{ id: 1 }, { id: 2 }, { id: 3 }],
    };
  },
};
</script>
<style>
.feature-container {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem 0;
  min-height: 60vh;
}
</style>
