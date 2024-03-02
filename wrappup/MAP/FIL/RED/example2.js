const users=[
    { firstname: "shiv", lastname: "mishra", age:21 },
    { firstname: "shiv2", lastname: "mishra2", age:22 },
    { firstname: "shiv3", lastname: "mishra3", age:26 },
    { firstname: "shiv4", lastname: "mishra4", age:26 },
];

// const output=users.map((x)=>x.firstname+" "+x.lastname);
// console.log(output);

const output=users.reduce((acc,curr)=>{
    if(acc[curr.age]){
        acc[curr.age]= ++acc[curr.age];
    }
    else{
        acc[curr.age]=1;
    }
    return acc;
},{});
console.log(output);