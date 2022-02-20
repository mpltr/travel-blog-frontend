<script>
    import Modal from 'svelte-simple-modal';
</script>

<style global>
    @import url('https://fonts.googleapis.com/css2?family=Oooh+Baby&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300&display=swap');
   :global(html, body) {
        width: 100%;
        height: 100%;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Nunito', sans-serif;
        font-size: 14px;
        /* background-image: url("https://media.istockphoto.com/photos/white-texture-watercolor-paper-picture-id621348814?k=20&m=621348814&s=612x612&w=0&h=QzF9acWvKNK6i5coOBMe_M8nMab6Uc-vOuF-grxG2z0="); */
    }
    :global(*) {
        box-sizing: inherit;
    }

    .view {
        display: block;
        width: 100%;
        max-width: 1032px;
        margin: 0 auto;
        padding: 0 16px;
    }
</style>
<Modal>
    <div class="view">
        <slot></slot>
    </div>
</Modal>
