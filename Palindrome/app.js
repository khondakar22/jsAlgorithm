

// Steps
// Take a string, return true if the string is a palindrom or false 
// --- Example
// palindrome("abba") === true; 'abba'
// palindrome("abcdefg") === false; 'gfedcba'

// function palindrome(str) {
//   const reversed = str.split('').reverse().join('');
//  return str === reversed;
// }

function palindrome(str) {
 return str.split('').every((char, index)=>{
  return char === str [str.length - index - 1 ]
 })
}


let input = 'Rose';
document.querySelector('#input').innerHTML = 'Input String = ' + input;
let outPutResult = palindrome(input) ? 'yes': 'no';
document.querySelector('#output').innerHTML = 'Is this String Palindrom = ' + outPutResult;