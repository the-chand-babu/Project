 


let containerBox= document.querySelector(".container");
let data= JSON.parse(localStorage.getItem('cartItems'))||[];

let total=document.querySelector('#price');
let buybtnBox=document.querySelector(".buybtnBox");
let home = document.querySelector("#login-btn");
let logout=document.querySelector("#signup-btn");
const logo = document.querySelector("#logo");
const username = document.querySelector("#username")

let userdata = JSON.parse(localStorage.getItem("userdata"));
username.innerText=userdata.name




let showdata=()=>{
    containerBox.innerHTML=null;
    data.forEach((element,index) => {
      
        let value=1;
        data[index]["qunatity"]=1;
        data[index]["price"]=100;

        let div= document.createElement("div");
        let title=document.createElement("h1");
        let img=document.createElement("img");
        let author=document.createElement("h2")
        let year=document.createElement("h3");
        let buttonP=document.createElement("button");
        let buttonM=document.createElement("button");
        let txtspan=document.createElement("span");
        txtspan.classList.add("textspan");
        let removebtn=document.createElement("button");
        removebtn.classList.add("removebtn");
        let bookPrice=document.createElement("span");
        bookPrice.classList.add("pricespan")
        let pricebox=document.createElement("div");
        
        removebtn.onclick=()=>{
            delBook(index);
            calculate();
           
        }

        buttonP.onclick=()=>{
            value++;

            txtspan.innerHTML=value;
            data[index]["qunatity"]++;
          localStorage.setItem("cartItems",JSON.stringify(data));
          calculate();
     
            
        }
        buttonM.onclick=()=>{
         if(value>1){
            value--;
            txtspan.innerHTML=value;
            data[index]["qunatity"]--;
          

            localStorage.setItem("cartItems",JSON.stringify(data));
            calculate()

         }
           
     
            
       
        }
     

        bookPrice.innerText=`price ${element.price} only`
        removebtn.innerHTML="Remove Book"
        txtspan.innerText=element.qunatity;
        buttonM.innerText ="-";
        buttonP.innerText ="+";
        title.innerText =element.volumeInfo.title;
        img.src =element.volumeInfo.imageLinks.thumbnail;
        author.innerText=element.volumeInfo.authors[0];
        year.innerHTML=element.volumeInfo.publishedDate;
        pricebox.append(bookPrice,buttonM,txtspan,buttonP)
        div.append(img,title,author,year,pricebox,removebtn)

        containerBox.append(div);
        // total+=smalltp;
        
       

    });
    // console.log(total)
    buybtnBox.innerHTML=null;

    let buybtn=document.createElement("button");
    buybtn.innerText="Buy now";
    buybtnBox.append(buybtn);
    // containerBox.append(buybtn);
    buybtn.onclick=()=>{
      buyitem();
      window.location.href="payment.html";
    }
    // console.log(total+smalltp)

}
showdata();
let delBook=(index)=>{
    data.splice(index,1);
    localStorage.setItem("cartItems",JSON.stringify(data));
    showdata(data);

}

let calculate=()=>{
    let bag = 0;
    console.log(data)
  data.forEach((ele)=>{
    // console.log(ele.qunatity,ele.price)
bag+=((+ele.price)*(+ele.qunatity))
  })
  
  total.innerHTML=bag;
}
calculate();

let buyitem=()=>{
  
}
logo.onclick=()=>{
  window.location.href="navbar.html"
}



home.onclick=()=>{
window.location.href="navbar.html"
}
logout.onclick=()=>{
  localStorage.setItem("userdata",null);
  window.location.href="navbar.html"
}




