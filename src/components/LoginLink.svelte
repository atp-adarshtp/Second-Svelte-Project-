<script>
    import user from "../stores/user";
    import { link } from "svelte-routing";
    import globalStore from "../stores/globalStore";
</script>

{#if $user.jwt}
    <a
        href="/"
        class="logout-btn"
        on:click={() => {
            globalStore.toggleItem("sidebar", true);
        }}>logout</a
    >
{:else}
    <a href="/login"
        on:click={() => {
            globalStore.toggleItem("sidebar", false);
        }}>login</a>
{/if}
