<template>
  <section class="social-buttons">
    <a class="social-button" href="#"
      ><span><IconTwitter /></span
    ></a>
    <a class="social-button" href="https://github.com/niccybee"
      ><span><IconGitHub /></span
    ></a>
    <a class="social-button" href="#"
      ><span><IconLinkedin /></span
    ></a>
    <!-- <a class="social-button" href="#"><span>4</span></a> -->
  </section>
</template>

<script>
import IconGitHub from "../icons/IconGitHub.vue";
import IconTwitter from "../icons/IconTwitter.vue";
import IconLinkedin from "../icons/IconLinkedin.vue";

export default {
  components: { IconGitHub, IconLinkedin, IconTwitter },
};
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
  padding: 1.2rem;
  border-radius: 100%;
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-out;
}
.icon {
  fill: var(--background-color);
}
.social-button:hover .icon {
  fill: var(--highlight-900);
  transition: all 0.2s ease-in;
}
.social-button:hover {
  background-color: var(--highlight-100);
  color: var(--highlight-900);
}
.icon-container {
  display: flex;
  place-items: center center;
}
@media only screen and (max-width: 730px) {
  .social-buttons {
    margin: 0;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
  }
  .social-button {
    margin-top: 0;
    margin-right: 1rem;
  }
}
</style>
