<template>
    <div>
        <div class="nav_page">
            <menu-btn class="nav_menu"></menu-btn>
            
            <base-nav class="nav_bar"></base-nav>
        </div>    
    </div>
</template>

<script>
import MenuBtn from '../UI/MenuBtn.vue'
import BaseNav from '../UI/BaseNav.vue'

export default {
    components:{
        MenuBtn,
        BaseNav,
    }
}
</script>

<style >

.nav_bg{
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    top:0%;
    left:0%;
    position: fixed;
    background-color: var(--bg-color);
}
.nav_page{
    /* padding:0 2rem 0 2rem; */
    /* position: fixed; */
    /*
    justify-content: center;
    align-items: center; */
}


@media (max-width: 795px) {
    .nav_bar{
        display:none;/*important */
        /* position:fixed;
        flex-direction: row;
        gap:12rem;
        justify-content: center;
        align-items: center; */
    }

}
@media (min-width: 795px) {
    .nav_menu{
        display:none;
    }
    .nav_bar{
        /* position:sticky; */
        
        /* when scrolled out of view */
        /* position: fixed; 
        transform:translateX(-50%);
        left:50%;
        bottom:2rem; */

        /* bottom: 3.5rem; */
        /* right: 2rem; */

        display:flex;
        /* flex-direction: row; */
        gap:3rem;
        justify-content: center;
        align-items: center; 
    }



}
</style>