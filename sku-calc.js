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

  var priceSkuA = 0;
  var priceSkuB = 0;
  var priceSku = 0;
  var numOfMultiSkuAs = 0;
  var numOfmultiSkuBs = 0;
  var multiSkuAsDiscount = 0;
  var multiSkuBsDiscount = 0;

  // Check if only valid SKU codes have been entered
  var invalidSkuCodes = new RegExp('[^A-D]');
  if (invalidSkuCodes.test(skus)) {
    return 'Please only enter valid SKU codes: A-D';
  }

  // Split SKU string into an array
  var skusArray = skus.split('');

  // Loop over array of SKUs and increment price variables
  skusArray.forEach(function(sku) {
    switch(sku) {
      case 'A':
        priceSkuA += 50;
        break;
      case 'B':
        priceSkuB += 30;
        break;
      case 'C':
        priceSku += 20;
        break;
      case 'D':
        priceSku += 15;
        break;
      default:
        priceSku += 0;
    }
  });

  // If there's at least one SKU-A discount triple
  if (priceSkuA >= 150) {
    // work out number of discount triples
    numOfMultiSkuAs = Math.floor(priceSkuA / 150);
    // work out discount amount
    multiSkuAsDiscount = numOfMultiSkuAs * 20;
    // subtract it from total price for this SKU
    priceSkuA -= multiSkuAsDiscount;
  }

  // if there's at least one SKU-B discount double
  if (priceSkuB >= 60) {
    // work out number of discount doubles
    numOfmultiSkuBs = Math.floor(priceSkuB / 60);
    // work out discount amount
    multiSkuBsDiscount = numOfmultiSkuBs * 15;
    // subtract it from total price for this SKU
    priceSkuB -= multiSkuBsDiscount;
  }

  // sum all the SKU prices and return
  var totalPrice = priceSkuA + priceSkuB + priceSku;
  return totalPrice;
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
