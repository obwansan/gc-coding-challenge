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

    // Split sku string into an array
    var skusArr = skus.split('');
    // console.log(skusArr);

    // loop over array. Increment respective price and counter vars
    skusArr.forEach(function(sku) {
      if (sku === 'A') {
        priceSkuA += 50;
      } else if (sku === 'B') {
        priceSkuB += 30;
      } else if (sku === 'C') {
        priceSku += 20;
      } else {
        priceSku += 15;
      }
    });
    // console.log(priceSkuB, priceSkuA);

    // if there's at least one SKU A discount triple
    if (priceSkuA >= 150) {
      // get the number of discount triples
      multiSkuAs = Math.floor(priceSkuA / 150);
      // get the discount amount
      multiSkuAsDiscount = multiSkuAs * 20;
      // subtract it from the total price for this SKU
      priceSkuA -= multiSkuAsDiscount;
    }

    // if there's at least one SKU B discount double
    if (priceSkuB >= 60) {
      // get the number of discount triples
      multiSkuBs = Math.floor(priceSkuB / 60);
      // get the discount amount
      multiSkuBsDiscount = multiSkuBs * 15;
      // subtract it from the total price for this SKU
      priceSkuB -= multiSkuBsDiscount;
    }
    // console.log(priceSkuB);

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
  price_of('AAABB')
);
