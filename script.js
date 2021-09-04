const searchBooks = () =>{
    const searchText = document.getElementById('search-field').value;
    //const url = `https://www.thebookdb.com/api/json/v1/1/search.php?s=${searchText}`
    const url = `https://openlibrary.org/search.json?q=${searchText}`
    
    // loa data
    fetch(url)
    .then(res => res.json())
    .then(data => displayBooks(data.books))
}

const displayBooks = book => {
    const bookContainer = document.getElementById('book-container')
    
    book.forEach(book => {
        console.log(book)
        const bookDiv = document.createElement('div');
        bookDiv.className = 'single-result row align-item-center my-3 p-3';
        bookDiv.innerHTML = `
        <div class="col-md-9">
            <h3 class="lyrics-name">${book.strbook}</h3>
            <img src="${book.strbookThumb}" alt="">
        </div>
        <div class="col-md-3 text-md-right text-center">
            <button onclick="getIngredient('${book.strIngredient1}','${book.strIngredient2}','${book.strIngredient3}','${book.strIngredient4}','${book.strIngredient5}')" class="btn btn-success">Ingredient</button>
        </div>
        `;
        bookContainer.appendChild(bookDiv);
    })
}
const getIngredient = (ingredientName1,ingredientName2,ingredientName3,ingredientName4,ingredientName5) =>{
    console.log(ingredientName1);
    console.log(ingredientName2);
    console.log(ingredientName3);
    console.log(ingredientName4);
    console.log(ingredientName5);
}

//book.strbook;