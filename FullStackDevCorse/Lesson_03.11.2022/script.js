
// הדפס האם עשר גדול מפאי.
let number = (10 > Math.PI);
console.log(number); // true

// עגל את פאי למספר השלם הקרוב ביותר אליו.
number = Math.round(Math.PI);
console.log(number); // 3

// צור משתנה בוליאני ובדוק האם 15 שונה מ10.
number = (10 != 15);
console.log(number); // true

// צור משתנה בוליאי האם 50 שווה ל 50.
number = (50 == 50);
console.log(number); // true

// צור משתנה בוליאני האם מינוס 18 קטן מ13.
number = (-18 < 13);
console.log(number); // true

// צור פונקציה עם הפרמטר x בדקו והדפיסו אמת/שקר האם x שונה מ 30.
function myFunc(x) {
    let number = (x == 30);
    console.log(number);
}
myFunc(30);

