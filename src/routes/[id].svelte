<script context="module">
    export async function load({params, fetch}) {
        const post = await (await fetch(`https://5etxyr2d.api.sanity.io/v2021-06-07/data/query/production?query=*[_id == "${params.id}"][0]{..., categories[]->, author->, body[]{..., asset->{url}}}`)).json()

        return {
            props: {
                post: post.result
            }
        }
    }

</script>

<script>
    import TitleCard from '../components/TitleCard.svelte'
    import Image from '../components/Image.svelte'
    import Heading from '../components/Heading.svelte';
    import PortableText from '@portabletext/svelte'
   
    export let post;
</script>

<style>
    .column {
        max-width: 600px;
    }

    h2 {
        font-family: 'Oooh Baby', cursive;
    }
</style>

{#await post}
{:then post}
    <div class="column">
        <TitleCard title={post.title} />
        <PortableText blocks={post.body} 
            serializers={{
                types: {
                    image: Image
                },
                blockStyles: {
                    h2: Heading
                }
            }
        }/>
    </div>
    
{/await}