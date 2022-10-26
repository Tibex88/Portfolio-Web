<template>
  <nav>
    <div class="box nav_bg">
      <div>
        <base-button class="logo">T</base-button>
      </div>
      <div class="links">
        <a class="btn" href="#">HOME</a>
        <a class="btn" href="#skills">SKILLS</a>
        <a class="btn" href="#portfolio">PORTFOLIO</a>
        <a class="btn" href="#about">ABOUT</a>
        <a class="btn" href="#contact">CONTACT</a>
      </div>
  </div>
  </nav>
  
</template>

<script>
import BaseButton from './BaseButton.vue';
export default {
  components: { BaseButton },
  data(){
        return {
            observer:null
        }
    },
    created() {
    this.observer = new IntersectionObserver(
      this.onElementObserved, 
      {
        root: this.$el,//add a querySelector()
        threshold: 1.0,
      }
    );
  },
  mounted() {
    this.observer.observe(this.$el);
  },
  methods: {
    onElementObserved(entries) {
        entries.forEach(entry => {
    if(entry.intersectionRatio==1 ){ 
        // entry.target
        console.log(entry.target)
        entry.target.style.visibility = "VISIBLE"
        // entry.target.classList.toggle("nav_bar_2")
        // entry.target.classList.toggle("nav_bar")
        //   video.pause(); isPaused = true;
      }
      else{
        entry.target.style.visibility = "hidden"
        // entry.target.classList.toggle("nav_bar_2")
        // entry.target.classList.toggle("nav_bar")
    }
    // else if(isPaused) {video.play(); isPaused=false}
  });
    }
  },
}
</script>

<style scoped>

.logo{
  /* border-radius: 50%; */
}

.btn{
  padding: 1rem 1.5rem;
}
.links{
	gap: 2rem;
	display: flex;
}
</style>