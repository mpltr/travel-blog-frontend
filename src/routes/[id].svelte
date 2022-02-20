<script context="module">
    export async function load({params, fetch}) {
        const post = await (await fetch(`https://5etxyr2d.api.sanity.io/v2021-06-07/data/query/production?query=*[_id == "${params.id}"][0]{..., categories[]->, author->, body[]{..., asset->{url}}, sections[]{..., images[]{..., asset->{url}}}}`)).json()

        return {
            props: {
                post: post.result
            }
        }
    }

</script>

<script>
    import TitleCard from '../components/TitleCard.svelte'
    import Heading from '../components/Heading.svelte';
    import { onMount } from 'svelte';

    let Carousel; // for saving Carousel component class
    let carousel; // for calling methods of the carousel instance
    onMount(async () => {
        const module = await import('svelte-carousel');
        Carousel = module.default;
    });

    const handleNextClick = () => {
        carousel.goToNext()
    }
    

    export let post;
    $: sections = post.sections
</script>

<style>
    /* h2 {
        font-family: 'Oooh Baby', cursive;
    } */
    .image {
        /* height: 100px; */
        /* width: auto; */
    }
    .carousel {
        max-width: 500px;
        width: 100%;
        margin: 0 auto;
    }
</style>

<TitleCard title={post.title} />

{#each sections as section}
    <Heading title={section.title} />
    <p>{section.writeUp}</p>
    <div class="carousel">
        <svelte:component
            this={Carousel}
            bind:this={carousel}
            particlesToShow={1}
            particlesToScroll={1}
        >
            {#each section.images as image}
                <img class="image" src={image.asset.url} />
            {/each}
        </svelte:component>
    </div>
{/each}
