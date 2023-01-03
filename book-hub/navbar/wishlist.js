let bookcart= document.querySelector(".cart");
let container= document.querySelector(".container");
let cartCount=document.querySelector("#cart-count");
const homebtn=document.querySelector("#home-btn");
const logo = document.querySelector("#logo h2")
const logout = document.querySelector("#logout-btn");
const username = document.querySelector("#username")
const menubar=document.querySelector("#logo div i");
const sidelist = document.querySelector("#logo div span")
const list=document.querySelector(".list")


menubar.onclick=()=>{
  sidelist.classList.toggle("active")
  list.classList.toggle("active")
}

let userdata = JSON.parse(localStorage.getItem("userdata"))

username.innerText=userdata.name

let data= JSON.parse(localStorage.getItem('wishlistItom')) || [];

let arr;

let details=(data)=>{
  container.innerHTML=null;
    data.forEach((element,index)=>{
      const divBox=document.createElement("div");
      const images= document.createElement("img");
      const  addtocart= document.createElement("button");
      addtocart.classList.add("cartadd-btn")
      const year=document.createElement("span");
      const author=document.createElement("h3");
      const bookname= document.createElement("span");
      const remove=document.createElement("button")
      remove.classList.add("remove-btn")
      addtocart.onclick=()=>{

        Addtocart(element);

      }

      remove.onclick=()=>{
        removeitom(index);
        console.log(index);
      }
      console.log(element);

      
     author.innerText= element.volumeInfo.authors;
     images.src=element.volumeInfo.imageLinks.thumbnail;
     addtocart.innerHTML="Add to cart";
     remove.innerHTML="remove"

     year.innerText=element.volumeInfo.publishedDate;
     bookname.innerText=element.volumeInfo.title;

    divBox.append(images,bookname,author,year,addtocart,remove);
    container.append(divBox);
    })

}
details(data);
let removeitom=(index)=>{
  data.splice(index,1);
  console.log(data);
  localStorage.setItem("wishlistItom",JSON.stringify(data));
  details(data);
}
  
  arr=JSON.parse(localStorage.getItem("cartItems"))||[];
 console.log(arr);
let Addtocart=(element)=>{

  arr.push(element);
  
  localStorage.setItem("cartItems", JSON.stringify(arr));
  cartCount.innerText=arr.length

}
bookcart.onclick=()=>{
  window.location.href="addTocart.html"
}
// let countname=arr.length
cartCount.innerText=arr.length



homebtn.onclick=()=>{
  window.location.href="navbar.html"
}
logo.onclick=()=>{
  window.location.href="navbar.html"
}
logout.onclick=()=>{
  localStorage.setItem("userdata",null);
  window.location.href="navbar.html"
}





