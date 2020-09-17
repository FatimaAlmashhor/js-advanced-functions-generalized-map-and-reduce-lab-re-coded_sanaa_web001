// Add your functions here
// function map (arr) {
//   return arr.map(x) ;
// }
//
// let  arr = map([1, 2, 3, -9]);
// function x (a){ return -1 * a }
//

function map(dune , callbacks) {
  return dune.map(callbacks) ;
}

function callbacks (a){ return a};

dune = ["paul", "gurney", "vladimir", "jessica", "chani"]
arr = map(dune , callbacks)

sourceArray = [1,2,3,]
arr = reduce (sourceArray,100, callbacks);


function reduce ( arr ,init, callbacks ){
  if(init === undefined)
    return arr.reduce(callbacks) ;
  else
    return  init + arr.reduce(callbacks) ;
}
// function d ( arr , callbacks ){
//   return arr.reduce(callbacks ,100) ;
// }

// function callbacks (e  , memo) {return e + memo} ;
// arr = reduce([1,2,3], callbacks);
