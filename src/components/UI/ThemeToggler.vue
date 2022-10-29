<template>
  <div :class="darkMode ? 'dark' : 'light'" class="window">
    <div
      id="theme-toggler"
      @click="toggleTheme"
      :class="darkMode ? 'fas fa-sun' : 'fas fa-moon'"
    ></div>
    <slot name="body"> </slot>
  </div>
  <!-- </div> -->
</template>

<script>
export default {
  props: ["modelValue"],
  data() {
    return {
      darkMode: this.modelValue,
    };
  },
  computed: {},
  methods: {
    toggleTheme() {
      console.log(this.darkMode);
      this.darkMode = !this.darkMode;
    },
  },
};
</script>
<style>
#theme-toggler {
  position: fixed;
  z-index: 99999;
  /* bottom: 3.5rem;
    border-radius: 50%;
    right: 2rem; */
  /*  */
  bottom: 50%;
  right: 0rem;
  border-radius: 50% 0% 0% 50%;
  /*  */
  height: 5rem;
  width: 5rem;
  line-height: 5rem;
  font-size: 2rem;
  cursor: pointer;
  box-shadow: var(--box-shadow);
  text-align: center;
  color: var(--black);
  background: var(--bg-color);
}

#theme-toggler:hover {
  color: var(--green);
  box-shadow: var(--box-shadow-inset);
}
.window {
  min-height: 100vh;
  overflow-x: hidden;
  /* padding:2rem; */
}

.light {
}
.dark {
  --black: #fff;
  --light-color: #ddd;
  --bg-color: #222;
  --border: 0.1rem solid rgba(0, 0, 0, 0.4);
  --box-shadow: 0.4rem 0.4rem 1rem #111, -0.4rem -0.4rem 1rem #333;
  --box-shadow-inset: 0.4rem 0.4rem 1rem #111 inset,
    -0.4rem -0.4rem 1rem #333 inset;
  min-height: 100vh;
  background: var(--bg-color);
  color: var(--black);
}
</style>
