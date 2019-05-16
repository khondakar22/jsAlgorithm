// Steps
// Given a string, return the character that is most commonly used in the string
// --- Examples 
// maxChar('aa1111111') = '1'
// Comon String Question 
//  What is the most common character in the string?
//  Does string A have the same characters as string B(is it an anagram)?
// Does the given string have any repeated characters in it?

function maxChar(string) {
  const charMap = {}; 
  let max = 0; 
  let maxChar = '';
  for (let char of string) {
    // if(!charMap[char]) {
    //   charMap[char] = 1; 
    // } else {
    //   charMap[char]++;
    // }  
    charMap[char] = charMap[char] + 1 || 1;  
  }
  for (let char in charMap) {
    if(charMap[char] > max) {
      max = charMap[char]; 
      maxChar = char; 
    }
  }
  return {maxChar, max}
}


let input = 'I love Allah';
document.querySelector('#input').innerHTML = 'Input Charcter = ' + input;
let outPutResult = maxChar(input);
document.querySelector('#output').innerHTML = 'Maximum Character is = ' + outPutResult.maxChar + ', we found '+ outPutResult.max+' times';