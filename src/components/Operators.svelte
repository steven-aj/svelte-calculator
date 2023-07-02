<script>
   import { createEventDispatcher } from "svelte";
   /**
    * @type {any[]}
    */
   export let buttons = [];

   let dispatch = createEventDispatcher();

   /**
    * 
    * @param {PointerEvent|null} ev
    */
   function select(ev) {
      // @ts-ignore
      dispatch('select', ev.target.value);
   }
</script>

<div id="Operators">
   {#each buttons as operator, i}
      <button class="operator" style={`grid-row: ${i + 1};`}>{operator}</button>
   {/each}
</div>

<style>
   #Operators {
      display: grid;
      grid-template-rows: repeat(1fr, 4);
      grid-template-columns: 1fr;
      grid-row: span 2;
   }
</style>
