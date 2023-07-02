<div id="Keypad">
   <slot name="modifiers" />
   <slot name="numbers" />
   <slot name="operators" />
</div>

<style>
   #Keypad {
      display: grid;
      grid-template-columns: 3fr 1fr;
      grid-template-rows: 1fr 4fr;
   }
</style>
