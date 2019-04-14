// Directions
// Given a string, return a new string with reversed order of characters 
// Examples
// reverse('apple') === 'leppa'
// reverse('hello') === 'olleh'
// reverse('Greetings!') === '!sgnitterG'

function reverse(str) {

    // const arr = str.split('');
    // arr.reverse();
    // return arr.join('');
    return str.split('').reverse().join('');
}

console.log(reverse('Apple'));