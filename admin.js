let form = document.getElementById("productForm");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let category = document.getElementById("category").value;
    let price = document.getElementById("price").value;
    let image = document.getElementById("image").value;

    let product = {
        name: name,
        category: category,
        price: price,
        image: image
    };

    let products = JSON.parse(localStorage.getItem("products")) || [];

    products.push(product);

    localStorage.setItem("products", JSON.stringify(products));

    alert("Product added successfully!");

    form.reset();
});