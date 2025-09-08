<script lang="ts">
    import { onMount } from 'svelte';

    let featureText: HTMLSpanElement | null = null;

    const carouselList = [
        { text: "Developer", color: "#ff0000" },
        { text: "Designer", color: "#ff0000" },
        { text: "Multimediadesigner", color: "#ff0000" },
        { text: "Oskar", color: "#ff0000" },
    ];

    let currentColor = carouselList[0].color;
    let currentText = "";

    function waitFor(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function typeSentence(sentence: string) {
        let letters = sentence.split("");
        currentText = "";
        for (const letter of letters) {
            currentText += letter;
            await waitFor(100);
        }
    }

    async function deleteSentence() {
        while (currentText.length > 0) {
            currentText = currentText.slice(0, -1);
            await waitFor(100);
        }
    }

    async function typewriter() {
        let i = 0;
        while (true) {
            currentColor = carouselList[i].color;
            await typeSentence(carouselList[i].text);
            await waitFor(1500);
            await deleteSentence();
            i = (i + 1) % carouselList.length;
        }
    }

    onMount(() => {
        typewriter();
    });
</script>

<section>
    <div class="container">
        <span class="pre-text">Hello, I am</span>
        <div>
            <span id="featureText" bind:this={featureText} style="color: {currentColor}">{currentText}</span>
            <span class="inputCursor"></span>
        </div>
    </div>
</section>

<style lang="postcss">
    section {
        margin-top: 64px;
        display: flex;
        justify-content: center;
        height: 90vh;
    }

    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .pre-text {
        color: var(--bananaYellow);
    }

    #featureText {
        font-size: 50px;
    }

    .inputCursor {
        display: inline-block;
        width: 2px;
        height: 35px;
        margin-left: 4px;
        background: white;
        animation: blink .6s linear infinite alternate;
    }

    @keyframes blink {
        from { opacity: 1; }
        to { opacity: 0; }
    }
</style>