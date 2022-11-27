let conter = 0;

let buttonArray = document.querySelectorAll(".btn");

for (let i = 0; i < buttonArray.length; i++) {

    buttonArray[i].addEventListener("click", 
    function() {
        if(conter % 2 == 0) {
        buttonArray[i].textContent = "X";
        conter++;
        } else {
            buttonArray[i].textContent = "O";
            conter++;
        }
    }
);
}
/**
 * [b1,b2,b3,b4,b5,b6,b7,b8,b9]
 * */ 



function matrixBuilder(size = 3, val = 0) {
    let matrix = []
    for (let row = 0; row < size; row++) { // this for loop will run size times.
        let inner_arr = []
        for (let col = 0; col < size; col++) {
            inner_arr.push(val);
        }
        matrix.push(inner_arr)
    }
    return matrix
}

function setIndex(matrix, i, j, val) {
    matrix[i][j] = val;
}

function printMat(m) {
    /**
     * [0,0,0]
     * [0,0,0]
     * [0,0,0]
     */
    for (let i = 0; i < m.length; i++) {
        console.log(m[i]);

    }
}

function diagonal(m, val = 1) {
    /**
     *  [ val, 0, 0 ]
        [ 0, val, 0 ]
        [ 0, 0, val ] 
     *
     *  */
    for (let i = 0; i < m.length; i++) {
        setIndex(m, i, i, 1)
    }
}

function diagonalT(m) {
    /**
     *  0 0 1  (0,2) i + j = m.lengh - 1
     *  0 1 0  (1,1) j = m.lengh - 1 - i
     *  1 0 0  (2,0)
     * 
     * 0 0 0 0 0 1 (0, 5)
     * 0 0 0 0 1 0 (1, 4)
     * 0 0 0 1 0 0 
     * 0 0 1 0 0 0
     * 0 1 0 0 0 0
     * 1 0 0 0 0 0 (5 ,0)
     * 
     * 
     * 
     * */
    // for(let i = 0; i < m.length; i++){
    //     setIndex(m, i, m.length-1-i, "X")
    // }

    for (let i = m.length; i >= 0; i--) {
        setIndex(m, m.length - 1 - i, i, 1)
    }

}

function box(m, val) {
    /**
     * size = 3
     *  1 1 1
     *  1 0 1
     *  1 1 1
     * 
     * size = 6
     * (i, 0)
     * 1 1 1 1 1 1 (0, j)
     * 1 0 0 0 0 1
     * 1 0 0 0 0 1 
     * 1 0 0 0 0 1
     * 1 0 0 0 0 1
     * 1 1 1 1 1 1 (m.length - 1, j)
     *         (i, m.length -1)
     * */
    for (let i = 0; i < m.length; i++) {
        for (let j = 0; j < m.length; j++) {
            if (i == 0 || j == 0 || i == m.length - 1 || j == m.length - 1) {
                setIndex(m, i, j, 1)
            }
        }
    }
}

function row(m, val) {
    /**
     * size = 3
     *  1 1 1
     *  1 0 1
     *  1 1 1
     * 
     * size = 6
     * (i, 0)
     * 1 1 1 1 1 1 (0, j)
     * 1 0 0 0 0 1
     * 1 0 0 0 0 1 
     * 1 0 0 0 0 1
     * 1 0 0 0 0 1
     * 1 1 1 1 1 1 (m.length - 1, j)
     *         (i, m.length -1)
     * */
    for (let i = 0; i < m.length; i++) {
        for (let j = 0; j < m.length; j++) {
            if (i == 0 || j == 0 || i == m.length - 1 || j == m.length - 1) {
                setIndex(m, i, j, 1)
            }
        }
    }
}


function matrixToArray(m) {
    /** input:
     *  1 1 1
     *  1 0 1
     *  1 1 1
     * 
     */
    // output:[1, 1, 1, 1, 0, 1, 1, 1, 1]
    let arry = [];
    for (let i = 0; i < m.length; i++) {
        for (let j = 0; j < m[i].length; j++) {
            arry.push(m[i][j]);
        }
    }
    return arry;
}

function ArraytoMatrix(arr) {
    /**
     * input: [1, 1, 1, 1, 0, 1, 1, 1, 1].lengh = size**2
     * 
     * output:
     *  1 1 1
     *  1 0 1
     *  1 1 1
     * 
     * 
     */
    let size = Math.sqrt(arr.length);
    let m = matrixBuilder(size);
    for (i = 0; i < size; i++) {
        for (j = 0; j < size; j++) {
            setIndex(m, i, j, arr[i * size + j])
        }
    }
    return m;
}

function arryIndex(i, j, size) {
    return i * size + j;
}

function main() {
    let promp = "------\n------\n------";
    let m = matrixBuilder(3);
    printMat(m);
    console.log(promp);
    //diagonal(m);
    //printMat(m);

    // diagonalT(m);
    // printMat(m);
    row(m);
    printMat(m);
    // console.log(promp);
    // console.log(matrixToArray(m));
    // console.log(promp);

    // printMat(ArraytoMatrix(matrixToArray(m)));
    // console.log(promp);
    // console.log(arryIndex(2, 3, 3));
}

main()




