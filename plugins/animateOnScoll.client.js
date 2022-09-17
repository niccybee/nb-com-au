import Vue from "vue";

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // console.log("intersecting", entry);
      entry.target.classList.add("scroll-enter");
    } else {
      entry.target.classList.add("scroll-leave");
      // entry.unobserve();
    }
  });
});

Vue.directive("animate-on-scroll", {
  bind: el => {
    observer.observe(el);
  }
});
