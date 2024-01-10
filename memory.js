// Stack (Primitive)
let userName1 = "Nusrat Zaman";
let userName2 = userName1;
userName2 = 'Tanha Zaman';
// console.log(userName1);
// console.log(userName2);


// Heap (Non-primitive)

let userOne = {
    name: 'Nusrat',
    email:'nusrat@gmail.com'
}
let userTwo = userOne;
userTwo.email = 'tanha@gmail.com';
console.log(userOne.email);
console.log(userTwo.email);