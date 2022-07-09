<template>
  <main class="blog-article">
      <article>
          <hero :title="page.title" cta_link="#content" cta_text="Read"/>           
          <p>Jump to: </p>
          <ul>
              <li v-for="item in page.toc" :key="item"><a :href="`#${item.id}}`">{{item.text}}</a></li>
          </ul>
          <nuxt-content id="content" :document="page"/>
      </article>
      
  </main>
</template>

<script>
import Hero from "../../components/structure/main/Hero.vue";

export default {
  components: { Hero }, 
    async asyncData({$content, params}) {
        const slug = params.slug || 'index';
        const title = params.title || 'index';
        console.log( 'THE SLUG IS... :', slug)
        console.log( 'THE TITLE IS... :', title)
        const page = await $content('blog/' + slug)
            .fetch()
            .catch(err => {
                // error({statusCode: 404, message: `this is weird, error of ${err} here`})
                console.error(err)
            });
        return {
            title,
            page
        }
    }
}
</script>

<style>
@imoprt '../assets/type.css'

.blog-article h1 {
    text-align: center;
}
.nuxt-content {
    background: white; 
    border-radius: 0.3rem;
    padding: 2rem;
    min-height:100vh;
}
.nuxt-content h1 {
    font-size: 3rem;
}

</style>

/*           <!-- :copy="page.description"  -->s */