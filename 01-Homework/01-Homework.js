const PRICE_OF_CHOCOLATE = 15.678;
const PRICE_OF_JUICE = 123.965;
const PRICE_OF_MILK = 90.2345;

let maximalPrice=Math.max(PRICE_OF_CHOCOLATE,PRICE_OF_JUICE,PRICE_OF_MILK);
console.log(maximalPrice);
let minimalPrice=Math.min(PRICE_OF_CHOCOLATE,PRICE_OF_JUICE,PRICE_OF_MILK);
console.log(minimalPrice);
let sumOfPrices = 0;
sumOfPrices+= PRICE_OF_JUICE+PRICE_OF_MILK+PRICE_OF_CHOCOLATE;
console.log(sumOfPrices);
let sumOfPricesWithoutPennies = 0;
sumOfPricesWithoutPennies+=Math.floor(priceOfJuice)+Math.floor(PRICE_OF_MILK)+Math.floor(PRICE_OF_CHOCOLATE);
console.log(sumOfPricesWithoutPennies);
let sumCeil = Math.ceil(Math.floor(sumOfPrices)/100)*100;
console.log(sumCeil);
let boolEvenSum=Math.floor(sumOfPrices)%2==0
console.log(boolEvenSum);
const CUSTOMER_BILL = 500;
let change =CUSTOMER_BILL - sumOfPrices;
console.log(change);
let avaragePrice = sumOfPrices/3;
console.log(+avaragePrice.toFixed(2));
let randomSale=Math.floor(Math.random()*100);
let priceWithSale = sumOfPrices-sumOfPrices*(randomSale/100);
console.log(+priceWithSale.toFixed(2));
let lostProfit = (Math.floor(sumOfPrices)/2)-(Math.floor(sumOfPrices)*(randomSale/100));
console.log(lostProfit);
let homeworkTemplate = 
     `Максимальна ціна: ${maximalPrice}<br>
Мінімальна ціна: ${minimalPrice}<br>
Вартість всіх товарів: ${sumOfPrices}<br>
Вартість всіх товарів(тільки цілі їхні значення): ${sumOfPricesWithoutPennies}<br>
Вартість всіх товарів округлена до сотень: ${sumCeil}<br>
Чи парне число? - ${boolEvenSum}<br>
Решта: ${change}<br>
Середня ціна покупки: ${+avaragePrice.toFixed(2)}<br>
Знижка: ${randomSale}%<br>
Сума до оплати зі знижкою: ${+priceWithSale.toFixed(2)}<br>
Упущена вигода: ${lostProfit}`;
document.writeln(homeworkTemplate);
