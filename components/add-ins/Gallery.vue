<template>
  <div>
    items: {{ items }}
    <hr />
    filters: {{ allFilters }}
    <hr />
    activeFilters: {{ activeFilters }}
    <hr />
    filtered: {{ filteredItems }}
    <div class="gallery-filters">
      <div
        class="gallery-filter"
        :class="f.isActive ? 'active' : 'inactive'"
        v-for="f in allFilters"
        @click="toggleActive(f)"
      >
        {{ f.name }}
      </div>
      <sub class="gallery-filter-clear" @click="clearActive">Clear</sub>
    </div>
    <transition-group name="gallery" tag="div" class="gallery">
      <div
        class="gallery-item"
        v-for="i in filteredItems"
        :style="`background-image:url(${i.image_url})`"
        :key="i.id"
      >
        <h2 v-if="i.title">{{ i.title }}</h2>
        <a v-if="i.url" :href="i.url"><div class="gallery-item-overlay"></div></a>
      </div>
    </transition-group>
  </div>
</template>
<script>
export default {
  props: ["items"],
  data() {
    return {
      allFilters: [],
      mountedItems: [],
    };
  },
  computed: {
    someFilters() {
      let filters = [];
      this.items.forEach((f) => f.tags.forEach((x) => filters.push(x)));
      return Array.from(new Set(filters));
    },
    activeFilters() {
      let activeTags = this.allFilters.filter((x) => x.isActive);
      return activeTags;
    },
    filteredItems() {
      // push active items into new array
      let activeThings = [];

      this.mountedItems.forEach((x) => {
        //         console.log(x)
        x.tags.forEach((t) => {
          //           console.log(t);
          this.activeFilters.forEach((f) => {
            //             console.log(f)
            if (f.name == t) {
              activeThings.push(x);
            }
          });
        });
      });

      // return active array
      return Array.from(new Set(activeThings));
    },
  },

  mounted() {
    this.mountedItems = this.items;
    this.allFilters = this.someFilters.map((x) => {
      return { name: x, isActive: true };
    });
  },
  methods: {
    toggleActive(x) {
      x.isActive = !x.isActive;
      console.log(x.isActive);
    },
    clearActive() {
      this.activeFilters.forEach((x) => (x.isActive = false));
    },
  },
};
</script>
<style>
/* transitions */
.gallery-move {
  transition: transform 1s;
}
.gallery-enter-active,
.gallery-leave-active {
  transition: all 0.5s;
}
.gallery-enter,
.gallery-leave-to {
  opacity: 0;
}
/* end transitions */
.gallery {
  z-index: 0;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1rem;
}
.gallery-filters {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 2rem 2rem;
  width: 100%;
}
.gallery-filter {
  border-radius: 3rem;
  padding: 0.5rem 1rem;
  border: solid var(--highlight-900) 1px;
  color: var(--text-dark);
  margin-right: 1rem;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
}

.gallery-filter:hover {
  background-color: var(--highlight-500);
  color: var(--text-light);
}
.gallery-filter-clear {
  justify-self: flex-end;
  text-transform: uppercase;
  padding: 0.5rem;
}
.gallery-filter-clear {
  background: var(--highlight-500);
  cursor: pointer;
}
.active {
  outline: var(--highlight-00) 4px;
  background-color: var(--highlight-900);
  color: var(--text-light);
}

.gallery-item {
  opacity: 1;
  background-color: var(--highlight-100);
  height: 100%;
  display: flex;
  align-items: flex-end;
  min-height: 12rem;
  padding: 1.2rem;
  cursor: pointer;
  position: relative;
  transition: all 0.2s ease-in-out;
}
.gallery-item-overlay {
  z-index: 1;
  width: 100%;
  height: 100%;
  position: absolute;
  background: rgba(59, 59, 59, 0.149);
  left: 0;
  top: 0;
}
.gallery-item:hover {
  background-color: var(--highlight-900);
}
.gallery-item:hover h2 {
  color: var(--highlight-100);
}
@media only screen and (max-width: 730px) {
  .gallery {
    grid-template-columns: 1fr;
  }
  .gallery-item {
    width: 100%;
  }
}
</style>
