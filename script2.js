

//   ERRORS
const err1 = document.getElementById("err1");
const err2 = document.getElementById("err2");
const err3 = document.getElementById("err3");

const errbtn1 = document.getElementById("errbtn1");

/*
let txt1 = "" ;
let x = 5;
//let y = 2;
let t;
let num = "sd";
try {
     let x = y;
    // let y = 5;
    // x += y + 1;
   // num.toUpperCase()
} catch(err){
    // window.alert(err.name + "\n" + err.message);
 txt1 = err.name + "<br>" + err.message + "<br>" + err.cause ;
}
 err2.innerHTML = txt1 ;  */


 // let ex1 = errinput1 ;
errbtn1.addEventListener("click", throwtest);

 function throwtest(){
    const ex1 = document.getElementById("errinput1").value;
          try { 
    if(ex1.trim() == "")  throw "empty";
    if(isNaN(ex1)) throw "not a number";
    x = Number(ex1);
    if(ex1 < 5)  throw "too low";
    if(ex1> 10)   throw "too high";
    else {
                throw "ok";
    }
    } catch(err) {
         err1.innerHTML = "Input is " + err;
    } finally {
        err1.innerHTML += ".";
    }
 }

 // JS DEBUGGING

 let users = [
  {name: "John", age: 25},
  {name: "Anna", age: 30}
];

console.table(users);