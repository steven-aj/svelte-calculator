<script>
   /**
     * @type {any[]}
     */
    export let buttons;
</script>

<div id="Modifiers">
   {#each buttons as mod, i}
      <button
         class="modifier"
         style={`grid-column: ${i + 1};`}
         value={mod}
         on:click={() => mod.run()}>{mod.value}</button
      >
   {/each}
</div>

<style>
   #Modifiers {
      display: grid;
      grid-row: 1;
      grid-column: 1;
   }
</style>