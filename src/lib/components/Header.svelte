<script>
    const logo = '/assets/oskar_logo_yellow.svg';
    let isActive = $state(false);

        function handleNav() {
        isActive = !isActive;
    }
</script>

    <header>
        <div class="nav-container">
            <a href="#"><img class="oskar-logo" src="{logo}" alt="Oskars portfolio logo"></a>
            <nav class="desktop-nav">
                <a class="navigation-link" href="#projects">Projects</a>
                <a class="navigation-link" href="#skills">Skills</a>
                <a class="navigation-link" href="#contact">Contact</a>
            </nav>
            <button class="hamburger" aria-label="hamburger-menu"  onclick={handleNav}>
                <div class="bar" class:is-active={isActive}></div>
            </button>
        </div>
        <nav class="mobile-nav" class:is-active={isActive}>
            <a href="index.html">Hjem</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
        </nav>
    </header>

<style>
    .oskar-logo {
        width: 100px;
        margin: 16px 0px 16px 16px;
        display: flex;
    }

    .nav-container {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 99;
        display: flex;
        align-items: center;
        width: 100%;
        box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
        background-color: var(--customBlack);
    }

    .desktop-nav {
        margin-left: auto;
        margin-right: 16px;
        display: none;
    }


    .navigation-link{
        text-decoration: none;
        margin: 0px 10px 0px 10px;
        color: #FFCE21;
    }

    .is-scrolling {
        background-color: #162A51;
        transition: 0.4s;
        margin: 0;
        padding: 0;
    }

    .desktop-nav a:hover{
        text-decoration: underline;
    }

    .hamburger {
        position: relative;
        display: block;
        width: 60px;
        cursor: pointer;
        appearance: none;
        background: none;
        outline: none;
        border: none;
        margin: 0px 16px 0px auto;
    }

    .hamburger .bar, .hamburger:after, .hamburger:before {
        content: '';
        display: block;
        width: 100%;
        height: 3px;
        background-color: var(--customBlack);
        margin: 6px 0px;
        transition: 0.4s;
        border-radius: 2px 2px 2px 2px;
    }

    .hamburger.is-active:before {
        transform: rotate(-45deg) translate(-6px, 6px);
    }

    .hamburger.is-active .bar {
        opacity: 0;
    }

    .hamburger.is-active:after {
        transform: rotate(45deg) translate(-6px, -7px);
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

    .mobile-nav a:hover{
        background-color: #284b93;
    }

    @media (min-width: 768px){
        .mobile-nav {
            display: none;
        }

        .hamburger {
            display: none;
        }

        .desktop-nav {
            display: flex;
            margin-right: 32px;
            a {
                font-size: 12px;
            }
        }

        .hamburger {
            margin-right: 32px;
        }

        .oskar-logo {
            margin-left: 32px;
        }
    }

    @media(min-width: 1000px){
        .oskar-logo {
            margin-left: 64px;
        }

        .desktop-nav {
            margin-right: 64px;
            a {
                font-size: 16px;
            }
        }
    }

    @media(min-width: 1200px){
        .desktop-nav a {
            margin: 0px 15px 0px 15px;
        }
    }
</style>