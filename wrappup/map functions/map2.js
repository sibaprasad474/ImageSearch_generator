//map function creates a whole new array and stores element in it
let arr=[20,13,15];
let a=arr.map((value,index,arr)=>{
    console.log(value,index,arr);
    return value+index;
})
console.log(a);