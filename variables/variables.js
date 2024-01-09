// declare a variable using let keyword and assign value using assignment operator (=)
let message = 'Hello';
// this variable can be reassigned.
message = 'World';
// this variable can be copied to another variable
let hello = message; // hello = 'World'
console.log(hello);
// ! variable can not be re-declared.
// let message = 'Hello world'; //? it will generate error - SyntaxError: Identifier 'message' has already been declared.
console.log(message);

// declaring multiple variables in one line.
let name = 'Nusrat', age = 24, id = '201-51-021';

// !this is not recommended. Code should have better readability.
let userName = 'Nusrat';
let userAge = 24;
let userId = '201-51-021';

// you can write code like this
let currentName = 'Nusrat',
    currentAge = 24,
    currentId = '201-51-021';
// you can write code using comma first style
    currentName = 'Nusrat'
    , age = 24
    , userId = '201-51-021';



    /*************Constant Variables***************** */
    // to declare a constant variable, const keyword is used instead of let keyword.
    const myRealName = 'Nusrat Zaman';
    // constant variables can not be re-declared nor re-assigned.
    // const myRealName = 'Tanha'; // ? SyntaxError: Identifier 'myRealName' has already been declared.
    // myRealName = 'Tanha'; // ? TypeError: Assignment to constant variable.


    // UpperCase Constant
    // ! use as aliases for difficult-to-remember values
    const COLOR_RED = "#F00";
    let color = COLOR_RED; // color = '#F00'
    