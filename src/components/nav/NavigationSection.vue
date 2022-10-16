<template>
    <div class="nav_page">
        <menu-btn class="nav_menu"></menu-btn>
        <base-nav class="nav_bar"></base-nav>
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

<style scoped>
.nav_page{
    padding:0 2rem 0 2rem;
    /* position: flex;
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
        
        /* position: fixed; */
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