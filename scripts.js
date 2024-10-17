import { isString, splitOnWhitespace } from './lib/helpers.js'; 
import { longest } from './lib/longest.js';
import { shortest } from './lib/shortest.js';
import { reverse } from './lib/reverse.js';
import { palindrome } from './lib/palindrome.js';
import { vowels } from './lib/vowels.js';
import { consonants } from './lib/consonants.js';

const textAreaElement = document.querySelector('textarea');
const formElement = document.querySelector('form');
const outputElement = document.querySelector('.hidden');
const wideElement = document.querySelectorAll('.wide');
const longestElement = document.querySelector('.longest');
const shortestElement = document.querySelector('.shortest');
const vowelsElement = document.querySelector('.vowels');
const consonantsElement = document.querySelector('.consonants');
const palindromeElement = document.querySelector('.palindrome');

let looping = false;

/**
 * resetar öllum gildum, felur output aftur og setur looping í false
 * @param {hreinsa takki} event 
 */
function resetHandler(event) {
    outputElement.classList.add('hidden');
    textAreaElement.value = '';
    wideElement[0].textContent = '';
    longestElement.textContent = '';
    shortestElement.textContent = '';
    vowelsElement.textContent = '';
    consonantsElement.textContent = '';
    palindromeElement.textContent = '';
    wideElement[1].textContent = '';

    looping = false; 
}

/**
 * uppfærir gildi í outputi
 */
function updateValues() {
  if (looping) { 
    const text = textAreaElement.value;
    const longestWord = longest(text);
    const shortestWord = shortest(text);
    const reversedText = reverse(text);
    const isPalindrome = palindrome(text);
    const vowelCount = vowels(text);
    const consonantCount = consonants(text);
    
    wideElement[0].textContent = text;
    longestElement.textContent = longestWord;
    shortestElement.textContent = shortestWord;
    vowelsElement.textContent = vowelCount;
    consonantsElement.textContent = consonantCount;
    palindromeElement.textContent = isPalindrome ? '' : 'ekki';
    wideElement[1].textContent = reversedText;
  }
}

/**
 * birtir output, setur looping í true og kallar a updateValues
 * @param {greining takki} event 
 */
function submitHandler(event) {
    event.preventDefault();
    outputElement.classList.remove('hidden');
    looping = true; 
    updateValues();
}


textAreaElement.addEventListener('input', updateValues);

formElement.addEventListener('submit', submitHandler);
formElement.addEventListener('reset', resetHandler);