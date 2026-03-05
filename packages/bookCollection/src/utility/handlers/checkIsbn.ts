import { isbnRegex } from '../regex';

export const checkIsbn = (value: string): string => {
	if (!isbnRegex.test(value)) return 'Provided ISBN is invalid.';

	let chars = value.replace(/[- ]|^ISBN(?:-1[03])?:?/g, '').split('');
	let last = chars.pop();
	let sum = 0;
	let check: number | string;

	if (chars.length === 9) {
		chars.reverse();
		for (let i = 0; i < chars.length; i++) {
			sum += (i + 2) * parseInt(chars[i], 10);
		}
		check = 11 - (sum % 11);
		if (check === 10) check = 'X';
		else if (check === 11) check = '0';
	} else {
		for (let i = 0; i < chars.length; i++) {
			sum += ((i % 2) * 2 + 1) * parseInt(chars[i], 10);
		}
		check = 10 - (sum % 10);
		if (check === 10) check = '0';
	}

	if (check.toString() !== last?.toString())
		return 'Invalid ISBN check digit.';
	return '';
};
