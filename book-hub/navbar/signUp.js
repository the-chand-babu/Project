



let userName = document.querySelector("#name").value;
let emailID = document.querySelector("#email").value;
let UserPasword = document.querySelector("#Pasword").value;
document.querySelector("form").addEventListener("submit",SignUP);
if(JSON.parse(localStorage.getItem("SignUp"))== null){
    DataArr=[];
}else{
let DataArr=JSON.parse(localStorage.getItem("SignUp"));
}


function SignUP(){
let userName = document.querySelector("#name").value;
let emailID = document.querySelector("#email").value;
let UserPasword = document.querySelector("#Pasword").value;
event.preventDefault();


let obj = {
    name:userName,
    email:emailID,
    pasword:UserPasword,
};
let flag = true;
if(DataArr.length == 0){
    DataArr.push(obj);
    localStorage.setItem("SignUp",JSON.stringify(DataArr));
}else{
    DataArr.forEach(function(elem){
        if(elem.email==obj.email){
          flag =false;
          
        

            
        }
    });

    if(flag){
        DataArr.push(obj);
    localStorage.setItem("SignUp",JSON.stringify(DataArr));

    }else{
        alert("u have already account")
    }


    



    let x=DataArr.find(obj.email)
        console.log(x);

}


    console.log(DataArr);


}




