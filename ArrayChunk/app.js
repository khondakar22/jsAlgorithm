function chunk(array, size) {
  const chunked = [];
  for (let element of array) {
    const last = chunked[chunked.length - 1];
    if (!last || last.length === size) {
      chunked.push([element]);
    } else {
      last.push(element);
    }
  }
  return chunked;
}

let input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "a", "b", "c"];
let chunkSize = 3;
// document.querySelector("#input").innerHTML = "Input Array = " + input;
// document.querySelector("#chunk").innerHTML = "Chunk Size = " + chunkSize;
console.log(input);
console.log(chunk(input, chunkSize));
//  outPutResult = chunk(input, chunkSize);
// document.querySelector("#output").innerHTML = "Output = " + outPutResult;
