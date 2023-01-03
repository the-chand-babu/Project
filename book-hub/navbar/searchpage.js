let search_bar = document.getElementById("search-bar");
const search_btn=document.querySelector("#search-btn")
const container= document.querySelector(".container");
let mybook=document.querySelector("#mycart");
let brows_btn = document.querySelector(".browse-icon");
let brow_list = document.querySelector(".browse-list");
let trendingbtn= document.querySelector("#trendingbtn");
 let classicbtn=document.querySelector("#classicbtn");
 let popularbtn = document.querySelector("#popularbtn");
 const login_btn= document.querySelector("#login-btn");
 const sign_upbtn=document.querySelector("#signup-btn");
 const cart_icon= document.querySelector("#cart-icon")
 const cartCount=document.querySelector("#cart-count")
 const logo = document.querySelector("#logo")

const query = JSON.parse(localStorage.getItem("searchbooks"));


let  getData= async(query)=>{
    let response= await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
    let data = await response.json();
    console.log(data);
    appendData(data.items)
 }

 getData(query);

 let appendData = (data)=>{
    data.forEach(element => {
        const div =document.createElement("div");
        const img= document.createElement("img");
        const year =document.createElement("span");
        const author=document.createElement("h2");
        const title=document.createElement("h1");
        const explorebtn= document.createElement("button");

        explorebtn.innerHTML="Explore";
        
        explorebtn.onclick = ()=>{
            alldetails(element);
        }

        img.src= element.volumeInfo.imageLinks.thumbnail;
        author.innerText= element.volumeInfo.authors;
        year.innerText= element.volumeInfo.publishedDate;
        title.innerText= element.volumeInfo.title;

        div.append(img,title,author,year,explorebtn);
        container.append(div);


    });
 }

 search_btn.onclick=()=>{
  
    let value=search_bar.value;

    localStorage.setItem('searchbooks',JSON.stringify(value));
    window.location.href="searchpage.html"
    console.log(value)
}
mybook.onclick=()=>{
    window.location.href="wishlist.html"
 }
 brows_btn.onclick = function(){
    brow_list.classList.toggle('active');

}
classicbtn.onclick=()=>{
    window.location.href="classic.html"
  }
  popularbtn.onclick=()=>{
    window.location.href="popular.html"
  }
  
  trendingbtn.onclick=()=>{
    window.location.href="trending.html"
  }
  login_btn.onclick=()=>{
    window.location.href="login.html"
 }
 sign_upbtn.onclick=()=>{
    window.location.href="signUp.html"
 }
 logo.onclick=()=>{
    window.location.href="navbar.html"
 }

 cart_icon.onclick=()=>{
    window.location.href="addTocart.html"
 }
 let arr=JSON.parse(localStorage.getItem("cartItems"))||[];
 
 cartCount.innerHTML=arr.length
  

