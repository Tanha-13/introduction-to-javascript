const accountId = 144553;
let accountEmail = 'tanha@gmail.com';
var accountPassword = '12345';

// a way to declare a variable. but it is not a best practice.
accountCity = "dhaka";

// changing const variable
// accountId = 2; // value can not be changed

// changing let variable
accountEmail = 'nusrat@gmail.com' // value can be changed

// changing var variable
accountPassword = '212121'; // value can be changed


accountCity = 'chandpur';

// console.log(accountId);
// console.log(accountEmail);
// console.log(accountPassword);
console.table([accountEmail,accountId,accountPassword,accountCity])

/**
 * prefer not to use var because of issue in block scope and functional scope
 * 
 */