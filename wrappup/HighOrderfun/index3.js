const arr=[1,2,3,4,5];
const add=(arr)=>{
    return arr+arr;
}
const sub=(arr)=>{
    return arr-arr;
}
const mul=(arr)=>{
    return arr*arr;
}
const calc=(arr,logic)=>{
    const output=[];
    for(let i=0;i<arr.length;i++){
        output.push(logic(arr[i]));
    }
    return output;
}
console.log(calc(arr,add));
console.log(calc(arr,sub));
console.log(calc(arr,mul));
