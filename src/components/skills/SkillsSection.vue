<template>
    <h2 class="heading" id="skills">My <span>Skills</span></h2>
        <div class="services">
            <div class="box-container">
            
                <div class="box">
                    <i class="fas fa-code"></i>
                    <h3>Front-End Developer</h3>
                    <p>I like to tweak,mix and match existing designs to bring in something unique</p>

                    <p>Languages I speak</p>
                    <ul>
                        <li>
                            VueJS
                        </li>
                        <li>
                            TailWind
                        </li>
                        <li>
                            Javascript
                        </li>
                        <li>
                            SaSS 
                        </li>
                        <li>
                            HTML
                        </li>
                        <li>
                            CSS
                        </li>

                    </ul>
                </div>
                
                <div class="box">
                    <i class="fas fa-cogs"></i>
                    <h3>Back-End Developer</h3>
                    <p>I value simple,readable,efficient code that performs the task at hand</p>
                    <p>Languages I speak</p>
                    <ul>
                        <li>
                            NodeJS
                        </li>
                        <li>
                            PHP
                        </li>
                        <li>
                            EXPRESS 
                        </li>
                        <li>
                            MongoDB
                        </li>
                        <li>
                            MySQL
                        </li>
                        <li>
                            Heroku
                        </li>
                        <li>
                            Netlify
                        </li>
                    </ul>

                </div>
                
                <div class="box">
                    <i class="fas fa-code"></i>
                    <h3>Other</h3>
                    <p>Other things I dabble in</p>

                    <ul>
                        <li>
                            AdobeXD
                        </li>
                        <li>
                            photoshop
                        </li>
                    </ul>
                </div>
            
            </div>
        </div>

</template>

<style scoped>
.services .box-container{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(27rem, 1fr));
    gap:2rem;

    padding: 3rem;
    max-width: 92%;
    margin: 1rem auto;
}

.services .box-container .box{
    padding:2rem;
    border-radius: .5rem;
    box-shadow: var(--box-shadow);
    position: relative;
    z-index: 0;
    overflow:hidden;
}

.services .box-container .box i{
    font-size:4rem;
    padding-bottom: 5rem;
    color:#fff;
}

.services .box-container .box h3{
    font-size:2rem;
    padding-bottom: 1rem;
    color:var(--black);
}

.services .box-container .box li{
    font-size:1.4rem;
    line-height: 1.8;
    color:var(--light-color);
}

.services .box-container .box::before{
    content: '';
    position: absolute;
    top:0; left: 0;
    height: 100%;
    width: 100%;
    background: var(--green);
    z-index: -1;
    clip-path: circle(9rem at 5% 0%);
    transition: .3s linear;
}

.services .box-container .box:hover::before{    
    clip-path: circle(100%);
}

.services .box-container .box:hover > *{
    color:#fff;
}
</style>