<template>
  <div @click="log" id="menu-btn">
    <div class="menu_container">
      <a :class="{ active: pages.home }" href="#" @click="clicked('home')">
        <i class="fas fa-home"></i>
      </a>
      <a
        :class="{ active: pages.about }"
        href="#about"
        @click="clicked('about')"
      >
        <i class="fas fa-question"></i>
      </a>
      <a
        :class="{ active: pages.skills }"
        href="#skills"
        @click="clicked('skills')"
      >
        <i class="fas fa-toolbox"></i>
      </a>
      <a
        :class="{ active: pages.portfolio }"
        href="#portfolio"
        @click="clicked('portfolio')"
      >
        <i class="fas fa-folder-open"></i>
      </a>
      <a
        :class="{ active: pages.contact }"
        href="#contact"
        @click="clicked('contact')"
      >
        <i class="fas fa-address-book"></i>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      observer: null,
      pages: {
        home: false,
        about: false,
        skills: false,
        portfolio: false,
        contact: false,
      },
    };
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
  },
};
</script>

<style scoped>
.active {
  /* background-color:var() ; */
  color: var(--green);
  /* box-shadow: var(--box-shadow);} */
}

#menu-btn .menu_container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
}

#menu-btn {
  position: fixed;
  bottom: 3.5rem;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99999;
  height: 5rem;
  width: 80%;
  line-height: 5rem;
  font-size: 2rem;
  cursor: pointer;
  box-shadow: var(--box-shadow);
  text-align: center;
  color: var(--black);
  background: var(--bg-color);
  /* display: none; */
}

#menu-btn .menu_container i:hover {
  color: var(--green);
  /* box-shadow: var(--box-shadow-inset); */
}
</style>
