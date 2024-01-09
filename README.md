# Introduction to JavaScript

## Variables
**A variable is a container or named storage for data/value.**
<br>
Three ways to declare a variable in JavaScript:

1. **var** keyword
     - used to declare variables before ES6. 
     ```
     var message = "Hello";
     var message = "Hello1"; // re-declared
     message ="World"; // reassigned
     ```
2. **let** keyword
     - let is used to define variables. User can reassign values in these variables.
     ```
     let message = "Hello";
     let message = "Hello1"; // SyntaxError: Identifier message has already been declared.
     message ="World"; // reassigned
     ```
3. **const** keyword
     - used for constant(unchanging) variables. Variables can not be re-declared and re-assigned.
     ```
     const message = "Hello";
     const message = "Hello1"; // error
     message ="World"; // TypeError: Assignment to constant variable
     ```

## Data types

1. **Primitive**
   - Number
   - bigint
   - string
   - boolean
   - null
   - undefined
   - symbol
2. **Non-primitive**
   - object
   - array
   - function


