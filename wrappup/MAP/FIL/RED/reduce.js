//used to take all the array elements and comeout with a single element as answer. e.g maxium , largest,smallest etc .
const arr=[1,4,2,6,8];

let max=arr.reduce((acc,curr)=>{
    acc=acc+curr;
    return acc;
})
console.log(max);
//sum of max
// const output=arr.reduce((acc,curr)=>{
//     //here curr=arr[i] and acc=sum
//     acc=acc+curr;
//     return acc;
// })
// console.log(output);

// //find max
// const maximum=arr.reduce((acc,curr)=>{
//     acc=Math.max(curr);
//     return acc;
// })
// console.log(maximum);

//find min

const res=arr.reduce((min,curr)=>{
    return curr<min ? curr : min;
},arr[0]);

console.log(res);