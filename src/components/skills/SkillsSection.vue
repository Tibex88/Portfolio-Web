<template>
  <h2 class="heading" id="skills">My <span>Skills</span></h2>
  <div class="services">
    <div class="box-container">
      <div class="box">
        <i class="fas fa-code"></i>
        <h3>Front-End Developer</h3>
        <p>
          I like to tweak,mix and match existing designs to bring in something
          unique
        </p>

        <p>Languages I speak</p>
        <ul>
          <li v-for="skill in frontEnd" :key="skill">
            {{ skill }}
          </li>
        </ul>
      </div>

      <div class="box">
        <i class="fas fa-cogs"></i>
        <h3>Back-End Developer</h3>
        <p>
          I value simple,readable,efficient code that performs the task at hand
        </p>
        <p>Languages I speak</p>
        <ul>
          <li v-for="skill in backEnd" :key="skill">
            {{ skill }}
          </li>
        </ul>
      </div>

      <div class="box">
        <i class="fas fa-code"></i>
        <h3>Other</h3>
        <p>Other things I Dabble in</p>

        <ul>
          <li v-for="skill in other" :key="skill">
            {{ skill }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { frontEnd, backEnd, other } from "@/assets/data";

export default {
  data() {
    return {
      frontEnd,
      backEnd,
      other,
    };
  },
  mounted() {
    console.log(frontEnd, backEnd);
  },
};
</script>

<style scoped>
.services .box-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(27rem, 1fr));
  gap: 2rem;

  padding: 3rem;
  max-width: 92%;
  margin: 1rem auto;
}

.services .box-container .box {
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: var(--box-shadow);
  position: relative;
  z-index: 0;
  overflow: hidden;
}

.services .box-container .box i {
  font-size: 4rem;
  padding-bottom: 5rem;
  color: var(--black);
}

.services .box-container .box h3 {
  font-size: 2rem;
  padding-bottom: 1rem;
  color: var(--black);
}

.services .box-container .box li {
  font-size: 1.4rem;
  line-height: 1.8;
  color: var(--green);
  list-style: none;
}

.services .box-container .box::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: var(--green);
  z-index: -1;
  clip-path: circle(9rem at 5% 0%);
  transition: 0.3s linear;
}

.services .box-container .box:hover::before {
  clip-path: circle(100%);
}

.services .box-container .box:hover > * {
  color: #fff;
}
.services .box-container .box ul li {
  color: var(--green);
  font-size: 1.4rem;
}
.services .box-container .box:hover ul li {
  color: var(--black);
  font-size: 3rem;
}
</style>
