<script>
    import { createEventDispatcher } from "svelte";

    /**
     * @type {any[]}
     */
    export let buttons = [];

    let dispatch = createEventDispatcher();

    /**
     * Layout -
     * Action to apply styling to zero button
     * @param {HTMLElement} el - The element to style
     */
    function layout(el) {
        if (parseInt(el.innerText) === 0) {
            el.style.gridColumn = "span 2";
        }
    }
</script>

<div id="Numbers">
    {#each buttons as group, row}
        {#each group as digit}
            <button
                class="number"
                style={`grid-row: ${row + 1};`}
                value={digit}
                use:layout
                on:click={(/** @type {{ target: { value: any; }; }} */ ev) =>
                    dispatch("select", ev.target.value)}>{digit}</button
            >
        {/each}
    {/each}
</div>

<style>
    #Numbers {
        display: grid;
        grid-template-columns: repeat(1fr, 4);
        grid-template-rows: repeat(1fr, 3);
        grid-column: 1;
        grid-row: 2;
    }
</style>
