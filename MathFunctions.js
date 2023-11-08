function MathMathod(){
    //var y = Math.ceil(10.454);
    //rounds up to the nearest integer.

    //var y = Math.floor(-2.6);
    //rounds down to the nearest integer.

    //var y = Math.max(1,2,3,4,5,-6,-7,-9,45);
    //find the maximum value among a list of numbers 
    
    //var y = Math.min(1,2,3,4,5,-6,-7,-9,45);
    //find the min value among a list of numbers 

    //var y = Number.isFinite(-9);
    //var y = Number.isFinite(12/0);
    //var y = Number.isFinite(NaN);
    //isFinite is a built-in JavaScript function that checks
    // whether a given value is a finite number. 
    //It returns true if the value is a finite number 
    //(including both positive and negative numbers, as well as zero) 
    //and false if the value is not a finite number or is one of the special values NaN or Infinity.

    //var y = Number.isInteger("5");
    //var y = Number.isInteger(5);
    //var y = Number.isInteger(-5);
    //var y = Number.isInteger(12/0);
    //Number.isInteger value is return always a integer value. if Integer then return true and 
    //if value not a integer then return false.

    //var y = parseFloat("12");
    //var y = parseFloat("12.56");
    //var y = parseFloat("45 meters");
    //var y = parseFloat("-42");
    //used to parse a string and
    //convert it to a floating-point number (a number with a decimal point).
     
    //var y = parseInt("12");
    //var y = parseInt("12.56");
    //var y = parseInt("45 meters");
    //var y = parseInt("-42");
    //used to parse a string and 
    //convert it to an integer (a whole number without a decimal point)

    //var a = 98.456123;
    //var y = a.toFixed(10);
    //used to format a number as a string with a specified number of decimal places
    
    
    //var y = parseInt(Math.random()*6 +2);
    
    var y = Number.toString(42);

    var x = document.getElementById('text').value;
    document.getElementById('ceil').innerHTML = x +" : "+""+ y;
}