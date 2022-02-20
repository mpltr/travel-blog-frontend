<script context="module">
    export async function load({params, fetch}) {
        const post = await (await fetch(`https://5etxyr2d.api.sanity.io/v2021-06-07/data/query/production?query=*[_id == "${params.id}"][0]{..., categories[]->, author->, body[]{..., asset->{url}}, sections[]{..., images[]{..., asset->}}}`)).json()

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
    import { imageUrl } from '../utils'

    let Carousel; // for saving Carousel component class
    let carousel; // for calling methods of the carousel instance
    onMount(async () => {
        const module = await import('svelte-carousel');
        Carousel = module.default;
    });
    export let post;

    $: clientWidth = 0;
    $: allowArrows = clientWidth > 768
    $: sections = post.sections
    $: particlesToShow = Math.floor((clientWidth - 60) / 305);
</script>

<style>
    .image {
        padding: 8px;
        width: 300px;
        min-width: 300px;
        max-width: 300px;
        height: 300px;
        text-align: center;
    }

    .image > img {
        width: 100%;
        height: auto;
    }
</style>

<TitleCard title={post.title} />

{#each sections as section}
    <div bind:clientWidth>
        <Heading title={section.title} />
        <p>{section.writeUp}</p>
       
        <svelte:component
            this={Carousel}
            bind:this={carousel}
            particlesToShow={particlesToShow}
            particlesToScroll={1}
            arrows={allowArrows && particlesToShow < section.images.length && section.images.length !== 1}
            dots={particlesToShow < section.images.length && section.images.length !== 1}
            swiping={particlesToShow < section.images.length && section.images.length !== 1}
        >
            {#each section.images as image}
            <div class="image">
                <img class="image" src={imageUrl(image).size(680, 680).format('webp').url()} />
            </div>
            {/each}
        </svelte:component>
    </div>
   
{/each}
