/* Richard Meadows 2013 */

var bitreader = require('../bitextract');

/* Set up a bit reader */
var br = bitreader(parseInt('0x12345678', 16), 32);

/* To extract the digits again */
console.log(br.read_bits(4));
console.log(br.read_bits(4));
console.log(br.read_bits(8).toString(16));
console.log(br.read_bits(16).toString(16));
