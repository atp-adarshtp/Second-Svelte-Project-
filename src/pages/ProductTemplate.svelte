<script>
    export let id;
    export const location = undefined; // Initialize location with a default value
    import { addToCart } from "../stores/cart";
    import products from "../stores/defaultProducts";
    import Loading from "../components/Loading.svelte";
    import { link } from "svelte-routing";
    // import globaleStore from "../stores/globalStore";
    $: product = $products.find((item) => item.id == parseInt(id));
</script>



<svelte:head>
    <title>{!product ? "single product" : product.title}</title>
</svelte:head>

{#if !product}
    <Loading />
{:else}
    <section class="single-product">
        <!-- back to products -->
        <a href="/Products" use:link class="btn btn-primary">back to products</a
        >
        <!-- single product container -->
        <div class="single-product-container">
            <article class="single-product-image">
                <img src={product.image} alt={product.title} />
            </article>
            <article>
                <h1>{product.title}</h1>
                <h2>${product.price}</h2>
                <p>{product.description}</p>
                <button
                    class="btn btn-primary btn-block"
                    on:click={() => {
                        addToCart(product)
                        console.log("add to cart");
                    }}
                >
                    add to cart
                </button>
            </article>
        </div>
    </section>
{/if}
<h1>Welcome to Product Template page with id:{id}</h1>
