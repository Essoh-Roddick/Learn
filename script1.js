

function SUM ( a, b){
    return a + b; 
}
console.log(SUM(2, 6)); 
/*
let text;
if (Math.random() < 0.5) {
    text = "<a href='https://www.w3schools.com'>Visit W3Schools.com!</a>";
    console.log('link shown');
}
else{
    text = "<a  href='https://wwf.org' >Visit WWF</a>";
    console.log(' other link shown');
}
document.getElementById("iftry").innerHTML = text;  */

/* const age = 25;
let text;
text = (age <= 18) ? "Old enough" : "Too young"; 
console.log(text); */

/* let message = "address";
switch (message) {
    case "name":
        console.log("dick");
        break;
    case "age":
        console.log("22y");
        break;
     case "address":
        console.log("street buea");
        break;

    default:
        console.log("Ask on");
}   */
/*
 let text = "";
       let names = ["dick", "rod", "ess", "mary", "lady"];
       for(let i=0; i < names.length; i++){
        text += names[i] + "<br>";
        console.log(names[i]);
       }
       document.getElementById("iftry").innerHTML = text;  */

   /*    function sayHello(){
        return "Hello world";
       }
       let greet = sayHello();
       console.log(sayHello());
      // console.log(greet);   
      function sumAll(){
        let sum=0;
        for(let i = 0; i<arguments.length; i++){
            sum += arguments[i];
        }
        return sum;
      }    
      let sum= sumAll(2,4,6);
      console.log(sum);  
    // different way
      function sumAll(...args){
        let sum = 0;
        for(let arg of args) sum += arg;
        return sum;
      }    */
 // Arrow function
  /*  const mult = (a,b) => 
   a*b;    */
/*  const mult = (a,b) => {
    return a*b;
  };
console.log(mult(3,5));
*/

/*
// setTimeot  and setInterval Test
 let time = document.getElementById("time");
 let tm = document.getElementById("tm");
 let setInt = document.querySelector(".setInt");
 
      function display (){
    time.innerHTML = "OK";
   }
 
   function  timeTest(){
    tm.addEventListener("click", function () {        
     setTimeout(display,3000); 
    } 
   ); } 
    timeTest();
 

// setInterval Test
function displ(){
   let date = new Date();
setInt.textContent = date.toLocaleTimeString() ;
displ();
}

 function setI(){
    setInterval(displ,1000);
    console.log("ooh")
 }
setI();  */

// JS objects

const obj1 = document.getElementById("obj1");
const obj2 = document.getElementById("obj2");
const obj3 = document.getElementById("obj3");

const  car ={
    type: "Fiat",
    model: "500",
    color: "white",
   // object nested in another object
    owner: {
    fName: "Josh",
    lName: "Jobs"
   } 
};

obj1.innerHTML = "Type:" + " " + car.type + "<br>" 
 + "Model:" + " " + car["model"] + "<br>"
 + "Color:" + " " + car.color + "<br>" 
 + "Owner's name:" + " " + car.owner.fName + " " + car.owner.lName ;


const person ={
    fName: "John",
    lName: "Doe",
    age: 25,
    tbd: "to be deleted",
    fullName: function(){
        return this.fName + " " + this.lName;
    }
};


// changing the value of fName afterwards
person.fName = "dick";  
// Creating a new property afterwards
person.lang = "English";
// Creating a new method afterwards
person.ageInYears = function(){
    return  (this.age + " years").toUpperCase();
};
// deleting the tbd property
delete person.tbd;
// Using in to check if a property exists in the object
let check = ("tbd" in person); 

obj2.innerHTML = "Name: " + " " + person.fullName()
 + "<br>" + "Age: " + " " + person.ageInYears() 
 + "<br>" + "Language: " + " " + person.lang
 + "<br>" + "tbd: " + " " + person.tbd
 + "<br>" + "Check: " + " " + check;  // will return undefined if tbd was deleted
const fruits = {Bananas:300, Oranges:200, Apples:500}; 

// js Construtor function
function Person(fN, lN, age, height){
    this.fName = fN;
    this.lName = lN;
    this.age = age;
    this.height = height;
    this.lang = "English";
}

// Create new person object
const Man = new Person("Jonas", "Jacob", "26", "1.7");

 // Displaying objects

let text = "";

text = "Name: " + " " + Man.fName + " " + Man.lName 
 + "<br>" + "Age: " + " " + Man.age
 + "<br>" + "Height: " + " " + Man.height
 + "<br>" + "Language: " + " " + Man.lang;

//Using JSON.stringify() to display the object
 //text = JSON.stringify(fruits);

 /*
//Using Object.entries() to loop through the object
for (let [fruit, amount] of Object.entries(fruits)) {
  text += fruit + ": " + amount + "<br>";
}           */

/*
//Using an array
const arr = Object.values(person);
text = arr.toString();  */

/*
// Using a for loop
for (let x in person){
    text += x + ": " + person[x] + "<br>";
}   */
  obj3.innerHTML = text