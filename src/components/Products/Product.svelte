<script>
    import { link } from "svelte-routing";

    // Define the props that this component receives
    export let product;

    // Destructure the properties from the product object
    const { title, image, price, id } = product;
</script>

<article class="product">
    <div class="img-container">
        <img src={image} alt={title} />
        <a href={`/product/${id}`} class="btn btn-primary product-link" use:link
            >details</a
        >
    </div>
    <div class="product-footer">
        <p class="product-title">{title}</p>
        <p class="product-price">${price}</p>
    </div>
</article>
