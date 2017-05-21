function ShakerSort(array, largo) {
      var min = 0;
      var sup = largo;
      var bufer;
      var Cola = [];
      var index = 0;

      do {


            for (var i = min; i < sup - 1; i++) {
                  if (array[i] > array[i + 1]) {
                        Cola.push([(i + 1), (i + 2)]);
                        var temp = array[i];
                        array[i] = array[i + 1];
                        array[i + 1] = temp;
                  }
            }
            sup--;

            for (var i = sup - 1; i > min; i--) {
                  if (array[i] < array[i - 1]) {
                        Cola.push([(i + 1), (i)]);
                        var temp = array[i];
                        array[i] = array[i - 1];
                        array[i - 1] = temp;
                  }
            }
            min++;

            if (!(sup - min > 0)) {
                  break;
            }


      } while (sup - min > 0);

      swap(0, Cola, largo);
}