
var a =document.querySelector(".color1");
var b=document.querySelector(".color2");
var c=document.getElementById("gb");
var d=document.querySelector("h3")

function BGcolour(){
    c.style.background ="linear-gradient(to right ,"+a.value+","+b.value+")";
    d.textContent = c.style.background + ";";
}

b.addEventListener("input",BGcolour);
c.addEventListener("input",BGcolour);