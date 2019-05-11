// Directions
// Given a string, return a new string with reversed order of characters 
// Examples
// reverse('apple') === 'leppa'
// reverse('hello') === 'olleh'
// reverse('Greetings!') === '!sgnitterG'

// function reverse(str) {

//     // const arr = str.split('');
//     // arr.reverse();
//     // return arr.join('');
//     return str.split('').reverse().join('');
// }


// Second solution
// function reverse(str) {
//  let reversed = '';
//  for(let character of str) {
//     reversed  = character + reversed;
//  }
//  return reversed;
// }

// reduce helper, es5.1, condens down one single value // reduce take two argu, one arrow, second starting initial valu for the function
function reverse(str) {
   return str.split('').reduce((reversed, character)=>{
        return character + reversed;
    },'')
}
let input = 'Apple';
document.querySelector('#input').innerHTML = 'Input String = ' + input;
let outPutResult = reverse(input);
document.querySelector('#output').innerHTML = 'Output Reverse String = ' + outPutResult;

// Next Topics Palindromes
