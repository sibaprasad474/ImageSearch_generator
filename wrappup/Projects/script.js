const acces_key="XKQAjzj4c2pg3CgQUICxP3u5zyrIDtJuysgL1dx0sis";

const formEl=document.querySelector("form");
const input=document.getElementById("search-bar");
const img_cont=document.getElementsByClassName("search-results");
const showmore=document.getElementById("show-more-btn");

let inpdata=" ";
let page=1;

const searchImages = async () => {
    inpdata = input.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inpdata}&client_id=${acces_key}`;
    const response = await fetch(url);
    const data = await response.json();
    const results = data.results;

    if (page === 1) {
        // Clear existing content
        while (img_cont[0].firstChild) {
            img_cont[0].removeChild(img_cont[0].firstChild);
        }
    }

    results.forEach((result) => {
        const imagewrapper = document.createElement("div");
        imagewrapper.classList.add("result");
        const image = document.createElement("img");
        image.src = result.urls.small;
        image.alt = result.alt_description;
        const imglink = document.createElement("a");
        imglink.href = result.links.html;
        imglink.target = "_blank";
        imglink.textContent = result.alt_description;

        imagewrapper.appendChild(image);
        imagewrapper.appendChild(imglink);
        img_cont[0].appendChild(imagewrapper); // Append to the correct element
    });

    page++;
    if (page > 1) {
        showmore.style.display = "block";
    }
};


formEl.addEventListener("submit",(event)=>{
    event.preventDefault();
    page=1;
    searchImages();
})
showmore.addEventListener("click",()=>{
    searchImages();
})
// console.log("hello");