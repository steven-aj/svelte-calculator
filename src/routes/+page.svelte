<script>
   import { operators, numbers, expression } from "@store";
   import Keypad from "@components/Keypad.svelte";
   import Numbers from "@components/Numbers.svelte";
   import Operators from "@components/Operators.svelte";

   $: expression;
</script>

<div id="Calculator">
   <div id="Screen">
      <div class="input">
         {$expression.lhs}
      </div>
   </div>
   <Keypad>
      <div slot="modifiers" id="Modifiers">
         <button class="modifier" style="grid-column: 1;">AC</button>
         <button class="modifier" style="grid-column: 2;">+/-</button>
         <button class="modifier" style="grid-column: 3;">%</button>
      </div>
      <Numbers slot="numbers" buttons={numbers} />
      <Operators slot="operators" buttons={operators} />
   </Keypad>
</div>

<style>
   #Calculator {
      display: grid;
      grid-template-rows: 3fr 9fr;
      grid-template-columns: 1fr;
      max-width: 350px;
      max-height: 500px;
      height: 100%;
      width: 100%;
      box-shadow: 3px 3px 1rem rgba(0, 0, 0, 0.2);
      border-radius: 1rem;
      overflow: hidden;
   }

   #Screen {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr;
      flex-direction: column;
      background-color: #555149;
      /* height: 100%; */
      /* width: 100%; */
   }

   .input {
      grid-row: 2;
      grid-column: 1;
      display: flex;
      flex-direction: row;
      color: white;
      font-size: 30pt;
      width: inherit;
      justify-content: flex-end;
      /* background-color: silver; */
      padding: 1rem;
   }

   #Modifiers {
      display: grid;
      grid-row: 1;
      grid-column: 1;
   }
</style>
