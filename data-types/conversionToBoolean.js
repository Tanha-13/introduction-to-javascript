let isLoggedIn = undefined;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);
console.log(typeof booleanIsLoggedIn);

function myName(){
    console.log('hello world');
}
console.log(typeof myName);

/**
 * Notes
 *  1 => true
 *  0 => false
 *  "" => false
 *  "nusrat" => true
 *  null => false
 *  undefined => false
 */