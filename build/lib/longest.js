import { isString, splitOnWhitespace } from './helpers.js';

/**
 * Fall sem finnur lengsta orðið úr gefnum streng.
 * @param {string} str 
 * @returns streng með lengsta orði úr `str` eða `null` ef `str` er ekki strengur.
 */
export function longest(str) {
    if (isString(str)) {
      const split1 = splitOnWhitespace(str);
      let longest = "";
  
      for (let i = 0; i < split1.length; i++) {
        if (split1[i].length > longest.length) {
          longest = split1[i];
        }
      }
  
      return longest;
    }
    return null;
  }

console.assert(longest('halló heimur!') === 'heimur!', 'longest: skilar `heimur!` fyrir "halló heimur!"');
console.assert(longest(false) === null, 'longest: skilar `null` fyrir false');