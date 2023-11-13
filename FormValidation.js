function myfun(){
 var fname = document.getElementById("fname").value;
 var sname=document.myform.sname.value;
 var email=document.myform.email.value;
 var pwrd=document.myform.pwrd.value;
 var pwrd1=document.myform.pwrd1.value;
 var number=document.myform.num.value;
 if(fname == "" || fname == null){
  alert("Enter your first name")
  return false;
 }else if(sname == "" || sname == null){
  alert("Please enter the last name");
  return false;
 }else if(email=="" || email == null){
  alert("Please enter the mail id")
  return false;
 }else if(pwrd.length<8 || pwrd==null){
  alert("enter the password 8 characters");
  return false;
 }else if(number.length<10 || number.length>13 || isNaN(number) ){
  alert("Enter valid numerical value or value will be 10 and less then 13")
  return false;
 }
 else if(pwrd==pwrd1){
  return true;
 }else{
  alert("Entered passwords do not match!");
  return false;
 }
}