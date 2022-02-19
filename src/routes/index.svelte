<script context="module">
    export async function load({ params, fetch, session, stuff }) {
        const posts = await (await fetch(`https://5etxyr2d.api.sanity.io/v2021-06-07/data/query/production?query=*[_type == 'post']{..., categories[]->, author->, "image": mainImage.asset->url}`)).json()
    
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
    import Id from './[id].svelte';


    // async function getPosts() {
    //      console.log(posts)
        
    //     if(posts) {
    //         return posts.result
    //     } else {
    //         throw new Error("something wrong");
    //     }

    // }
    export let posts;
    console.log(posts)
</script>

<style>
    .cards {
        display: grid;
        gap: 32px;
        width: 100%;
        max-width: 500px;
    }
</style>
<TitleCard title="Team Stubborn Travel Journal" />
        <div class="cards">
            {#each posts as post}
            <TripCard {...post} />
            {/each}
        </div>

