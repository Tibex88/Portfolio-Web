<template>
  <nav>
    <div class="box nav_bg">
      <div>
        <ph3>Tibebe</ph3>
      </div>
      <div>
        <a class="btn" href="#">HOME</a>
        <a class="btn" href="#">SKILLS</a>
        <a class="btn" href="#">PORTFOLIO</a>
        <a class="btn" href="#">ABOUT</a>
        <a class="btn" href="#">CONTACT</a>
      </div>
  </div>
  </nav>

  <!-- <nav-1>
    <a class="btn" href="#">HOME</a>
    <a class="btn" href="#">SKILLS</a>
    <a class="btn" href="#">PORTFOLIO</a>
    <a class="btn" href="#">ABOUT</a>
    <a class="btn" href="#">CONTACT</a>
  </nav-1> -->
  
</template>

<script>
export default {
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

<style>

</style>