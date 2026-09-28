
let count = 10;

load();

function updateCount(){
    document.getElementById("count").innerHTML = count;
}
 function increase(){
    count++ ;
    updateCount();
 }

 function decrease(){
    if(count > 0 ){
        count-- ;
    }
    updateCount();
 }

 function reset(){
    count = 0 ;
    updateCount();
 }

 function save(){
    localStorage.setItem("cnt",count);
    updateCount();
    console.log("Saved");
 }

 function load(){
    let saved = localStorage.getItem("cnt");
    if(saved !== null){
        count = Number(saved);
    }
    updateCount();
 }

 
 updateCount();
