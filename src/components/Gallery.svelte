<script>
      import { onMount } from 'svelte';
      import { imageUrl } from '../utils'

    export let images;


    let Carousel; // for saving Carousel component class
    let carousel; // for calling methods of the carousel instance
    onMount(async () => {
        const module = await import('svelte-carousel');
        Carousel = module.default;
    });
</script>

<style>
    img {
        width: 100%;
    }
</style>

 <svelte:component
    this={Carousel}
    bind:this={carousel}
    particlesToShow={1}
    particlesToScroll={1}
>
    {#each images as image}
    <div class="image">
        <img class="image" src={imageUrl(image).format('webp').url()} />
    </div>
    {/each}
</svelte:component>