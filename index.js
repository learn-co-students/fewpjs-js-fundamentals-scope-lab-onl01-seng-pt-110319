animal = ""
// above was code already given, it is a "global variable"

function myAnimal() {
  // myAnimal function needed animal to be defined in this functions scope
  // then return animal was already given
  let animal = "dog";
  return animal
}

function yourAnimal() {
  // kind of the same thing, needed an animal variable to be defined in this functions scope
  // return animal was code already given
  let animal = "cat";
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  return animal
}

function add2(n) {
  // needed variable two to be defined inside the functions scope
  // return n + two was already given
  let two = 2;
  return n + two

  // Feel free to move things around!
}