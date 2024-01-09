# Introduction to JavaScript

## Variables
**A variable is a container or named storage for data/value.**
<br>
### Declarations
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
### Variable Naming
1. The name must contain letters, digits, or the symbols - $ and _.
2. The first character must not be a digit.
3. Hyphens are not allowed in variable names.
4. case sensitive. example: apple and APPLE are different.
5. Keywords(reversed words) can not be used as variable names because the language itself uses them.

> A variable name should have a clean, obvious meaning, describing the data.

Some good-to-follow rules are:

- use human-readable names like userName or shoppingCart.
- Avoid abbreviations or short names like a,b,c or x,y,z.
- descriptive and concise.
- use different variables for different values. An extra variable is good, not evil. Modern JavaScript minifiers and browsers optimize code well enough, so it won’t create performance issues. Using different variables for different values can help the engine optimize your code.

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


