/**
 * Official Documentation: data types are divided into two categories: Primitive and non-primitive. These are divided based on call by value and call by reference(how data are stored in memory and how data are accessed from memory).
 */


/*------------------ Primitive Data Types ------------------------*/
/**
 * Primitive: call by value.
        7 types - Number, bigint, String, boolean, null, undefined, Symbol
 * Non-primitive or reference type: object, array,function
 */

const score = 100; //Number
const scoreValue = 100.3; //Number
//bigint
const bigNumber = 123456789123456789n; // BigInt
console.log(typeof bigNumber);
const userName = 'Nusrat'; //String
const isLoggedIn = false; //Boolean
const outsideTemp = null; //null
let userEmail; // undefined

const id = Symbol('123');
const anotherId = Symbol('123');
console.log(id === anotherId);

/*-------------------Reference Type(non-primitive)---------------*/
/**
 * array
 * objects
 * functions
 * 
 */
const heros = ['shaktiman', 'naagraj','doga'];
console.log(typeof heros); //object
let myObj = {
    name:'Nusrat',
    age: 22
}

const myFunction = function (){
    console.log('Hello World!!!');
}
console.log(typeof myFunction); //function object

// typeof 