/* Richard Meadows 2013 */

var bitextract = require('../bitextract');

/* Set up a bit reader */
var bx = bitextract(parseInt('0x12345678', 16), 32);

/* To extract the digits again */
console.log(bx.extract_bits(4));
console.log(bx.extract_bits(4));
console.log(bx.extract_bits(8).toString(16));
console.log(bx.extract_bits(16).toString(16));
