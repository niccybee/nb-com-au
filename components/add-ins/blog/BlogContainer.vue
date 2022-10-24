<template>
  <div id="all" class="blog-container">
    <h2 class="">Current Blogs</h2>
    <div class="blog-list">
      <nuxt-link
        class="blog-list-item-link"
        :to="'blog/' + post.slug"
        v-for="(post, index) in blogs"
        :key="post.slug"
      >
        <article class="blog-list-item">
          <h3>{{ blogs[index].title }}</h3>
          <p>{{ post.description }}</p>
          <p>
            <sub>{{ post.date }}</sub>
          </p>
        </article>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ["blogs"],
  computed: {
    cleanDate() {},
  },
};
</script>

<style>
.blog-container {
  padding: 2rem;
}
.blog-list {
  display: flex;
  flex-wrap: wrap;
}
.blog-list-item {
  max-width: 32rem;
  /* debug */
  border: solid 1px lightgray;
  padding: 2rem;
  margin: 0.5rem;
  color: var(--text-dark);
}
.blog-list-item-link {
  text-decoration: none;
}
.blog-list-item-linkk {
  text-decoration: solid;
}
@media only screen and (max-width: 730px) {
  .blog-list-item {
    width: 100%;
  }
}
</style>
