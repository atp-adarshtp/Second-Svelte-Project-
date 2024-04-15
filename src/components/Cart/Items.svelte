<script>
    // Exported props
    export let id;
    export let image;
    export let title;
    export let price;
    export let amount;

    // Importing cart methods from the cart store
    import {
        removeItem,
        increaseAmount,
        decreaseAmount,
    } from "../../stores/cart";
</script>

<!-- Cart Item -->
<div class="cart-item">
    <!-- Item Image -->
    <img src={image} alt={title} />

    <!-- Item Details -->
    <div>
        <!-- Item Title -->
        <h4>{title}</h4>
        
        <!-- Item Price -->
        <h5>${price}</h5>
        
        <!-- Remove Button -->
        <button
            class="cart-btn remove-btn"
            on:click={() => {
                removeItem(id); // Removes the item from the cart
            }}
        >
            remove
        </button>
    </div>

    <!-- Item Quantity Controls -->
    <div>
        <!-- Increase Quantity Button -->
        <button
            class="cart-btn amount-btn"
            on:click={() => {
                increaseAmount(id); // Increases the quantity of the item in the cart
            }}
        >
            <i class="fas fa-chevron-up" />
        </button>

        <!-- Item Amount (Quantity) -->
        <p class="item-amount">{amount}</p>

        <!-- Decrease Quantity Button -->
        <button
            class="cart-btn amount-btn"
            on:click={() => {
                decreaseAmount(id, amount); // Decreases the quantity of the item in the cart
            }}
        >
            <i class="fas fa-chevron-down" />
        </button>
    </div>
</div>
