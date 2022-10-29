<template>
  <div class="hero">
    <div class="skills-circle-wrap">
      <!-- <div class="btn1">hover me</div> -->
      <div class="skills-circle">
        <div class="skill-orbit" v-for="social in socials" :key="social.num">
          <div class="skill-planet">
            <span>
              <a :href="social.link" target="blank">
                <i :class="social.icon"></i>
              </a>
            </span>
          </div>
        </div>
      </div>
      <div class="skills-top-circle panel"></div>
    </div>
  </div>

  <!-- <a class="btn cv">Download CV</a> -->
  <a class="btn cv" href="/resume/resume.pdf" type="button">Download Resume</a>
  <!-- <logo></logo> -->
</template>

<script>
// import BaseButton from "../UI/BaseButton.vue";
import { socials } from "@/assets/data";

export default {
  components: {
    // BaseButton,
  },
  data() {
    return {
      socials,
    };
  },
};
</script>

<style>
.hero {
  padding-top: 2rem;
  margin-bottom: 2rem;
  cursor: pointer;
}

.cv {
  display: inline-block;
  margin-bottom: 2rem;
}

.skills-circle-wrap {
  width: 400px;
  height: 400px;
  position: relative;
  margin: 10px auto;
  pointer-events: fill;
  cursor: pointer;
  -webkit-transform: perspective(900px);
  transform: perspective(900px);
}

.skills-top-circle {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #fff;
  box-shadow: 0 0 50px var(--green);
}
.skills-circle {
  width: 400px;
  height: 400px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  border-radius: 50%;
  transition: 3s all;
}

.skill-orbit {
  border: 1px solid var(--light-color);
  border-radius: 50%;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  transition: 3s all;
  transform: perspective(900px);
}

@media (min-width: 600px) {
  .skill-orbit:nth-child(1) {
    animation: rotate1 5s infinite linear;
  }
  .skill-orbit:nth-child(2) {
    animation: rotate2 5s infinite linear;
  }
  .skill-orbit:nth-child(3) {
    animation: rotate3 5s infinite linear;
  }
  .skill-orbit:nth-child(4) {
    animation: rotate4 5s infinite linear;
  }
  .skill-orbit:nth-child(5) {
    animation: rotate5 5s infinite linear;
  }
}

.skill-orbit:nth-child(1) {
  /* animation: rotate1 5s infinite linear; */
  width: 100%;
  height: 100%;
}
.skill-orbit:nth-child(2) {
  /* animation: rotate2 5s infinite linear; */
  width: 82.5%;
  height: 82.5%;
}
.skill-orbit:nth-child(3) {
  /* animation: rotate3 5s infinite linear; */
  width: 65%;
  height: 65%;
}
.skill-orbit:nth-child(4) {
  /* animation: rotate4 5s infinite linear; */
  width: 47.5%;
  height: 47.5%;
}
.skill-orbit:nth-child(5) {
  /* animation: rotate5 5s infinite linear; */
  width: 30%;
  height: 30%;
}
.skill-planet {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  position: absolute;
  top: -15px;
  left: 0;
  right: 0;
  margin: 0 auto;
  font-family: Arial;
  font-weight: 100;
  text-align: center;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  transition: 1s all;
}
.skill-planet span {
  display: block;
}

.skill-orbit .skill-planet {
  background: var(--bg-color);
  box-shadow: var(--box-shadow);
  border: 2px solid var(--black);
  color: var(--black);
  font-size: 16px;
  line-height: 26px;
}

.skill-orbit:nth-child(1) .skill-planet {
  transform: rotate(20deg);
  -webkit-transform-origin: 50% 713%;
  transform-origin: 50% 713%;
}

.skill-orbit:nth-child(1) span {
  transform: rotate(-20deg);
}

.skill-orbit:nth-child(2) .skill-planet {
  transform: rotate(120deg);
  -webkit-transform-origin: 50% 597%;
  transform-origin: 50% 597%;
}
.skill-orbit:nth-child(2) span {
  transform: rotate(-120deg);
}
.skill-orbit:nth-child(3) .skill-planet {
  transform: rotate(320deg);
  -webkit-transform-origin: 50% 480%;
  transform-origin: 50% 480%;
}
.skill-orbit:nth-child(3) span {
  transform: rotate(-320deg);
}
.skill-orbit:nth-child(4) .skill-planet {
  transform: rotate(180deg);
  -webkit-transform-origin: 50% 363%;
  transform-origin: 50% 363%;
}
.skill-orbit:nth-child(4) span {
  transform: rotate(-180deg);
}
.skill-orbit:nth-child(5) .skill-planet {
  transform: rotate(100deg);
  -webkit-transform-origin: 50% 243%;
  transform-origin: 50% 243%;
}
.skill-orbit:nth-child(5) span {
  transform: rotate(-100deg);
}

.btn1 {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: #000;
  cursor: pointer;
  position: absolute;
  bottom: -150px;
  left: 0;
  right: 0;
  margin: 0 auto;
  color: #aeaeae;
  text-align: center;
  line-height: 100px;
}

@keyframes rotate3 {
  0% {
    -webkit-transform: rotate3d(0, 35, 0, 0deg);
    transform: rotate3d(0, 35, 0, 0deg);
  }
  100% {
    /* -webkit-transform: rotate3d(0, 1.6, 0, 360deg); */
    transform: rotate3d(40, 53, 0, 360deg);
  }
}
@keyframes rotate2 {
  0% {
    -webkit-transform: rotate3d(0, 35, 0, 0deg);
    transform: rotate3d(0, 35, 0, 0deg);
  }
  100% {
    /* -webkit-transform: rotate3d(0, 1.6, 0, 360deg); */
    transform: rotate3d(82, 44, 0, 360deg);
  }
}

@keyframes rotate1 {
  0% {
    -webkit-transform: rotate3d(0, 35, 0, 0deg);
    transform: rotate3d(0, 35, 0, 0deg);
  }
  100% {
    /* -webkit-transform: rotate3d(0, 1.6, 0, 360deg); */
    transform: rotate3d(10, -20, 0, 360deg);
  }
}
@keyframes rotate4 {
  0% {
    -webkit-transform: rotate3d(60, 35, 0, 0deg);
    transform: rotate3d(0, 35, 0, 0deg);
  }
  100% {
    -webkit-transform: rotate3d(0, 1.6, 0, 360deg);
    transform: rotate3d(0, 1.6, 0, 360deg);
  }
}

@keyframes rotate5 {
  0% {
    -webkit-transform: rotate3d(60, 35, 0, 0deg);
    transform: rotate3d(0, 35, 0, 0deg);
  }
  100% {
    -webkit-transform: rotate3d(0, 1.6, 0, 360deg);
    transform: rotate3d(2, 0, 0, 360deg);
  }
}
/* .skills-top-circle:hover .skills-circle { 
  -webkit-transform:rotate3d(60,35,0,360deg);
  transform:rotate3d(0,35,0,60deg);
}   */
</style>
