
let brows_btn = document.querySelector(".browse-icon");
let brow_list = document.querySelector(".browse-list");
let menubar = document.getElementById("menubar-div");
let mycart = document.getElementById("mycart");
let search_bar = document.getElementById("search-bar");
let carasoul = document.querySelector("carasoul");



let images =['https://media.istockphoto.com/id/1132562466/photo/books-collection.jpg?s=1024x1024&w=is&k=20&c=huoXNbGt9aF1WnA661XRR0bDOHqHuKBDauWWpVUuAZY=',
'https://media.istockphoto.com/id/1016131800/photo/school.jpg?b=1&s=170667a&w=0&k=20&c=zmhNTtanKJ9uwykjgkOhy8EaySnLXHCnTp6bUDQ1j_o=',
'https://www.galvestonhistorycenter.org/images/_full/Books_ForThumbnailAndCollectionsPage.jpg',
'https://www.rarebooksocietyofindia.org/photo_archive/196174216674_10153018732941675',
'https://s24193.pcdn.co/wp-content/uploads/2016/09/rare-book-collection-entity-1320x720.jpg'];

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
    search_bar.classList.toggle('active');
}




brows_btn.onclick = function(){
    brow_list.classList.toggle('active');

}