const float_precision = 150; //global pollution
/*
* @output: string
* Note: whole part is an INTEGER division (32/64bit)
*/
function bcdiv(num, divisor, precision) {
    precision = precision || float_precision;
    var r=Math.floor(num/divisor);
    if (num == divisor) return r; // To be === or not to be strict?
    var p=0;
    r+='.'; // look at the little bug
    while ((num=num%divisor*10) !== 0) { //big ugly hogging loop
        r+=Math.floor(num/divisor);
        if (++p == precision) break;
    }
    return r;
}

/*
WTF?
Number.prototype.bcdiv = function(n){
    return bcdiv(this, n);
}
Math.proto... ?
*/

//console.log(bcdiv(process.argv[2], process.argv[3]));
