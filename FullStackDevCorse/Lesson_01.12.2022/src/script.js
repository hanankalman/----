let userData;

let json = fetch("../data_base.json")
    .then(Response => Response.json())
    .then(data => {
        console.log(data);
        userData = data;
    });


function myLoadFunc() {
    let p1logFlag = localStorage.getItem("p1loginFlag");
    let p1logUser = localStorage.getItem("p1loginUser");
    let p2logFlag = localStorage.getItem("p2loginFlag");
    let p2logUser = localStorage.getItem("p2loginUser");
    //let logFlag = sessionStorage.getItem("loginFlag");
    //let logUser = sessionStorage.getItem("loginUser");

    if (p1logFlag == "true") {
        document.getElementById("myImg").src = "../static/prty.svg";
        document.getElementById("myHome").textContent = `${p1logUser} Is logged In`;
        document.getElementById("logOff").style.display = "block"
        //document.getElementById("logIn").textContent = "";
    } else {
        if (p2logFlag == "true") {
            document.getElementById("myImg").src = "../static/prty.svg";
            document.getElementById("myHome").textContent = `${p2logUser} Is logged In`;
            document.getElementById("logOff").style.display = "block"
            //document.getElementById("logIn").textContent = "";
        } else {
            if (p1logFlag == "true" && p2logFlag == "true") {
                document.getElementById("myHome").textContent = `${p1logUser} VS ${p2logUser}`;
                document.getElementById("logIn").textContent = "";
            }
        }
    }


}

function login() {
    let err;
    let uName = document.getElementById("uName").value;
    let psw = document.getElementById("psw").value;
    localStorage.setItem("p1loginFlag", false);
    localStorage.setItem("p2loginFlag", false);


    if (uName === userData.player1.username && psw === userData.player1.password) {
        localStorage.setItem("p1loginFlag", true);
        localStorage.setItem("p1loginUser", uName);
        //sessionStorage.setItem("loginFlag", true);
        //sessionStorage.setItem("loginUser", uName);
        location.assign("http://127.0.0.1:5500/FullStackDevCorse/Lesson_01.12.2022/src/index.html");

    } else {
        if (uName != userData.player1.username) {
            err = "wrong user name";
        }
        if (psw != userData.player1.password) {
            err += " wrong password";
        }
        alert(err);
        localStorage.setItem("p1loginFlag", false);
        //sessionStorage.setItem("loginFlag", false);
    }
    if (uName === userData.player2.username && psw === userData.player2.password) {
        localStorage.setItem("p2loginFlag", true);
        localStorage.setItem("p2loginUser", uName);
        //sessionStorage.setItem("loginFlag", true);
        //sessionStorage.setItem("loginUser", uName);
        location.assign("http://127.0.0.1:5500/FullStackDevCorse/Lesson_01.12.2022/src/index.html");
    } else {
        if (uName != userData.player2.username) {
            err = "wrong user name";
        }
        if (psw != userData.player2.password) {
            err += " wrong password";
        }
        alert(err);
        localStorage.setItem("p2loginFlag", false);
        //sessionStorage.setItem("loginFlag", false);
    }
}

function logoff() {
    //localStorage.setItem("loginFlag", false);
    //sessionStorage.setItem("loginFlag", false);
    localStorage.setItem("p1loginFlag", false);
    localStorage.setItem("p1loginUser", null);
    localStorage.setItem("p2loginFlag", false);
    localStorage.setItem("p2loginUser", null);
    location.assign("http://127.0.0.1:5500/FullStackDevCorse/Lesson_01.12.2022/src/index.html");
}

myLoadFunc();






