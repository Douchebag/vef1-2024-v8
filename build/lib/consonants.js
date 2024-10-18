const CONSONANTS = 'bcdfghjklmnpqrstvwxz'.split('');
import { isString } from './helpers.js';

/**
 * Fall sem telur hversu margir samhljóðar eru í gefnum streng.
 * @param {string} str 
 * @returns fjolda samhljóða í streng ef strengur er gefinn, annars `null`.
 */
export function consonants(str) {
    if (isString(str)) {
      const split1 = str.split('');
      let consonants = 0;
  
      for (let i = 0; i < split1.length; i++) {
        for ( let j = 0; j < CONSONANTS.length; j++) {
          if (split1[i].toLowerCase() === CONSONANTS[j]) {
            consonants++;
          }
        }
      }
      return consonants;
    }
    return null;
  }
  
  console.assert(consonants('halló') === 3, 'consonants: skilar `3` fyrir "halló"');
  console.assert(consonants(false) === null, 'consonants: skilar `null` fyrir false');
  console.assert(consonants('aaa') === 0, 'consonants: skilar `0` ef engir samhljóðar eru í strenginum"');