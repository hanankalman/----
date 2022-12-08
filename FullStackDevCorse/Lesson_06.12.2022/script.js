let x = 10, y = 25;

try{
    // if (x+y > 100) throw (x+y);
    // x = Number("HELLO WORLD");
    // if (x === undefined) throw (x);
    x = parse.String(x);
    if (x === undefined) throw (x);
}
catch (e){
    //console.log(`${x} + ${y} larger then 100 = ${e}`);
    console.log(`x is = ${e}`);

}