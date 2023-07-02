// @ts-nocheck
import { writable } from 'svelte/store';
import stringMath from 'string-math';

export default class Engine {
   constructor() {
      this.expression = writable({ lhs: 0, operator: null, rhs: null });
      this.input = writable('0');
   }

   get lhs() {
      let lhs;
      this.subscribe(data => lhs = data.lhs);
      return lhs;
   }

   get operator() {
      let operator;
      this.subscribe(data => operator = data.operator);
      return operator;
   }

   get rhs() {
      let rhs;
      this.subscribe(data => rhs = data.rhs);
      return rhs;
   }

   get numbers() {
      return [
         ["7", "8", "9"],
         ["4", "5", "6"],
         ["1", "2", "3"],
         ["0", "."],
      ];
   }

   get modifiers() {
      return [
         { value: 'AC', execute: this.reset.bind(this) },
         { value: '+/-', execute: this.toggleNegativity.bind(this) },
         { value: '%', execute: null }
      ];
   }

   get operators() {
      return ["/", "*", "-", "+", "="];
   }

   /**
    * Subscribe -
    * @param {function} callback 
    */
   subscribe(callback) {
      this.expression.subscribe((data) => callback({
         lhs: parseFloat(data.lhs) > 0 ? data.lhs : '',
         operator: data.operator ? data.operator : '',
         rhs: data.rhs ? data.rhs : ''
      }));
   }

   /**
    * Reset - 
    * @returns 
    */
   reset() {
      this.input.update(i => i = '0');
      this.expression.update(data => data = {
         lhs: 0,
         operator: null,
         rhs: null
      });
   }

   /**
    * Toggle Negativity - 
    */
   toggleNegativity() {
      this.input.update(value => {
         if (value === '0') return value = value;
         else if (!value.includes('-')) {
            return value = `-${value}`
         } else {
            return value = value.split('-')[1];
         }
      })
   }
}