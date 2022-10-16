<template>
    <button class="btn" :type="type" :caption="caption"> 
    <slot></slot>
    </button>
</template>

<script>
export default{
    props:['type', 'caption'],
    // computed
    
}
</script>


<style>
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