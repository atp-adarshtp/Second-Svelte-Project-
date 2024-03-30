<script>
    import CartButton from "../Cart/CartButton.svelte";
    import { link } from "svelte-routing";
    import links from "../../constants/links";
    // import { home } from "nodemon/lib/utils";
    // import Product from "../Products/Product.svelte";
</script>

<nav class="navbar">
    <div class="nav-container">
        <div class="nav.center">
            <!-- nav links -->
            <ul class="nav-links">
           {#each links as navLink}
            <li><a href="{navLink.url}" use:link>{navLink.text}</a></li>
           {/each}
        </ul>
            <!-- nav logo -->
            <a href="/" use:link class="nav-logo big-logo">
                <img
                    src="/assets/images/logo.svg"
                    class="logo"
                    alt="razors logo"
                /></a
            >
        </div>
    </div>
    <div class="nav-aside">
        <CartButton />
    </div>
</nav>
