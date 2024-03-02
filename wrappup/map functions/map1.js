const x=[1,3,5,2,6];
//double x-[2,6,10,4,12]
function double(x){
    return x*2;
}
function triple(x){
    return x*3;
}
const doublex=x.map(double);
const triplex=x.map(triple);
console.log(doublex);
console.log(triplex);