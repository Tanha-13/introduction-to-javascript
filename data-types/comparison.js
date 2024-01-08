console.log(2 > 1);  //true
console.log(2 >= 1); //true
console.log(2 <= 1); //false
console.log(2 == 1); //false
console.log(2 != 1); //true


console.log('2' > 1);
console.log('02' > 1);

console.log(null > 0); //false
console.log(null >= 0); //true
console.log(null == 0); //false

/**
 * the reason is that an equality check == and comparisons work differently. Comparisons convert null to a number, treating it as ). That's why null>=0 is true and null > 0 is false.
 */

console.log(undefined == 0); // false
console.log(undefined >= 0); // false
console.log(undefined > 0); // false

//************Strict Equality****** */
console.log("2" == 2); //true
console.log("2" === 2); //false