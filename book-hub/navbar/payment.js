const submitbtn=document.querySelector("#submit-btn");

document.querySelector("form").addEventListener("submit",payment);


function payment(){
    event.preventDefault();
    let cardNum=document.querySelector("#cardnum").value;
    let cardEx=document.querySelector("#expiry").value;
    let cardCvv= document.querySelector("#cvv").value;
    let cardname = document.querySelector("#cardname").value;


    let flag = true;
    if(!cardNum || !cardEx|| !cardCvv|| !cardname ){
        alert("fill all the input Fields")
       flag = false;
       return;
    }
    if(flag){
        if(cardNum == 12345678910 && cardEx == "01/01/2022" && cardCvv == "100"){
            
            window.location.href ="otp.html"
        }else{
            alert("something went wrong")
        }
}
}

// submitbtn.onclick=()=>{

//     window.location.href="otp.html"
// }