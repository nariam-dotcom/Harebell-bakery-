const searchInput = document.getElementById("search-input");
const categoryFilter = document.getElementById("category-filter");
const recipes = document.querySelectorAll(".recipe-card");



function filterRecipes(){

    let searchValue = searchInput.value.toLowerCase();

    let categoryValue = categoryFilter.value;



    recipes.forEach(recipe => {


        let name = recipe.querySelector("h3")
        .textContent.toLowerCase();


        let category = recipe.querySelector("span")
        .textContent;



        let matchesName =
        name.includes(searchValue);



        let matchesCategory =
        categoryValue === "" ||
        category === categoryValue;



        if(matchesName && matchesCategory){

            recipe.style.display="block";

        }

        else{

            recipe.style.display="none";

        }


    });


}



searchInput.addEventListener(
"keyup",
filterRecipes
);



categoryFilter.addEventListener(
"change",
filterRecipes
);