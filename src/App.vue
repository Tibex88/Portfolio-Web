<template>
  <div id="menu-btn" class="fas fa-bars"></div>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <base-button></base-button>
  <base-card></base-card>
  <base-input></base-input>

  <div id="theme-toggler" class="fas fa-moon"></div>
</template>

<script>
import BaseButton from './components/UI/BaseButton.vue'
import BaseCard from './components/UI/BaseCard.vue'
import BaseInput from './components/UI/BaseInput.vue'

export default {
  name: 'App',
  components: {
    BaseButton,
    BaseCard,
    BaseInput,
  }
}
</script>

<style>

:root{
    --green:#27ae60;
    --black:#444;
    --light-color:#777;
    --bg-color:#e6e6e6;
    --border:.1rem solid rgba(0,0,0,.2);
    --box-shadow:.4rem .4rem 1rem #ccc,
                -.4rem -.4rem 1rem #fff;
    --box-shadow-inset:.4rem .4rem 1rem #ccc inset,
                      -.4rem -.4rem 1rem #fff inset;
}

*{
    font-family: 'Poppins', sans-serif;
    margin:0; padding:0;
    box-sizing: border-box;
    outline: none; border:none;
    text-decoration: none;
    text-transform: capitalize;
    transition: .2s linear;
}

html{
    font-size: 62.5%;
    overflow-x: hidden;
    scroll-behavior: smooth;
}

body{
    background: var(--bg-color);
    padding:0 12rem 0 12rem;
    padding-left: 30rem;
    margin:(100%-24px)
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#theme-toggler{
    position: fixed;
    top:1.5rem; right: 2rem;
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
}

#theme-toggler:hover{
    color:var(--green);
    box-shadow: var(--box-shadow-inset);
}

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
