//it returns a new array by doing something over each element
let arr=[1,2,10,21,20];
let arr2=arr.map((val,index,array)=>{
    // console.log(val,index,array);
    return val+1;
})
// console.log(arr2);

//--------------filter-----------------
let a2= arr.filter((val)=>{
    return val<10;
})
// console.log(a2);

//------------------reduce----------
let arr3=[1,2,4,6,7,2];
// let newarr=arr3.reduce((h1,h2,h3)=>{
//     return h1+h2+h3;
// }) 
const reduce_func=(h1,h2)=>{
    return h1+h2;
}
let newarr=arr3.reduce(reduce_func);

console.log(newarr);