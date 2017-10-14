function forLoop (array) {
  for (let n = 0; n < 25; n++)

  if (n === 1 ) {

    array.push ("I am 1 strange loop");

  } else {

  array.push (`I am ${n} strange loops`);
 }

 return array;
}

function whileLoop(n) {
  while (n > 0) {
    console.log (--n);
  }

  return 'done';
}


 function doWhileLoop(array) {

   function maybeTrue() {
     return Math.random() >= 0.5;
}

  do {
    array.pop();
} while (array.length > 0 && maybeTrue());
  return array;
 }
