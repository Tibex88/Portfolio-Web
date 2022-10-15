<template>
            <input type="text" placeholder="your name" class="box">

</template>

<style scoped>

.box{
    padding:1rem 1.5rem;
    width:100%;
    background: none;
    color:var(--black);
    font-size: 1.6rem;
    text-transform: none;
    margin:.7rem 0;
    box-shadow: var(--box-shadow);
    border-radius: .5rem;
}

textarea{
    height: 20rem;
    resize: none;
}

.box:focus{
    box-shadow: var(--box-shadow-inset);
}
</style>