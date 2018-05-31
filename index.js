function add (a,b){
  return a + b;
}

function subtract (a,b){
  return a - b;
}

function multiply (a,b){
  return a * b;
}

function divide (a,b){
  return a / b;
}

function inc (n){
  return ++n;
}

function dec (n){
  return --n;
}

function makeInt (n){
<<<<<<< HEAD
  return parseInt(n, 10);
}


=======
  return parseInt(n);
}

function makeInt (n){
  n = parseInt(n, 10);
  return n;
}

function makeInt (n){
  return n;
}
>>>>>>> 48c6423ed1ca0ba27d9a66bf918712af79423905

function preserveDecimal (n){
  return parseFloat(n);
}

<<<<<<< HEAD
=======
function preserveDecimal (n){
  return n;
}
>>>>>>> 48c6423ed1ca0ba27d9a66bf918712af79423905
