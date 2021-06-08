var calculateButton = document.getElementById("sum-button"); // creato la variabile con il button da cliccare
var sumResult = document.getElementById("total-price"); // creata la variabile con il div per id dove stampare il prezzo finale


calculateButton.addEventListener ('click', function() {
    var sumPrice = 10; 
    var checkIngredients = document.getElementsByClassName("ingredients");
    var promoCode = "JUNE20";
    var promoPercentage = 20;
    var promoCodeAdded = document.getElementById("text-promo");
    
    for (var i = 0; i < checkIngredients.length; i++) {
        if (checkIngredients[i].checked) {
            sumPrice += parseInt(checkIngredients[i].value);
            sumResult.innerHTML = "$ " + sumPrice; 
        }
    }
    
    var resultPromo = (sumPrice * ((100 - promoPercentage) / 100)).toFixed(2);
    if (promoCodeAdded.value === promoCode) {
        alert("Discount code applied! Press OK to see your new Burger Price!")
        sumResult.innerHTML = "$ " + resultPromo;
    } else if (promoCodeAdded.value.length > 0) {
        alert("Your discount code is invalid!");
    } 
});
