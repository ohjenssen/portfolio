<script>
    const svgPath1 = '/assets/vector_path_1.svg';
    const svgPath2 = '/assets/vector_path_2.svg';
</script>

        <section id="hero-section">

        <div class="moving-line-container">
            <img src={svgPath1} alt="graphics" class="moving-line line1">
        </div>
        <div class="moving-line-container">
            <img src={svgPath2} alt="graphics" class="moving-line line2">
        </div>

        </section>

<style lang="postcss">

   
    .moving-line-container {
        width: 100vw;
        height: 10px;
        overflow: hidden;
        position: relative;
        margin: 32px 0;
    }
    .moving-line {
        position: absolute;
        top: 0;
        left: 0;
        min-width: 200vw; /* Make the line much longer than the viewport */
        height: 100%;
        will-change: transform;
    }
    .line1 {
        animation: move-line-left-right 12s ease-in-out infinite alternate;
    }
    .line2 {
        animation: move-line-right-left 12s ease-in-out infinite alternate;
    }
    @keyframes move-line-left-right {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50vw); }
    }
    @keyframes move-line-right-left {
        0% { transform: translateX(-50vw); }
        100% { transform: translateX(0); }
    }
</style>