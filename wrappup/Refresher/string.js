let str1="hello buddy \n";
let str2="bye bye";
let str3=str1+str2;
str3+='!';
// console.log(str3.length,str3[str3.length-1]);
// console.log(str3.charAt(5));

//to get index of a character
// console.log(str3.indexOf('y'));

//to acces any substring
// console.log(str3.substring(2,8));

// console.log(str3.slice(3,5));

console.log(str3.includes('budd'));

//it will split whereever it'll find a space or what you give
let arr=str3.split(" ");
console.log(arr);