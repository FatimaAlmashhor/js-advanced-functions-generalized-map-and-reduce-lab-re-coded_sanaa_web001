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




function reduce ( arr , callbackFun , init = 0 ){
  if(init = 0)
    return  arr.reduce(callbackFun ) ;
  else {
        return  arr.reduce(callbackFun , init) ;
  }
}
// function d ( arr , callbacks ){
//   return arr.reduce(callbacks ,100) ;
// }

function callbackFun (e  , memo) {return e + memo} ;
// arr = reduce([1,2,3], callbacks);
