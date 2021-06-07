var calculateButton = document.getElementById("sum-button");
var sumResult = document.getElementById("total-price");

calculateButton.addEventListener ('click', function() {
    var startPrice = 0;
    var checkIngredients = document.getElementsByClassName("ingredients");

    for (var i = 0; i < checkIngredients.length; i++) {
        if (checkIngredients[i].checked) {
            startPrice += parseInt(checkIngredients[i].value)
        }
    }

    sumResult.innerHTML = "$ " + startPrice;
})