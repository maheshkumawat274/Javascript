
//In JavaScript, 
//a promise is an object that represents the eventual completion or failure of an asynchronous operationand its resulting value. 
//Promises are used to handle asynchronous operations in a more organized and manageable way compared to traditional callback functions.
// Pending: The initial state; the promise is neither fulfilled nor rejected.
// Fulfilled: The operation completed successfully, and the promise has a resulting value.
// Rejected: The operation failed, and the promise has a reason for the failure.

const myPromise = new Promise (function(resolve,reject){
 const success = true;
 if(success){
  resolve("successfully complete")
 }else{
  reject("unsuccessful")
 }
})
myPromise.then(function(result){
 console.log(result)

})
.catch(function(error){
 console.log(error)
})

//user will ask for a number between 0 se 9 and if number is below 5 above othervise rejected
var answer = new Promise ((res,rej)=>{
    var n = Math.floor(Math.random()*10);
    if(n<5){
        return res();
        
    }else{
        return rej();
    }
})
answer.then(function(){
    console.log("above")
})
.catch(function(){
    console.log("rejected")
})

//chlo khelne chlte h
//chlo toss kro ab
//bat first
//batting ke liy chlo
//century maro
//chlo ab bowlling kro
//chlo ab party krte h
var ans = new Promise((res,rej)=>{
 return res("chlo khelne chlte h");
})
var p1 = ans.then((data)=>{
 document.write(data+"<br>");
 return new Promise(function(res,rej){
     return res("chlo toss kro ab")
 })
})
var p2 = p1.then(function(data){
 document.write(data +"<br>");
 return new Promise (function(res){
     return res("bat first")
 })
})
var p3 = p2.then(function(data){
 document.write(data +"<br>");
 return new Promise((res)=>{
     return res("batting ke liy chlo")
 })
})
var p4 = p3.then(function(data){
 document.write(data +"<br>");
 return new Promise (function(res){
     return res("century maro");
 })
})
var p5 = p4.then(function(data){
 document.write(data +"<br>");
 return new Promise((res)=>{
     return res("chlo ab bowlling kro")
 })
})
var p6 = p5.then(function(data){
 document.write(data +"<br>");
 return new Promise(function(res,rej){
     return res("chlo ab party krte h")
 })
})
p6.then(function(data){
 document.write(data)
})