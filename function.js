/*function hello(a,b){
    //var a =544; 
    //var b =45;
    var c = a+b;
    document.write("value of a",a,"<br>");
    document.write("vaule of b", b,"<br>")
    document.write("add",":",c)
}*/
/*
function hello(){
    var a = 4;
    var b =5;
    var c= a+b;
    return c;
}
document.write(hello());*/

//task...

// 1. Write a program in javascript to find the square of any number using the function..
/*
function hello(){
    var a = 4;
    b=a*a;
    document.write("squre of the number :",b);
}*/
/*
function hello(a){
    var b = a*a;
    document.write( "squre of the number :",b);
}*/
/*
function hello(a){
    var b=a*a;
    return b;
}
document.write("squre of the number :",hello(6));*/

// 2. Write a program in javascript to swap two numbers using a function.

/*function hello(){
    var a=2;
    var b=3;
    var c=a;
    a=b; 
    b=c; 
    document.write("after swap the number of a : ",a,"<br>");
    document.write("after swap the number of b : ",b)
    
}*/
/*
function hello(a,b){
    var c=a;
    a=b;
    b=c;
    document.write("after swap the number of a : ",a,"<br>");
    document.write("after swap the number of b : ",b)
}*/
/*
function hello(a,b){
    var c=a;
    a=b;
    b=c;
    var d = [a,b];
    return d; l
    
}
document.write(hello(2,3))*/

//3. Write a program in javascript to check if a given number is even or odd using the function.

/*function hello(){
    var a = 2;
    if(a%2===0){
        document.write("this value is even");
    }else{
        document.write("this value is odd");
    }
}
hello();*/
/*function hello(a){
    if(a%2===0){
        document.write("this value is even")
    }else{
        document.write("this value is odd");
    }
}
hello(3);*/
/*
function hello(){
    var b =45;
    return b;
    
}
if(b%2===0){
    document.write("this is even");
}else{
    document.write("this is odd")
}*/

//4. Write a program in javascript to print all perfect numbers in a given range using the function
//5. Write a program in javascript to print sum of all  numbers in a given range using the function.

/*function sum(){
    var sum = 0;
    for(var i=0; i<=10; i++){
        sum+=i;
        document.write("sum of the value",sum,"<br>")
    }
}
sum();*/
/*
function sum(sum){
    for(let i=0; i<10
        ; i++){
        sum+=i;
        document.write("sum of the value is :",sum, "<br>")
    }
}
sum(0);*/
/*function sum(){
    sum=0;
    for(let i=0; i<=10; i++){
        sum+=i;
    }
    return sum;
}
document.write(sum());*/

//6.. Write a program in javascript to print sum of all even  numbers in a given range using the function.

/*function sumEven(){
    sumEven = 0;
    for(let i=0; i<=10; i=i+2){
        sumEven+=i;
        document.write("sum of the even number : ",sumEven,"<br>")
    }
}
sumEven();*/

/*function sumEven(sumEven){
    for(let i=0; i<=10; i=i+2){
        sumEven+=i;
        document.write("sum of the even number :", sumEven,"<br>")
    }
}
sumEven(0);*/
/*
function sumEven(sumEven){
    for(let i=0; i<=10; i=i+2){
        sumEven+=i;
        
    }
    return sumEven;
}
document.write(sumEven(0));*/

//7. Write a program in javascript to print sum of all odd numbers in a given range using the function.

/*function sumOdd(){
    sumOdd = 0;
    for(let i=1; i<=10; i=i+2){
        sumOdd+=i;
        document.write("sum of the odd number : ",sumOdd, "<br>")
    }
}
sumOdd();*/

/*function sumOdd(sumOdd){
    //sumOdd = 0;
    for(let i=1; i<=10; i=i+2){
        sumOdd+=i;
        document.write("sum of the odd number : ",sumOdd, "<br>")
    }
}
sumOdd(0);*/

function sumOdd(sumOdd){
    //sumOdd = 0;
    for(let i=1; i<=10; i=i+2){
        sumOdd+=i;
        
    }
    return sumOdd;
}
document.write(sumOdd(0));

