
document.querySelector("form").addEventListener("submit",submitOTP);

function submitOTP(){
    event.preventDefault();
    let box1= document.querySelector("#box1").value;
    let box2= document.querySelector("#box2").value;
    let box3= document.querySelector("#box3").value;
    let box4= document.querySelector("#box4").value;
    let flag = true;
    if(!box1 || !box2 || !box3 || !box4){
        alert("fill all input fields")
        flag =flase;
    }

if(flag){

    if(box1 == "1" && box2 == "2" && box3 == "3" && box4 == "4"){
        alert ("Payment Succesfull");
        window.location.href="navbar.html"

    }else{
        alert("wrong OTP");
    }
}
}