<script>
    const footerTop = '/assets/footer_top.svg';
    const githubIcon = '/assets/icons/github.svg';
    const linkedInIcon = '/assets/icons/linkedin.svg';
</script>

<footer>
    <div class="footer-top">
        <img src={footerTop} class="footerImg" alt="Footer path">
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
        footer {
        /* background-color: $bananaYellow; */
        margin-top: 100px;

        .footer-top{
            width: 100%;
            position: relative;
            top: 10px;
            display: flex; 
            justify-content: center;

            .footerImg {
                width: 60%;
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
</style>