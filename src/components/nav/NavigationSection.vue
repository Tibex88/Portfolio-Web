<template>
  <div>
    <div class="nav_page">
      <menu-btn class="nav_menu"></menu-btn>

      <base-nav class="nav_bar"></base-nav>
    </div>
  </div>
</template>

<script>
import MenuBtn from "../UI/MenuBtn.vue";
import BaseNav from "../UI/BaseNav.vue";

export default {
  components: {
    MenuBtn,
    BaseNav,
  },
};
</script>

<style>
.nav_page {
  /* padding:0 2rem 0 2rem; */
  /* position: fixed; */
  /* background-color: var(--bg-color); */
  /*
    justify-content: center;
    align-items: center; */
  /* margin-bottom:12rem; */
}

@media (max-width: 700px) {
  .nav_bar {
    display: none; /*important */
    position: fixed;

    /*
        flex-direction: row;
        gap:12rem;
        justify-content: center;
        align-items: center; */
  }
}
@media (min-width: 700px) {
  .nav_menu {
    display: none;
  }
  .nav_bar {
    display: flex;
    gap: 3rem;
    justify-content: center;
    align-items: center;
    margin-bottom: 12rem;
    /* position:sticky; */
    /* when scrolled out of view */
    /* position: fixed; 
        transform:translateX(-50%);
        left:50%;
        bottom:2rem; */
    /* bottom: 3.5rem; */
    /* right: 2rem; */
    /* flex-direction: row; */
  }
}
</style>
