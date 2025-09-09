<script>
    const portraitPath1 = '/assets/portrait_path_vector_1.svg';
    const portraitPath2 = '/assets/portrait_path_vector_2.svg';
    const portrait = '/assets/oskar_portrett.png';
</script>

        <section id="hero-section">

            <div class="hero">
                <div class="text">
                    <div class="hero-text-container">
                        <p class="hero-text">Hello world, my name is:</p>
                        <h1 class="pageTitle">Oskar Heming Jenssen</h1>
                        <p class="hero-text">I am a webdeveloper with a passion for creating a unique value for people through stunning UIs and UX.</p>
                    </div>
                </div>
                <div class="portrait-image-container">
                    <img src="{portrait}" class="portrait" alt="Portrettbilde av Oskar">
                    <img src="{portraitPath1}" class="portrait-path" id="path1" alt="graphics">
                    <img src="{portraitPath2}" class="portrait-path" id="path2" alt="graphics">
                </div>
            </div>

        </section>

<style lang="postcss">

    #hero-section {
        max-width: 1100px;
        margin: auto;
    }

    .hero {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        margin: 16px;
        margin-top: 64px;
    }

    .pageTitle {
        color: var(--coolOrange);
        font-size: 24px;
    }

    .hero-text-container {
        margin-left: 40px;
    }

    .hero-text {
        color: var(--bananaYellow);
        margin-bottom: 0px;
        max-width: 400px;
    }
    
    .portrait-image-container {
    position: relative;
    margin-top: 32px;

        .portrait {
            width: 350px;
        }
        
        .portrait-path {
            width: 350px;
            position: absolute;
            z-index: -1;
            left: 10px;
            top: 10px;
        }
        #path1 {
            animation: rotate-clockwise-animation 25s infinite linear;
        }

        #path2 {
            animation: rotate-anti-clockwise-animation 25s infinite linear;
            width: 300px;
            00px;
            left: 30px;
        }
    }

    @keyframes rotate-clockwise-animation {
        0% {
            transform: rotate(0deg);
        }
        50% {
            transform: rotate(180deg);
        }
	    100% {
		    transform: rotate(360deg);
	    }
    }

    @keyframes rotate-anti-clockwise-animation {
        0% {
            transform: rotate(0deg);
        }
        50% {
            transform: rotate(-180deg);
        }
	    100% {
		    transform: rotate(-360deg);
	    }
    }

@media(min-width: 768px){
    
    .hero {
        justify-content: center;
        margin: 32px;
        margin-top: 128px
    }

    .portrait-image-container {
        .portrait { 
            margin-top: 0px;
            width: 350px;
        }

        .portrait-path {
            width: 350px;
        }

        #path2 {
            width: 300px;
            left: 30px;
        }

    }
}

@media(min-width: 1000px){
    .hero {
        margin: 64px;
        margin-top: 115px;
    }

    .portrait-image-container {
        margin-top: 0px;
        .portrait, .portrait-path { 
            margin-top: 32px;
            width: 400px;
        }

    }

}
</style>