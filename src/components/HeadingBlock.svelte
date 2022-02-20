<script lang="ts">  
    export let portableText;

    $: block = portableText.block
  
    $: style = block.style
    $: anchorId = `heading-${block._key}`
</script>

<style>
    h2 {
        font-family: 'Oooh Baby', cursive;

    }
</style>
  
<h2><slot /></h2>
     