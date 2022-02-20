<script>
    import { imageUrl } from '../utils'
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

    /* This isn't working. not important  */
/* 
    .fixing {
        display: block;
        position: absolute;
        width: 70px; 
        height: 70px; 
        overflow: hidden;
    }
    
    .fixing:first-child {
        right: -5px;
        top: -5px;
    }

    .fixing:last-child {
        transform: rotate(-90deg);
        left: -5px;
        top: -5px;
    } 

    .fixing:nth-child(1) {
        transform: rotate(-180deg);
        left: -5px;
        bottom: -5px;
    }
    .fixing::after {
        display: block;
        content: "";
        background-image: url("https://www.photos-public-domain.com/wp-content/uploads/2011/03/charcoal-gray-parchment-paper-texture.jpg");
        background-size: 100%;
        box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
        width: 100%;
        height: 100%;
        transform: rotate(45deg);
        position: relative;
        top: -35px;
        right: -35px;
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
    <img src={imageUrl(image).size(1000, 750).format('webp').url()} alt="Trip" />
    <div class="info">
        <h2>{title}</h2>
        <span>{dateText}</span>
    </div>
    <!-- <PortableText blocks={body} /> -->
    <div class="fixing"></div>
    <div class="fixing"></div>
    <div class="fixing"></div>
    <div class="fixing"></div>
</a>
