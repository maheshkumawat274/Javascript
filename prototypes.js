
//Constructor Function: jb apn ko ek jesi properties ke bhut sare element bnane ho ;
// A Function which whenever Invoked with "New" Keyword, Returns An Object, if we use "this" keyword inside that Function,
// It Returns An object with all of the properties and methods mentioned inside that function with this keyword,
//This Keyword : 'this'keyword in a constructor function refers to the instance of the object that is being created.
// It's a special keyword that allows to refer to the current instance of the object within the constructor.
// When we are create a new object using the 'new' keyword a constructor function, the 'this' keyword inside that constructor
// refers to the newly created object. This allows to set properties and methods on that specific instance.
//New Keyword:new keyword infront of function call makes a new blank object and returns to the variable.
// 
//prototypes:
//When we are create an object using a constructor function(a function invoked with the 'new' keyword), 
//the new object's prototype is set to the constructor function's prototype.
//Objects in JavaScript can inherit properties and methods from other objects through a prototype chain.
//When we are try to access a property or method on an object, javascript looks for that property or method on the object itself.
//if it doesn't find it, it looks up the prototype chain until it finds the property or method or reaches the end of the chain.
// why we are use this::
// Add new properties or methods to an object's prototype at any time. 


//constructor function

/*function Inp(){
 this.name="mahesh";
 this.age="45";
 this.from="jaipur";
 this.PlayingCricket="true";
}
var ans = new Inp();*/

// prototype in constructor
//example 1:

/*function Animal(name){
 this.AnimalName=name;
}
Animal.prototype.sayhello=function(){
 document.write("Name is "+ this.AnimalName)
}
var cat = new Animal("Dog");
cat.sayhello()*/

//Example 2:
/*
function Emp(name, id){
 this.FistName=name;
 this.id=id;
}
Emp.prototype.fullname=function(){
 document.write("My name is "+this.FistName+" and my id is "+this.id+"<br>")
}
var emp1 = new Emp("Mahesh Kumawat",'2019btcse012');
var emp2 = new Emp("Neetu kumawat","2019btcse145");
 emp1.fullname();
 emp2.fullname();*/
/*
 function emp (Firstname, Secondname){
  this.fname=Firstname;
  this.sname=Secondname;
  
 }
 emp.prototype.company="Hello";
 
var emp1 = new emp("mahesh","neetu");
var emp2 = new emp("mk","nk");
document.write(emp1.fname+" weds " +emp1.sname +" "+ emp1.company)*/

//explain 3:
/*
function Shape(){
 this.color="red";
}
function Square(size){
 this.size=size;
}

Square.prototype= new Shape();
//This line sets the prototype of Square to be an instance of Shape. 
//This means that any object created using the Square constructor will inherit properties and methods from the Shape constructor.
var mysquare = new Square(5);
console.log(mysquare.size)
console.log(mysquare.color)*/

//Using Object.create for Prototypal Inheritance:
/*
var Obj = {
 hello:function(){
  document.write("hello everyone !")
 }
}

 var NewObj = Object.create(Obj);
 NewObj.hello();*/

class Emp{
 constructor(name,id){
  this.name=name;
  this.id=id;
 }

}
var emp = new Emp("mk","45");
document.write(emp.name,emp.id);
