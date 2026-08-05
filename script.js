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

document.addEventListener("click", function (event) {

    let icon = document.createElement("span");

    icon.textContent = "🧁"; 

    icon.style.position = "absolute";
    icon.style.left = event.pageX + "px";
    icon.style.top = event.pageY + "px";
    icon.style.fontSize = "30px";
    icon.style.pointerEvents = "none";

    document.body.appendChild(icon);

    setTimeout(function () {
        icon.remove();
    }, 1000);
});