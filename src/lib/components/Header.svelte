<script lang="ts">
    import { onMount } from "svelte";
    import MobileNav from "./Navigations/MobileNav.svelte";
    import DesktopNav from "./Navigations/DesktopNav.svelte";
    import type { Navigation } from "$lib/types/navigation";
    
    let navigation: Navigation | null = null;

    onMount(async() => {
        const res = await fetch('/data/navigation.json');
        const data = await res.json();
        navigation = data[0];
        console.log('Header: ', navigation);
    })
</script>

<header>
    <MobileNav {navigation}/>
    <DesktopNav {navigation}/>
</header>

<style lang="postcss">
    header {
        width: 100%;
    }
</style>