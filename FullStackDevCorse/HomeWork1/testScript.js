// 2.2 Capitalize the first letter of each word in a string
const capitalizeWords = (str) => {
    let tempWord = null;
    let newWordFlag = false;

    for (let i = 0; i < str.length; i++) {

        if (i == 0) {
            let temp = str.codePointAt(i);
            count = 122 - temp;
            newStr = String.fromCharCode(90 - count);
            tempWord = newStr;
        } else {
            if (str[i - 1] == " ") {
                let temp = str.codePointAt(i);
                count = 122 - temp;
                newStr = String.fromCharCode(90 - count);
                tempWord += newStr;
            } else {
                tempWord += str[i];
            }
        }
    }
    return tempWord;
};

let str = "hanan nicole kalman";
console.log(capitalizeWords(str));

