// const smoothies = document.querySelectorAll('.smoothies__item')
// smoothies.forEach(function(smoothie) {
//     smoothie.addEventListener('click', function() {
//       if(this.classList.contains('active')) {
//         this.classList.remove('active');
//       }
//       else {
//         document.querySelector('.smoothies__item').classList.remove('active');
//         this.classList.add('active')
//       }
//     })
// })

const randomButton = $('#js-randomSmoothie');
randomButton.on('click', function() {
    $.ajax({
        url: 'https://api.edamam.com/search?q=smoothie&from=0&to=30', // The URL to the API. You can get this in the API page of the API you intend to consume
        type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
        data: {}, // Additional parameters here
        dataType: 'json',
        success: function(data) {
          renderRandomSmoothie(data);
        },
        error: function(err) { alert(err); },
        beforeSend: function(xhr) {
        xhr.setRequestHeader("X-Mashape-Authorization", "KhPYP8Mf1Lmsh0c4800881L0WlsBp1TPmuVjsn34idgWTwrrKN"); // Enter here your Mashape key
        }
    });
})

function renderRandomSmoothie(data) {
    const allRecipes = data.hits;
    const randomNumberBetween0and30 = Math.floor(Math.random() * 30);
    const randomRecipe = allRecipes[randomNumberBetween0and30];
    console.log(randomRecipe);
    $('.smoothie__image').append('<img src="' + randomRecipe.recipe.image + '">');
    let ingredientLine;
    randomRecipe.recipe.ingredientLines.forEach(function(ingredient) {
        ingredientLine = ingredient;
        $('.smoothie-ingredients').append('<li class="smoothie-ingredients__item">' + ingredientLine + '</li>');
    })
}
