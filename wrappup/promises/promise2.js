const cart=["shoes","pants","kurtas"];

///own create order function

//producer
const createOrder=(cart)=>{
    //promise creation constructor
    const pr=new Promise((resolve,reject)=>{
        if(ValidityState(cart)){
            const err=new Error("cart is not valid");
            reject(err);
        }
        //logic for createorder
        const orderId="1234";
        if(orderId){
            setTimeout(() => {
                resolve(orderId);
            }, 5000);
        }
    }); 
    return pr;
}

const proceedToPayment=(orderId)=>{
    ////
    const pr=new Promise((resolve,reject)=>{
        resolve("payment succesfull");
    })
    return pr;
}

const ValidityState=(cart)=>{
    return true;
}

createOrder(cart) 
.then((orderId)=>{  
    console.log(orderId); 
    return orderId;
})
.catch((err)=>{
    console.log(err.message);
})
.then((orderId)=>{
    return proceedToPayment(orderId);
})
.then((paymentInfo)=>{
    console.log(paymentInfo);
})


