



document.getElementById("date").textContent = new Date().getFullYear();

document.getElementById("demo").innerHTML = "YOOO dick";
const image = document.getElementById("image2")
image.addEventListener("click", () => {
           image.src = "images/image3.webp";
           if (image.src.includes("images/image3.webp")) {
           // image.src = "images/image2.jpg";
              console.log("Image clicked!");
           }
         
} );

const change= document.getElementById("qbtn")
change.addEventListener("click",
   () =>{
      change.textContent = "Dare clicking me again";
   }
)