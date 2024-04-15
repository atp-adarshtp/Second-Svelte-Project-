<script>
    // Importing necessary stores
    import globalStore from "../../stores/globalStore";
    import cart from "../../stores/cart";

    // Using a reactive statement to calculate the total number of items in the cart
    $: total = $cart.reduce((acc, curr) => {
        return (acc += curr.amount);
    }, 0);
</script>

<!-- Cart Toggle Button -->
<div class="btn-cart-container">
    <button
        class="btn-cart-toggle"
        on:click={() => {
            globalStore.toggleItem("cart", true); // Toggles the visibility of the cart
        }}
    >
        <i class="fas fa-cart-plus"></i> <!-- Icon for the cart -->
    </button>
    <!-- Displaying the total number of items in the cart -->
    <span class="btn-cart-items">{total}</span>
</div>
