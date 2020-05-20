let animal = 'cat';
let n = 3;

function myAnimal() {
  let animal='dog';
  return animal
}

function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  //let animal='dog';
  return animal
}

function add2(n) {
  let two = 2
  return n + two

  // Feel free to move things around!
  two = 2
}