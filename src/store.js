import { writable } from 'svelte/store';

const data = (() => ({
   lhs: 0,
   operation: null,
   rhs: null
}))();

export let expression = writable(data);
export let input = writable(0);

/**
 * Operators
 * @type {String[]}
 */
export const operators = ["/", "*", "-", "+", "="];

/**
 * Modifiers
 * @type {any[]}
 */
export const modifiers = [
   { value: 'AC', function: expression.update(obj => obj = data) },
   { value: '+/-', function: null },
   { value: '%', function: null }
];

/**
 * Numbers
 * @type {any[]}
 */
export const numbers = [
   [7, 8, 9],
   [4, 5, 6],
   [1, 2, 3],
   [0, "."],
];