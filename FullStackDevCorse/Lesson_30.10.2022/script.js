const arr1 = [1, 2, 3, 5, 4];
const arr2 = [1, "2", 3, "4", 5];
const arr3 = [1, "2", 3, "4", 5, 6, 7, 8];

//הדפס את המשתנה הרביעי במערך שגודלו שמונה אלמנטים (לבחירתכם).
console.log(arr3[3]);

//הדפס את גודל המערך והדפס בנוסף את האלמנט האחרון.
console.log(arr3.length, arr3[7]);

//החלף את המשתנה השלישי בשמך הפרטי.
arr3[2] = "hanan";
console.log(arr3[2]);

//הוסף אלמנט חדש למערך (לבחירתכם).
arr3.push("kalman");
console.log(arr3[8]);


// אובייקטים
const date = new Date();
console.log(date);

