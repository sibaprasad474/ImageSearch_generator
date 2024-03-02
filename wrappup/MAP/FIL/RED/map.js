//map function is a higher order function used to transform the array entirely
const arr=[1,2,3,4,5];
// const double=(x)=>{
//     return x*2;
// }
// const triple=(x)=>{
//     return x*3;
// }
// const output1=arr.map(double);
// const output2=arr.map(triple);
// console.log(output2);
// console.log(output1);
// const binary=(x)=>{
//     return x.toString(2);
// }
// or 

// const output=arr.map(function binary(x){
//     return x.toString(2);
// });

const output=arr.map((x)=>x.toString(2));
console.log(output);