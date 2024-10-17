import { isString } from './helpers.js';

/**
 * Fall sem snýr við streng.
 * @param {string} str 
 * @returns streng sem er snúinn við eða `null` ef `str` er ekki strengur.
 */
export function reverse(str) {
    if (isString(str)) {
      const split = str.split('');
      const reversed = split.reverse();
  
      return reversed.join('');
    }
    return null;
  }


console.assert(reverse('halló') === 'óllah', 'reverse: snŷr við streng');
console.assert(reverse(false) === null, 'reverse: skilar `null` fyrir false');
  