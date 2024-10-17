import { isString } from './helpers.js';
const VOWELS = 'aeiouyáéýúíóöæ'.split('');

/**
 * fall sem telur hversu margir sérhljóðar eru í gefnum streng.
 * @param {string} str 
 * @returns fjolda sérhljóða í streng ef strengur er gefinn, annars `null`.
 */
export function vowels(str) {
    if (isString(str)) {
      const split1 = str.split('');
      let vowels = 0;
  
      for (let i = 0; i < split1.length; i++) {
        for ( let j = 0; j < VOWELS.length; j++) {
          if (split1[i].toLowerCase() === VOWELS[j]) {
            vowels++;
          }
        }
      }
      return vowels;
    }
    return null;
  }
  
  console.assert(vowels('halló') === 2, 'vowels: skilar `2` fyrir "halló"');
  console.assert(vowels(false) === null, 'vowels: skilar `null` fyrir false');
  console.assert(vowels('hll') === 0, 'vowels: skilar `0` ef engir sérhljóðar eru í strenginum"');
  