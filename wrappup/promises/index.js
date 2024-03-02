//promises are used to handle async operations in js
const cart=["shoes","pants","kurtas"];

// const promise=createOrder(cart);
// promise.then((orderId)=>{
//     proceedtoPay();
// })

const Git_api="https://api.github.com/users/akshaymarch7";

const user=fetch(Git_api);

// handling promises
//promises is a container for filter values.
// or 
//promise is an object representing the eventual completion or failure of an asynhronous operation.
user.then((data)=>{
    console.log(data);
})
// console.log(user);