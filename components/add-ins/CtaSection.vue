<template>
  <section class="cta-section">
    <div class="cta-section-container">
      <h3>CTA Header</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, nulla.
        Excepturi quae odio recusandae sed dolor. Autem delectus vel sapiente, a cum
        expedita ex necessitatibus amet ipsum culpa nihil enim.
      </p>
      <CtaButton button_text="Final Cta" />
    </div>
  </section>
</template>
<script>
import CtaButton from "@/components/add-ins/CtaButton";
export default {
  components: { CtaButton },
};
</script>
<style>
.cta-section {
  min-height: 60vh;
  display: flex;
  align-items: center;
}
.cta-section-container {
  border: solid 1px var(--text-dark);
  border-radius: 4px;
  padding: 2rem;
  text-align: center;
}
.cta-section p {
  padding: 2rem;
}
.cta-section button {
  padding: 1rem;
}
</style>
