<template>
    
    <div @click="log" id="menu-btn" class="fas fa-bars"></div>

</template>

<script>

export default{
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
    if(entry.intersectionRatio!=0 ){
        // entry.target
        console.log(entry.target)
    //   video.pause(); isPaused = true;
    }
    // else if(isPaused) {video.play(); isPaused=false}
  });
    }
  },
}
</script>

<style>

#menu-btn{
    position: fixed;
    top:1.5rem; left: 2rem;
    z-index: 1000;
    height: 5rem;
    width: 5rem;
    line-height: 5rem;
    border-radius: 50%;
    font-size: 2rem;
    cursor: pointer;
    box-shadow: var(--box-shadow);
    text-align: center;
    color:var(--black);
    background: var(--bg-color);
    /* display: none; */
}

#menu-btn:hover{
    color:var(--green);
    box-shadow: var(--box-shadow-inset);
}
</style>