<script>
    export let title;
    export let subtitle;
</script>

<style>
    div {
        padding: 32px 16px;
    }
    h1 {
        display: block;
        /* background-image: url("https://images.unsplash.com/photo-1601662528567-526cd06f6582?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGFwZXIlMjB0ZXh0dXJlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"); */
        /* box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px; */
        font-size: 72px;
        width: 100%;
        /* text-align: center; */
        margin-bottom: 0;
        /* margin-bottom: 32px; */
        /* padding: 16px 16px 0; */
    }

    h3 {
        /* padding: 0 16px 16px; */
    }
    
    h1, h3 {
        font-family: 'Oooh Baby', cursive;
        margin: 0;
    }
    </style>
<div>
    <h1>{title}</h1>
    {#if subtitle}
        <h3>{subtitle}</h3>
    {/if}
</div>