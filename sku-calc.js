/**
 * Assert.That(0, Is.EqualTo(price_of(“”)))
 * Assert.That(50, Is.EqualTo(price_of(“A”)))
 * Assert.That(80, Is.EqualTo(price_of(“AB”)))
 * Assert.That(115, Is.EqualTo(price_of(“CDBA”)))
 * Assert.That(100, Is.EqualTo(price_of(“AA”)))
 * Assert.That(130, Is.EqualTo(price_of(“AAA”)))
 * Assert.That(175, Is.EqualTo(price_of(“AAABB”)))
 */

function price_of(skus) {

    var priceSkuA = 0;
    var priceSkuB = 0;
    var priceSku = 0;
    var multiSkuA = 0;
    var multiSkuB = 0;

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

    // For A and B, divide price by 150 and 60 respectively.
    if (priceSkuA >= 150) {

    }

    // For every multiple (e.g. 60 in priceSkuB) subtract 15 from total.

}

// console.log(
  price_of('AA');
// );
