let a=prompt("enter your age");
a=Number.parseInt(a);
// a>=18?console.log("eligible"):console.log("not eligible");
if(candrive(a)){
    console.log("eligible");
}
else{
    console.log("not eligible");
}
function candrive(a){
    if(a>=18){
        return true;
    }
    else{
        return false;
    }
}