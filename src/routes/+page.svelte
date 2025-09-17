<script lang="ts">
    import { onMount } from 'svelte';
    import type { Project } from '$lib';
    import Carousel from '$lib/components/Carousel.svelte';
    import Header from '$lib/components/Header.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import Typewriter from '$lib/components/Typewriter.svelte';
    import MeSection from '$lib/components/MeSection.svelte';


    let projects = $state<Project[]>([]);

    onMount(async () => {
        try {
            const response = await fetch('/data/projects.json');
            projects = await response.json();

        } catch (error) {
            console.error('Failed to load projects: ', error)
        }
    });
</script>

<svelte:head>
    <title>Oskar Jenssen | Portfolio</title>
	<meta charset="utf-8">
    <meta name="robots" content="All">
	<meta name="author" content="Udgiver">
	<meta name="copyright" content="Information om copyright">
</svelte:head>

    <Header />

    <main>
        <Typewriter />
        <MeSection />

        <section id="projects">
            <h2>Projects</h2>
            <Carousel {projects} />

        </section>
        
    </main>

    <Footer />

<style lang="postcss">
    @import url("https://use.typekit.net/iqh7wdu.css");

/* Color variables */
    :root {
        --customBlack: #1a1b1d;
        --coolOrange: #DE935E;
        --bananaYellow: #FFCE21;
        --bananaYellowHover: #ffe586;
        --wineRed: #CC6666;
        --limeGreen: #B5BD68;
        --maxWidth: 1100px;
        --paddingXXL: 350px;
        --paddingXL: 128px;
        --paddingMedium: 64px;
        --paddingMediumSmall: 24px;
        --paddingSmall: 16px;
    }

/* ----------------------- */
    :global(body) { 
        background-color: var(--customBlack);
        font-family: 'source-code-pro';
        margin: 0px;
        padding: 0px;
    }

    i {
        color: var(--bananaYellow);
    }

    p, h1, h2, h3, a {
        color: white;
        font-family: 'source-code-pro';
    }

    #projects {
        padding: var(--paddingSmall);
    }

/* --------------------------------- SLIDER -------------------------------------------- */
    .projectSlider {
        width: 100%;
        padding: 0px 16px;
        display: flex;
        overflow: scroll;
        background-color: white;

        .singleProject {
            .singleProjectImgContainer {
                background-color: rgb(235, 235, 235);
                width: 150px;
                height: 96px;
                margin: 0px 8px 0px 8px;

                -webkit-mask-image: url('../images/projectClipPath.svg'); /* For WebKit browsers */
                mask-image: url('../images/projectClipPath.svg'); /* Standard */
                -webkit-mask-size: cover;
                mask-size: cover;
                -webkit-mask-position: center;
                mask-position: center;
                -webkit-mask-repeat: no-repeat;
                mask-repeat: no-repeat;

                .singleProjectImg {
                    width: 100%;
                    object-fit: contain;
                }
            }
        }
    }

/* ------------------------------- Footer --------------------------------- */

    @media(min-width: 700px){
        #projects {
            padding: var(--paddingMedium);
        }

    }

    @media(min-width: 900px){

        #projects {
            padding-right: var(--paddingXL);
            padding-left: var(--paddingXL);
        }
    }

    @media(min-width: 1450px){
        #projects {
            padding-right: var(--paddingXXL);
            padding-left: var(--paddingXXL);
        }
    }

</style>