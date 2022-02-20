<script>
    import { onMount } from 'svelte';
    import { imageUrl } from '../utils'

    export let images;
    export let allowArrows;

    let Carousel; // for saving Carousel component class
    let carousel; // for calling methods of the carousel instance
    onMount(async () => {
        const module = await import('svelte-carousel');
        Carousel = module.default;
    });

    $: outerWidth = 0;
    $: allowArrows = outerWidth > 768
</script>

<style>
    img {
        /* max-height: 500px; */
        max-width: 100%;
    }
</style>

<svelte:window bind:outerWidth />

<div>
    <svelte:component
       this={Carousel}
       bind:this={carousel}
       particlesToShow={1}
       particlesToScroll={1}
       arrows={allowArrows}
   >
       {#each images as image}
       <div class="image">
           <img class="image" src={imageUrl(image).height(800).format('webp').url()} />
       </div>
       {/each}
   </svelte:component>
</div>