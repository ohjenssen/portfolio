<script>
    import portraitPath from '$lib/assets/oskar_portrett_path.svg'
    import portrait from '$lib/assets/oskar_portrett.png';
    import defaultProjectImageDesktop from '$lib/assets/projects/holidaze/holidaze_front.png';
    import defaultProjectImageMobile from '$lib/assets/projects/holidaze/holidaze_front_mobile.png';
    import sectionPath from '$lib/assets/sectionPath.svg';
    import logo from '$lib/assets/oskarLogo_black.png';
    import githubIcon from '$lib/assets/icons/github.svg';
    import footerTop from '$lib/assets/footer_top.svg';
    import linkedInIcon from '$lib/assets/icons/linkedin.svg';

    let isActive = $state(false);
	function handleNav() {
		isActive = !isActive;
	}
</script>

<svelte:head>
    <title>Oskar Jenssen | Portfolio</title>
	<meta charset="utf-8">
    <meta name="robots" content="All">
	<meta name="author" content="Udgiver">
	<meta name="copyright" content="Information om copyright">
</svelte:head>

    <header>
        <div class="nav-container">
            <a href="index.html"><img class="oskar-logo" src="{logo}" alt="Oskars portfolio logo"></a>
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

    <main>
        <section id="hero-section">

            <div class="hero">
                <div class="text">
                    <p class="curlyBracket">&#123;</p>
                    <div class="hero-text-container">
                        <p class="hero-text">Hello world, my name is:</p>
                        <h1 class="pageTitle">Oskar Heming Jenssen</h1>
                    </div>
                    <p class="curlyBracket">&#125;</p>
                </div>
                <div class="portrait-image-container">
                    <img src="{portrait}" class="portrait" alt="Portrettbilde av Oskar">
                    <img src="{portraitPath}" class="portrait-path" alt="graphics">
                </div>
            </div>

        </section>
        <div class="section-seperation">
            <img src="{sectionPath}" class="section-seperation-path" alt="Section path">
        </div>
        <section id="projects" class="mt-4">
            <h2>Projects</h2>
            <div class="projectSlider">
                        <div class="singleProject">
                            <div class="singleProjectImgContainer">
                                <img class="singleProjectImg" src="">
                            </div>
                        </div>

            </div>

            <div class="projectContainer">
                <h2 class="projectTitle">Holidaze</h2>
                <div class="projectContainerImages">
                    <div class="projectImageDesktopContainer">
                        <img class="projectImageDesktop" src="{defaultProjectImageDesktop}" alt="Project display for desktop">
                    </div>
                    <div class="projectImageMobileContainer">
                        <img class="projectImageMobile" src="{defaultProjectImageMobile}" alt="Project display for mobile">
                    </div>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut purus commodo, ultrices erat nec, dictum justo. Phasellus quis nulla pharetra, convallis libero et, iaculis arcu. Duis tempor dolor et purus venenatis, id euismod dolor tempor. Praesent in est et massa interdum tincidunt ac eget nisl.</p>
                <div class="projectBtnContainer">
                    <button class="customBtn"><img src="{githubIcon}" alt="Github icon" class="github">Github</button>
                    <button class="customBtn">Go to page</button>
                </div>
            </div>
        </section>
        
    </main>

   <footer>
        <div class="footer-top">
            <img src="{footerTop}" class="footerImg" alt="Footer path">
        </div>
        <div class="footer-body">
            <h2>Currently based in Copenhagen</h2>
        </div>
        <div class="footer-footer">
            <div class="soMeContainer">
                <a href="https://www.linkedin.com/in/oskar-heming-jenssen/"><img src="{linkedInIcon}" alt="LinkedIn icon" class="footerIcons"></a>
                <a href="https://github.com/ohjenssen"><img src="{githubIcon}" alt="Github icon" class="footerIcons"></a>
            </div>
            <div class="eMailContainer">
                <a href="mailto:oskar_jenssen@hotmail.com">oskar_jenssen@hotmail.com</a>
            </div>
        </div>
   </footer>

<style lang="postcss">
/* @import "./partials/header"; */
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css");
@import url("https://use.typekit.net/iqh7wdu.css");

/* Color variables */
:root {
    --customBlack: #1a1b1d;
    --coolOrange: #DE935E;
    --bananaYellow: #FFCE21;
    --wineRed: #CC6666;
    --limeGreen: #B5BD68;
}
/* -------Header---------- */

.oskar-logo {
    width: 100px;
    margin: 16px 0px 16px 16px;
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
    background-color: #FFCE21;
}

.desktop-nav {
    margin-left: auto;
    margin-right: 16px;
    display: none;
}


.desktop-nav a{
    text-decoration: none;
    margin: 0px 10px 0px 10px;
    color: #FFCE21;
}

.is-scrolling {
    background-color: #162A51;
    transition: 0.4s;
    margin: 0;
    padding: 0;

    .desktop-nav a {
        color: #FFCE21;
    }
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
            color: #162A51;
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

.customBtn {
    color: var(--customBlack);
    background-color: var(--bananaYellow);
    padding: 10px 50px 10px 50px;
    border: none;
    margin-top: 16px;
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

.hero {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin: 16px;
    margin-top: 64px;
}

.curlyBracket {
    font-size: 42px;
    color: var(--bananaYellow);
}

.pageTitle {
    color: var(--coolOrange);
    font-size: 24px;
}

.hero-text-container {
    margin-left: 40px;
}

.hero-text {
    color: var(--bananaYellow);
    margin-bottom: 0px;
}

.hero-text2 {
    width: 350px;
    color: white;
}

.hero-text3 {
    font-size: 16px;
    width: 350px;
}

.slogan {
    margin-top: 30px;
    margin-bottom: 30px;
    width: 200px;
}

/* -------------------------------- Portrait -------------------------------- */
.portrait-image-container {
    position: relative;

    .portrait {
        width: 350px;
    }
    
    .portrait-path {
        width: 350px;
        position: absolute;
        z-index: -1;
        left: 10px;
        top: 10px;
    }
}

/* -------------------------------------------------------------------------------- */

.contact-icons-container {
    display: flex;
    align-items: center;
    width: 300px;
    font-size: 18px;

    p {
        padding: 0;
        margin: 0;
    }

    .contact-icons {
        display: flex;
        align-items: center;
        margin-right: 15px;
    }

    .custom-link {
        color: var(--bananaYellow);
    }
} 

/* ---------------------- Seksjon separasjon --------------------------------- */

.section-seperation {
    width: 100%;
    
    .section-seperation-path {
        width: 100%;
    }
}

#projects {
    margin: 16px;
}


/* --------------------------------- SLIDER -------------------------------------------- */
.projectSlider {
    width: 100%;
    padding: 0px 16px;
    display: flex;
    overflow: scroll;

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

/* ------------------------------- Prosjekt Container --------------------------------- */
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
    }

    .projectBtnContainer {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
}

/* ------------------------------- Footer --------------------------------- */

footer {
    /* background-color: $bananaYellow; */

    .footer-top{
        width: 100%;
        position: relative;
        top: 10px;

        .footerImg {
            width: 100%;
        }
    }

    .footer-body {
        padding-top: 16px;
        background-color: #EDBF1D;
        display: flex;
        justify-content: center;
        h2 {
            color: var(--customBlack);
            font-size: 16px;
            font-weight: 600;
        }
    }

    .footer-footer {
        color: var(--customBlack);
        background-color: #EDBF1D;
        padding: 64px 32px 32px 32px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .footerIcons {
            width: 25px;
        }

        a {
            color: var(--customBlack);
            text-decoration: none;
            font-weight: 600;
            font-size: 12px;
        }
    }
}

@media(min-width: 500px){
    .hero-text2 {
        width: 400px;
    }

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

    .footer-body {
        h2 {
            font-size: 24px !important;
        }

    }

    .footer-footer {
        a {
            font-size: 16px !important;
        }
    }

    
}

@media(min-width: 768px){
    .navigation-link {
        font-size: 16px;
    }
    
    .hero {
        justify-content: space-between;
        margin: 32px;
        margin-top: 64px
    }

    .hero-text2 {
        width: 350px;
    }

    #projects {
        margin: 32px;
    }

    .portrait-image-container {
        .portrait, .portrait-path { 
            width: 350px;
        }

    }
}

@media(min-width: 1000px){
    .hero {
        margin: 64px;
        margin-top: 115px;
    }

    .hero-text2 {
        width: 400px;
    }

    .contact-icons-container {
        font-size: 24px;
    }

    #projects {
        margin: 64px;
    }

    .portrait-image-container {
        .portrait, .portrait-path { 
            margin-top: 32px;
            width: 450px;
        }

    }

}

@media(min-width: 1200px){
    .hero-text2 {
        width: 600px;
    }
}
</style>