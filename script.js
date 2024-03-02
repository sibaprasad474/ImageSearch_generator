
let body=document.getElementsByClassName("body");
const loadscript=(src,fun1)=>{
    var script=document.createElement("script");
    script.src=src;
    script.onload=()=>{
        console.log("script loaded with src ",script);
        fun1(null,script);
    }
    script.onerror=()=>{
        console.log("script loaded with error on src ",script);
        fun1(new Error("src got some error"));
    }
    document.body.appendChild(script);    
}
const fun1=(error,script)=>{
    if(error){
        alert(error);
    }
    alert("script loaded - callback",script);

}
loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js",fun1);