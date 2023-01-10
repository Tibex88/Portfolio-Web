<template>
  <!-- <base-button></base-button>
  <base-card></base-card>
  <base-input></base-input> -->
  <theme-toggler v-model="darkMode">
    <template #body>
      <navigation-section></navigation-section>
      <hero-section></hero-section>
      <about-section></about-section>
      <skills-section></skills-section>
      <portfolio-section></portfolio-section>

      <contact-section></contact-section>
      <!-- <footer-section></footer-section> -->
    </template>
  </theme-toggler>
</template>

<script>
// import BaseButton from './components/UI/BaseButton.vue'
// import BaseCard from './components/UI/BaseCard.vue'
// import BaseInput from './components/UI/BaseInput.vue'
import ThemeToggler from "./components/UI/ThemeToggler.vue";
// import MenuBtn from './components/UI/MenuBtn.vue'
import SkillsSection from "./components/skills/SkillsSection.vue";
import PortfolioSection from "./components/portfolio/PortfolioSection.vue";
import ContactSection from "./components/contact/ContactSection.vue";
// import FooterSection from './components/footer/FooterSection.vue'
import AboutSection from "./components/about/AboutSection.vue";
import HeroSection from "./components/hero/HeroSection.vue";
import NavigationSection from "./components/nav/NavigationSection.vue";

export default {
  name: "App",
  // provide() {
  //   return { darkMode: this.darkMode };
  // },
  data() {
    return {
      darkMode: false,
    };
  },
  components: {
    // BaseButton,
    // BaseCard,
    // BaseInput,
    ThemeToggler,
    // MenuBtn,
    SkillsSection,
    PortfolioSection,
    ContactSection,
    // FooterSection,
    AboutSection,
    HeroSection,
    NavigationSection,
  },
};
</script>

<style>
/* def light mode values */
:root {
  --green: #27ae60;
  /* --green:#e32444; */
  --black: #444;
  --light-color: #777;
  /* --light-color:#f6faff; */

  --bg-color: #e6e6e6;
  --border: 0.1rem solid rgba(0, 0, 0, 0.2);
  --box-shadow: 0.4rem 0.4rem 1rem #ccc, -0.4rem -0.4rem 1rem #fff;
  --box-shadow-inset: 0.4rem 0.4rem 1rem #ccc inset,
    -0.4rem -0.4rem 1rem #fff inset;
}

* {
  font-family: "Rokkitt ";
  /* <link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet">  */
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
  border: none;
  text-decoration: none;
  white-space: initial;
  /* text-transform: capitalize; */
  transition: 0.2s linear;
}

html {
  font-size: 62.5%;
  overflow-x: hidden;
  scroll-behavior: smooth;
}

body {
  /* background: var(--bg-color); */
  /* padding:0 12rem 0 12rem;
    padding-left: 30rem; */
  /* margin:(100%-24px) */
}

span.span {
  color: var(--black);
  font-size: 1.6rem;
}
span.highlight {
  color: var(--green);
  font-size: 2rem;
}

p {
  font-size: 2rem;
  color: var(--light-color);
  line-height: 1.8;
  padding: 1rem 0;
  margin: 1rem auto;
  width: 71%;
}
a:link,
a:active,
a:visited {
  text-decoration: none;
  color: var(--black);
}
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: var(--bg-color);
  min-height: 100vh;
  /* padding:0 12rem 0 12rem;
    padding-left: 30rem; */
  /* margin:(100%-24px)
  
    /* background: var(--bg-color); */
  /* color: #2c3e50; */
  /* margin-top: 60px; */
}

.heading {
  text-align: center;
  font-size: 5rem;
  color: var(--black);
  text-transform: uppercase;
  padding-bottom: 2rem;
}

.heading span {
  color: var(--green);
  text-transform: uppercase;
}

.box {
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: var(--box-shadow);
  position: relative;
  z-index: 0;
  overflow: hidden;
}
</style>
