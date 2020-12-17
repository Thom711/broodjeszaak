const makeSandwich = function(breadType, butter, toppingType) {
    if(butter) {
        console.log(breadType + 'broodje met boter en ' + toppingType + '.');
    } else {
        console.log(breadType + 'broodje zonder boter en ' + toppingType + '.');
    }
    
}

//kaasbroodje
makeSandwich('Volkoren', true, 'kaas');

//balgehakt
makeSandwich('Wit', false, 'een bal gehakt');


const calculateDiscountedPrice = function(totalAmount, discount) {
    return totalAmount - ((discount / 100) * totalAmount);
}

console.log('€' + calculateDiscountedPrice(100, 15));


const calculateDiscountedPriceWithSpending = function(totalAmount, discount) {
    if(totalAmount > 25) {
        return totalAmount - ((discount / 100) * totalAmount);
    }

    return totalAmount;
}

console.log('€' + calculateDiscountedPriceWithSpending(15, 15));
console.log('€' + calculateDiscountedPriceWithSpending(50, 10));