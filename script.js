let hello = document.getElementById("hello")

let hour = new Date().getHours();
let result = "";

if (hour < 12) {
    result = "Good morning! Welcome to Harebell Bakery.";
} else if (hour < 18 ) {
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

let button = document.getElementById("readBtn");
let aboutText = document.getElementById("aboutText");

let shortText = "";

let fullText = "";

button.addEventListener("click", function () {

    if (button.textContent === "Read More") {
        aboutText.textContent = fullText;
        button.textContent = "Read Less";
    } else {
        aboutText.textContent = shortText;
        button.textContent = "Read More";
    }

});