//what is async?
//async is a keyword used to make a function async function , it always returns a promise .

// const pr=new Promise((resolve,reject)=>{
//     resolve("promise resolved values");
// });

// async function getData(){
//     return pr;
// }
// const data=getData();
// // console.log(data);
// data.then(res=>console.log(res));

//       async + await => used to handle promises

//await is a keyword used only inside a aasync function . it can only be written before a promise.
// const pr=new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve("promise resolved values");
//     }, 10000);
// });

// async function handlePromise(){
//     console.log("hello");
//     const val=await pr;
//     console.log(val);
// }
// handlePromise();

// fetch() function usage
const api_url="https://api.github.com/users/akshaymarch7";
const handlePromise=async ()=>{
    try{
        const data=await fetch(api_url);
        //fetch()=> gives a response which is a readable stream. to do so have to do .json(); then it gives json value.
        const json_value=await data.json();
        console.log(json_value);
    }
    catch(err){
        console.log(err);
    }
   
}
handlePromise();