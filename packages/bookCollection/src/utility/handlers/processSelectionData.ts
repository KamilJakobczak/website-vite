export const processSelectionData = (
	event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
	values: string[],
	setValues: React.Dispatch<React.SetStateAction<string[]>>,
	counter: number[],
	setDuplicationError?: React.Dispatch<React.SetStateAction<boolean>>,
): void => {
	const { id, value } = event.target;
	const idNumber = Number(id);
	const index = values.indexOf(value);

	if (counter.length === 1) {
		setValues([value]);
	} else {
		const arr = [...values];
		arr[idNumber] = value;
		setValues(arr);
	}

	if (setDuplicationError) {
		setDuplicationError(index >= 0);
	}
};
