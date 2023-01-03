 let container= document.querySelector(".container");
 let brows_btn = document.querySelector(".browse-icon");
 let browse_list= document.querySelector(".browse-list");
 let mycart=document.querySelector("#mycart");
 const login_btn= document.querySelector("#login-btn");
 const sign_upbtn=document.querySelector("#signup-btn");
 const cart_icon= document.querySelector("#cart-icon");
 const cartCount=document.querySelector("#cart-count")
 const logo = document.querySelector("#logo")
 const username=document.querySelector("#Username");
 const logout= document.querySelector("#logout");
 const menubardiv= document.querySelector("#menubar-div")
const list =document.querySelector("#list")

menubardiv.onclick=()=>{
   list.classList.toggle("active")
   }

 let userdata = JSON.parse(localStorage.getItem("userdata"))


 let  getData= async(query)=>{
    let response= await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
    let data = await response.json();
    console.log(data);
    appendData(data.items)
 }

 
 getData("romance");
 getData("action");
 getData("drama");

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
 let alldetails =(element)=>{
    localStorage.setItem('book_data',JSON.stringify(element));
    window.location.href="new.html"
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
 

 
brows_btn.onclick = function(){
   browse_list.classList.toggle('active');

}
mycart.onclick=()=>{
   window.location.href="navbar.html"
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
// =================================logout=====================

if(userdata){
   username.innerHTML=userdata.name;
   logout.style.display="block";
   Username.style.display="block"
   login_btn.style.display="none"
   sign_upbtn.style.display="none"
   
}

logout.onclick=()=>{
   localStorage.setItem("userdata",null)
   window.location.href="navbar.html"
}    
// =============================================================