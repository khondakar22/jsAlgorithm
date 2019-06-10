// --Directions 
// Write a program that console logs the numbers
// From 1 to n. But for multiples of three print "fizz" instead of the number and for the multiples of five print "buzz". For number which are multiples of both three and five print "fizzbuzz".
// --- Example
// fizzBuzz(5); 
// 1
// 2
// fizz
// 4
// buzz
// fizzbuzz

function fizzBuzz(n) {
  let result = ''; 
  for (let i = 1; i <= n; i++ ) {
    // Is the number a multiple of 3 and 5?
    if( i % 3 === 0 && i % 5 === 0) {
      result += 'fizzbuzz'+'<br>';
    } else if(i % 3 === 0) {
      // Is the number  a mulutple of 3?
      result += 'fizz' +'<br>';
    } else if(i % 5 === 0) {
      result += 'buzz' +'<br>'
    } else {
      result += i +'<br>'; 
    }
  }
  return result;

}

let input = 20;
document.querySelector('#input').innerHTML = 'Input Number = ' + input;
let outPutResult = fizzBuzz(input);
document.querySelector('#output').innerHTML = 'Output = ' + outPutResult;