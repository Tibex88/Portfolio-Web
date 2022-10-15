<template>
    <button class="btn"> Share</button>
</template>

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
    padding-left: 30rem;
}

.btn{
    margin-top: 1rem;
    display: inline-block;
    padding:1rem 3.5rem;
    border-radius: .5rem;
    font-size: 1.7rem;
    cursor: pointer;
    background: none;
    color:var(--black);
    box-shadow: var(--box-shadow);
}

.btn:hover{
    box-shadow: var(--box-shadow-inset);
    color:var(--green);
}
</style>