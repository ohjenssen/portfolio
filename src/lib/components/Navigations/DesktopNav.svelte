<script lang="ts">
    const logo = '/assets/oskar_logo_yellow.svg';   
    let { navigation } = $props();
    if(navigation){
        for (let i = 0; i < navigation.items.length; i++){
            console.log(navigation.items[i]);
            if(navigation.items[i].icon){
                console.log(navigation.items[i].icon);
            }
        }
    }
    
</script>
<div class="nav-container">
    <a href="#"><img class="oskar-logo" src="{logo}" alt="Oskars portfolio logo"></a>
    {#if navigation}
        <nav class="desktop-nav">
            {#each navigation.items as navItem}
                {#if navItem.icon}
                    <a class="navigation-link icon" href="{navItem.url}" aria-label="link"><img alt="{navItem.text}" src={navItem.icon}></a>
                {:else}
                    <a class="navigation-link" href="{navItem.url}">{navItem.text}</a>
                {/if}
            {/each}
        </nav>
    {/if}
</div>

<style lang="postcss">
    
    .oskar-logo {
        width: 100px;
        display: flex;
        padding-left: var(--paddingMedium);
    }

    .nav-container {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 99;
        display: none;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
        background-color: var(--customBlack);
        padding-top: var(--paddingMediumSmall);
        padding-bottom: var(--paddingMediumSmall);
    }
    
    .desktop-nav {
        padding-right: var(--paddingMedium);
    }

    .navigation-link {
        text-decoration: none;
        margin: 0px 10px 0px 10px;
        color: #FFCE21;
    }

    .navigation-link:hover {
        color: red;
    }

    .icon {
        background-color: var(--bananaYellow);
        padding: 0px 4px;
        border-radius: 10%;
        img {
            vertical-align: middle;
        }
    }

    @media(min-width: 700px){
        .nav-container {
            display: flex;
        }
    }

    @media(min-width: 900px){
        .oskar-logo {
            padding-left: var(--paddingXL);
        }

        .desktop-nav {
            padding-right: var(--paddingXL);
        }
    }

</style>