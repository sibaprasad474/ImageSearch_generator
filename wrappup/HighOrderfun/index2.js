const radius=[2,1,4,5];

const area=(radius)=>{
    return Math.PI* radius* radius;
}
const circum=(radius)=>{
    return 2 * Math.PI * radius;
}
const calculate=(radius,logic)=>{
    const output=[];
    for(let i=0;i<radius.length;i++){
        output.push(logic(radius[i]));          
    }
    return output;
}
console.log(radius.map(area));
// console.log(calculate(radius,area));
// console.log(calculate(radius,circum));



