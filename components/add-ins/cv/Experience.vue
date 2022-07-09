<template>
  <div class="cv-experience">
    <p class="cv-employment-company">{{cvCompany}}</p>
    <h3>{{cvJobTitle}}</h3>
    <p class="cv-job-description">{{cvJobDescription}}</p>
    <ul>
        <li v-for="h in highlights" :key="h">{{h}}</li>
        <li>Two</li>
        <li>Three</li>
    </ul>
  </div>
</template>
<script>
export default {
    props: ['cv-job-title', 'cv-company', 'cv-job-description','cv-highlights']
}
</script>
<style scoped>
h3 {
  padding-top: 0;
  margin-top: 0.2rem;
  margin-bottom: 0.8rem;
}
.cv-experience {
    margin-bottom: 2rem;
}
.cv-employment-company {
    font-style: italic;
    font-size: 1.1rem;
    padding-bottom: 0;
    margin-bottom: 0;
    font-family: serif;
}

</style>