const linkSignUP = document.querySelector("#linkSignUP")


document.querySelector("form").addEventListener("submit", login);
function chaneBTN() {

    let btn = document.querySelector("#btn");
    btn.style.backgroundColor = "yellow";


}
let dataArr;
if (JSON.parse(localStorage.getItem("SignUp")) == null) {
    dataArr = [];
} else {
    dataArr = JSON.parse(localStorage.getItem("SignUp"));

}

let email = "";
let password = "";
function login() {
    event.preventDefault();
    email = document.querySelector("#email").value;
    password = document.querySelector("#password").value;

    checkpasword(dataArr, password, email);


}



function checkpasword(dataArr, password, email) {
    let flag = false;

    if (dataArr.length > 0) {

        dataArr.forEach(function (elem) {
            console.log(elem.pasword, elem.elem);
            if (elem.pasword == password && elem.email == email) {
                flag = true;

                localStorage.setItem("userdata", JSON.stringify(elem));
                console.log(elem)
                // return;

            }
        })
    }

    if (dataArr.length == 0) {
        alert("You dont have account please signUP")
    } else {
        if (flag) {
            alert("login success")
            window.location.href="navbar.html"
        } else {
            alert("Maybe you dont have acount either check email and password");
        }
    }

}
linkSignUP.onclick = () => {
    window.location.href = "signUp.html"
}
