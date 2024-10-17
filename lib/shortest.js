import { isString, splitOnWhitespace } from './helpers.js';

/**
 * fall sem finnur stysta orðið úr gefnum streng.
 * @param {string} str 
 * @returns streng með stysta orði úr `str` eða `null` ef `str` er ekki strengur.
 */
export function shortest(str) {
    if (isString(str)) {
      const split1 = splitOnWhitespace(str);
      let shortest = split1[0];
  
      for (let i = 0; i < split1.length; i++) {
        if (split1[i].length < shortest.length && split1[i] != " ") {
          shortest = split1[i];
        }
      }
      return shortest;
    }
    return null;
  }
  
  console.assert(shortest('halló heimur!') === 'halló', 'shortest: skilar `halló` fyrir "halló heimur!"');
  console.assert(shortest(false) === null, 'shortest: skilar `null` fyrir false');
  