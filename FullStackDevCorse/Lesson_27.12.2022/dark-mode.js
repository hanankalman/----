// build a js script using JQuery to add a toggle botton that changes any page to dark-mode when pressed.
// try your "dark-mode.js" on index1.html, index2.html and index3.html without changing the html files!


$(document).ready(function () { // this is a function that will run when the page is ready
    // code goes here
    $('body').html('<div class="container"><h1>Dark Mode</h1><button id="btn">Dark Mode</button></div>')



    $("#btn").click(function () { // this is a function that will run when the button is clicked
        // code goes here
       // $('[text="Dark Mode"]').css('background-color', 'black');
        $(".container").toggleClass("dark_mode");
        $("#btn").toggleClass("dark_mode");//.text("Light Mode 🌕");
        //$(".container").css('background-color', 'black').css('color', 'white')
        //$("#btn").css('background-color', 'gray').css('color', 'white').text("Light Mode 🌕"); // this will show the element with the class of login
    });
});


// let darkMode = ()=> {
//     $('nav').append('<button id="btn"></button>');
//     $("#btn").css("margin-top", "18px");
//     $("#btn").click(function(){
//         let mode = $("#btn").text();
//         localStorage.setItem("mode", mode);
//         $("body,h1,nav,nav,a,header").toggleClass("darkMode");
//         if(mode == "Dark Mode")  
//             $("#btn").text("light mode");
//         else
//             $("#btn").text("Dark Mode");
        
        
//         // $("#btn").toggleClass("buttonLightMode")
//     })
//     }
     
//     darkMode();

//     // let mode = () => {
//     if(localStorage.getItem("mode") == "Dark Mode"){
//         $("body,h1,nav,nav,a,header").addClass("darkMode");
//         // $("#btn").addClass("buttonLightMode")
//         $("#btn").text("light mode");
//         }
//     else {
        
//         $("body,h1,nav,nav,a,header").removeClass("darkMode");
//         // $("#btn").removeClass("buttonLightMode")
//         $("#btn").text("Dark Mode");

//         }
