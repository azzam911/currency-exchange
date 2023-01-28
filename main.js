let amount = document.querySelector(".amount");
amount.onblur = function() {
    // console.log(amount.value*10);

    fetch("https://api.currencyfreaks.com/latest?apikey=afa0ac416f1940b7b4068c0f2fbf5023")
.then((result) => {
    // console.log(result);
    let myData = result.json();
    // console.log(myData);
    return myData
}).then((currency) => {
    let egpprice = document.querySelector(".egp span");
    let sarprice = document.querySelector(".sar span");

    egpprice.innerHTML = (amount.value * currency.rates["EGP"]).toFixed(2);
    sarprice.innerHTML = (amount.value * currency.rates["SAR"]).toFixed(2);

});
}