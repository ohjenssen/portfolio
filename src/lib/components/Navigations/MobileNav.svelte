<script lang="ts">
    const logo = '/assets/oskar_logo_yellow.svg';
    let isActive = $state(false);
    function handleState(){
        isActive = !isActive;
    }

    let { navigation } = $props();
    console.log('MobileNavn: ', navigation)
</script>

<header>
    <div class="nav-container">
        <a href="#" class="logo-link">
            <div class="logo-container">
                <img src={logo} class="logo" alt="logo for Oskar Heming Jenssen">
            </div>
        </a>

        <div class="hamburger-container">
            <button class="hamburger" class:is-active={isActive} aria-label="hamburger-menu" onclick={handleState}>
                <div class="bar top"></div>
                <div class="bar middle"></div>
                <div class="bar bottom"></div>
            </button>
        </div>

    </div>
        {#if navigation}
            <div class="mobile-nav" class:is-active={isActive}>
                {#each navigation.items as navItems}
                    <a href={navItems.url} onclick={handleState}>{navItems.text}</a>
                {/each}
            </div>
        {/if}
</header>

<style lang="postcss">
    
    .nav-container {
        background-color: var(--customBlack);
        padding-top: var(--paddingSmall);
        padding-bottom: var(--paddingSmall);
        position: fixed;
        top: 0;
        width: 100vw;
        display: flex;
        justify-content: space-between;
        z-index: 99;
    }

    .logo-link {
        display: flex;
        align-items: center;
        padding-left: var(--paddingSmall);
        .logo-container {
            width: 100px;
            .logo {
                width: 100%;
            }
        }
    }

    .hamburger-container {
        padding-right: var(--paddingSmall);
    }

    .hamburger {
        display: block;
        width: 50px;
        cursor: pointer;
        appearance: none;
        background: none;
        outline: none;
        border: none;
        position: relative;
        height: 55px;
    }

    .bar {
        display: block;
        width: 100%;
        height: 3px;
        background-color: var(--bananaYellow);
        margin: 6px 0px;
        transition: 0.4s;
        border-radius: 2px;
        position: absolute;
        left: 0;
    }

    .bar.top {
        top: 8px;
    }

    .bar.middle {
        top: 18px;
    }

    .bar.bottom {
        top: 28px;
    }

    .hamburger.is-active .bar.top {
        transform: rotate(-45deg) translate(-7px, 7px);
    }

    .hamburger.is-active .bar.middle {
        opacity: 0;
    }

    .hamburger.is-active .bar.bottom {
        transform: rotate(45deg) translate(-7px, -7px);
    }

    .mobile-nav {
        position: fixed;
        top: 0;
        left: 100%;
        width: 100%;
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        z-index: 98;
        background-color: var(--customBlack);
        transition: 0.4s;
    }

    .mobile-nav.is-active {
        left: 0;
    }

    .mobile-nav a {
        display: block;
        width: 100%;
        max-width: 200px;
        margin: 0 auto 16px;
        text-align: center;
        padding: 12px 16px;
        background-color: #FFCE21;
        border-radius: 10px;
        color: #162A51;
        text-decoration: none;
        font-weight: bold;
        box-shadow: rgba(149, 157, 165, 0.3) 0px 8px 24px;
        
    }

    @media(min-width: 700px){
        .nav-container {
            display: none;
        }
    }
</style>