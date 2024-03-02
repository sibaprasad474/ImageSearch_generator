let container1=document.querySelector(".container1");
// let h1=document.createElement("h1");
// h1.setAttribute("class","header1");
// h1.innerText="heading1";
// container1.append(h1);
let arr = [
    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      Button:"add",
    },
    {
      id: 2,
      title: "Mens Casual Premium Slim Fit T-Shirts ",
      price: 22.3,
      description:
        "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      category: "men's clothing",
      image:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        Button:"add",
    },
    {
      id: 3,
      title: "Mens Cotton Jacket",
      price: 55.99,
      description:
        "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      Button:"add",
    },
];

display(arr);
function display(element){
    element.forEach(element => {
        let div=document.createElement("div");
        div.setAttribute("class","box");
        // div.style.display="flex";
        // div.style.flexDirection="column";
        // div.style.justifyContent="centre";
        // div.style.alignItems="centre";
        // div.style.border="1px solid red";

        let id=document.createElement("h3");
        id.setAttribute("class","id");
        id.innerText=element.id;

        let title=document.createElement("p");
        title.setAttribute("class","title");
        title.innerText=element.title;

        let price=document.createElement("h3");
        price.setAttribute("class","price");
        price.innerText=element.price;
        
        let category=document.createElement("p");
        category.innerText=element.category;

        let banner=document.createElement("img");
        banner.style.width="10rem";
        banner.src=element.image;

        div.append(banner,id,title,category,price);
        container1.append(div);
    });
}
