
let images = [
" pics/home 1.jpeg",
" pics/home 2.jpeg",
" pics/home 4.jpeg",
" pics/home 5.jpeg"
];

let index = 0;

setInterval(function(){

index++;

if(index >= images.length){
index = 0;
}

document.getElementById("heroImage").src = images[index];

},3000);


let specials = [
"Chocolate Cake",
"Blueberry Muffins",
"Fresh Bread",
"Croissants",
"Vanilla Cupcakes"
];

let random =
Math.floor(Math.random()*specials.length);

document.getElementById("specialItem").textContent =
specials[random];



let themeBtn =
document.getElementById("themeBtn");

themeBtn.onclick=function(){

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){

themeBtn.textContent="☀ Light Mode";

}else{

themeBtn.textContent="🌙 Dark Mode";

}

};


document.getElementById("year").textContent =
new Date().getFullYear();


let topBtn=document.getElementById("topBtn");

window.onscroll=function(){

if(document.documentElement.scrollTop>200){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

};

topBtn.onclick=function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

};