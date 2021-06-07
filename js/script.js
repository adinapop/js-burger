var calculateButton = document.getElementById("sum-button"); // creato la variabile con il button da cliccare

var sumResult = document.getElementById("total-price"); // creata la variabile con il div per id dove stampare il prezzo finale

calculateButton.addEventListener ('click', function() {
    var sumPrice = 10; // prezzo base da sommare
    var checkIngredients = document.getElementsByClassName("ingredients");
    // gli elementi da prendere per classe in modo tale da poter poi ciclare all'interno

    for (var i = 0; i < checkIngredients.length; i++) {
        if (checkIngredients[i].checked) {
            sumPrice += parseInt(checkIngredients[i].value)
        }
    }
    sumResult.innerHTML = "$ " + sumPrice; 
})

console.log(sumResult);