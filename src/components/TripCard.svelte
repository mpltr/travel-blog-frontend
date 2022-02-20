<script>
    import PortableText from '@portabletext/svelte'
    export let _id;
    export let title;
    export let body;
    export let image;
    export let dateText;
</script>

<style>
    a {
        box-sizing: border-box;
        display: block;
        box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
        width: 100%;
        max-width: 500px;
        padding: 12px;
        border-radius: 2px;
        font-family: 'Oooh Baby', cursive;
        text-decoration: none;
        color: black;
        position: relative;
    }

    /* a:before {
        display: block;
        position: absolute;
        content: "";
        width: 80px;
        height: 30px;
        background-image: url("https://media.istockphoto.com/photos/white-texture-watercolor-paper-picture-id621348814?k=20&m=621348814&s=612x612&w=0&h=QzF9acWvKNK6i5coOBMe_M8nMab6Uc-vOuF-grxG2z0=");
        transform: rotate(45deg);
        box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
        right: -30px;
        top: -2px;
    }

    a:after {
        display: block;
        position: absolute;
        content: "";
        width: 80px;
        height: 30px;
        background-image: url("https://media.istockphoto.com/photos/white-texture-watercolor-paper-picture-id621348814?k=20&m=621348814&s=612x612&w=0&h=QzF9acWvKNK6i5coOBMe_M8nMab6Uc-vOuF-grxG2z0=");
        transform: rotate(225deg);
        box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
        left: -25px;
        bottom: -0px;
    } */

    h2 {
        font-size: 32px;
        margin: 0;
        opacity: 0.7;
    }

    img {
        width: 100%;
    }

    .info {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        padding: 16px 8px 8px;
    }
    span {
        margin-left: auto;
        opacity: 0.7;
    }
</style>

<a href={`/${_id}`}>
    <img src={image} alt="Trip Image" />
    <div class="info">
        <h2>{title}</h2>
        <span>{dateText}</span>
    </div>
    <!-- <PortableText blocks={body} /> -->
</a>
