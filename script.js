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