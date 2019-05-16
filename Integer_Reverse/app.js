// Directions
// Given an integer, return an integer that is the reverse ordering of numbers. 
// Examples
// revesInt(15) = 51
// revesInt(500) = 5
// reversInt(-15) = -51
// reverseInt(-90) = -9

function reverseInt(num){
 const reversed =  num.toString().split('').reverse().join('');

//  if( num < 0) {
//   return parseInt(reversed) * -1;  
//  }
 return parseInt(reversed) * Math.sign(num);
}

let input = -90;

document.querySelector('#input').innerHTML = 'Input Number = ' + input;
let outPutResult = reverseInt(input);
console.log(typeof outPutResult);
document.querySelector('#output').innerHTML = 'Output Reverse Number = ' + outPutResult;


