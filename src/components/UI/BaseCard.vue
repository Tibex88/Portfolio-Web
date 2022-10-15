<template>
     <div class="box-container">
            <div class="box">
                <h3>2+</h3>
                <p>years of experience</p>
            </div>
    </div>
</template>

<style scoped>

.box-container .box{
    flex:1 1 18rem;
    text-align: center;
    padding:2rem;
    border-radius: .5rem;
    box-shadow: var(--box-shadow);
}

.box-container .box h3{
    font-size: 5rem;
    color:var(--black);
    line-height: 1.1;
}

.box-container .box p{
    font-size: 1.7rem;
    color:var(--light-color);
    padding:.5rem 0;
}
</style>