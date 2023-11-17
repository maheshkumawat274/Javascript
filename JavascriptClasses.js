//class declarations 

/*class Emp{
 constructor (id ,name){
  this.age=id, 
  this.names=name
  document.write(id+name)
 }

 // details(id, name){
 //  document.write(id + "" + name)
 // }
}
new Emp(45,"maehsh");
//e1.details("45","mahesh")*/
/*
class Car{
 constructor(name,year){
  this.name=name,
  this.year=year
 }
 date(){
  var a= new Date();
  var b = a.getFullYear();
  var c = b-this.year;
  document.write(this.name+c)
 }
}
var d=new Car("mahesh",2016);
d.date();*/
 
/*
class Animal{
 constructor (name,sound){
  this.name=name,
  this.sound=sound
 }
 makeSound(){
  document.write(this.name +"says"+ this.sound)
 }
}
var dog = new Animal("dob", "woofs");
dog.makeSound(;)*/

//class declarations hoisting :"not a part of javascript"
/*var ans=Employee("Mahesh","2019btcse12")
var and=Employee("rajesh","2019btcse013")
ans.details();
and.details();
class Employee{
 constructor(name,id){
  this.name=name,
  this.id=id
 }
 details(){
  document.write(this.name + this.id)
 }
}*/

//Class expressions 

//unnamed class expressions
/*
var hello = class 
{  
  constructor(id,n) 
  {  
    this.id = id;  
    this.n = n;  
  }  
};  
document.writeln(hello.name); */
 
//Note that the name property is automatically generated for named functions or classes;

//re-declaring class

/*
var emp= class {
 constructor(name,id){
  this.name=name,
  this.id=id
 }
 det(){
  document.write(this.name+this.id+"<br>");
 }
}
var e1 = new emp("Mahesh kumawat"+"2019btcse012");
e1.det();
var e2=  new emp("rajesh", 66576176)
e2.det();
var emp=class {
 constructor(name,id){
  this.name=name,
  this.id=id
 }
 det(){
   
  document.write(this.name+this.id+"<br>");
 }
}
var e1 = new emp("Mk kumawat"+"2019btcse015");
e1.det();
var e2=  new emp("neetu", 66446634685)
e2.det();*/

 //named class expressions

 /*var employee = class Emp{
  constructor(id,name){
   this.id=id,
   this.name=name
  }
  
 }
 document.write(emp.name);*/

 class Car{
  constructor(name,year){
    this.name=name;
    this.year=year;
  }
  Age(){
    let date=new Date();
    //return date.getFullYear()-this.year;
    let ans = date.getFullYear()-this.year;
    document.write(ans);
  }
}
let obj=new Car("Ford",2016);
document.getElementById("demo").innerHTML = "My Car is " +obj.Age()+"years old.";





































