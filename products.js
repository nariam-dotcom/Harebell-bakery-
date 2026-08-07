//Live search
const search = document.getElementById('search');
const products = document.querySelectorAll('.product-card');

search.addEventListener("keyup", function() {
    const value = search.value.toLowerCase();
    products.forEach(function(product) {
        const name = product.querySelector('h2').textContent.toLowerCase();
        if (name.includes(value)) {product.style.display = "";}
        else {product.style.display = 'none';}
    });
});

    //add to cart
    const buttons = document.querySelectorAll(".product-card button");
    buttons.forEach((button) => {
        button.addEventListener('click', function() {
             button.innerHTML = 'Added ';
             button.style.backgroundColor = '#FFD54F';
             button.style.color = '#333';
                setTimeout(function() {
                    button.innerHTML = 'Add to cart';
                    button.style.backgroundColor = '#ff69b4';
                    button.style.color = '#fff';
                }, 2000);
        });
    });

        //Favourite card
        products.forEach((card) => {
            card.addEventListener('dblclick', function() {
                if(card.style.border == '4px solid hotpink') {
                    card.style.border = 'none';
                } else {
                    card.style.border = '4px solid hotpink';
                }
            });
        });

            // Page animation
            window.addEventListener("load", () => {

                products.forEach((card, index) => {

                    card.style.opacity = 0;
                    card.style.transform = "translateY(40px)";

                    setTimeout(() => {
                        card.style.opacity = 1;
                        card.style.transform = "translateY(0)";
                    }, index * 200);
                });

            });


const categoryButtons = document.querySelectorAll('.categories button');
categoriesButtons.forEach((button) => {
    button.addEventListener('click', function() {
        const category =
        this.dataset.categories;
        products.forEach((product) => {
            if (category === 'all' || product.classList.contains(categories)) {
                product.style.display = '';
            } else {
                product.style.display = 'none';
            }
        });
    });
});