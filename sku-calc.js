/*
* A supermarket checkout function that calculates the total price of a number of items.
*
* In a normal supermarket, things are identified using Stock Keeping Units, or SKUs.
* In our store, we’ll use individual letters of the alphabet (A, B, C, and so on).
* Our goods are priced individually. In addition, some items are multipriced:
* buy n of them, and they’ll cost you y pounds. For example, item ‘A’ might cost
* 50 pounds individually, but this week we have a special offer: buy three ‘A’s
* and they’ll cost you 130. The price and offer table:
*
* Item Price Offer
* A 50 (3 for 130)
* B 30 (2 for 45)
* C 20
* D 15
*/

function price_of(skus) {

  var pricePerSkuA = 50;
  var pricePerSkuB = 30;
  var pricePerSkuC = 20;
  var pricePerSkuD = 15;
  var multiBuyNumSkuA = 3;
  var multiBuyNumSkuB = 2;
  var multiBuyDiscountSkuA = 20;
  var multiBuyDiscountSkuB = 15;
  var totalPriceSkuA = 0;
  var totalPriceSkuB = 0;
  var totalPriceSku = 0;

  var invalidSkuCodes = new RegExp('[^A-D]');
  if (invalidSkuCodes.test(skus)) {
    return 'Please only enter valid SKU codes: A-D';
  }

  var skusArray = skus.split('');
  skusArray.forEach(function(sku) {
    switch(sku) {
      case 'A':
        totalPriceSkuA += pricePerSkuA;
        break;
      case 'B':
        totalPriceSkuB += pricePerSkuB;
        break;
      case 'C':
        totalPriceSku += pricePerSkuC;
        break;
      case 'D':
        totalPriceSku += pricePerSkuD;
        break;
      default:
        totalPriceSku += 0;
    }
  });

  totalDiscountPriceSkuA = calcMultiBuyDiscountPrice(pricePerSkuA, totalPriceSkuA, multiBuyNumSkuA, multiBuyDiscountSkuA);
  totalDiscountPriceSkuB = calcMultiBuyDiscountPrice(pricePerSkuB, totalPriceSkuB, multiBuyNumSkuB, multiBuyDiscountSkuB);

  return totalDiscountPriceSkuA + totalDiscountPriceSkuB + totalPriceSku;
}

function calcMultiBuyDiscountPrice(pricePerSku, totalPriceSku, multiBuyNum, multiBuyDiscount) {
    var numOfMultiBuys = 0;
    var multiSkusDiscount = 0;

    if (totalPriceSku >= pricePerSku * multiBuyNum) {
        numOfMultiBuys = Math.floor(totalPriceSku / (multiBuyNum * pricePerSku));
        multiSkusDiscount = numOfMultiBuys * multiBuyDiscount;
        return totalPriceSku -= multiSkusDiscount;
    } else {
        return totalPriceSku;
    }
}

console.log(
  price_of('') // 0
  // price_of('A') // 50
  // price_of('AB') // 80
  // price_of('BAB') // 95
  // price_of('CDBA') // 115
  // price_of('AA') // 100
  // price_of('AAA') // 130
  // price_of('AAABB') // 175
  // price_of('ABE') // 'Please only enter valid SKU codes: A-D'
  // price_of('AB2') // 'Please only enter valid SKU codes: A-D'
);
