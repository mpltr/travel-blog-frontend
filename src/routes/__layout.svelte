<script>
    import Modal from 'svelte-simple-modal';
</script>

<style global>
   @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@200&family=Oooh+Baby&display=swap');
   :global(html, body) {
        width: 100%;
        height: 100%;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Nunito Sans', sans-serif;
        font-size: 18px;
        background-image: url("https://images.unsplash.com/photo-1601662528567-526cd06f6582?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGFwZXIlMjB0ZXh0dXJlfGVufDB8fDB8fA%3D%3D&w=1000&q=80");
        background-repeat: repeat;
        background-size: auto;
        /* background-image: url("https://media.istockphoto.com/photos/white-texture-watercolor-paper-picture-id621348814?k=20&m=621348814&s=612x612&w=0&h=QzF9acWvKNK6i5coOBMe_M8nMab6Uc-vOuF-grxG2z0="); */
    }
    :global(*) {
        box-sizing: inherit;
        color: rgb(49, 49, 49);
    }

    .view {
        display: block;
        width: 100%;
        max-width: 1032px;
        margin: 0 auto;
        padding: 0 16px;
    }
</style>
<Modal
    styleWindowWrap={{ margin: 0 }}
>
    <div class="view">
        <slot></slot>
    </div>
</Modal>
