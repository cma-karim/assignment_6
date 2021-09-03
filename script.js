const searchSongs = () =>{
    const searchText = document.getElementById('search-field').value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    // loa data
    fetch(url)
    .then(res => res.json())
    .then(data => displaySongs(data.meals))
}

const displaySongs = meal => {
    const mealContainer = document.getElementById('meal-container')
    
    meal.forEach(meal => {
        console.log(meal)
        const mealDiv = document.createElement('div');
        mealDiv.className = 'single-result row align-item-center my-3 p-3';
        mealDiv.innerHTML = `
        <div class="col-md-9">
            <h3 class="lyrics-name">${meal.strMeal}</h3>
            <img src="${meal.strMealThumb}" alt="">
        </div>
        <div class="col-md-3 text-md-right text-center">
            <button onclick="getIngredient('${meal.strIngredient1}','${meal.strIngredient2}','${meal.strIngredient3}','${meal.strIngredient4}','${meal.strIngredient5}')" class="btn btn-success">Ingredient</button>
        </div>
        `;
        mealContainer.appendChild(mealDiv);
    })
}
const getIngredient = (ingredientName1,ingredientName2,ingredientName3,ingredientName4,ingredientName5) =>{
    console.log(ingredientName1);
    console.log(ingredientName2);
    console.log(ingredientName3);
    console.log(ingredientName4);
    console.log(ingredientName5);
}

//meal.strMeal;