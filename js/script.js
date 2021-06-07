var calculateButton = document.getElementById("sum-button"); // creato la variabile con il button da cliccare
var sumResult = document.getElementById("total-price"); // creata la variabile con il div per id dove stampare il prezzo finale

var promoCode = "JUNE20"

calculateButton.addEventListener ('click', function() {
    var sumPrice = 10; // prezzo base da sommare
    var checkIngredients = document.getElementsByClassName("ingredients");
    // gli elementi da prendere per classe in modo tale da poter poi ciclare all'interno

    for (var i = 0; i < checkIngredients.length; i++) {
        if (checkIngredients[i].checked) {
            sumPrice += parseInt(checkIngredients[i].value)
        }
    }
    
    var promoCodeAdded = document.getElementById("text-promo");
    if (promoCodeAdded === promoCode) {
        var promoResult = (sumPrice * promoCodeAdded.value) / 100;
        var finalResult = parseInt(sumPrice) - promoResult;
    } // else {
        // alert("Your discount code is invalid!");
        // } 
        
    sumResult.innerHTML = "$ " + sumPrice; 
});

console.log(promoCodeAdded);
console.log(promoCode);
console.log(sumResult);