<script>
    const pictureOfMe = '/assets/Oskar_Farger_No_Background.png';
    const portraitPath1 = '/assets/portrait_path_vector_1.svg';
    const portraitPath2 = '/assets/portrait_path_vector_2.svg';
</script>

<section>
    <div class="backdrop">
        <div class="text-container">
            <p>Hello world, my name is:</p>
                <h1 class="pageTitle">Oskar Heming Jenssen</h1>
            <p>I am a webdeveloper with a passion for creating a unique value for people through stunning UIs and UX.</p>
        </div>
        <div class="portrait-container">
            <img src={pictureOfMe} alt="Oskar Jenssen" class="portrait">
                    <img src="{portraitPath1}" class="portrait-path" id="path1" alt="graphics">
                    <img src="{portraitPath2}" class="portrait-path" id="path2" alt="graphics">
        </div>
    </div>
</section>

<style lang="postcss">
    section {
        .backdrop {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            border-bottom: 1px solid gray;
            padding: 16px;
        }
    }

    .text-container {
        width: 300px;
        color: var(--bananaYellow);
    }

    .pageTitle {
        color: var(--coolOrange);
        font-size: 24px;
    }

    .portrait-container {
        width: 350px;
        display: flex;
        position: relative;

        .portrait {
            width: 100%;
            z-index: 2;
        }

        .portrait-path {
            width: 300px;
            position: absolute;
            z-index: 1;
            left: 20px;
            top: 140px;
        }

        #path1 {
            animation: rotate-clockwise-animation 25s infinite linear;
        }

        #path2 {
            animation: rotate-anti-clockwise-animation 25s infinite linear;
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
</style>