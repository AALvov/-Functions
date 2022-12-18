function calculate(totalPrice, count, promo = null) {
  let newPrice = totalPrice;
  if (promo == 'ДАРИМ300' && totalPrice < 300) {
    newPrice = 0;
  }
  else if (promo == 'ДАРИМ300') {
    newPrice -= 300;
  }
  if (count >= 10) {
    newPrice *= 0.95;
  }
  if (newPrice > 50000) {
    let totalDifPrice = (newPrice - 50000) * 0.2;
    newPrice -= totalDifPrice;
  }
  if (promo == 'СКИДКА15' && newPrice >= 20000) {
    newPrice *= 0.85;
  }
  return newPrice;
}

let price = 300;
let productCount = 5;
let promocod = 'ДАРИМ300';

console.log(calculate(price, productCount, promocod));

export default calculate
