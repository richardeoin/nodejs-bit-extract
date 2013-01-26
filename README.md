**bit-extract** is a big-endian extractor for groups of bits. You give it a number, and it gives you the value of groups of bits, starting from the most significant end of the number.

## Installation ##

If you have [npm](npmjs.org) installed, just run

```
npm install bit-extract
```

## Usage ##

```javascript
var bit_extract = require('bit-extract');

/* Set up a bit reader. Specify the value and how many bits it has. */
var bx = bit_extract(305419896, 32); // 305419896 is 0x12345678 hexadecimal

/* Extract the bits */
console.log(bx.extract_bits(4));
console.log(bx.extract_bits(4));
console.log(bx.extract_bits(8).toString(16));
console.log(bx.extract_bits(16).toString(16));

```

## Don't ##

use this to extract values from a buffer. The node.js [buffer](http://nodejs.org/api/buffer.html) object can do this for you, and can probably do it much better than this can.

## License ##

MIT


