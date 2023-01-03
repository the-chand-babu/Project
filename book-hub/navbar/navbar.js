
let brows_btn = document.querySelector(".browse-icon");
let brow_list = document.querySelector(".browse-list");
let menubar = document.getElementById("menubar-div");
let menubarSpan=document.getElementById("menubar-span")
let search_box=document.getElementById("search-div");
let mycart = document.getElementById("mycart");
let search_bar = document.getElementById("search-bar");
const searchbtn=document.querySelector("#search-btn")
let carasoul = document.querySelector("carasoul");
let button_box=document.getElementById("button-div");
const tabBox=document.querySelector(".tabs-box");
const arrowIcons=document.querySelectorAll(".icons i");
const cartCount=document.querySelector("#cart-count")
const cartIcon=document.querySelector("#cart-icon");
const trendingbtn=document.querySelector("#trendingbtn");
const classicbtn=document.querySelector("#classicbtn");
const popularbtn=document.querySelector("#popularbtn");
const logintbn=document.querySelector("#login-btn")
const signupbtn=document.querySelector("#signup-btn");
const logo = document.querySelector("#logo")
const username=document.querySelector("#Username");
const logout= document.querySelector("#logout");


let userdata = JSON.parse(localStorage.getItem("userdata"))
console.log(userdata)


let images =['https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1212&q=80',
'https://images.unsplash.com/photo-1515098506762-79e1384e9d8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
'https://images.unsplash.com/photo-1592496431122-2349e0fbc666?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1212&q=80',
'https://images.unsplash.com/photo-1612969308146-066d55f37ccb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
'https://pyxis.nymag.com/v1/imgs/904/14f/66c66762aa1da5bcf2324a4f414d843b60-17-another-brooklyn.h473.w710.jpg'];

let img = document.getElementById('image');
const leftbtn = document.querySelector('#left-btn');
let i = 0;
leftbtn.onclick=function(){
    
    
    if(i<0){
        i=4;
        
    }
    console.log(i)
   
    img.src=images[i];
    i--;
}


let rightbtn = document.getElementById('right-btn');

rightbtn.onclick=function(){
    if(i>4){
        i=0;
    }
    img.src=images[i];
    i++;
}

const carasoultimer=()=>{
    if(i>4){
        i=0;
    }
    img.src=images[i];
    i++;
}

setInterval(carasoultimer,3000);




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


//searchbar functionality..




let getData = async ()=>{
    let res = await fetch('https://www.googleapis.com/books/v1/volumes?q=rings');
    let data =await res.json();
    
    let slider = document.querySelector(".slider");
    appendData(slider,data.items)
}

getData();

let appendData=(slider,data)=>{
    for(let i = 0; i <=4; i++){
      
       
        let div = document.createElement('div');
        let image = document.createElement('img');
        let name = document.createElement('h2');
        let year = document.createElement('p');
        let author = document.createElement('h4');
        let btn = document.createElement('button');
        btn.onclick=function(){
            showbook(data[i]);
        }

        
        name.innerText = data[i].volumeInfo.title;
        image.src=data[i].volumeInfo.imageLinks.thumbnail;
        year.innerText=data[i].volumeInfo.publishedDate;
        author.innerText=data[i].volumeInfo.authors[0];
        btn.innerText="Explore"
        


        div.append(image,name,year,author,btn);

        slider.append(div);
    }   
}


const clasicbook = async()=>{

let res = await fetch('https://www.googleapis.com/books/v1/volumes?q=classic');
let books = await res.json();
// console.log(books.items);
let container = document.querySelector('#classic-book');
appendData(container,books.items)

}

clasicbook();


const popularbook= async()=>{
    let res = await fetch('https://www.googleapis.com/books/v1/volumes?q=spider');
    let data = await res.json()
    console.log(data);
    let container=document.querySelector('#popular-book');
    appendData(container,data.items)
}

popularbook()


let showbook=(data)=>{
    
    localStorage.setItem('book_data',JSON.stringify(data));
    window.location.href="new.html"
}



let mybook=document.querySelector("#mycart");

mybook.onclick=()=>{
    if(!userdata){
        alert("login first")
    
    }
    else{
        window.location.href="wishlist.html"
    }
  

}
cartIcon.onclick=()=>{
    if(!userdata){
        alert("login first")
    
    }
    else{
        window.location.href="addTocart.html"
    }
    
}

let arr=JSON.parse(localStorage.getItem("cartItems"))||[];

cartCount.innerHTML=arr.length




trendingbtn.onclick=()=>{
  window.location.href="trending.html"

}
classicbtn.onclick=()=>{
  window.location.href="classic.html"

}
popularbtn.onclick=()=>{
  window.location.href="popular.html"

}
logintbn.onclick=()=>{
    window.location.href="login.html"
}
signupbtn.onclick=()=>{
    window.location.href="signUp.html"
}
searchbtn.onclick=()=>{
  
    let value=search_bar.value;

    localStorage.setItem('searchbooks',JSON.stringify(value));
    window.location.href="searchpage.html"
    console.log(value)
}
logo.onclick=()=>{
    window.location.href="navbar.html"
}


    if(userdata){
        username.innerHTML=userdata.name;
        logout.style.display="block";
        Username.style.display="block"
        logintbn.style.display="none"
        signupbtn.style.display="none"
        
    }

    logout.onclick=()=>{
        localStorage.setItem("userdata",null)
        window.location.href="navbar.html"
    }    