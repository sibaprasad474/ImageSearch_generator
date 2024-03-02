// a function who takes another function as a argument known as higher order function .
// function x(){
//     console.log("hello");
// }
// function y(x) {
//     x();
// }
const radius=[2,1,4,5];
const calarea=(radius)=>{
    const output=[];
    for(let i=0;i<radius.length;i++){
        output.push(Math.PI * radius[i] * radius[i]);
    }
    return output;
};
console.log(calarea(radius));

const calcircum=(radius)=>{
    const output=[];
    for(let i=0;i<radius.length;i++){
        output.push(2* Math.PI * radius[i] * radius[i]);
    }
    return output;
}
console.log(calcircum(radius));

const calDia=(radius)=>{
    const output=[];
    for(let i=0;i<radius.length;i++){
        output.push(2*radius[i]);
    }
    return output;
}
console.log(calDia(radius));