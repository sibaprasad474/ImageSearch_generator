//filter fun is basically used to filter values inside a array e.g odd values or evens in the array
const arr=[4,6,7,1,3];

//filter odd values
// const isOdd=(x)=> x%2;
// const isEven=(x)=>x%2==0;
// const grt4=(x)=>x>=4;
// const output = arr.filter((x)=>x%2);
// const evens=arr.filter((x)=>x%2==0);
// const g4=arr.filter((x)=>x>=4);
// console.log(evens);
// console.log(output);
// console.log(g4);
const newarr=arr.filter((x)=>x%2);
console.log(newarr);