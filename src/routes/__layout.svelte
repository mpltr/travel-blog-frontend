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

<div class="view">
    <slot></slot>
</div>
