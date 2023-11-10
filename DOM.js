/*
function ChangeColor(){
 var color = document.getElementsByClassName("demo")[0];
 var color1 = document.getElementsByClassName("demo")[1];
 var color2 = document.getElementsByClassName("demo")[2];
 var color3 = document.getElementsByClassName("demo")[3];
 color.style.background = "red";
 color1.style.background = "orange";
 color2.style.background = "";
 color3.style.background = "black";
}
*/
function Enter(){
 var enter=document.getElementsByClassName("demo")[0];
 enter.style.background="red";
 enter.style.fontSize="25px"
}
function Leave(){
 var leave=document.getElementsByClassName("demo")[0];
 leave.style.background="blue";
 leave.style.fontSize="15px"
}
function enterDiv(){
 var fenter = document.getElementsByTagName('div')[1];
 fenter.style.borderRadius="20px"
 fenter.style.backgroundColor="orange";
 fenter.style.fontFamily="fantasy"
}
function leaveDiv(){
 var fleave = document.getElementsByTagName('div')[1];
 fleave.style.borderRadius="0px";
 fleave.style.backgroundColor="blueviolet";
 fleave.style.fontFamily="'Courier New', Courier, monospace"
}
function tag(){
 var query = document.querySelector("h2");
 var query1 = document.querySelector("h3");
 var query2 = document.querySelector("h4");
 query.textContent="mahesh kumawat";
 query.style.backgroundColor="black"
 query.style.color="white";
 query1.textContent="rajesh kumawat";
 query1.style.backgroundColor="black"
 query1.style.color="white";
 query1.style.fontSize="30px";
 query2.textContent="prince kumawat";
 query2.style.backgroundColor="black"
 query2.style.color="white";
 query2.style.fontSize="35px"

} 
function btn(){
 var ab = prompt("type your partner name");
 document.getElementById("mk").innerHTML=ab;
 document.querySelector('.demo1').style.backgroundColor="skyblue";
 document.getElementById("mk").style.color="white";
 document.getElementById("mk").style.paddingLeft="120px";
 document.getElementById("mk").style.fontSize="30px"
}


