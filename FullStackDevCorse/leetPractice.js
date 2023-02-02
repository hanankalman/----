let outPut = [];// = [[0],[0]]//, rowTwo = [], rowThree = [], rowFour = [];
let input = "PAYPALISHIRING";
let numRows = 4;
//outPut[0][0] = input[0];
//console.log(input.length);

for (let i = 0; i < input.length; i++) { // rows
    for (let j = 0; j < numRows; j++) { // columns
        outPut[j] = input[j];
    }
}


console.log(outPut);

