<script context="module">
    export async function load({ params, fetch, session, stuff }) {
        const posts = await (await fetch(`https://5etxyr2d.api.sanity.io/v2021-06-07/data/query/production?query=*[_type == 'post']{..., categories[]->, author->, "image": mainImage.asset->}`)).json()
    
        return {
            props: {
                posts: posts.result
            }
        }
    }
</script>

<script>
    import TripCard from '../components/TripCard.svelte'
    import TitleCard from '../components/TitleCard.svelte';
    export let posts;
    console.log(posts)
</script>

<style>
    .cards {
        display: grid;
        grid-template-columns: repeat( auto-fit, minmax(343px, 1fr ) );
        gap: 32px;
        width: 100%;
        justify-items: center;

    }
</style>

<TitleCard title="Team Stubborn Travel Journal" />
<div class="content">
    <div class="cards">
        {#each posts as post}
        <TripCard {...post} />
        {/each}
    </div>
</div>

