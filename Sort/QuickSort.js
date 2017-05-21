function QuickSort(array, end) {
	var Cola = [];
	var index = 0;
	callBack(array, 0 /* --> 0  */ , end - 1 /* --> N-1  */ , Cola);
	swap(0, Cola, end + 1);
};

function callBack(array, start /* --> 0  */ , end /* --> N-1  */ , Cola) {

	var i = start;
	var j = end;
	var pivote = start;

	do {

		while ((array[i] < array[pivote]) && i + 1 <= end) i++;
		while ((array[j] > array[pivote]) && j - 1 >= start) j--;

		if (j - i > 0) {
			Cola.push([(i + 1), (j + 1)]);
			var temp = array[i];
			array[i] = array[j];
			array[j] = temp;

			i++;
			j--;
		} else {
			break;
		}

	} while ((j - i > 0));

	if (array[j] < array[pivote]) // need to be n-1 for !ascedente be carefull!!!
	{
		Cola.push([(j + 1), (pivote + 1)]);
		var temp = array[j];
		array[j] = array[pivote];
		array[pivote] = temp;
	}
	if (j > start) {
		callBack(array, start, j - 1, Cola);
	}

	if (j + 1 < end) {
		callBack(array, j + 1, end, Cola);
	}

	if (!(j > start) && !(j + 1 < end)) {
		return 1;
	}

}