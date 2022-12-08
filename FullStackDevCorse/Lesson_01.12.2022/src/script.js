let userData;

let json = fetch("../data_base.json")
    .then(Response => Response.json())
    .then(data => {
        console.log(data);
        userData = data;
    });


function myLoadFunc() {
    let logFlag = sessionStorage.getItem("loginFlag");
    let logUser = sessionStorage.getItem("loginUser");

    if (logFlag == "true") {
        document.getElementById("myImg").src = "../static/prty.svg";
        document.getElementById("myHome").textContent = `Welcome back ${logUser}`;
  
    }
}

function login() {
    let err;
    let uName = document.getElementById("uName").value;
    let psw = document.getElementById("psw").value;

    if (uName === userData.test_user.username && psw === userData.test_user.password) {
        sessionStorage.setItem("loginFlag", true);
        sessionStorage.setItem("loginUser", uName);
        location.assign("http://127.0.0.1:5500/FullStackDevCorse/Lesson_01.12.2022/src/index.html");
    } else {
        if (uName != userData.test_user.username) {
            err = "wrong user name";
        }
        if (psw != userData.test_user.password) {
            err += " wrong password";
        }
        alert(err);
        sessionStorage.setItem("loginFlag", false);
    }
}

function logoff(){
    sessionStorage.setItem("loginFlag", false);
    location.assign("http://127.0.0.1:5500/FullStackDevCorse/Lesson_01.12.2022/src/index.html");
}

myLoadFunc();






