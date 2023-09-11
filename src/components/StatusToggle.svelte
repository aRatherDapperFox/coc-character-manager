<script lang="ts">
    export let name: string;
    export let bool: boolean;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<label
    class="cursor-pointer w-max"
    for="ch_{name}"
    on:click={() => (bool = !bool)}
>
    <input type="checkbox" bind:checked={bool} /> {name}
</label>
