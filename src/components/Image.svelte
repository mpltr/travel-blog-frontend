<script>
    export let portableText;
    let base = "https://cdn.sanity.io/images/5etxyr2d/production/"
    $: block = portableText.block
    $: src = block.asset.url
</script>

<style>
    .image {
        display: block;
        width: 100%;
    }
</style>

{#if src}
  <img class="image" src={src} />
{:else}
  {"Not working"}
{/if}
