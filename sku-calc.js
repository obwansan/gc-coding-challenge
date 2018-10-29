/**
 * Assert.That(0, Is.EqualTo(price_of(“”)))
 * Assert.That(50, Is.EqualTo(price_of(“A”)))
 * Assert.That(80, Is.EqualTo(price_of(“AB”)))
 * Assert.That(115, Is.EqualTo(price_of(“CDBA”)))
 * Assert.That(100, Is.EqualTo(price_of(“AA”)))
 * Assert.That(130, Is.EqualTo(price_of(“AAA”)))
 * Assert.That(175, Is.EqualTo(price_of(“AAABB”)))
 *
 * Have a try/catch that throws an error if the argument passed to price_of
 * isn't a string. (in the if/else block? Or a switch?)
 */

function price_of(skus) {

  var priceSkuA = 0;
  var priceSkuB = 0;
  var priceSku = 0;
  var multiSkuAs = 0;
  var multiSkuAsDiscount = 0;
  var multiSkuBs = 0;
  var multiSkuBsDiscount = 0;

  // Check if only valid SKU codes have been entered
  var validSkuCodes = new RegExp('[^A-D]');
  if (validSkuCodes.test(skus)) {
    return 'Please only enter valid SKU codes: A-D';
  }

  // Split sku string into an array
  var skusArray = skus.split('');

  // Loop over array of chars. Increment respective price and counter vars
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

  // if there's at least one SKU-A discount triple
  if (priceSkuA >= 150) {
    // get the number of discount triples
    multiSkuAs = Math.floor(priceSkuA / 150);
    // get the discount amount
    multiSkuAsDiscount = multiSkuAs * 20;
    // subtract it from the total price for this SKU
    priceSkuA -= multiSkuAsDiscount;
  }

  // if there's at least one SKU-B discount double
  if (priceSkuB >= 60) {
    // get the number of discount triples
    multiSkuBs = Math.floor(priceSkuB / 60);
    // get the discount amount
    multiSkuBsDiscount = multiSkuBs * 15;
    // subtract it from the total price for this SKU
    priceSkuB -= multiSkuBsDiscount;
  }

  // sum all the SKU prices and return
  return priceSkuA + priceSkuB + priceSku;

}

console.log(
  // price_of('')
  // price_of('A')
  // price_of('AB')
  // price_of('CDBA')
  // price_of('AA')
  // price_of('AAA')
  // price_of('AAABB')
  price_of('ABE')
);
