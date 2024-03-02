// let arr1=[2,3,5,2,7,9,17];
// let arr2=arr1.reduce((val1,val2)=>{
//     return val1+val2;
// })
// console.log(arr2);


//function can be declared as a variable in js
// const reduce_fun=(val1,val2)=>{
//     return val1+val2;
// }
// let newarr=arr1.reduce(reduce_fun);
// console.log(newarr);
let number=Math.floor(Math.random() * 90);
let chances=0;
let num2=prompt("enter the number");
while(num2!=number){
    num2=prompt("enter again");
    if (num2>number) {
        console.log("your entered number is greater");
    } 
    else if(num2<number){
        console.log("entered number is less");
    }
    chances++;
    console.log("it's your "+chances+"th trail");
}