<template>
  <section class="social-buttons">
      <a  class="social-button" href="#"><span>1</span></a> 
      <a  class="social-button" href="#"><span>2</span></a> 
      <a  class="social-button" href="#"><span>3</span></a> 
      <a  class="social-button" href="#"><span>4</span></a>
  </section>
</template>

<script>
export default {

}
</script>

<style>
.social-buttons {
    display: flex;
    flex-direction: column;
    margin-top: 40%;
}

.social-button {
    background: var(--highlight-900);
    color: var(--text-light);
    text-decoration: none;
    width: 2rem;
    height: 2rem;
    padding: 1rem;
    border-radius:100%;
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease-out;
}
.social-button:hover {
    background-color: var(--highlight-100);
    color: var(--highlight-900);
    transition: all 0.2s ease-in;
}

</style>