import { writable } from 'svelte/store';

export let expression = writable({
   lhs: 0,
   operation: null,
   rhs: null
});

export const operators = ["/", "*", "-", "+", "="];

export const numbers = [
   [7, 8, 9],
   [4, 5, 6],
   [1, 2, 3],
   [0, "."],
];