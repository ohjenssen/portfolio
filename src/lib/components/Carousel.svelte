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


                    <div class="project-container">
                        <h2>{project.title}</h2>
                        <div class="project-info">
                            <div class="image-container">
                                <img class="desktop-image" src={project.desktopImage} alt={project.title}/>
                            </div>
                            <div class="project-details">
                                <div class="technologies">
                                    <p>Made with: </p>
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
                        </div>
                    </div>


                </div>    
            {/each}
        </div>
    </div>
</div>

<style lang='postcss'>
    p, h2, h3, a {
        color: white;
        font-family: 'source-code-pro';
    }

    .embla-container {
        display: flex;
        justify-content: center;
    }

    .embla {    
        overflow: hidden;  
        width: 100%;
    }  
    
    .embla__container {    
        display: flex;  
        width: 100%;
    }  
    
    .embla__slide {    
        flex: 0 0 100%;    
        min-width: 0;  
        display: flex;
        justify-content: center;
    }

    .project-container{
        h2 {
            color: var(--wineRed)
        }

        .project-info {
            display: flex;
            flex-direction: column;

            .project-details {
                width: 350px;

                .technologies {
                    display: flex;
                    flex-wrap: wrap;

                    .technology {
                        margin-left: 10px;
                        color: var(--coolOrange)
                    }
                }

                .button-container {
                    .button {
                        display: inline-block;
                        text-align: center;
                        background-color: var(--bananaYellow);
                        padding: 8px 16px;
                        width: 100px;
                        color: black;
                        text-decoration: none;
                        border-radius: 16px;

                        &:hover {
                            background-color: var(--bananaYellowHover);
                            transition: 0.3s;
                        }
                    }
                }
            }

            .image-container {
                width: 350px;

                .desktop-image {
                    width: 100%;
                }
            }
        }
    }

    @media(min-width: 700px){

        .project-container {
            width: 100%;

            .project-info {
                flex-direction: row;
                justify-content: center;
                align-items: center;
                flex-wrap: wrap;

                .project-details {
                    padding: 0px 16px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                }

                .image-container {
                    min-width: 500px;
                    padding: 0px 16px;
                    /* width: 500px; */
                }
            }
        }
    }



</style>