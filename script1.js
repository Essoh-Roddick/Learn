

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
setI(); 