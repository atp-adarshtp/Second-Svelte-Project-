<script>
    import Item from "./Items.svelte";
    import cart from "../../stores/cart";
    import { fly } from "svelte/transition";
    import { flip } from "svelte/animate";
</script>

<section class="cart-items">
    <article>
        {#each $cart     as cartItems, index (cartItems.id)}
            <Item {...cartItems} />
        {:else}
            <h2 class="empty-cart">is currently empty...</h2>
        {/each}
    </article>
</section>
