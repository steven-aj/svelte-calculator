<script>
   import Calculator from "@lib/Calculator.js";
   import Keypad from "@components/Keypad.svelte";
   import Modifiers from "@components/Modifiers.svelte";
   import Numbers from "@components/Numbers.svelte";
   import Operators from "@components/Operators.svelte";

   const api = new Calculator();

   let { input, expression } = api;
   $: expression;
   $: input;

   /**
    * Update Input -
    * Accepts a PointerEvent from a Numbers button
    * and updates the calculator's input.
    *
    * @param {{detail: string}} event - PointerEvent of a Numbers button
    */
   function updateInput({ detail }) {
      api.input.update((e) => {
         // Ignore decimal if input has one
         if (detail === "." && e.includes(".")) return (e = e);
         // Retain zero if decimal is first input
         else if (detail === "." && e === "0") return (e += detail)
         // Ignore if zero is first input
         else if (detail === "0" && e === "0") return (e = e);
         // Build a new value if the current is zero
         else if (e === "0") return (e = detail);
         // Append input to value
         else return (e += detail);
      });
   }
</script>

<div id="Calculator">
   <div id="Screen">
      <div class="expression">{api.lhs} {api.operator} {api.rhs}</div>
      <div class="input">{$input}</div>
   </div>
   <Keypad>
      <Modifiers slot="modifiers" buttons={api.modifiers} />
      <Numbers slot="numbers" buttons={api.numbers} on:select={updateInput} />
      <Operators slot="operators" buttons={api.operators} />
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
      padding: 0.25rem 1rem;
   }

   .expression {
      display: flex;
      flex-direction: row-reverse;
      padding: 1rem;
      color: silver;
   }

   .input {
      grid-row: 2;
      grid-column: 1;
      display: flex;
      flex-direction: row-reverse;
      color: white;
      font-size: 30pt;
      width: 100%;
      overflow-x: auto;
   }
</style>
