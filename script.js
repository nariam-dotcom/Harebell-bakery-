let hello = document.getElementById("hello")

let hour = new Date().getHours();
let result = "";

if (hour < 12) {
    result = "Good morning! Welcome to Harebell Bakery.";
} else if ( hour >= 12 &&  hour < 18 ) {
    result = "Good afternoon! Welcome to Harebell Bakery.";
} else {
    result = "Good evening! Welcome to Harebell Bakery.";
}

hello.textContent = result

let button = document.getElementById("darkModeBtn");

button.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        button.textContent = "☀️ Light Mode";
    } else {
        button.textContent = "🌙 Dark Mode";
    }
});

document.addEventListener("click", function (event) {

    let icon = document.createElement("span");

    icon.textContent = "🧁"; 

    icon.style.position = "absolute";
    icon.style.left = event.pageX + "px";
    icon.style.top = event.pageY + "px";
    icon.style.fontSize = "10px";
    icon.style.pointerEvents = "none";

    document.body.appendChild(icon);

    setTimeout(function () {
       // icon.remove();
    }, 1000);
});

let read = document.getElementById("readBtn");
let aboutTxt = document.getElementById("history");

let shortText = "Harebell Bakery was founded with a simple dream—to bring freshly baked bread, cakes, and pastries to the local community. It was funded in 1995 by the Savi family , where Mr Savi has passion for baked goods. What began as a small family venture was inspired by a love for baking and the joy of sharing homemade treats with others.In the early days, the bakery operated on a small scale, carefully preparing every item by hand using quality ingredients and trusted family recipes.";
let fullText = "Harebell Bakery was founded with a simple dream—to bring freshly baked bread, cakes, and pastries to the local community. It was funded in 1995 by the Savi family , where Mr Savi has passion for baked goods.What began as a small family venture was inspired by a love for baking and the joy of sharing homemade treats with others. In the early days, the bakery operated on a small scale, carefully preparing every item by hand using quality ingredients and trusted family recipes. Through dedication, consistency, and the support of loyal customers, Harebell Bakery gradually grew and became a favorite destination for fresh baked goods.As the bakery expanded, we introduced a wider variety of products, from artisan breads and delicious cakes to cookies, pastries, and custom-made desserts.While our menu has grown, our commitment to freshness, quality, and excellent customer service has remained the same.Today, Harebell Bakery is proud to serve the community with delicious baked goods made with care every day.We look forward to creating memorable moments for our customers and continuing our tradition of baking with passion for many years to come.";

read.addEventListener("click", function () {
    if (read.textContent === "Read More") {
        aboutTxt.textContent = fullText;
        read.textContent = "Read Less";
    } else {
        aboutTxt.textContent = shortText;
        read.textContent = "Read More";
    }
});