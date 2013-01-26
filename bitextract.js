/* Richard Meadows 2013 */

exports = module.exports = function (number, bits) {
	/* Type check the arguments */
	if (typeof number !== 'number' || typeof bits !== 'number') {
		throw {
			name: 'TypeError',
			message: 'Both the `number` and `bits` parameters must be numbers!'
		};
	}

	return { /* Return a read_bits function */
		extract_bits: function (n) { /* Read n bytes off the big end of number */
			if (bits - n < 0) { /* Not enough bits */
				throw {
					name: 'RangeError',
					message: 'Not enough bits left to read '+n+' bits!'
				};
			}
			/* Extract our value. We use maths rather than bitwise operations because every number is a floating point in javascript */
			var value = Math.floor(number / Math.pow(2, bits - n)) % Math.pow(2, n);
			/* Move the bit we start from along */
			bits -= n;

			return value;
		}
	};
};
