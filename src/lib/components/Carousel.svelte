<script lang="ts">
    import { onMount } from 'svelte';
    import type { Project } from '$lib';
    import emblaCarouselSvelte from 'embla-carousel-svelte';
    import type { EmblaOptionsType, EmblaCarouselType } from 'embla-carousel';
    import { addThumbBtnsClickHandlers, addToggleThumbBtnsActive } from '$lib/emblaCarouselThumbsButton';
        interface Props {
        projects: Project[];
    }
    
    let { projects }: Props = $props();

    const githubIcon = '/assets/icons/github.svg';
    let emblaApiMain: EmblaCarouselType;
    let emblaApiThumb: EmblaCarouselType;
    
    const options: EmblaOptionsType = { loop: false };
    
    const optionsThumbs: EmblaOptionsType = {
        containScroll: 'keepSnaps',
        dragFree: true
    };

    let isActive = $state(false);
    // let projects = $state<Project[]>([]);

    // Cleanup functions
    let removeThumbBtnsClickHandlers: (() => void) | null = null;
    let removeToggleThumbBtnsActive: (() => void) | null = null;

    function handleNav() {
        isActive = !isActive;
    }

    function onMainCarouselInit(event: CustomEvent<EmblaCarouselType>) {
        emblaApiMain = event.detail;
        setupCarouselHandlers();
    }

    function onThumbCarouselInit(event: CustomEvent<EmblaCarouselType>) {
        emblaApiThumb = event.detail;
        setupCarouselHandlers();
    }

    function setupCarouselHandlers() {
        if (emblaApiMain && emblaApiThumb) {
            // Clean up any existing handlers
            if (removeThumbBtnsClickHandlers) removeThumbBtnsClickHandlers();
            if (removeToggleThumbBtnsActive) removeToggleThumbBtnsActive();

            // Set up new handlers
            removeThumbBtnsClickHandlers = addThumbBtnsClickHandlers(emblaApiMain, emblaApiThumb);
            removeToggleThumbBtnsActive = addToggleThumbBtnsActive(emblaApiMain, emblaApiThumb);

            // Clean up on destroy
            emblaApiMain
                .on('destroy', () => {
                    if (removeThumbBtnsClickHandlers) removeThumbBtnsClickHandlers();
                    if (removeToggleThumbBtnsActive) removeToggleThumbBtnsActive();
                });
        }
    }

    onMount(async () => {
        try {
            const response = await fetch('/data/projects.json');
            projects = await response.json();
            console.log(projects);
        } catch (error) {
            console.error('Failed to load projects: ', error)
        }
    });
</script>

<div class="embla-container">
    <div class="embla" use:emblaCarouselSvelte="{{ options, plugins: [] }}" onemblaInit="{onMainCarouselInit}">

        <div class="embla__container">    
            {#each projects as project}
                <div class="embla__slide">
                    <div class="projectContainer">
                        <h2 class="projectTitle">{project.title}</h2>
                        <div class="projectContainerImages">
                            <div class="projectImageDesktopContainer">
                                <img class="projectImageDesktop" src={project.desktopImage} alt="Project display for desktop">
                            </div>
                            <div class="projectImageMobileContainer">
                                <img class="projectImageMobile" src={project.mobileImage} alt="Project display for mobile">
                            </div>
                        </div>
                        <p>{project.description}</p>
                        <div class="projectBtnContainer">
                            <a class="customBtn"><img src={githubIcon} alt="Github icon" class="github">Github</a>
                            <a class="customBtn">Go to page</a>
                        </div>
                    </div>
                </div>    
            {/each}
        </div>
    </div>
</div>

<style lang='postcss'>
    .embla-container {
        display: flex;
        justify-content: center;
    }

    .embla {    
        overflow: hidden;  
    }  
    
    .embla__container {    
        display: flex;  
        width: 100%;
    }  
    
    .embla__slide {    
        flex: 0 0 100%;    
        min-width: 0;  
    }

    .thumb-image {
        width: 100%;
        height: 100%;
        max-height: 100px;
        object-fit: cover;
        border-radius: 0.5rem;
    }

    .embla-thumbs__slide__number {
        overflow: hidden;
    }

    .customBtn {
        color: var(--customBlack);
        background-color: var(--bananaYellow);
        padding: 10px 50px 10px 50px;
        border: none;
        /* margin-top: 16px; */
        border-radius: 10px;
        .github {
            margin-right: 5px;
            width: 14px;
        }
    }


    .customBtn:hover {
        background-color: #4F57AA;
        border-radius: 0px;
        transition: 0.5s;
    }

    .projectContainer {
        margin-top: 32px;

        .projectContainerImages {
            display: flex; 
            flex-direction: column;
            margin-bottom: 16px;
            align-items: center;

            .projectImageDesktopContainer {

                .projectImageDesktop {
                    width: 100%;
                    object-fit: contain;
                    border-radius: 20px;
                }
            }

            .projectImageMobileContainer {
                margin-top: 16px;
                display: flex; 
                flex-direction: column;
                align-items: center;

                .projectImageMobile {
                    width: 50%;
                    object-fit: contain;
                    border-radius: 20px;
                }
            }
        }

        .projectTitle {
            margin-top: 16px;
            color: white;
        }

        .projectBtnContainer {
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        p {
            color: white;
        }
    }

    @media(min-width: 500px){ 
        .projectContainerImages {
            flex-direction: row !important;

            .projectImageDesktopContainer { 
                margin-right: 8px;
            }

            .projectImageMobileContainer {
                margin-left: 8px;
                margin-top: 0px !important;

                .projectImageMobile {
                    width: 100% !important;
                }
            }

        }

        .projectBtnContainer {
            display: block !important;
        }

        .projectBtnContainer {
            display: block !important;
        }
    }

</style>