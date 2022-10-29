<template>
  <nav>
    <div class="box nav_bg">
      <div>
        <base-button class="logo">TI多€X</base-button>
      </div>
      <div class="links">
        <a
          class="btn"
          :class="{ active: pages.home }"
          href="#"
          @click="clicked('home')"
          >HOME</a
        >
        <a
          class="btn"
          :class="{ active: pages.about }"
          href="#about"
          @click="clicked('about')"
          >ABOUT</a
        >
        <a
          class="btn"
          :class="{ active: pages.skills }"
          href="#skills"
          @click="clicked('skills')"
          >SKILLS</a
        >
        <a
          class="btn"
          :class="{ active: pages.portfolio }"
          href="#portfolio"
          @click="clicked('portfolio')"
          >PORTFOLIO</a
        >
        <a
          class="btn"
          :class="{ active: pages.contact }"
          href="#contact"
          @click="clicked('contact')"
          >CONTACT</a
        >
      </div>
    </div>
  </nav>
</template>

<script>
import BaseButton from "./BaseButton.vue";
export default {
  name: "HomePage",
  components: { BaseButton },
  data() {
    return {
      observer: null,
      isActive: true,
      pages: {
        home: false,
        about: false,
        skills: false,
        portfolio: false,
        contact: false,
      },
    };
  },
  created() {
    this.observer = new IntersectionObserver(this.onElementObserved, {
      root: this.$el, //add a querySelector()
      threshold: 1.0,
    });
  },
  mounted() {
    this.observer.observe(this.$el);
  },
  methods: {
    clicked(val) {
      for (let page in this.pages) {
        // console.log(page)
        if (page == val) {
          this.pages[page] = true;
        } else this.pages[page] = false;
      }
    },
    onElementObserved(entries) {
      entries.forEach((entry) => {
        if (entry.intersectionRatio == 1) {
          // entry.target
          console.log(entry.target);
          // entry.target.style.visibility = "VISIBLE"
          // entry.target.classList.toggle("nav_bar_2")
          // entry.target.classList.toggle("nav_bar")
          //   video.pause(); isPaused = true;
        } else {
          // entry.target.style.visibility = "hidden"
          // entry.target.classList.toggle("nav_bar_2")
          // entry.target.classList.toggle("nav_bar")
        }
        // else if(isPaused) {video.play(); isPaused=false}
      });
    },
  },
};
</script>

<style scoped>
.nav_bg {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  top: 0;
  left: 0%;
  position: fixed;
  background-color: var(--bg-color);
  z-index: 1000;
}

.logo {
  /* border-radius: 50%; */
}
.box .links .active,
.btn:hover,
a:active {
  background-color: var(--green);
  color: var(--bg-color);
  box-shadow: var(--box-shadow);
}

.btn {
  padding: 1rem 1.5rem;
}
.links {
  display: flex;
  gap: 2rem;
}
</style>
