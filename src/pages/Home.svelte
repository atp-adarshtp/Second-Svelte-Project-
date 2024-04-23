<script>
    import Hero from "../components/Hero.svelte";
    import { link } from "svelte-routing";
    import Featured from "../components/Products/Featured.svelte";
</script>

<Hero>
    <a href="../components/Products/Featured" class="btn btn-primary btn-hero" use:link>shop now</a>
</Hero>
<Featured title="featured products" />
