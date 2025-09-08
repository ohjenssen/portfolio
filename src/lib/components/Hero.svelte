<script>
    const portraitPath = '/assets/oskar_portrett_path.svg';
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
                    <img src="{portraitPath}" class="portrait-path" alt="graphics">
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
    }

@media(min-width: 768px){
    
    .hero {
        justify-content: center;
        margin: 32px;
        margin-top: 128px
    }

    .portrait-image-container {
        .portrait, .portrait-path { 
            margin-top: 0px;
            width: 350px;
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