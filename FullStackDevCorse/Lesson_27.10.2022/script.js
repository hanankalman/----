// console.log('hello world');
// let x=8, y=5, z=x*y;
// console.log(z);
// let movieName="spiderman", movieRating = 6, movieDirectot="sam raimy";
// let result = "Movie Name = " + movieName + ", Movie Rating = " + movieRating + ", Movie Director = " + movieDirectot;
// console.log(result);

// let num1 = 15;
// let num2 = 10;

// function _calcNum(num1, num2) {
//     console.log(num1 + num2)
//     return num1 + num2;
// };

// _calcNum(num1, num2);

// function _calNum(x, y) {
//     return (x + y);
// };

// function _calc() {
//     let num1 = prompt("First Number");
//     let num2 = prompt("Second Number");

//     alert("hello world");
//     alert(_calNum(number(num1), number(num2)));
//     // alert(`${num1} + ${num2} = ${_calNum(num1,num2)}`);
// };

// _calc();

// צור פונקציה אשר תקבל את x כפרמטר ותכפיל אותו ב 53, הצג את התוצאה למסך.
let num;
function _multiply53(num) {
    console.log(num * 53);
}

_multiply53(10);

// צור פונקציה אשר תקבל שני פרמטרים x,y ותחשב את x בחזקתy , הצג את התוצאה למסך.
let x, y;
function _myPower(x, y) {
    console.log(x ** y);
}
_myPower(2, 2);

//צור פונקציה אשר מקבלת חמישה קלטים מהמשתמש והדפס את תוצאתם למסך.

function _call5Times() {
    let num1, num2, num3, num4, num5;
    num1 = prompt("Enter Data:");
    num2 = prompt("Enter Data:");
    num3 = prompt("Enter Data:");
    num4 = prompt("Enter Data:");
    num5 = prompt("Enter Data:");
    alert(num1 + " , " + num2 + " , " + num3 + " , " + num4 + " , " + num5);
};
_call5Times();

//צור פונקציה אשר מקבלת קלטים מהמשתמש: fName,lName,age הצג למסך כך:

function _showMyDetails() {
    let fName = prompt("Enter First Name");
    let lName = prompt("Enter Last Name");
    let age = prompt("Enter Age");
    alert("Your First Name Is: " + fName + "\nYour Last Name Is: " + lName + "\nYour Age Is: " + age);
}
_showMyDetails();
