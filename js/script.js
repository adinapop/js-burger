var calculateButton = document.getElementById("sum-button"); // creato la variabile con il button da cliccare
var sumResult = document.getElementById("total-price"); // creata la variabile con il div per id dove stampare il prezzo finale


calculateButton.addEventListener ('click', function() {
    var sumPrice = 10; 
    var checkIngredients = document.getElementsByClassName("ingredients");
    var promoCode = "JUNE20";
    var promoCodeAdded = document.getElementById("text-promo");
    
    for (var i = 0; i < checkIngredients.length; i++) {
        if (checkIngredients[i].checked) {
            sumPrice += parseInt(checkIngredients[i].value);
            sumResult.innerHTML = "$ " + sumPrice; 
        }
    }
    
    if (promoCodeAdded.value === promoCode) {
        alert("Discount code applied! Press OK to see your new Burger Price!")
        sumResult.innerHTML = "$ " + (sumPrice * ((100 - 20) / 100)).toFixed(2);
    } 
    // else {
    //     alert("Your discount code is invalid!");
    // } 
});

// PROBLEM1: Se metto value=20 all'interno di input in HTML esce fuori la scritta 20 nel placeholder
// PROBLEM2: Non capisco perché non funziona .value nel promoCodeAdded e stampa l'alert anche quando non c'è nulla
