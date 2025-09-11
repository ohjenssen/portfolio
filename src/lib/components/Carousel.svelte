<script lang="ts">
    import { onMount } from 'svelte';
    import emblaCarouselSvelte from 'embla-carousel-svelte';
    import type { EmblaOptionsType, EmblaCarouselType } from 'embla-carousel';
    import Fade from 'embla-carousel-fade';
    import type { Project } from '$lib';
    interface Props {
        projects: Project[];
    }
    
    let { projects }: Props = $props();
    const githubIcon = '/assets/icons/github.svg';

    
    let emblaApiMain: EmblaCarouselType;
    const options: EmblaOptionsType = { loop: false };
    const plugins = [Fade()];

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

<div class="embla-container">
    <div class="embla" use:emblaCarouselSvelte="{{ options, plugins }}" onemblaInit="{onMainCarouselInit}">
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
            justify-content: space-between;

            .projectImageDesktopContainer {
                height: 300px;

                .projectImageDesktop {
                    /* width: 100%; */
                    height: 100%;
                    object-fit: contain;
                    border-radius: 20px;
                }
            }

            .projectImageMobileContainer {
                margin-top: 16px;
                display: flex; 
                flex-direction: column;
                align-items: center;
                /* max-width: 300px;*/
                height: 300px;

                .projectImageMobile {
                    /* width: 50%; */
                    height: 100%;
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