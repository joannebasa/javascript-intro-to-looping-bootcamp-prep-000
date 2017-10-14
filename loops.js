var array = [];

function forLoop(array) {
  for (let n = 0; n < 25; n++) {
    if (n === 1) {
      array.push("I am 1 strange loop");
    } else {
      return array;
    }
  }
}
