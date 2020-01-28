let priceOfChocolate = 15.678;
let priceOfJuice = 123.965;
let priceOfMilk = 90.2345;

let maximalPrice;
maximalPrice = Math.max(priceOfChocolate,priceOfJuice,priceOfMilk);
console.log(maximalPrice);
let minimalPrice;
minimalPrice =Math.min(priceOfChocolate,priceOfJuice,priceOfMilk);
console.log(minimalPrice);
let sumOfPrices = 0;
sumOfPrices+= priceOfJuice+priceOfMilk+priceOfChocolate;
console.log(sumOfPrices);
let sumOfPricesWithoutPennies = 0;
sumOfPricesWithoutPennies+=Math.floor(priceOfJuice)+Math.floor(priceOfMilk)+Math.floor(priceOfChocolate);
console.log(sumOfPricesWithoutPennies);
let sumCeil = Math.ceil(Math.floor(sumOfPrices)/100)*100;
console.log(sumCeil);
let boolEvenSum;
(sumOfPricesWithoutPennies%2==0)?boolEvenSum=true:boolEvenSum=false;
console.log(boolEvenSum);
const customerBill = 500;
let change = 0;
change = 500 - sumOfPrices;
console.log(change);
let avaragePrice = 0;
avaragePrice = sumOfPrices/3;
console.log(+avaragePrice.toFixed(2));
let randomSale;
randomSale = Math.floor(Math.random()*100);
let priceWithSale = sumOfPrices-sumOfPrices*(randomSale/100);
console.log(+priceWithSale.toFixed(2));
let lostProfit = (Math.floor(sumOfPrices)/2)-(Math.floor(sumOfPrices)*(randomSale/100));
console.log(lostProfit);
let homeworkTemplate = `Максимальна ціна: ${maximalPrice}<br>Мінімальна ціна: ${minimalPrice}<br>Вартість всіх товарів: ${sumOfPrices}
<br> Вартість всіх товарів(тільки цілі їхні значення): ${sumOfPricesWithoutPennies}<br>Вартість всіх товарів округлена до сотень: ${sumCeil}
<br>Чи парне число? - ${boolEvenSum}<br>Решта: ${change}<br>Середня ціна покупки: ${+avaragePrice.toFixed(2)}
<br>Знижка: ${randomSale}%
<br>Сума до оплати зі знижкою: ${+priceWithSale.toFixed(2)} <br>Упущена вигода: ${lostProfit}`;
document.writeln(homeworkTemplate);