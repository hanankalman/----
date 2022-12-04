let userData;
//document.getElementById("myImg").src = "../static/prty.svg";

//document.getElementById("myHome").textContent = "Welcome User";

let json = fetch("../data_base.json")
    .then(Response => Response.json())
    .then(data => {
        console.log(data);
        userData = data;
    });

function myLoadFunc() {
    document.getElementById("myImg").src = "../static/prty.svg";
    document.getElementById("myHome").textContent = "Welcome User";
}

function login() {
    let err;
    let uName = document.getElementById("uName").value;
    let psw = document.getElementById("psw").value;

    if (uName === userData.test_user.username && psw === userData.test_user.password) {
        //document.getElementById("main").textContent = "Welcome " + uName;
        //document.getElementById("myImg").src = "../static/prty.svg";
        location.assign("http://127.0.0.1:5500/FullStackDevCorse/Lesson_01.12.2022/src/index.html");
        //document.getElementById("myHome").textContent = "Welcome " + uName;
        //document.getElementById("myImg").src = "../static/prty.svg";

        // document.getElementById("main").innerText = "Welcome " + uName;
        // location.reload();
    } else {
        if (uName != userData.test_user.username) {
            err = "wrong user name";
        }
        if (psw != userData.test_user.password) {
            err += " wrong password";
        }
        alert(err);
    }

}



