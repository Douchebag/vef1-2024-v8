import { isString } from './helpers.js';

/**
 * Fall sem athugar hvort strengur sé palindrom.
 * @param {string} str 
 * @returns skilar true ef strengur er palindrom, annars false.
 */
export function palindrome(str) {
    if (isString(str) && str != "") {
      const split1 = str.split('');
      const reversed = [...split1].reverse();
      let ekkiPalindrome = 0;
      
      for (let i = 0; i < split1.length; i++) {
        if (split1[i].toLowerCase() != reversed[i].toLowerCase()) {
          ekkiPalindrome++;
        }
      }
      return ekkiPalindrome === 0;
    }
    return false;
  }
  
  console.assert(palindrome('anna') === true, 'palindrome: skilar `true` fyrir "anna"');
  console.assert(palindrome('halló') === false, 'palindrome: skilar `false` fyrir "halló"');
  console.assert(palindrome('aNna') === true, 'palindrome: skilar `true` fyrir "anna"');