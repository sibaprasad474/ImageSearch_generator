const cart=["shoes","pants","kurtas"];
// createOrder(cart,(orderId)=>{

//     proceedToPayment(orderId,(paymentInfp)=>{

//         showOrderedSummary(paymentInfp,(paymentInfp)=>{

//             updateWalletBalance(paymentInfp);
//         });
//     });
// });

// const promise=createOrder(cart);

createOrder(cart)
.then(orderId=>proceedToPayment(orderId))
.then(paymentInfp=>showOrderedSummary(paymentInfp))
.then(paymentInfp=>updateWalletBalance(paymentInfp))