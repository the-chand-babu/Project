
let data = JSON.parse(localStorage.getItem('book_data'));
let cartdata= JSON.parse(localStorage.getItem('cartItems'))||[];

let container = document.querySelector('#container');
let brows_btn = document.querySelector(".browse-icon");
let brow_list = document.querySelector(".browse-list");
const logo = document.querySelector("#logo")
const addtocart=document.querySelector("#btn-orange");
const buynow= document.querySelector("#btn-yellow");
const username=document.querySelector("#Username");
const logout= document.querySelector("#logout");
const login_btn= document.querySelector("#login-btn");
const signup_btn= document.querySelector("#signup-btn")
const carticon= document.querySelector("#cart-icon");
const cartcount= document.querySelector("#cart-count");
let menubar = document.getElementById("menubar-div");
let mycart = document.getElementById("mycart");
let search_box=document.getElementById("search-div");
let button_box=document.getElementById("button-div");
let menubarSpan=document.getElementById("menubar-span")




menubar.onclick=function(){
   menubar.classList.toggle("active")
   mycart.classList.toggle('active');
   search_box.classList.toggle('active')
   brows_btn.classList.toggle('active')
   button_box.classList.toggle('active');
   menubarSpan.classList.toggle('active');
}




brows_btn.onclick = function(){
   brow_list.classList.toggle('active');

}


cartcount.innerHTML=cartdata.length;
let userdata = JSON.parse(localStorage.getItem("userdata"))

let showbook=(data)=>{
 console.log(data)
 let name = document.createElement('h1');
 let author = document.createElement('h2');
 let category = document.createElement('h3')
 let date = document.createElement('h4');
 let image= document.createElement('img');
 let discription = document.createElement('p');
 let publisher = document.createElement('h5');
 let page = document.createElement('span');
 name.innerText=data.volumeInfo.title;
 author.innerText=data.volumeInfo.authors[0];
 category.innerText=data.volumeInfo.categories[0];
 date.innerText=data.volumeInfo.publishedDate;
 image.src = data.volumeInfo.imageLinks.smallThumbnail;
 discription.innerText=data.volumeInfo.description;
page.innerText="Page Count- "+data.volumeInfo.pageCount;
container.append(name,image,author,category,date,discription,publisher,page)

}
showbook(data)



 let arr;
 arr=JSON.parse(localStorage.getItem('wishlistItom')) || [];
//  if (JSON.parse(localStorage.getItem('wishlistItom'))==null){
//     arr=[];
//  }else{
//     arr=arr+JSON.parse(localStorage.getItem('wishlistItom'))
//  }


 let addwishlist= ()=>{
    
    arr.push(data);
    // to store data in local storage
    localStorage.setItem("wishlistItom",JSON.stringify(arr));

    window.location.href="wishlist.html"
    

    console.log(arr);
 }

 let mybook=document.querySelector("#mycart");

 mybook.onclick=()=>{
    window.location.href="wishlist.html"
 }

 brows_btn.onclick = function(){
   brow_list.classList.toggle('active');

}
logo.onclick=()=>{
   window.location.href="navbar.html"
 }



//  ======================logout detail===========

if(userdata){
   username.innerHTML=userdata.name;
   logout.style.display="block";
   Username.style.display="block"
   login_btn.style.display="none"
   signup_btn.style.display="none"
   
}

logout.onclick=()=>{
   localStorage.setItem("userdata",null)
   window.location.href="navbar.html"
}   

addtocart.onclick=()=>{
   if(!userdata)
   alert("login first")
   else
   cartdata.push(data);
   localStorage.setItem("cartItems",JSON.stringify(cartdata));
   window.location.href="addTocart.html"
}

carticon.onclick=()=>{
   if(!userdata)
   alert("login first")
   else
   window.location.href="addTocart.html"
}

buynow.onclick=()=>{
   if(!userdata)
   alert("login first");
   else
   window.location.href="payment.html"
}


