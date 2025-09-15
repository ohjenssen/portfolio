<script lang="ts">
    import { onMount } from 'svelte';
    import emblaCarouselSvelte from 'embla-carousel-svelte';
    import type { EmblaOptionsType, EmblaCarouselType } from 'embla-carousel';
    import Fade from 'embla-carousel-fade';
    import type { Project } from '$lib';
    interface Props {
        projects: Project[];
    }

    let emblaApiThumb: EmblaCarouselType | undefined;
    
    let { projects }: Props = $props();
    let openAccordionIndex: number | null = $state(null);
    const githubIcon = '/assets/icons/github.svg';

    
    let emblaApiMain: EmblaCarouselType;
    const options: EmblaOptionsType = { loop: false };
    const plugins = [Fade()];

    function handleAccordion(idx: number){
        openAccordionIndex = openAccordionIndex === idx ? null: idx;
    }

    function onMainCarouselInit(event: CustomEvent<EmblaCarouselType>) {
        emblaApiMain = event.detail;
    }

    onMount(async () => {
        try {
            const response = await fetch('/data/projects.json');
            projects = await response.json();
        } catch (error) {
            console.error('Failed to load projects: ', error)
        }
    });

</script>

<div class="embla-thumbs">
    <div
        class="embla-thumbs__viewport"
        use:emblaCarouselSvelte={{ options: { containScroll: 'keepSnaps', dragFree: true }, plugins: [] }}
        onemblaInit={e => emblaApiThumb = e.detail}
    >
        <div class="embla-thumbs__container">
            {#each projects as project, idx}
                <button
                    class="embla-thumbs__slide {emblaApiMain && emblaApiMain.selectedScrollSnap() === idx ? 'is-selected' : ''}"
                    type="button"
                    onclick={() => emblaApiMain && emblaApiMain.scrollTo(idx)}
                >
                    <img src={project.projectLogo} alt={project.title} />
                </button>
            {/each}
        </div>
    </div>
</div>


<div class="embla-container">
    <div class="embla" use:emblaCarouselSvelte="{{ options, plugins }}" onemblaInit="{onMainCarouselInit}">
        <div class="embla__container">    
            {#each projects as project, idx}
                <div class="embla__slide">


                    <section class="image-text-section">
                        <div class="image-wrapper">
                            <img src={project.desktopImage} alt={project.title} />
                        </div>
                        <div class="text-wrapper">
                            <h2>{project.title}</h2>
                             <div class="technologies">
                                    <p class="made-with">Made with: </p>
                                    {#each project.technologies as technology}
                                        <p class="technology">{technology}</p>
                                    {/each}
                            </div>
                            <p>{project.description}</p>
                            <div class="button-container">
                                {#if project.githubUrl}
                                    <a class="button" href={project.githubUrl}>
                                        <img src={githubIcon} alt="githubIcion">
                                        Github
                                    </a>
                                {/if}
                                {#if project.liveUrl}
                                    <a class="button" href={project.liveUrl}>Livepage</a>
                                {/if}
                            </div>
                        </div>
                    </section>
                    <div class="accordion-btn-container">
                        <button class="accordion-btn" onclick={() => handleAccordion(idx)}>Read more +</button>
                    </div>
                    <div class="panel" style:max-height={openAccordionIndex === idx ? '200px': 0}>
                        <p>{project.expandedDescription}</p>
                    </div>

                </div>    
            {/each}
        </div>
    </div>
</div>

<style lang='postcss'>
    .embla-thumbs {
        margin-top: 24px;
        display: flex;
        justify-content: center;
    }

    .embla-thumbs__viewport {
        overflow: hidden;
        width: 100%;
    }

    .embla-thumbs__container {
        display: flex;
        gap: 12px;
    }

    .embla-thumbs__slide {
        border: none;
        background: none;
        padding: 0;
        cursor: pointer;
        border-radius: 8px;
        outline: 2px solid transparent;
        transition: outline-color 0.2s;
        background-color: gray;
        width: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .embla-thumbs__slide img {
        width: 80%;
        border-radius: 8px;
        display: block;
    }

    p, h2, h3, a {
        color: white;
        font-family: 'source-code-pro';
    }

    .embla-container {
        display: flex;
        justify-content: center;
        padding: 0px;
        margin-top: 8px;
    }

    .embla {    
        overflow: hidden;  
        /* width: 100%; */
    }  
    
    .embla__container {    
        display: flex;  
        width: 100%;
    }  
    
    .embla__slide {    
        flex: 0 0 100%;    
        min-width: 0;  
        /* display: flex;
        justify-content: center; */
    }

    .image-text-section {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: stretch;
        /* gap: 32px; */
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
        padding: 0px 0px;
    }

    .image-wrapper,
    .text-wrapper {
        flex: 1 1 300px;
        min-width: 0px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .text-wrapper {
        flex-direction: column;
        align-items: start;
    }

    .image-wrapper img {
        width: 100%;
        max-width: 100%;
        min-width: 300px;
        height: auto;
        display: block;
        border-radius: 12px;
        object-fit: cover;
    }

    .text-wrapper {
        font-size: 16px;
        box-sizing: border-box;
    }

    .technologies {
        display: flex;
        flex-wrap: wrap;

        p {
            margin: 0px;
            margin-right: 10px;
        }

        .made-with {
            padding: 0px var(--paddingSmall) 0px 0px;
            margin: 0px;
        }

        .technology {
            color: var(--coolOrange)
        }
    }

    .button-container {
        .button {
            display: inline-block;
            text-align: center;
            background-color: var(--bananaYellow);
            padding: 8px 16px;
            width: 85px;
            color: black;
            text-decoration: none;
            border-radius: 16px;

            &:hover {
                background-color: var(--bananaYellowHover);
                transition: 0.3s;
            }
        }
    }

    .accordion-btn-container {
        display: flex;
        justify-content: center;
        width: 100%;
        padding-top: var(--paddingMediumSmall)
    }

    .accordion-btn {
        color: white;
        background: transparent;
        cursor: pointer;
        padding: 18px;
        text-align: left;
        border: none;
        outline: none;
        transition: 0.4s;
    }

    .panel {
        color: white;
        padding: 0 18px;
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.5s ease-out;

        p {
            margin: 0px;
        }
    }

    @media (max-width: 800px) {
        .image-text-section {
            flex-direction: column;
            gap: 0px;
            padding: 16px 0;
        }
        .image-wrapper,
        .text-wrapper {
            min-width: 0;
            width: 100%;
            justify-content: center;
        }

        .text-wrapper { 
            justify-content: start;
        }

        .image-wrapper img {
            min-width: 0;
            width: 100%;
            max-width: 100%;
        }
    }

    @media (min-width: 800px){
        .image-text-section {
            gap: 24px;
        }
    }

</style>